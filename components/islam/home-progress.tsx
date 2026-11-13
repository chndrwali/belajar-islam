"use client";

import Link from "next/link";
import { MATERIALS } from "@/lib/islam/materials";
import { useProgress } from "@/lib/islam/progress";
import { ProgressBar } from "@/components/islam/progress-bar";

export function HomeProgress() {
  const { progress } = useProgress();
  const readCount = progress.readMaterials.length;
  const quizDone = Object.keys(progress.quizBest).length;
  const lastTryout = progress.tryoutHistory[0];

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-extrabold">Progres belajarmu</h2>
      <p className="mt-1 text-sm text-stone-600">
        Tersimpan hanya di browser ini. Ganti browser atau hapus data browser berarti progres
        hilang.
      </p>
      <div className="mt-5 space-y-5">
        <ProgressBar value={readCount} total={MATERIALS.length} label="Materi sudah dibaca" />
        <ProgressBar value={quizDone} total={5} label="Kuis diselesaikan" />
        <p className="text-sm text-stone-600">
          Tryout terakhir:{" "}
          <span className="font-semibold text-stone-900">
            {lastTryout
              ? `${lastTryout.total}% pada ${new Date(lastTryout.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}`
              : "belum pernah tryout"}
          </span>
        </p>
      </div>
      <div className="mt-5">
        <Link href="/materi" className="font-semibold text-coklat hover:underline">
          Lanjutkan belajar →
        </Link>
      </div>
    </div>
  );
}
