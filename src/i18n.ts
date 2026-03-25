export type Lang = "sk" | "en";

const LANG_KEY = "learning-lang";

export function getLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "sk") return stored;
  } catch {}
  return "sk";
}

export function setLang(lang: Lang) {
  localStorage.setItem(LANG_KEY, lang);
}

export const labels = {
  sk: {
    modul: "Modul",
    tyzden: "Tyzden",
    spat: "Spat",
    cvicenie: "Cvicenie",
    skrytMaterial: "Skryt material",
    citatMaterial: "Citat material",
    skrytPoznamky: "Skryt poznamky",
    poznamky: "Poznamky",
    notesPlaceholder: "Sem pis svoje poznamky, myslienky, odpovede na cvicenia...",
    subtitle: "12 tyzdnov k strategickej pozicii",
    lessonsDone: (done: number, total: number) => `${done} z ${total} lekcii hotovych`,
    vystup: "Vystup",
    vystupModulu: "Vystup modulu",
    pct: (n: number) => `${n}%`,
    viewPresentation: "Zobrazit prezentaciu",
  },
  en: {
    modul: "Module",
    tyzden: "Week",
    spat: "Back",
    cvicenie: "Exercise",
    skrytMaterial: "Hide material",
    citatMaterial: "Read material",
    skrytPoznamky: "Hide notes",
    poznamky: "Notes",
    notesPlaceholder: "Write your notes, thoughts, exercise answers here...",
    subtitle: "12 weeks to a strategic position",
    lessonsDone: (done: number, total: number) => `${done} of ${total} lessons done`,
    vystup: "Output",
    vystupModulu: "Module output",
    pct: (n: number) => `${n}%`,
    viewPresentation: "View presentation",
  },
} as const;

export type Labels = (typeof labels)["sk"];
