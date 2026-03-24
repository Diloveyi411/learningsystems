import { useState, useEffect } from "react";
import { modules } from "./data";
import { content } from "./content";
import type { Lesson, Module, Week } from "./data";

const STORAGE_KEY = "learning-progress";

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

function ModuleCard({
  mod,
  onSelect,
  progress,
}: {
  mod: Module;
  onSelect: () => void;
  progress: Record<string, boolean>;
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
          Modul {mod.id}
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
        Vystup: {mod.output}
      </p>
    </button>
  );
}

function WeekCard({
  week,
  onSelect,
  progress,
  color,
}: {
  week: Week;
  onSelect: () => void;
  progress: Record<string, boolean>;
  color: string;
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
        <span className="text-xs text-muted">Tyzden {week.week}</span>
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
    <div className="space-y-4">
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={i} className="font-serif text-xl font-semibold text-warm mt-6 mb-2">
              {trimmed.replace(/^# /, "")}
            </h2>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={i} className="font-serif text-lg font-semibold text-warm mt-5 mb-1">
              {trimmed.replace(/^## /, "")}
            </h3>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={i} className="font-medium text-warm mt-4 mb-1">
              {trimmed.replace(/^### /, "")}
            </h4>
          );
        }
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-accent-dim pl-4 py-1 text-sm text-warm/70 italic"
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
            <ul key={i} className="space-y-1 pl-4">
              {items.map((item, j) => (
                <li key={j} className="text-sm text-warm/80 leading-relaxed list-disc">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        // Bold handling
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-sm text-warm/80 leading-relaxed">
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

function LessonView({
  lesson,
  weekNum,
  dayIdx,
  progress,
  onToggle,
  color,
}: {
  lesson: Lesson;
  weekNum: number;
  dayIdx: number;
  progress: Record<string, boolean>;
  onToggle: () => void;
  color: string;
}) {
  const key = lessonKey(weekNum, dayIdx);
  const done = progress[key];
  const [expanded, setExpanded] = useState(false);
  const lessonContent = lesson.contentId ? content[lesson.contentId] : null;

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

      <div className="bg-bg/60 rounded-lg p-4 mb-3">
        <p className="text-sm text-warm/80 leading-relaxed">
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
            Cvicenie
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
              {expanded ? "Skryt material" : "Citat material"}
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
            <div className="mt-3 px-4 py-5 rounded-lg bg-bg/60 border border-border max-h-[70vh] overflow-y-auto">
              <ContentRenderer text={lessonContent} />
            </div>
          )}
        </div>
      )}

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
      <div className="min-h-screen p-5 max-w-lg mx-auto">
        <header className="pt-8 pb-6">
          <h1 className="font-serif text-2xl font-semibold text-warm">
            Learning Path
          </h1>
          <p className="text-sm text-muted mt-1">
            12 tyzdnov k strategickej pozicii
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

        <div className="flex flex-col gap-3">
          {modules.map((mod) => (
            <ModuleCard
              key={mod.id}
              mod={mod}
              progress={progress}
              onSelect={() =>
                setView({ type: "module", moduleId: mod.id })
              }
            />
          ))}
        </div>

        <footer className="py-8 text-center">
          <p className="text-xs text-muted">
            {totalDone} z {totalLessons} lekcii hotovych
          </p>
        </footer>
      </div>
    );
  }

  // Module view
  if (view.type === "module") {
    const mod = modules.find((m) => m.id === view.moduleId)!;
    return (
      <div className="min-h-screen p-5 max-w-lg mx-auto">
        <button
          onClick={() => setView({ type: "home" })}
          className="text-sm text-muted hover:text-warm transition-colors mb-6 flex items-center gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Spat
        </button>

        <header className="pb-6">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: mod.color + "20",
              color: mod.color,
            }}
          >
            Modul {mod.id}
          </span>
          <h2 className="font-serif text-xl font-semibold text-warm mt-2">
            {mod.title}
          </h2>
          <p className="text-sm text-muted mt-1">{mod.subtitle}</p>
        </header>

        <div className="flex flex-col gap-3">
          {mod.weeks.map((week, weekIdx) => (
            <WeekCard
              key={week.week}
              week={week}
              progress={progress}
              color={mod.color}
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
          <p className="text-xs text-muted mb-1">Vystup modulu</p>
          <p className="text-sm text-warm">{mod.output}</p>
        </div>
      </div>
    );
  }

  // Week view
  const mod = modules.find((m) => m.id === view.moduleId)!;
  const week = mod.weeks[view.weekIdx];

  return (
    <div className="min-h-screen p-5 max-w-lg mx-auto">
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
          Tyzden {week.week}
        </span>
        <h2 className="font-serif text-xl font-semibold text-warm mt-1">
          {week.title}
        </h2>
      </header>

      <div className="flex flex-col gap-3">
        {week.lessons.map((lesson, dayIdx) => (
          <LessonView
            key={dayIdx}
            lesson={lesson}
            weekNum={week.week}
            dayIdx={dayIdx}
            progress={progress}
            color={mod.color}
            onToggle={() => toggleLesson(week.week, dayIdx)}
          />
        ))}
      </div>

      <div className="h-12" />
    </div>
  );
}
