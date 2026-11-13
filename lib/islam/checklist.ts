import type { ChecklistItem } from "./types";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: "shalat-subuh", title: "Shalat Subuh", detail: "2 rakaat, tepat waktu", category: "Shalat" },
  { id: "shalat-dzuhur", title: "Shalat Dzuhur", detail: "4 rakaat", category: "Shalat" },
  { id: "shalat-ashar", title: "Shalat Ashar", detail: "4 rakaat", category: "Shalat" },
  { id: "shalat-maghrib", title: "Shalat Maghrib", detail: "3 rakaat", category: "Shalat" },
  { id: "shalat-isya", title: "Shalat Isya", detail: "4 rakaat", category: "Shalat" },
  { id: "dzikir-pagi-petang", title: "Dzikir Pagi & Petang", detail: "Bacaan dzikir pagi dan petang", category: "Dzikir & Doa" },
  { id: "dzikir-setelah-shalat", title: "Dzikir Setelah Shalat", detail: "Tasbih, tahmid, takbir 33x", category: "Dzikir & Doa" },
  { id: "doa-orang-tua", title: "Doa untuk Orang Tua", detail: "Dibaca setelah shalat", category: "Dzikir & Doa" },
  { id: "baca-quran", title: "Baca Al-Quran", detail: "Minimal 1 halaman beserta artinya", category: "Al-Quran" },
];
