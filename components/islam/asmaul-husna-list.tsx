"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { ASMAUL_HUSNA } from "@/lib/islam/asmaul-husna";

export function AsmaulHusnaList() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered =
    q === ""
      ? ASMAUL_HUSNA
      : ASMAUL_HUSNA.filter(
          (item) =>
            item.latin.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q),
        );

  return (
    <div>
      <div className="relative mx-auto max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama atau arti, misal Pengasih…"
          aria-label="Cari Asmaul Husna"
          className="w-full rounded-full border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none placeholder:text-stone-400 focus:border-coklat focus:ring-2 focus:ring-coklat/20"
        />
      </div>
      <p className="mt-4 text-center text-sm text-stone-500">
        Menampilkan {filtered.length} dari {ASMAUL_HUSNA.length} nama.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.no}
            className="rounded-3xl border border-stone-200 bg-white p-5 text-center shadow-sm"
          >
            <p className="text-xs font-bold tracking-wide text-stone-400">No. {item.no}</p>
            <p dir="rtl" className="font-arabic mt-2 text-3xl leading-relaxed">
              {item.arabic}
            </p>
            <p className="mt-2 font-bold text-coklat">{item.latin}</p>
            <p className="mt-1 text-sm text-stone-600">{item.meaning}</p>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-stone-600">
          Tidak ada nama yang cocok dengan “{query}”. Coba kata lain.
        </p>
      ) : null}
    </div>
  );
}
