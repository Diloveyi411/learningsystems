// Re-export content with language-aware loader
import { content as contentSk } from "./content-sk";
import { content as contentEn } from "./content-en";
import type { Lang } from "./i18n";

export function getContent(lang: Lang, id: string): string | undefined {
  if (lang === "en" && contentEn[id]) return contentEn[id];
  return contentSk[id];
}

// Default export for backward compatibility
export const content = contentSk;
