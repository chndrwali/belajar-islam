"use client";

import { useCallback, useEffect, useState } from "react";
import type { JournalEntry, Progress } from "./types";

const STORAGE_KEY = "belajar-islam-progress-v1";

export function defaultProgress(): Progress {
  return {
    readMaterials: [],
    quizBest: {},
    tryoutHistory: [],
    checklist: {},
    journal: [],
  };
}

export function loadProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return defaultProgress();
    const base = defaultProgress();
    const p = parsed as Partial<Progress>;
    return {
      readMaterials: Array.isArray(p.readMaterials) ? p.readMaterials : base.readMaterials,
      quizBest:
        typeof p.quizBest === "object" && p.quizBest !== null ? p.quizBest : base.quizBest,
      tryoutHistory: Array.isArray(p.tryoutHistory) ? p.tryoutHistory : base.tryoutHistory,
      checklist:
        typeof p.checklist === "object" && p.checklist !== null ? p.checklist : base.checklist,
      journal: Array.isArray(p.journal) ? p.journal : base.journal,
    };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: Progress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // localStorage penuh atau tidak tersedia — progres tidak tersimpan,
    // tapi aplikasi tetap berjalan.
  }
}

// Entri contoh dari spec (QS Ibrahim: 7, tentang syukur).
//
// CATATAN: entri ini TIDAK otomatis disisipkan ke localStorage saat pertama
// kali load. Bila journal kosong, komponen halaman jurnal yang menampilkan
// entri ini sebagai entri bawaan read-only (contoh), sementara localStorage
// pengguna tetap kosong sampai ia menulis entrinya sendiri.
export const EXAMPLE_JOURNAL_ENTRY: JournalEntry = {
  id: "contoh-syukur",
  date: "2026-11-13",
  ayah: "QS Ibrahim: 7",
  whatItSays:
    "Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu; tetapi jika kamu mengingkari (nikmat-Ku), maka pasti azab-Ku sangat berat.",
  whatIFeel:
    "Contoh: aku sering fokus pada hal yang belum kupunya, padahal nikmat yang sudah ada jauh lebih banyak.",
  lesson:
    "Syukur tidak harus menunggu keinginan tercapai dulu — nikmat sederhana hari ini pun layak disyukuri.",
};

export function useProgress(): {
  progress: Progress;
  update: (fn: (p: Progress) => Progress) => void;
} {
  const [progress, setProgress] = useState<Progress>(() => defaultProgress());

  // Muat dari localStorage setelah mount (aman SSR: saat server,
  // kembalikan default sampai efek ini berjalan di client).
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setProgress((prev) => {
      const next = fn(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  return { progress, update };
}
