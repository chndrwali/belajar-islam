import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";
import { DoaGallery } from "@/components/islam/doa-gallery";

export const metadata: Metadata = {
  title: "Doa & Dzikir | Belajar Islam",
  description:
    "Galeri doa sehari-hari: teks Arab, latin, arti, kapan dipakai, dan sumbernya. Termasuk dzikir setelah shalat.",
};

export default function DoaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Doa & Dzikir"
        description="Doa yang dipakai sehari-hari — dibaca sebelum makan, sebelum tidur, saat keluar rumah, saat belajar, dan lainnya. Tiap kartu memuat teks Arab, latin, arti, kapan dipakai, dan sumbernya."
      />
      <DoaGallery />
    </div>
  );
}
