"use client";

import Link from "next/link";
import { BookOpen, CheckCircle2, Clock } from "lucide-react";
import type { SectionKey } from "@/lib/islam/types";
import { MATERIALS, SECTION_INFO } from "@/lib/islam/materials";
import { useProgress } from "@/lib/islam/progress";

const SECTION_ORDER: SectionKey[] = ["akidah", "ibadah", "quran", "sirah", "akhlak"];

export function MateriList() {
  const { progress } = useProgress();

  return (
    <div className="space-y-10">
      {SECTION_ORDER.map((key) => {
        const items = MATERIALS.filter((m) => m.section === key);
        if (items.length === 0) return null;
        return (
          <section key={key}>
            <h2 className="text-xl font-extrabold">{SECTION_INFO[key].name}</h2>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              {SECTION_INFO[key].description}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((m) => {
                const read = progress.readMaterials.includes(m.slug);
                return (
                  <Link
                    key={m.slug}
                    href={`/materi/${m.slug}`}
                    className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-coklat hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <BookOpen className="h-5 w-5 shrink-0 text-coklat" />
                      {read ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Sudah dibaca
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-bold leading-snug group-hover:text-coklat">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">{m.short}</p>
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-stone-500">
                      <Clock className="h-3.5 w-3.5" /> {m.estimatedMinutes} menit
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
