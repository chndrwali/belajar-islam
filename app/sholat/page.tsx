import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  Heart,
  Info,
  Moon,
  Sun,
  Sunrise,
  Users,
  X,
} from "lucide-react";
import { SectionHeading } from "@/components/islam/shared";
import {
  JENAZAH_NOTES,
  JENAZAH_TAKBIR,
  MADZHAB_NOTE,
  PEMBATAL_SHOLAT,
  RAKAAT_WAJIB,
  SHOLAT_STEPS,
  SUNNAH_PRAYERS,
  SYARAT_SAH,
  type Bacaan,
  type SunnahPrayer,
} from "@/lib/islam/sholat";

export const metadata: Metadata = {
  title: "Sholat: Tata Cara, Bacaan & Sholat Sunnah | Belajar Islam",
  description:
    "Tata cara sholat wajib langkah demi langkah dengan gerakan dan bacaannya, jumlah rakaat lima waktu, syarat sah dan yang membatalkan, plus sholat Taubat, Duha, Tahajud, dan Jenazah.",
};

function BacaanCard({ bacaan }: { bacaan: Bacaan }) {
  return (
    <div className="mt-3 rounded-2xl border border-stone-200 bg-cream p-4">
      <p
        dir="rtl"
        className="font-arabic whitespace-pre-line text-right text-2xl leading-loose text-stone-900"
      >
        {bacaan.arabic}
      </p>
      <p className="mt-2 text-sm italic leading-relaxed text-stone-600">{bacaan.latin}</p>
      <p className="mt-1 text-sm leading-relaxed text-stone-700">{bacaan.meaning}</p>
    </div>
  );
}

