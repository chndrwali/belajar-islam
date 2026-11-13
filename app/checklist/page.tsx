import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";
import { ChecklistClient } from "@/components/islam/checklist-client";

export const metadata: Metadata = {
  title: "Checklist Amalan Harian | Belajar Islam",
  description:
    "Checklist amalan harian: 5 shalat wajib, dzikir pagi dan petang, dzikir setelah shalat, doa untuk orang tua, dan baca Al-Quran. Centang per hari, tersimpan di browser kamu.",
};

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading
        title="Checklist Amalan Harian"
        description="Sembilan amalan sederhana untuk hari ini. Centang yang sudah kamu kerjakan — besok checklist kembali kosong dan kamu mulai lagi dari awal."
      />
      <ChecklistClient />
    </div>
  );
}
