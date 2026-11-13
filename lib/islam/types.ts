export type SectionKey = "akidah" | "ibadah" | "quran" | "sirah" | "akhlak";
export interface Material {
  slug: string; section: SectionKey; sectionName: string;
  title: string; short: string; estimatedMinutes: number;
  keyPoints: string[]; example: string; exampleAnswer: string;
}
export interface Question {
  id: string; section: SectionKey;
  question: string; options: string[]; // tepat 4 opsi
  answer: number; // index 0-3
  explanation: string;
}
export interface DoaEntry {
  id: string; title: string; category: string;
  arabic: string; latin: string; meaning: string;
  whenToUse: string; source: string;
}
export interface AsmaulHusna { no: number; arabic: string; latin: string; meaning: string; }
export interface KisahNabi {
  slug: string; name: string; arabic: string;
  summary: string; story: string[]; // 2-4 paragraf pendek
  trial: string; lesson: string; prayer?: string;
}
export interface ChecklistItem { id: string; title: string; detail: string; category: string; }
export interface TryoutResult {
  date: string; // ISO
  scores: Record<SectionKey, { correct: number; total: number }>;
  total: number; // persen 0-100
  durationSeconds: number;
}
export interface JournalEntry { id: string; date: string; ayah: string; whatItSays: string; whatIFeel: string; lesson: string; }
export interface Progress {
  readMaterials: string[];
  quizBest: Record<string, number>;
  tryoutHistory: TryoutResult[];
  checklist: Record<string, string[]>; // "YYYY-MM-DD" -> id yang dicentang
  journal: JournalEntry[];
}
export const TRYOUT_TOTAL = 30;
export const TRYOUT_MINUTES = 45;
export const TRYOUT_TARGET = 70; // target belajar mandiri, bukan passing grade resmi
