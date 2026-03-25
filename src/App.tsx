import { useState, useEffect } from "react";
import { getModules } from "./data";
import { getContent } from "./content";
import { getLang, setLang as persistLang, labels } from "./i18n";
import type { Lang } from "./i18n";
import type { Lesson, Module, Week } from "./data";

const STORAGE_KEY = "learning-progress";
const NOTES_KEY = "learning-notes";

function getProgress(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function lessonKey(weekNum: number, dayIdx: number) {
  return `w${weekNum}-d${dayIdx}`;
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="flex gap-0.5 bg-surface rounded-lg p-0.5 border border-border">
      {(["sk", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
            lang === l
              ? "bg-accent/20 text-accent"
              : "text-muted hover:text-warm"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ModuleCard({
  mod,
  onSelect,
  progress,
  lang,
}: {
  mod: Module;
  onSelect: () => void;
  progress: Record<string, boolean>;
  lang: Lang;
}) {
  const totalLessons = mod.weeks.reduce(
    (acc, w) => acc + w.lessons.length,
    0
  );
  const doneLessons = mod.weeks.reduce(
    (acc, w) =>
      acc +
      w.lessons.filter((_, i) => progress[lessonKey(w.week, i)]).length,
    0
  );
  const pct = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0;

  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-5 rounded-xl bg-surface border border-border hover:border-accent-dim transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{ backgroundColor: mod.color + "20", color: mod.color }}
        >
          {labels[lang].modul} {mod.id}
        </span>
        <span className="text-xs text-muted">{pct}%</span>
      </div>
      <h3 className="font-serif text-lg font-semibold text-warm mb-1 group-hover:text-accent transition-colors">
        {mod.title}
      </h3>
      <p className="text-sm text-muted mb-3">{mod.subtitle}</p>
      <div className="w-full bg-bg rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            backgroundColor: mod.color,
          }}
        />
      </div>
      <p className="text-xs text-muted mt-3">
        {labels[lang].vystup}: {mod.output}
      </p>
    </button>
  );
}

function WeekCard({
  week,
  onSelect,
  progress,
  color,
  lang,
}: {
  week: Week;
  onSelect: () => void;
  progress: Record<string, boolean>;
  color: string;
  lang: Lang;
}) {
  const done = week.lessons.filter(
    (_, i) => progress[lessonKey(week.week, i)]
  ).length;

  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-4 rounded-xl bg-surface border border-border hover:border-accent-dim transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted">{labels[lang].tyzden} {week.week}</span>
        <span className="text-xs text-muted">
          {done}/{week.lessons.length}
        </span>
      </div>
      <h4 className="font-medium text-warm mb-2">{week.title}</h4>
      <div className="flex gap-1">
        {week.lessons.map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full"
            style={{
              backgroundColor: progress[lessonKey(week.week, i)]
                ? color
                : "#1E1E2A",
            }}
          />
        ))}
      </div>
    </button>
  );
}

