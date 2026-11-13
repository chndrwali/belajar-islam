"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { defaultProgress, useProgress } from "@/lib/islam/progress";

export function ClearProgressButton({ label = "Hapus semua progres" }: { label?: string }) {
  const { update } = useProgress();
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
      >
        <Trash2 className="h-4 w-4" />
        {label}
      </button>
    );
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-2 rounded-3xl border border-red-300 bg-red-50 px-4 py-3 text-sm">
      <span className="font-medium text-red-800">
        Yakin? Semua materi yang ditandai, skor kuis, riwayat tryout, jurnal, dan checklist akan
        dihapus dari browser ini.
      </span>
      <button
        type="button"
        onClick={() => {
          update(() => defaultProgress());
          setConfirming(false);
        }}
        className="rounded-full bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
      >
        Ya, hapus semua
      </button>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="rounded-full border border-stone-300 bg-white px-4 py-2 font-semibold text-stone-700 hover:bg-stone-50"
      >
        Batal
      </button>
    </span>
  );
}
