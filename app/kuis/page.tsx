import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";
import { KuisList } from "@/components/islam/kuis-list";

export const metadata: Metadata = {
  title: "Kuis | Belajar Islam",
  description:
    "Lima kuis belajar Islam, satu per bagian: akidah, ibadah, Al-Quran, sirah, dan akhlak. Masing-masing 10 soal dengan penjelasan. Skor terbaikmu tersimpan di browser.",
};

export default function KuisPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Kuis"
        description="Satu kuis per bagian, masing-masing 10 soal. Jawab satu soal, langsung tahu benar atau salah beserta penjelasannya. Skor terbaik tiap kuis tersimpan di browser kamu."
      />
      <KuisList />
    </div>
  );
}
