"use client";

import Link from "next/link";
import { ClipboardList, Trophy } from "lucide-react";
import { QUIZ_META } from "@/lib/islam/quiz-questions";
import { useProgress } from "@/lib/islam/progress";

export function KuisList() {
  const { progress } = useProgress();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {QUIZ_META.map((meta) => {
        const best = progress.quizBest[meta.id];
        return (
          <Link
            key={meta.id}
            href={`/kuis/${meta.id}`}
            className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-coklat hover:shadow-md"
          >
            <ClipboardList className="h-6 w-6 text-coklat" />
            <h2 className="mt-3 text-lg font-bold group-hover:text-coklat">{meta.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">{meta.description}</p>
            <p className="mt-4 text-sm text-stone-500">10 soal · 4 pilihan jawaban</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-emas">
              <Trophy className="h-4 w-4" />
              {best !== undefined ? `Skor terbaik: ${best}/10` : "Belum pernah dikerjakan"}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
