import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, MoonStar, Sparkles } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/islam/materials";
import { DOA_ENTRIES } from "@/lib/islam/doa";
import { KISAH_NABI } from "@/lib/islam/kisah";
import { FAQ_ITEMS } from "@/lib/islam/faq";
import type { SectionKey } from "@/lib/islam/types";
import { GradientButton, SectionHeading, StatCard } from "@/components/islam/shared";
import { HomeProgress } from "@/components/islam/home-progress";

export const metadata: Metadata = {
  title: "Belajar Islam — Belajar Agama dari 0",
  description:
    "Belajar Islam dari nol: 15 materi ringkas, kuis per bagian, tryout 30 soal, galeri doa, 99 Asmaul Husna, kisah 25 nabi, jurnal refleksi, dan checklist amalan harian. Gratis, tanpa login.",
};

const SECTION_ORDER: SectionKey[] = ["akidah", "ibadah", "quran", "sirah", "akhlak"];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const doaHighlight = DOA_ENTRIES.slice(0, 3);
  const kisahHighlight = KISAH_NABI.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="py-14 text-center sm:py-20">
        <p className="font-arabic text-3xl text-coklat" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Belajar Islam dari nol, pelan-pelan, sampai paham.
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-stone-600">
          Materi ringkas untuk pemula, kuis di tiap bagian, tryout campuran, galeri doa, kisah
          para nabi, dan jurnal refleksi. Gratis, tanpa login — progresmu tersimpan di browser
          kamu sendiri.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <GradientButton href="/materi">
            Mulai Belajar <ArrowRight className="h-4 w-4" />
          </GradientButton>
          <GradientButton href="/tryout" variant="emas">
            <Sparkles className="h-4 w-4" /> Coba Tryout
          </GradientButton>
        </div>
      </section>

      {/* Statistik */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard value="15" label="Materi ringkas" />
        <StatCard value="50" label="Soal kuis" />
        <StatCard value="30" label="Soal tryout" />
        <StatCard value="99" label="Asmaul Husna" />
      </section>

      {/* Progres */}
      <section className="mt-10">
        <HomeProgress />
      </section>

      {/* 5 bagian belajar */}
      <section className="mt-14">
        <SectionHeading
          title="Lima bagian belajar"
          description="Mulai dari akidah sebagai fondasi, lalu ibadah, Al-Quran, sirah, dan akhlak sehari-hari."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTION_ORDER.map((key) => {
            const count = MATERIALS.filter((m) => m.section === key).length;
            return (
              <Link
                key={key}
                href="/materi"
                className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-coklat hover:shadow-md"
              >
                <BookOpen className="h-6 w-6 text-coklat" />
                <h3 className="mt-3 text-lg font-bold group-hover:text-coklat">
                  {SECTION_INFO[key].name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {SECTION_INFO[key].description}
                </p>
                <p className="mt-3 text-sm font-semibold text-emas">{count} materi →</p>
              </Link>
            );
          })}
          <Link
            href="/asmaul-husna"
            className="group rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm transition hover:border-emas hover:shadow-md"
          >
            <MoonStar className="h-6 w-6 text-emas" />
            <h3 className="mt-3 text-lg font-bold group-hover:text-emas">Asmaul Husna</h3>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              99 nama Allah yang indah, beserta arti singkatnya. Bisa dicari per nama.
            </p>
            <p className="mt-3 text-sm font-semibold text-emas">99 nama →</p>
          </Link>
        </div>
      </section>

      {/* Daftar materi */}
      <section className="mt-14">
        <SectionHeading
          title="Daftar materi"
          description="15 materi ringkas — masing-masing bisa dibaca dalam 15 sampai 30 menit."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m) => (
            <Link
              key={m.slug}
              href={`/materi/${m.slug}`}
              className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-coklat hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-emas">
                {SECTION_INFO[m.section].name}
              </p>
              <h3 className="mt-2 font-bold leading-snug group-hover:text-coklat">{m.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{m.short}</p>
              <p className="mt-3 text-xs font-medium text-stone-500">
                {m.estimatedMinutes} menit
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sorotan Doa */}
      <section className="mt-14">
        <SectionHeading
          title="Doa sehari-hari"
          description="Doa yang dipakai setiap hari, lengkap dengan teks Arab, latin, dan artinya."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doaHighlight.map((doa) => (
            <Link
              key={doa.id}
              href="/doa"
              className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-coklat hover:shadow-md"
            >
              <h3 className="font-bold group-hover:text-coklat">{doa.title}</h3>
              <p dir="rtl" className="font-arabic mt-3 text-right text-xl leading-loose">
                {doa.arabic}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{doa.meaning}</p>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link href="/doa" className="font-semibold text-coklat hover:underline">
            Lihat semua doa →
          </Link>
        </div>
      </section>

      {/* Sorotan Kisah Nabi */}
      <section className="mt-14">
        <SectionHeading
          title="Kisah para nabi"
          description="25 kisah nabi dan rasul — cobaannya, doanya, dan pelajaran untuk hati."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kisahHighlight.map((kisah) => (
            <Link
              key={kisah.slug}
              href={`/kisah/${kisah.slug}`}
              className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-coklat hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-bold group-hover:text-coklat">{kisah.name}</h3>
                <span dir="rtl" className="font-arabic text-xl text-coklat">
                  {kisah.arabic}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{kisah.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link href="/kisah" className="font-semibold text-coklat hover:underline">
            Lihat semua kisah →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <SectionHeading title="Pertanyaan yang sering ditanyakan" />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer font-bold">{item.question}</summary>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
