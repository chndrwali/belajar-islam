import type { Metadata } from "next";
import Link from "next/link";
import { KISAH_NABI } from "@/lib/islam/kisah";
import { SectionHeading } from "@/components/islam/shared";

export const metadata: Metadata = {
  title: "Kisah Nabi | Belajar Islam",
  description:
    "25 kisah nabi dan rasul: cobaannya, doanya, dan pelajaran untuk hati. Diringkas dari Al-Quran.",
};

export default function KisahPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Kisah 25 Nabi & Rasul"
        description="Kisah para nabi bukan dongeng — tiap kisah membawa pelajaran tentang sabar, taat, dan kembali kepada Allah. Diringkas dari Al-Quran; bagian yang tidak diceritakan rinci tidak ditambah detail rekaan."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KISAH_NABI.map((kisah) => (
          <Link
            key={kisah.slug}
            href={`/kisah/${kisah.slug}`}
            className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-coklat hover:shadow-md"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="font-bold group-hover:text-coklat">{kisah.name}</h2>
              <span dir="rtl" className="font-arabic shrink-0 text-2xl text-coklat">
                {kisah.arabic}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{kisah.summary}</p>
            <p className="mt-3 text-sm font-semibold text-emas">Baca kisahnya →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
