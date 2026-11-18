import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Heart, Info, Moon, Repeat, ScrollText } from "lucide-react";
import { SectionHeading } from "@/components/islam/shared";
import {
  RATIB_COUNT_NOTE,
  RATIB_INTRO,
  RATIB_SECTIONS,
  RATIB_VIRTUES,
  RATIB_VIRTUES_NOTE,
  type RatibSection,
} from "@/lib/islam/ratib";

export const metadata: Metadata = {
  title: "Ratib al-Haddad: Wirid Harian Lengkap Arab, Latin & Arti | Belajar Islam",
  description:
    "Ratib al-Haddad lengkap 34 bagian: teks Arab, latin, arti, dan jumlah bacaan. Wirid harian dari al-Habib Abdullah bin Alwi al-Haddad, biasa dibaca setelah Isya atau Subuh.",
};

function RatibCard({ section }: { section: RatibSection }) {
  return (
    <section
      id={`bagian-${section.no}`}
      className="scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coklat-soft text-sm font-extrabold text-coklat">
            {section.no}
          </span>
          <h3 className="text-lg font-extrabold leading-snug sm:text-xl">{section.title}</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emas-soft px-3 py-1.5 text-xs font-semibold text-emas">
          <Repeat className="h-3.5 w-3.5" /> Dibaca {section.count}
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-stone-200 bg-cream p-4">
        <p
          dir="rtl"
          className="font-arabic whitespace-pre-line text-right text-2xl leading-loose text-stone-900"
        >
          {section.arabic}
        </p>
        <p className="mt-3 whitespace-pre-line text-sm italic leading-relaxed text-stone-600">
          {section.latin}
        </p>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-700">
          {section.meaning}
        </p>
      </div>

      {section.note ? (
        <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-stone-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-coklat" />
          {section.note}
        </p>
      ) : null}
      {section.countNote ? (
        <p className="mt-2 text-xs leading-relaxed text-stone-500">{section.countNote}</p>
      ) : null}
    </section>
  );
}

export default function RatibPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Ratib al-Haddad"
        description="Wirid harian yang disusun al-Habib Abdullah bin Alwi al-Haddad — 34 bagian, lengkap dengan teks Arab, latin, arti, dan jumlah bacaan. Biasa dibaca berjamaah setelah shalat Isya atau Subuh."
      />

      {/* Pengantar */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-coklat" />
          <h2 className="text-xl font-extrabold">Tentang ratib ini</h2>
        </div>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed text-stone-700 sm:text-base">
          <div>
            <dt className="font-bold text-stone-900">Penyusun</dt>
            <dd>{RATIB_INTRO.author}.</dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900">Sejarah singkat</dt>
            <dd>{RATIB_INTRO.history}</dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900">Kapan dibaca</dt>
            <dd>{RATIB_INTRO.when}</dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900">Sebelum membaca</dt>
            <dd>{RATIB_INTRO.note}</dd>
          </div>
        </dl>
        <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-stone-600">
          <Moon className="mt-0.5 h-4 w-4 shrink-0 text-emas" />
          {RATIB_COUNT_NOTE}
        </p>
      </div>

      {/* Daftar isi */}
      <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2">
          <ScrollText className="h-5 w-5 text-coklat" />
          <h2 className="text-xl font-extrabold">Daftar isi — 34 bagian</h2>
        </div>
        <ol className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {RATIB_SECTIONS.map((section) => (
            <li key={section.no} className="text-sm leading-relaxed">
              <a
                href={`#bagian-${section.no}`}
                className="font-medium text-stone-700 hover:text-coklat hover:underline"
              >
                {section.no}. {section.title}
              </a>
              <span className="ml-2 text-xs font-semibold text-emas">{section.count}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 34 bagian */}
      <div className="mt-8 space-y-6">
        {RATIB_SECTIONS.map((section) => (
          <RatibCard key={section.no} section={section} />
        ))}
      </div>

      {/* Keutamaan */}
      <section className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-emas" />
          <h2 className="text-xl font-extrabold">Keutamaan (menurut sumber)</h2>
        </div>
        <ul className="mt-4 space-y-2.5">
          {RATIB_VIRTUES.map((virtue) => (
            <li
              key={virtue}
              className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emas-soft text-emas">
                <Heart className="h-3.5 w-3.5" />
              </span>
              {virtue}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-stone-500">{RATIB_VIRTUES_NOTE}</p>
      </section>

      {/* Sumber & catatan */}
      <section className="mt-10 rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-extrabold">Sumber & catatan</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
          <li>
            Teks Arab mengikuti{" "}
            <a
              href="https://www.penjaganu.com/2020/03/bacaan-ratib-al-haddad-sejarah-khasiat.html"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-coklat hover:underline"
            >
              penjaganu.com (Penjaga Tradisi)
            </a>{" "}
            — dengan pembanding{" "}
            <a
              href="https://quran.nuwajak.or.id/wirid-doa?tab=wirid&koleksi=ratib-al-haddad-tebuireng"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-coklat hover:underline"
            >
              quran.nuwajak.or.id (PCNU Wajak)
            </a>
            , yang memuat versi lebih pendek (16 bagian, tanpa tawassul penutup dan doa
            penutup). Rujukan kitab yang dikutip sumber:{" "}
            <em>Dzakhirah al-Ma&apos;ad bi Syarhi Ratib al-Haddad</em> (hal. 45) dan{" "}
            <em>al-Imdad bi Syarhi Ratib al-Haddad</em> (hal. 55).
          </li>
          <li>
            Teks Arab hanya dibersihkan dari artefak cetak (tanda tatwil, tanda waqaf, dan
            karakter nyasar) tanpa mengubah lafaz. Penanda jumlah di akhir bacaan dipindah
            ke badge &ldquo;Dibaca&rdquo; di tiap bagian.
          </li>
          <li>
            Latin dan arti ditulis ulang dengan ejaan standar oleh tim Belajar Islam — bukan
            kutipan dari sumber (Latin sumber memakai ejaan Jawa dan mengandung typo).
          </li>
          <li>
            Surah Al-Fatihah memakai teks yang sama dengan halaman Sholat di situs ini.
          </li>
        </ul>
        <p className="mt-5">
          <Link href="/doa" className="font-semibold text-coklat hover:underline">
            ← Kembali ke galeri Doa & Dzikir
          </Link>
        </p>
      </section>
    </div>
  );
}
