"use client";

import { useState } from "react";
import { MoonStar } from "lucide-react";
import { DOA_CATEGORIES, DOA_ENTRIES, DZIKIR_SETELAH_SHALAT } from "@/lib/islam/doa";

export function DoaGallery() {
  const [category, setCategory] = useState("Semua");
  const filtered =
    category === "Semua"
      ? DOA_ENTRIES
      : DOA_ENTRIES.filter((d) => d.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["Semua", ...DOA_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              category === cat
                ? "border-coklat bg-coklat text-white"
                : "border-stone-300 bg-white text-stone-700 hover:border-coklat"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {filtered.map((doa) => (
          <article
            key={doa.id}
            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-bold">{doa.title}</h2>
              <span className="shrink-0 rounded-full bg-coklat-soft px-3 py-1 text-xs font-semibold text-coklat">
                {doa.category}
              </span>
            </div>
            <p dir="rtl" className="font-arabic mt-4 text-right text-2xl leading-loose text-stone-900">
              {doa.arabic}
            </p>
            <p className="mt-3 text-sm italic leading-relaxed text-stone-600">{doa.latin}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">{doa.meaning}</p>
            <p className="mt-4 text-xs leading-relaxed text-stone-500">
              <span className="font-semibold text-stone-700">Kapan dipakai:</span> {doa.whenToUse}
            </p>
            <p className="mt-1 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Sumber:</span> {doa.source}
            </p>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 text-stone-600">Tidak ada doa pada kategori ini.</p>
      ) : null}

      {/* Kartu khusus: Dzikir Setelah Shalat */}
      <section className="mt-10 rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2">
          <MoonStar className="h-6 w-6 text-emas" />
          <h2 className="text-xl font-extrabold">{DZIKIR_SETELAH_SHALAT.title}</h2>
        </div>
        <div className="mt-5 space-y-5">
          {DZIKIR_SETELAH_SHALAT.items.map((item) => (
            <div key={item.latin} className="border-t border-amber-200 pt-4 first:border-t-0 first:pt-0">
              <div className="flex items-baseline justify-between gap-3">
                <p dir="rtl" className="font-arabic text-2xl leading-relaxed">
                  {item.arabic}
                </p>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-emas">
                  {item.count}
                </span>
              </div>
              <p className="mt-1 text-sm italic text-stone-600">{item.latin}</p>
              <p className="mt-1 text-sm text-stone-700">{item.meaning}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-stone-700">
          {DZIKIR_SETELAH_SHALAT.note}
        </p>
      </section>
    </div>
  );
}
