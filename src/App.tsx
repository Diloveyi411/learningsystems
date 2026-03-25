import { useState, useEffect, useRef } from "react";
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

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 220; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 1.2 + 0.2;
        const opacity = Math.random() * 0.45 + 0.05;
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      aria-hidden
    />
  );
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
              ? "bg-accent/15 text-accent"
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
  const totalLessons = mod.weeks.reduce((acc, w) => acc + w.lessons.length, 0);
  const doneLessons = mod.weeks.reduce(
    (acc, w) =>
      acc + w.lessons.filter((_, i) => progress[lessonKey(w.week, i)]).length,
    0
  );
  const pct = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0;

  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent/30 text-accent">
          {labels[lang].modul} {mod.id}
        </span>
        <span className="text-xs text-muted">{pct}%</span>
      </div>
      <h3 className="font-sans text-lg font-bold text-warm mb-1 group-hover:text-accent transition-colors">
        {mod.title}
      </h3>
      <p className="text-sm text-muted mb-4">{mod.subtitle}</p>
      <div className="w-full bg-border rounded-full h-1">
        <div
          className="h-1 rounded-full bg-accent transition-all duration-500"
          style={{ width: `${pct}%` }}
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
  lang,
}: {
  week: Week;
  onSelect: () => void;
  progress: Record<string, boolean>;
  lang: Lang;
}) {
  const done = week.lessons.filter((_, i) => progress[lessonKey(week.week, i)]).length;

  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted">
          {labels[lang].tyzden} {week.week}
        </span>
        <span className="text-xs text-muted">
          {done}/{week.lessons.length}
        </span>
      </div>
      <h4 className="font-medium text-warm mb-3">{week.title}</h4>
      <div className="flex gap-1">
        {week.lessons.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              progress[lessonKey(week.week, i)] ? "bg-accent" : "bg-border"
            }`}
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
            <h2 key={i} className="font-sans text-2xl font-bold text-warm mt-8 mb-3">
              {trimmed.replace(/^# /, "")}
            </h2>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={i} className="font-sans text-xl font-bold text-warm mt-7 mb-2">
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
              className="border-l-2 border-accent/50 pl-5 py-2 text-base text-warm/70 italic leading-7"
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
                        <strong key={k} className="text-warm font-semibold">
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
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-base text-warm/80 leading-7">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="text-warm font-semibold">
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
  lang,
}: {
  lesson: Lesson;
  weekNum: number;
  dayIdx: number;
  progress: Record<string, boolean>;
  onToggle: () => void;
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
          ? "bg-surface/40 border-border/40"
          : "bg-surface border-border hover:border-accent/30"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs text-muted">{lesson.day}</span>
          <h4
            className={`font-sans text-lg font-bold mt-1 ${
              done ? "text-muted line-through" : "text-warm"
            }`}
          >
            {lesson.title}
          </h4>
        </div>
        <button
          onClick={onToggle}
          className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 mt-1 ${
            done
              ? "border-transparent bg-accent"
              : "border-border hover:border-accent/60"
          }`}
        >
          {done && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#000"
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
        <p className="text-sm text-accent/70 mb-3">{lesson.book}</p>
      )}

      <div className="bg-black/40 rounded-lg p-4 md:p-5 mb-3 max-w-prose border border-border/50">
        <p className="text-sm md:text-base text-warm/80 leading-relaxed md:leading-7">
          {lesson.concept}
        </p>
      </div>

      {lesson.exercise && (
        <div className="rounded-lg p-4 border border-accent/20 bg-accent/5 mb-3">
          <p className="text-xs font-semibold text-accent mb-1">{t.cvicenie}</p>
          <p className="text-sm text-warm/80">{lesson.exercise}</p>
        </div>
      )}

      {lesson.presentation && (
        <a
          href={lesson.presentation}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-full px-4 py-3 rounded-lg border border-accent/30 bg-accent/10 hover:bg-accent/20 hover:border-accent/60 transition-all text-sm font-medium text-accent mb-3 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="12" height="12" rx="1.5" />
            <path d="M5 6h6M5 9h4" />
          </svg>
          {t.viewPresentation}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity"
          >
            <path d="M2 10L10 2M6 2h4v4" />
          </svg>
        </a>
      )}

      {lessonContent && (
        <div className="mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-black/40 border border-border hover:border-accent/30 transition-all text-sm"
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
              className={`text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>

          {expanded && (
            <div className="mt-3 px-5 md:px-8 py-6 md:py-8 rounded-lg bg-black/40 border border-border max-h-[80vh] overflow-y-auto">
              <ContentRenderer text={lessonContent} />
            </div>
          )}
        </div>
      )}

      <div className="mt-3">
        <button
          onClick={() => setNotesOpen(!notesOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-black/40 border border-border hover:border-accent/30 transition-all text-sm"
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
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
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
            className={`text-muted transition-transform ${notesOpen ? "rotate-180" : ""}`}
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>

        {notesOpen && (
          <textarea
            value={noteText}
            onChange={(e) => saveNote(e.target.value)}
            placeholder={t.notesPlaceholder}
            className="mt-2 w-full min-h-[120px] p-4 rounded-lg bg-black/40 border border-border text-sm text-warm/90 leading-relaxed placeholder:text-muted/50 focus:outline-none focus:border-accent/40 resize-y"
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
      <div className="min-h-screen bg-bg">
        <Starfield />
        <div className="relative z-10 p-5 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <header className="pt-10 pb-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-sans text-4xl font-black text-white tracking-tight leading-none">
                  Learning Path
                </h1>
                <p className="text-sm text-muted mt-2">{t.subtitle}</p>
              </div>
              <LangToggle lang={lang} onChange={changeLang} />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 bg-surface rounded-full h-1">
                <div
                  className="h-1 rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${overallPct}%` }}
                />
              </div>
              <span className="text-xs text-muted tabular-nums">{overallPct}%</span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {modules.map((mod) => (
              <ModuleCard
                key={mod.id}
                mod={mod}
                progress={progress}
                lang={lang}
                onSelect={() => setView({ type: "module", moduleId: mod.id })}
              />
            ))}
          </div>

          <footer className="py-8 text-center">
            <p className="text-xs text-muted">{t.lessonsDone(totalDone, totalLessons)}</p>
          </footer>
        </div>
      </div>
    );
  }

  // Module view
  if (view.type === "module") {
    const mod = modules.find((m) => m.id === view.moduleId)!;
    return (
      <div className="min-h-screen bg-bg">
        <Starfield />
        <div className="relative z-10 p-5 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <button
            onClick={() => setView({ type: "home" })}
            className="text-sm text-muted hover:text-warm transition-colors mt-6 mb-6 flex items-center gap-1"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 12L6 8l4-4" />
            </svg>
            {t.spat}
          </button>

          <header className="pb-6">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent/30 text-accent">
              {t.modul} {mod.id}
            </span>
            <h2 className="font-sans text-3xl font-black text-white mt-3 leading-tight">
              {mod.title}
            </h2>
            <p className="text-sm text-muted mt-2">{mod.subtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {mod.weeks.map((week, weekIdx) => (
              <WeekCard
                key={week.week}
                week={week}
                progress={progress}
                lang={lang}
                onSelect={() =>
                  setView({ type: "week", moduleId: mod.id, weekIdx })
                }
              />
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-surface border border-border">
            <p className="text-xs text-muted mb-1">{t.vystupModulu}</p>
            <p className="text-sm text-warm">{mod.output}</p>
          </div>
        </div>
      </div>
    );
  }

  // Week view
  const mod = modules.find((m) => m.id === view.moduleId)!;
  const week = mod.weeks[view.weekIdx];

  return (
    <div className="min-h-screen bg-bg">
      <Starfield />
      <div className="relative z-10 p-5 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <button
          onClick={() => setView({ type: "module", moduleId: view.moduleId })}
          className="text-sm text-muted hover:text-warm transition-colors mt-6 mb-6 flex items-center gap-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 12L6 8l4-4" />
          </svg>
          {mod.title}
        </button>

        <header className="pb-6">
          <span className="text-xs text-muted">
            {t.tyzden} {week.week}
          </span>
          <h2 className="font-sans text-3xl font-black text-white mt-1 leading-tight">
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
              lang={lang}
              onToggle={() => toggleLesson(week.week, dayIdx)}
            />
          ))}
        </div>

        <div className="h-12" />
      </div>
    </div>
  );
}
