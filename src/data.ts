// Re-export types and provide language-aware data loader
export type { Lesson, Week, Module } from "./data-sk";
import { modules as modulesSk } from "./data-sk";
import { modules as modulesEn } from "./data-en";
import type { Lang } from "./i18n";
import type { Module } from "./data-sk";

export function getModules(lang: Lang): Module[] {
  return lang === "en" ? modulesEn : modulesSk;
}

// Default export for backward compatibility
export const modules = modulesSk;
