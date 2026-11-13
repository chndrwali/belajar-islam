import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Belajar Islam — Belajar Agama dari 0",
  description:
    "Belajar Islam dari nol: 15 materi ringkas, kuis per bagian, tryout 30 soal, galeri doa, 99 Asmaul Husna, kisah 25 nabi, jurnal refleksi, dan checklist amalan harian. Gratis, tanpa login, progres tersimpan di browser kamu.",
};

const NAV = [
  { href: "/materi", label: "Materi" },
  { href: "/kuis", label: "Kuis" },
  { href: "/tryout", label: "Tryout" },
  { href: "/doa", label: "Doa" },
  { href: "/kisah", label: "Kisah" },
  { href: "/jurnal", label: "Jurnal" },
  { href: "/checklist", label: "Checklist" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${amiri.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-stone-900">
        <header className="sticky top-0 z-40 border-b border-stone-200 bg-cream/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" className="text-xl font-extrabold tracking-tight">
              Belajar <span className="text-coklat">Islam</span>
            </Link>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-stone-600">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-coklat">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-relaxed text-stone-600">
            <p className="font-semibold text-stone-900">Belajar Islam — Belajar Agama dari 0</p>
            <p className="mt-2">
              Materi di situs ini adalah ringkasan belajar untuk pemula. Untuk pendalaman hukum
              dan akidah, rujuk Al-Quran, kitab, dan ustadz tepercaya. Semua progres tersimpan
              hanya di browser kamu — tanpa akun, tanpa server.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-medium">
              <Link href="/tentang" className="hover:text-coklat">Tentang</Link>
              <Link href="/privasi" className="hover:text-coklat">Privasi</Link>
              <Link href="/syarat" className="hover:text-coklat">Syarat</Link>
              <Link href="/asmaul-husna" className="hover:text-coklat">Asmaul Husna</Link>
              <Link href="/materi" className="hover:text-coklat">Materi</Link>
              <Link href="/tryout" className="hover:text-coklat">Tryout</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