function ContentRenderer({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");
  return (
    <div className="space-y-5 max-w-prose">
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={i} className="font-serif text-2xl font-semibold text-warm mt-8 mb-3">
              {trimmed.replace(/^# /, "")}
            </h2>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={i} className="font-serif text-xl font-semibold text-warm mt-7 mb-2">
              {trimmed.replace(/^## /, "")}
            </h3>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={i} className="text-base font-semibold text-warm mt-5 mb-1">
              {trimmed.replace(/^### /, "")}
            </h4>
          );
        }
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-accent-dim pl-5 py-2 text-base text-warm/70 italic leading-7"
            >
              {trimmed.replace(/^> /gm, "")}
            </blockquote>
          );
        }
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").map((line) =>
            line.replace(/^[-*] /, "").trim()
          );
          return (
            <ul key={i} className="space-y-2 pl-5">
              {items.map((item, j) => {
                const itemParts = item.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <li key={j} className="text-base text-warm/80 leading-7 list-disc">
                    {itemParts.map((part, k) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={k} className="text-warm font-medium">
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </li>
                );
              })}
            </ul>
          );
        }
        // Bold handling
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-base text-warm/80 leading-7">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="text-warm font-medium">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

function getNotes(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || "{}");
  } catch {
    return {};
  }
}

function LessonView({
  lesson,
  weekNum,
  dayIdx,
  progress,
  onToggle,
  color,
  lang,
}: {
  lesson: Lesson;
  weekNum: number;
  dayIdx: number;
  progress: Record<string, boolean>;
  onToggle: () => void;
  color: string;
  lang: Lang;
}) {
  const t = labels[lang];
  const key = lessonKey(weekNum, dayIdx);
  const done = progress[key];
  const [expanded, setExpanded] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [noteText, setNoteText] = useState(() => getNotes()[key] || "");
  const lessonContent = lesson.contentId ? getContent(lang, lesson.contentId) : null;

  const saveNote = (val: string) => {
    setNoteText(val);
    const all = getNotes();
    if (val.trim()) {
      all[key] = val;
    } else {
      delete all[key];
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(all));
  };

  return (
    <div
      className={`p-5 rounded-xl border transition-all ${
        done
          ? "bg-surface/50 border-border/50"
          : "bg-surface border-border"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs text-muted">{lesson.day}</span>
          <h4
            className={`font-serif text-lg font-semibold mt-1 ${
              done ? "text-muted line-through" : "text-warm"
            }`}
          >
            {lesson.title}
          </h4>
        </div>
        <button
          onClick={onToggle}
          className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 mt-1 ${
            done ? "border-transparent" : "border-border hover:border-accent-dim"
          }`}
          style={done ? { backgroundColor: color } : {}}
        >
          {done && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#0A0A0F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7l3 3 5-5" />
            </svg>
          )}
        </button>
      </div>

      {lesson.book && (
        <p className="text-sm text-accent-dim mb-2">{lesson.book}</p>
      )}

      <div className="bg-bg/60 rounded-lg p-4 md:p-5 mb-3 max-w-prose">
        <p className="text-sm md:text-base text-warm/80 leading-relaxed md:leading-7">
          {lesson.concept}
        </p>
      </div>

      {lesson.exercise && (
        <div
          className="rounded-lg p-4 border mb-3"
          style={{
            borderColor: color + "30",
            backgroundColor: color + "08",
          }}
        >
          <p className="text-xs font-medium mb-1" style={{ color }}>
            {t.cvicenie}
          </p>
          <p className="text-sm text-warm/80">{lesson.exercise}</p>
        </div>
      )}

      {lessonContent && (
        <div className="mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-bg/80 border border-border hover:border-accent-dim transition-all text-sm"
          >
            <span className="text-warm/80 font-medium">
              {expanded ? t.skrytMaterial : t.citatMaterial}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-muted transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>

          {expanded && (
            <div className="mt-3 px-5 md:px-8 py-6 md:py-8 rounded-lg bg-bg/60 border border-border max-h-[80vh] overflow-y-auto">
              <ContentRenderer text={lessonContent} />
            </div>
          )}
        </div>
      )}

      <div className="mt-3">
        <button
          onClick={() => setNotesOpen(!notesOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-bg/80 border border-border hover:border-accent-dim transition-all text-sm"
        >
          <span className="text-warm/80 font-medium flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="M8.5 1.5L12.5 5.5L5 13H1V9L8.5 1.5Z" />
            </svg>
            {notesOpen ? t.skrytPoznamky : t.poznamky}
            {!notesOpen && noteText.trim() && (
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            )}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-muted transition-transform ${
              notesOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>

        {notesOpen && (
          <textarea
            value={noteText}
            onChange={(e) => saveNote(e.target.value)}
            placeholder={t.notesPlaceholder}
            className="mt-2 w-full min-h-[120px] p-4 rounded-lg bg-bg/60 border border-border text-sm text-warm/90 leading-relaxed placeholder:text-muted/50 focus:outline-none focus:border-accent-dim resize-y"
          />
        )}
      </div>

      {lesson.note && (
        <p className="text-xs text-muted mt-2 italic">{lesson.note}</p>
      )}
    </div>
  );
}

type View =
  | { type: "home" }
  | { type: "module"; moduleId: number }
  | { type: "week"; moduleId: number; weekIdx: number };

export default function App() {
  const [view, setView] = useState<View>({ type: "home" });
  const [progress, setProgress] = useState(getProgress);
  const [lang, setLangState] = useState<Lang>(getLang);

  const changeLang = (l: Lang) => {
    setLangState(l);
    persistLang(l);
  };

  const t = labels[lang];
  const modules = getModules(lang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleLesson = (weekNum: number, dayIdx: number) => {
    const key = lessonKey(weekNum, dayIdx);
    setProgress((p) => ({ ...p, [key]: !p[key] }));
  };

  const totalLessons = modules.reduce(
    (acc, m) => acc + m.weeks.reduce((a, w) => a + w.lessons.length, 0),
    0
  );
  const totalDone = Object.values(progress).filter(Boolean).length;
  const overallPct =
    totalLessons > 0 ? Math.round((totalDone / totalLessons) * 100) : 0;

  // Home
  if (view.type === "home") {
    return (
      <div className="min-h-screen p-5 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <header className="pt-8 pb-6">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl font-semibold text-warm">
              Learning Path
            </h1>
            <LangToggle lang={lang} onChange={changeLang} />
          </div>
          <p className="text-sm text-muted mt-1">
            {t.subtitle}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 bg-surface rounded-full h-2">
              <div
                className="h-2 rounded-full bg-accent transition-all duration-500"
                style={{ width: `${overallPct}%` }}
              />
            </div>
            <span className="text-xs text-muted">{overallPct}%</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {modules.map((mod) => (
            <ModuleCard
              key={mod.id}
              mod={mod}
              progress={progress}
              lang={lang}
              onSelect={() =>
                setView({ type: "module", moduleId: mod.id })
              }
            />
          ))}
        </div>

        <footer className="py-8 text-center">
          <p className="text-xs text-muted">
            {t.lessonsDone(totalDone, totalLessons)}
          </p>
        </footer>
      </div>
    );
  }

  // Module view
  if (view.type === "module") {
    const mod = modules.find((m) => m.id === view.moduleId)!;
    return (
      <div className="min-h-screen p-5 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <button
          onClick={() => setView({ type: "home" })}
          className="text-sm text-muted hover:text-warm transition-colors mb-6 flex items-center gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
          {t.spat}
        </button>

        <header className="pb-6">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: mod.color + "20",
              color: mod.color,
            }}
          >
            {t.modul} {mod.id}
          </span>
          <h2 className="font-serif text-xl font-semibold text-warm mt-2">
            {mod.title}
          </h2>
          <p className="text-sm text-muted mt-1">{mod.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {mod.weeks.map((week, weekIdx) => (
            <WeekCard
              key={week.week}
              week={week}
              progress={progress}
              color={mod.color}
              lang={lang}
              onSelect={() =>
                setView({
                  type: "week",
                  moduleId: mod.id,
                  weekIdx,
                })
              }
            />
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-surface border border-border">
          <p className="text-xs text-muted mb-1">{t.vystupModulu}</p>
          <p className="text-sm text-warm">{mod.output}</p>
        </div>
      </div>
    );
  }

  // Week view
  const mod = modules.find((m) => m.id === view.moduleId)!;
  const week = mod.weeks[view.weekIdx];

  return (
    <div className="min-h-screen p-5 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      <button
        onClick={() =>
          setView({ type: "module", moduleId: view.moduleId })
        }
        className="text-sm text-muted hover:text-warm transition-colors mb-6 flex items-center gap-1"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12L6 8l4-4" />
        </svg>
        {mod.title}
      </button>

      <header className="pb-6">
        <span className="text-xs text-muted">
          {t.tyzden} {week.week}
        </span>
        <h2 className="font-serif text-xl font-semibold text-warm mt-1">
          {week.title}
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        {week.lessons.map((lesson, dayIdx) => (
          <LessonView
            key={dayIdx}
            lesson={lesson}
            weekNum={week.week}
            dayIdx={dayIdx}
            progress={progress}
            color={mod.color}
            lang={lang}
            onToggle={() => toggleLesson(week.week, dayIdx)}
          />
        ))}
      </div>

      <div className="h-12" />
    </div>
  );
}
