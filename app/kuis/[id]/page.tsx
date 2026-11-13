import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { QUIZ_META, QUIZ_QUESTIONS } from "@/lib/islam/quiz-questions";
import { QuizRunner } from "@/components/islam/quiz-runner";

export function generateStaticParams() {
  return QUIZ_META.map((meta) => ({ id: meta.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = QUIZ_META.find((m) => m.id === id);
  if (!meta) return { title: "Kuis tidak ditemukan | Belajar Islam" };
  return { title: `${meta.title} | Belajar Islam`, description: meta.description };
}

export default async function KuisDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meta = QUIZ_META.find((m) => m.id === id);
  if (!meta) notFound();

  const questions = QUIZ_QUESTIONS.filter((q) => q.section === meta.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/kuis"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-coklat hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Semua kuis
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight">{meta.title}</h1>
      <p className="mt-2 leading-relaxed text-stone-600">{meta.description}</p>
      <p className="mt-2 text-sm font-medium text-stone-500">
        {questions.length} soal · 4 pilihan jawaban · penjelasan setelah tiap jawaban
      </p>
      <div className="mt-8">
        <QuizRunner quizId={meta.id} title={meta.title} questions={questions} />
      </div>
    </div>
  );
}
