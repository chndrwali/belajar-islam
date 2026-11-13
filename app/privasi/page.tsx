import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/islam/shared";

export const metadata: Metadata = {
  title: "Privasi | Belajar Islam",
  description:
    "Kebijakan privasi Belajar Islam: tanpa akun, tanpa server, semua data hanya tersimpan di browser kamu (localStorage) dan bisa dihapus kapan saja.",
};

export default function PrivasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title="Kebijakan Privasi" />
      <div className="space-y-5 leading-relaxed text-stone-700">
        <p>
          <strong className="text-stone-900">Tanpa akun, tanpa server.</strong> Belajar Islam
          tidak meminta kamu membuat akun, login, atau mengisi data pribadi apa pun. Tidak ada
          data yang dikirim ke server — karena memang tidak ada server yang menyimpan datamu.
        </p>
        <p>
          <strong className="text-stone-900">Semua data hanya di browser kamu.</strong>{" "}
          Progres belajar — materi yang ditandai sudah dibaca, skor kuis terbaik, riwayat
          tryout, entri jurnal, dan checklist harian — disimpan di localStorage browser di
          perangkatmu sendiri, dengan kunci{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
            belajar-islam-progress-v1
          </code>
          . Data itu tidak pernah keluar dari perangkatmu.
        </p>
        <p>
          <strong className="text-stone-900">Kamu bisa menghapusnya kapan saja.</strong>{" "}
          Pakai tombol “Hapus semua progres” di halaman{" "}
          <Link href="/tentang" className="font-semibold text-coklat hover:underline">
            Tentang
          </Link>{" "}
          atau{" "}
          <Link href="/checklist" className="font-semibold text-coklat hover:underline">
            Checklist
          </Link>
          . Menghapus data browser atau memakai browser lain juga akan menghilangkan progres,
          karena progres memang hanya hidup di satu browser.
        </p>
        <p>
          <strong className="text-stone-900">Tidak ada pelacak pihak ketiga.</strong> Situs ini
          tidak memakai iklan, analitik, atau pelacak yang mengirim perilakumu ke pihak lain.
        </p>
        <p className="text-sm text-stone-500">
          Terakhir diperbarui: November 2026.
        </p>
      </div>
    </div>
  );
}
