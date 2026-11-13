import type { Metadata } from "next";
import { SectionHeading } from "@/components/islam/shared";
import { AsmaulHusnaList } from "@/components/islam/asmaul-husna-list";

export const metadata: Metadata = {
  title: "Asmaul Husna | Belajar Islam",
  description:
    "99 nama Allah yang indah (Asmaul Husna) beserta arti singkatnya. Cari berdasarkan nama atau arti.",
};

export default function AsmaulHusnaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        title="Asmaul Husna"
        description="99 nama Allah yang indah. Tiap nama menggambarkan sifat-Nya — mengenal nama-Nya adalah jalan mengenal Allah."
      />
      <AsmaulHusnaList />
    </div>
  );
}
