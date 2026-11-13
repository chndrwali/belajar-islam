import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";

export const metadata: Metadata = {
  title: "Syarat Penggunaan | Belajar Islam",
  description:
    "Syarat penggunaan Belajar Islam: materi ringkasan belajar untuk pemula, bukan fatwa atau rujukan hukum.",
};

export default function SyaratPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title="Syarat Penggunaan" />
      <div className="space-y-5 leading-relaxed text-stone-700">
        <p>
          <strong className="text-stone-900">Materi ringkasan, bukan fatwa.</strong> Semua
          materi di Belajar Islam adalah ringkasan belajar untuk pemula. Materi ini bukan fatwa,
          bukan rujukan hukum, dan tidak menggantikan bimbingan ustadz atau ulama. Untuk
          pendalaman hukum dan akidah, rujuk Al-Quran, kitab, dan ustadz tepercaya.
        </p>
        <p>
          <strong className="text-stone-900">Gunakan dengan bijak.</strong> Kuis dan tryout di
          sini adalah alat belajar mandiri. Target 70% pada tryout adalah target belajar
          mandiri yang kami tetapkan sendiri — bukan passing grade resmi dari lembaga mana
          pun, dan tidak menyatakan siapa pun “lulus” atau “tidak lulus” dalam agama.
        </p>
        <p>
          <strong className="text-stone-900">Koreksi dipersilakan.</strong> Kalau kamu menemukan
          kesalahan isi — ayat, hadits, atau penjelasan — kami berterima kasih bila kamu
          memberitahukannya beserta sumber yang benar, agar bisa diperbaiki.
        </p>
        <p>
          <strong className="text-stone-900">Progres ada di perangkatmu.</strong> Progres
          belajar tersimpan hanya di browser kamu (localStorage). Kami tidak bertanggung jawab
          atas hilangnya progres karena ganti browser, hapus data browser, atau kerusakan
          perangkat.
        </p>
        <p className="text-sm text-stone-500">
          Terakhir diperbarui: November 2026.
        </p>
      </div>
    </div>
  );
}
