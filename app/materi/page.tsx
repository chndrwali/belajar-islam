import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";
import { MateriList } from "@/components/islam/materi-list";
import { HomeProgress } from "@/components/islam/home-progress";

export const metadata: Metadata = {
  title: "Materi | Belajar Islam",
  description:
    "15 materi ringkas belajar Islam dari nol: akidah, ibadah, Al-Quran, sirah, dan akhlak. Tandai materi yang sudah dibaca dan lanjutkan dari mana pun kamu berhenti.",
};

export default function MateriPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Materi belajar"
        description="15 materi ringkas untuk pemula — baca satu per satu, pelan-pelan. Materi yang sudah kamu baca ditandai dan tersimpan di browser ini."
      />
      <div className="mb-10">
        <HomeProgress />
      </div>
      <MateriList />
    </div>
  );
}
