"use client";

import { useState } from "react";
import { BookCheck, BookOpen } from "lucide-react";
import { useProgress } from "@/lib/islam/progress";

export function MarkReadButton({ slug }: { slug: string }) {
  const { progress, update } = useProgress();
  const [justMarked, setJustMarked] = useState(false);
  const isRead = progress.readMaterials.includes(slug);

  if (isRead) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
          <BookCheck className="h-4 w-4" /> Sudah dibaca
        </span>
        <button
          type="button"
          onClick={() => {
            update((p) => ({
              ...p,
              readMaterials: p.readMaterials.filter((s) => s !== slug),
            }));
            setJustMarked(false);
          }}
          className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50"
        >
          Batalkan tanda
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => {
          update((p) => ({
            ...p,
            readMaterials: [...p.readMaterials, slug],
          }));
          setJustMarked(true);
        }}
        className="inline-flex items-center gap-2 rounded-full bg-coklat px-6 py-3 text-sm font-semibold text-white hover:bg-coklat-dark"
      >
        <BookOpen className="h-4 w-4" /> Tandai sudah dibaca
      </button>
      {justMarked ? (
        <span className="text-sm font-medium text-emerald-700">
          Tersimpan di browser kamu.
        </span>
      ) : null}
    </div>
  );
}
