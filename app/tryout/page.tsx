import type { Metadata } from "next";
import { TRYOUT_QUESTIONS } from "@/lib/islam/tryout-questions";
import { TryoutRunner } from "@/components/islam/tryout-runner";

export const metadata: Metadata = {
  title: "Tryout | Belajar Islam",
  description:
    "Tryout 30 soal campuran dari kelima bagian belajar Islam, waktu 45 menit, hasil per bagian dan riwayat tersimpan di browser. Target 70% adalah target belajar mandiri, bukan passing grade resmi.",
};

export default function TryoutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <TryoutRunner questions={TRYOUT_QUESTIONS} />
    </div>
  );
}