function SunnahSection({ prayer, icon }: { prayer: SunnahPrayer; icon: React.ReactNode }) {
  return (
    <section id={prayer.id} className="mt-10 scroll-mt-24">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-xl font-extrabold sm:text-2xl">{prayer.title}</h3>
        </div>
        <p className="mt-3 leading-relaxed text-stone-700">{prayer.intro}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coklat-soft px-3 py-1.5 text-xs font-semibold text-coklat">
            <Clock className="h-3.5 w-3.5" /> {prayer.time}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emas-soft px-3 py-1.5 text-xs font-semibold text-emas">
            {prayer.rakaat}
          </span>
        </div>

        <h4 className="mt-6 font-bold">Niat</h4>
        <BacaanCard bacaan={prayer.niat} />
        <p className="mt-2 text-xs leading-relaxed text-stone-500">
          Niat ada di hati — lafaz di atas adalah bantuan belajar yang lazim dalam tradisi
          Syafi&apos;i, bukan bacaan yang wajib dilafalkan.
        </p>

        <h4 className="mt-6 font-bold">Cara mengerjakan</h4>
        <ul className="mt-3 space-y-2.5">
          {prayer.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coklat-soft text-coklat">
                <Check className="h-3.5 w-3.5" />
              </span>
              {point}
            </li>
          ))}
        </ul>

        {prayer.extraReadings.length > 0 ? (
          <>
            <h4 className="mt-6 font-bold">Bacaan setelah sholat</h4>
            {prayer.extraReadings.map((bacaan) => (
              <BacaanCard key={bacaan.latin} bacaan={bacaan} />
            ))}
          </>
        ) : null}

        <h4 className="mt-6 font-bold">Keutamaan & syarat</h4>
        <ul className="mt-3 space-y-2.5">
          {prayer.virtues.map((virtue) => (
            <li key={virtue} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emas-soft text-emas">
                <Heart className="h-3.5 w-3.5" />
              </span>
              {virtue}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SUNNAH_ICONS: Record<string, React.ReactNode> = {
  taubat: <Heart className="h-6 w-6 text-emas" />,
  duha: <Sunrise className="h-6 w-6 text-emas" />,
  tahajud: <Moon className="h-6 w-6 text-emas" />,
};

export default function SholatPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Sholat"
        description="Tata cara sholat wajib langkah demi langkah — gerakan dan bacaannya — plus sholat sunnah Taubat, Duha, Tahajud, dan Jenazah. Untuk gambaran besarnya, baca dulu materi Sholat di halaman Materi."
      />

      {/* Catatan madzhab + tautan materi terkait */}
      <div className="rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-stone-700 sm:text-base">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-emas" />
          {MADZHAB_NOTE}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/materi/shalat"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-coklat shadow-sm hover:underline"
          >
            <BookOpen className="h-4 w-4" /> Materi: Shalat
          </Link>
          <Link
            href="/materi/thaharah-wudhu"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-coklat shadow-sm hover:underline"
          >
            <BookOpen className="h-4 w-4" /> Materi: Thaharah & Wudhu
          </Link>
          <Link
            href="/materi/niat-shalat"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-coklat shadow-sm hover:underline"
          >
            <BookOpen className="h-4 w-4" /> Materi: Niat Shalat
          </Link>
        </div>
      </div>

      {/* Daftar isi */}
      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Daftar isi halaman Sholat">
        {[
          { href: "#tata-cara", label: "Tata Cara Sholat Wajib" },
          { href: "#taubat", label: "Sholat Taubat" },
          { href: "#duha", label: "Sholat Duha" },
          { href: "#tahajud", label: "Sholat Tahajud" },
          { href: "#jenazah", label: "Sholat Jenazah" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:border-coklat hover:text-coklat"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Rakaat 5 waktu */}
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Rakaat Sholat Lima Waktu
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {RAKAAT_WAJIB.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-stone-200 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-3xl font-extrabold text-coklat">{item.rakaat}</p>
              <p className="mt-1 font-bold">{item.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">{item.time}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Jumlah rakaat tiap waktu sudah ditetapkan dan tidak boleh diubah-ubah.
        </p>
      </section>

      {/* Bagian 1 — Tata cara sholat wajib */}
      <section id="tata-cara" className="mt-12 scroll-mt-24">
        <SectionHeading
          title="Tata Cara Sholat Wajib"
          description="Dua belas langkah berurutan, dari niat sampai salam. Tiap langkah memuat posisi tubuh dan bacaannya — Arab, latin, dan arti singkat."
        />
        <ol className="space-y-4">
          {SHOLAT_STEPS.map((step, i) => (
            <li
              key={step.name}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coklat text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold sm:text-xl">{step.name}</h3>
                  <p className="mt-2 leading-relaxed text-stone-700">{step.movement}</p>
                  {step.readings.map((bacaan) => (
                    <BacaanCard key={bacaan.latin} bacaan={bacaan} />
                  ))}
                  {step.note ? (
                    <p className="mt-3 rounded-2xl bg-emas-soft px-4 py-3 text-sm leading-relaxed text-stone-700">
                      {step.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Syarat sah + pembatal */}
      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-extrabold">Syarat Sah Sholat</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Lima hal ini harus dipenuhi sebelum sholat dimulai. Cara bersuci dibahas rinci di{" "}
            <Link href="/materi/thaharah-wudhu" className="font-semibold text-coklat hover:underline">
              materi Thaharah &amp; Wudhu
            </Link>
            .
          </p>
          <ul className="mt-4 space-y-2.5">
            {SYARAT_SAH.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coklat-soft text-coklat">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-extrabold">Yang Membatalkan Sholat</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Bila salah satu hal ini terjadi, sholat batal dan harus diulang dari awal setelah
            sebabnya diatasi.
          </p>
          <ul className="mt-4 space-y-2.5">
            {PEMBATAL_SHOLAT.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <X className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bagian 2–4 — Sholat sunnah */}
      <section className="mt-12">
        <SectionHeading
          title="Sholat Sunnah"
          description="Tiga sholat sunnah yang paling sering ditanyakan pemula: Taubat, Duha, dan Tahajud. Gerakan dan bacaan dasarnya sama seperti sholat wajib."
        />
        {SUNNAH_PRAYERS.map((prayer) => (
          <SunnahSection
            key={prayer.id}
            prayer={prayer}
            icon={SUNNAH_ICONS[prayer.id] ?? <Sun className="h-6 w-6 text-emas" />}
          />
        ))}
      </section>

      {/* Bagian 5 — Sholat jenazah */}
      <section id="jenazah" className="mt-12 scroll-mt-24">
        <SectionHeading
          title="Sholat Jenazah"
          description="Sholat untuk jenazah seorang muslim: 4 kali takbir, tanpa ruku dan tanpa sujud."
        />
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <ol className="space-y-4">
            {JENAZAH_TAKBIR.map((takbir) => (
              <li key={takbir.no} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coklat text-lg font-extrabold text-white">
                  {takbir.no}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold">{takbir.title}</h3>
                  <BacaanCard bacaan={takbir.reading} />
                  {takbir.note ? (
                    <p className="mt-3 rounded-2xl bg-emas-soft px-4 py-3 text-sm leading-relaxed text-stone-700">
                      {takbir.note}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <ul className="mt-6 space-y-2.5 border-t border-stone-200 pt-5">
            {JENAZAH_NOTES.map((note) => (
              <li key={note} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coklat-soft text-coklat">
                  <Users className="h-3.5 w-3.5" />
                </span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Penutup */}
      <section className="mt-10 rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-extrabold">Setelah Sholat</h2>
        <p className="mt-2 leading-relaxed text-stone-700">
          Setelah salam, disunnahkan berdzikir dan berdoa. Kumpulan dzikir setelah sholat ada di
          halaman Doa &amp; Dzikir.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/doa"
            className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
          >
            Dzikir setelah sholat <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/materi/shalat"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold hover:border-coklat"
          >
            Kembali ke materi Shalat <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
