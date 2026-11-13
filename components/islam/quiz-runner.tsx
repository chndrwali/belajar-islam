"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import type { Question } from "@/lib/islam/types";
import { useProgress } from "@/lib/islam/progress";

const LETTERS = ["A", "B", "C", "D"];

export function QuizRunner({
  quizId,
  title,
  questions,
}: {
  quizId: string;
  title: string;
  questions: Question[];
}) {
  const { progress, update } = useProgress();
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [savedNote, setSavedNote] = useState("");

  const q = questions[index];
  const picked = chosen[index];
  const isRevealed = revealed[index] ?? false;

  const correctCount = useMemo(
    () => questions.filter((qq, i) => chosen[i] === qq.answer).length,
    [chosen, questions],
  );

  function pick(optionIndex: number) {
    if (isRevealed) return;
    setChosen((c) => ({ ...c, [index]: optionIndex }));
    setRevealed((r) => ({ ...r, [index]: true }));
  }

  function finish() {
    setFinished(true);
    const prev = progress.quizBest[quizId] ?? 0;
    if (correctCount > prev) {
      update((p) => ({
        ...p,
        quizBest: { ...p.quizBest, [quizId]: correctCount },
      }));
      setSavedNote("Skor terbaik baru tersimpan di browser kamu.");
    } else {
      setSavedNote(
        prev > 0
          ? `Skor terbaikmu untuk kuis ini tetap ${prev} dari ${questions.length}.`
          : "Skor tersimpan di browser kamu.",
      );
    }
  }

  function reset() {
    setChosen({});
    setRevealed({});
    setIndex(0);
    setFinished(false);
    setSavedNote("");
  }

  if (questions.length === 0) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <p className="text-stone-600">Soal kuis ini belum tersedia.</p>
        <Link href="/kuis" className="mt-4 inline-block font-semibold text-coklat underline">
          Kembali ke daftar kuis
        </Link>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h1 className="mt-4 text-2xl font-extrabold">Kuis selesai</h1>
          <p className="mt-2 text-stone-600">
            {title} — kamu menjawab benar {correctCount} dari {questions.length} soal ({pct}%).
          </p>
          <p className="mt-2 text-sm text-stone-600">
            {pct >= 80
              ? "Mantap, sudah sangat paham. Lanjut ke bagian berikutnya."
              : pct >= 60
                ? "Lumayan, tapi masih ada yang perlu diulang. Baca lagi materinya lalu coba lagi."
                : "Belum apa-apa, santai saja. Baca lagi materinya, lalu ulangi kuis ini."}
          </p>
          {savedNote ? <p className="mt-4 text-sm font-medium text-emerald-700">{savedNote}</p> : null}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
            >
              <RotateCcw className="h-4 w-4" /> Ulangi kuis
            </button>
            <Link
              href="/kuis"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-stone-50"
            >
              Semua kuis
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Pembahasan semua soal</h2>
          <ol className="mt-3 space-y-3">
            {questions.map((qq, i) => {
              const answer = chosen[i];
              const correct = answer === qq.answer;
              return (
                <li key={qq.id} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                  <p className="font-semibold">
                    {i + 1}. {qq.question}
                  </p>
                  <p className={`mt-2 text-sm ${correct ? "text-emerald-700" : "text-red-700"}`}>
                    {answer === undefined
                      ? "Tidak dijawab."
                      : correct
                        ? `Jawabanmu benar: ${qq.options[qq.answer]}`
                        : `Jawabanmu: ${qq.options[answer]} — jawaban benar: ${qq.options[qq.answer]}`}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{qq.explanation}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm text-stone-600">
        <span className="font-semibold">
          Soal {index + 1} dari {questions.length}
        </span>
        <span>
          Benar sejauh ini: {correctCount}
        </span>
      </div>
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-xl font-bold leading-relaxed">{q.question}</h1>
        <div className="mt-6 space-y-3">
          {q.options.map((option, i) => {
            let cls = "border-stone-200 bg-white hover:border-coklat hover:bg-coklat-soft";
            if (isRevealed) {
              if (i === q.answer) cls = "border-emerald-500 bg-emerald-50 text-emerald-900";
              else if (i === picked) cls = "border-red-400 bg-red-50 text-red-900";
              else cls = "border-stone-200 bg-white opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={isRevealed}
                className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left font-medium transition ${cls}`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-bold">
                  {LETTERS[i]}
                </span>
                <span>{option}</span>
                {isRevealed && i === q.answer ? (
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-emerald-600" />
                ) : null}
                {isRevealed && i === picked && i !== q.answer ? (
                  <XCircle className="ml-auto h-5 w-5 shrink-0 text-red-500" />
                ) : null}
              </button>
            );
          })}
        </div>

        {isRevealed ? (
          <div className="mt-6 rounded-2xl bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">
              {picked === q.answer ? "Benar, masyaallah." : "Belum tepat — tidak apa-apa, ini bagian dari belajar."}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone-700">{q.explanation}</p>
            <div className="mt-4 flex justify-end">
              {index < questions.length - 1 ? (
                <button
                  onClick={() => setIndex(index + 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
                >
                  Soal berikutnya <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={finish}
                  className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
                >
                  Lihat hasil <CheckCircle2 className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
