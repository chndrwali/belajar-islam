"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Flag, Play, RotateCcw, Timer } from "lucide-react";
import type { Question, SectionKey, TryoutResult } from "@/lib/islam/types";
import { SECTION_INFO } from "@/lib/islam/materials";
import { TRYOUT_MINUTES, TRYOUT_TARGET, TRYOUT_TOTAL } from "@/lib/islam/types";
import { useProgress } from "@/lib/islam/progress";

const LETTERS = ["A", "B", "C", "D"];
const TOTAL_SECONDS = TRYOUT_MINUTES * 60;
const SECTION_ORDER: SectionKey[] = ["akidah", "ibadah", "quran", "sirah", "akhlak"];

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return m > 0 ? `${m} menit ${s} detik` : `${s} detik`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export function TryoutRunner({ questions }: { questions: Question[] }) {
  const { progress, update } = useProgress();
  const [phase, setPhase] = useState<"intro" | "running" | "result">("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [result, setResult] = useState<TryoutResult | null>(null);
  const startedAtRef = useRef<number>(0);
  const submittedRef = useRef(false);

  function submit() {
    if (submittedRef.current) return;
    submittedRef.current = true;
    const scores = {} as Record<SectionKey, { correct: number; total: number }>;
    for (const key of SECTION_ORDER) scores[key] = { correct: 0, total: 0 };
    let correctTotal = 0;
    questions.forEach((qq, i) => {
      scores[qq.section].total += 1;
      if (answers[i] === qq.answer) {
        scores[qq.section].correct += 1;
        correctTotal += 1;
      }
    });
    const total = questions.length > 0 ? Math.round((correctTotal / questions.length) * 100) : 0;
    const durationSeconds = Math.max(
      0,
      Math.round((Date.now() - startedAtRef.current) / 1000),
    );
    const attempt: TryoutResult = {
      date: new Date().toISOString(),
      scores,
      total,
      durationSeconds,
    };
    update((p) => ({ ...p, tryoutHistory: [attempt, ...p.tryoutHistory] }));
    setResult(attempt);
    setPhase("result");
  }

  // Timer mundur; auto-submit saat habis.
  useEffect(() => {
    if (phase !== "running") return;
    if (secondsLeft <= 0) {
      submit();
      return;
    }
    const t = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

  function start() {
    setAnswers({});
    setFlagged({});
    setIndex(0);
    setSecondsLeft(TOTAL_SECONDS);
    setResult(null);
    submittedRef.current = false;
    startedAtRef.current = Date.now();
    setPhase("running");
  }

  if (phase === "intro") {
    const history = progress.tryoutHistory;
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-extrabold">Tryout — 30 Soal Campuran</h1>
          <p className="mt-3 leading-relaxed text-stone-600">
            {TRYOUT_TOTAL} soal dari kelima bagian (akidah, ibadah, Al-Quran, sirah, akhlak),
            waktu {TRYOUT_MINUTES} menit. Jawab semua soal, lalu lihat hasil per bagian.
          </p>
          <p className="mt-3 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            Target belajar mandiri: {TRYOUT_TARGET}%. Ini target belajar mandiri, bukan passing
            grade resmi — tidak ada lembaga yang menetapkan kelulusan untuk tryout ini.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-stone-600">
            <li>Soal bisa dijawab berurutan atau lompat lewat nomor soal.</li>
            <li>Tandai soal yang ragu dengan bendera, lalu kembali lagi sebelum submit.</li>
            <li>Waktu habis berarti tryout otomatis diserahkan.</li>
          </ul>
          <button
            onClick={start}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-coklat px-6 py-3 text-sm font-semibold text-white hover:bg-coklat-dark"
          >
            <Play className="h-4 w-4" /> Mulai tryout
          </button>
        </div>

        {history.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-lg font-bold">Riwayat tryout kamu</h2>
            <ol className="mt-3 space-y-3">
              {history.map((h, i) => (
                <li
                  key={`${h.date}-${i}`}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <div>
                    <p className="font-semibold">
                      {h.total}% — {formatDate(h.date)}
                    </p>
                    <p className="text-sm text-stone-600">
                      Durasi {formatDuration(h.durationSeconds)} ·{" "}
                      {h.total >= TRYOUT_TARGET
                        ? "mencapai target belajar mandiri"
                        : "di bawah target belajar mandiri"}
                    </p>
                  </div>
                  <Link
                    href="/materi"
                    className="text-sm font-semibold text-coklat hover:underline"
                  >
                    Ulangi materi
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p className="mt-8 text-sm text-stone-500">
            Belum ada riwayat tryout. Hasil tryout pertamamu akan tersimpan di sini, di browser
            ini saja.
          </p>
        )}
      </div>
    );
  }

  if (phase === "result" && result) {
    const answered = Object.keys(answers).length;
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h1 className="mt-4 text-2xl font-extrabold">Tryout selesai</h1>
          <p className="mt-2 text-4xl font-extrabold text-coklat">{result.total}%</p>
          <p className="mt-2 text-stone-600">
            Kamu menjawab {answered} dari {questions.length} soal dalam{" "}
            {formatDuration(result.durationSeconds)}.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            {result.total >= TRYOUT_TARGET
              ? `Mencapai target belajar mandiri ${TRYOUT_TARGET}%. Bagus — lanjut jaga dengan mengulang bagian yang masih lemah.`
              : `Di bawah target belajar mandiri ${TRYOUT_TARGET}%. Tidak apa-apa — lihat bagian yang paling lemah di bawah, baca lagi materinya, lalu coba lagi.`}
          </p>
          <p className="mt-3 text-xs text-stone-500">
            Target {TRYOUT_TARGET}% adalah target belajar mandiri, bukan passing grade resmi.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={start}
              className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
            >
              <RotateCcw className="h-4 w-4" /> Ulangi tryout
            </button>
            <Link
              href="/materi"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-stone-50"
            >
              Baca materi
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Hasil per bagian</h2>
          <div className="mt-3 space-y-3">
            {SECTION_ORDER.map((key) => {
              const s = result.scores[key];
              if (!s || s.total === 0) return null;
              const pct = Math.round((s.correct / s.total) * 100);
              return (
                <div
                  key={key}
                  className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{SECTION_INFO[key].name}</span>
                    <span className="font-semibold text-coklat">
                      {s.correct}/{s.total} ({pct}%)
                    </span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-stone-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8b5e3c] to-amber-600"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Pembahasan semua soal</h2>
          <ol className="mt-3 space-y-3">
            {questions.map((qq, i) => {
              const answer = answers[i];
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

  // Fase running
  const q = questions[index];
  const answeredCount = Object.keys(answers).length;
  const lowTime = secondsLeft <= 300;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
            lowTime ? "bg-red-100 text-red-800" : "bg-white text-stone-700"
          } border border-stone-200`}
        >
          <Timer className="h-4 w-4" /> Sisa waktu {formatTime(secondsLeft)}
        </span>
        <span className="text-sm text-stone-600">
          Terjawab {answeredCount}/{questions.length}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {questions.map((qq, i) => {
          const isCurrent = i === index;
          const isAnswered = answers[i] !== undefined;
          const isFlagged = flagged[i] ?? false;
          return (
            <button
              key={qq.id}
              onClick={() => setIndex(i)}
              aria-label={`Soal ${i + 1}`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                isCurrent
                  ? "border-coklat bg-coklat text-white"
                  : isAnswered
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                    : "border-stone-300 bg-white text-stone-700 hover:border-coklat"
              } ${isFlagged && !isCurrent ? "ring-2 ring-amber-400" : ""}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {q ? (
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-coklat">
              Soal {index + 1} dari {questions.length} · {SECTION_INFO[q.section].name}
            </p>
            <button
              onClick={() => setFlagged((f) => ({ ...f, [index]: !(f[index] ?? false) }))}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                flagged[index] ? "border-amber-500 bg-amber-50 text-amber-800" : "border-stone-300 text-stone-600"
              }`}
            >
              <Flag className="h-3.5 w-3.5" /> {flagged[index] ? "Ragu — ditandai" : "Tandai ragu"}
            </button>
          </div>
          <h1 className="mt-4 text-xl font-bold leading-relaxed">{q.question}</h1>
          <div className="mt-6 space-y-3">
            {q.options.map((option, i) => {
              const selected = answers[index] === i;
              return (
                <button
                  key={i}
                  onClick={() => setAnswers((a) => ({ ...a, [index]: i }))}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left font-medium transition ${
                    selected
                      ? "border-coklat bg-coklat-soft"
                      : "border-stone-200 bg-white hover:border-coklat hover:bg-coklat-soft"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-bold">
                    {LETTERS[i]}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setIndex((v) => Math.max(0, v - 1))}
              disabled={index === 0}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Sebelumnya
            </button>
            {index < questions.length - 1 ? (
              <button
                onClick={() => setIndex((v) => Math.min(questions.length - 1, v + 1))}
                className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
              >
                Berikutnya <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                className="inline-flex items-center gap-2 rounded-full bg-emas px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700"
              >
                <CheckCircle2 className="h-4 w-4" /> Serahkan tryout ({answeredCount}/{questions.length} terjawab)
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className="text-stone-600">Soal tryout belum tersedia.</p>
      )}
    </div>
  );
}
