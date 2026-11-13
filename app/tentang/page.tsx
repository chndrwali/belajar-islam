import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/islam/shared";
import { ClearProgressButton } from "@/components/islam/clear-progress-button";

export const metadata: Metadata = {
  title: "Tentang | Belajar Islam",
  description:
    "Belajar Islam adalah web belajar agama dari nol untuk pemula: materi ringkas, kuis, tryout, doa, kisah nabi, jurnal, dan checklist amalan. Gratis, tanpa login, tanpa server.",
};

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title="Tentang Belajar Islam" />
      <div className="space-y-5 leading-relaxed text-stone-700">
        <p>
          Belajar Islam adalah web belajar agama dari nol, untuk siapa pun yang baru mulai —
          mualaf, remaja yang baru tertarik belajar agama, atau siapa saja yang ingin mengulang
          dasar-dasar Islam dengan tenang.
        </p>
        <p>
          Isinya: 15 materi ringkas dalam lima bagian (akidah, ibadah, Al-Quran, sirah, dan
          akhlak), kuis di tiap bagian, tryout 30 soal campuran, galeri doa sehari-hari, 99
          Asmaul Husna, kisah 25 nabi, jurnal refleksi Al-Quran, dan checklist amalan harian.
        </p>
        <p>
          Materi di sini adalah ringkasan belajar untuk pemula, bukan fatwa dan bukan rujukan
          hukum. Untuk pendalaman akidah dan hukum, rujuk Al-Quran, kitab, dan ustadz
          tepercaya. Kalau suatu angka atau jumlah tidak ditetapkan sumbernya, kami menulisnya
          apa adanya — tidak mengarang.
        </p>
        <p>
          Web ini gratis dan tanpa login. Tidak ada akun, tidak ada server yang menyimpan
          datamu. Semua progres — materi yang ditandai, skor kuis, riwayat tryout, jurnal, dan
          checklist — hanya tersimpan di browser kamu (localStorage). Ganti browser atau hapus
          data browser berarti progres hilang.
        </p>
        <p>
          Mulai dari mana saja. Satu materi sehari pun sudah cukup — yang penting konsisten.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/materi"
          className="inline-flex items-center rounded-full bg-coklat px-6 py-3 text-sm font-semibold text-white hover:bg-coklat-dark"
        >
          Mulai belajar
        </Link>
        <Link
          href="/privasi"
          className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-stone-50"
        >
          Kebijakan privasi
        </Link>
      </div>

      <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold">Hapus semua progres</h2>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">
          Menghapus seluruh progres belajar di browser ini: materi yang ditandai, skor kuis,
          riwayat tryout, jurnal, dan checklist. Tindakan ini tidak bisa dibatalkan.
        </p>
        <div className="mt-4">
          <ClearProgressButton />
        </div>
      </div>
    </div>
  );
}
