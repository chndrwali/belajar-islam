import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";
import { JurnalClient } from "@/components/islam/jurnal-client";

export const metadata: Metadata = {
  title: "Jurnal Refleksi | Belajar Islam",
  description:
    "Jurnal refleksi Al-Quran: baca ayat dan terjemahannya, lalu tulis apa yang kamu pahami, rasakan, dan pelajaran yang kamu ambil. Tersimpan hanya di browser kamu.",
};

export default function JurnalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading
        title="Jurnal refleksi Al-Quran"
        description="Baca ayat dan terjemahannya, lalu tulis apa yang kamu pahami dan rasakan. Jurnalmu tersimpan hanya di browser ini — tidak ada yang membacanya selain kamu."
      />
      <JurnalClient />
    </div>
  );
}
