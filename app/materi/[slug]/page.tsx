import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Lightbulb } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/islam/materials";
import { BookReader, type BookReaderPage } from "@/components/islam/book-reader";
import { MarkReadButton } from "@/components/islam/mark-read-button";

export function generateStaticParams() {
  return MATERIALS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const material = MATERIALS.find((m) => m.slug === slug);
  if (!material) return { title: "Materi tidak ditemukan | Belajar Islam" };
  return {
    title: `${material.title} | Belajar Islam`,
    description: material.short,
  };
}

export default async function MateriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = MATERIALS.find((m) => m.slug === slug);
  if (!material) notFound();

  const idx = MATERIALS.findIndex((m) => m.slug === slug);
  const prev = idx > 0 ? MATERIALS[idx - 1] : undefined;
  const next = idx < MATERIALS.length - 1 ? MATERIALS[idx + 1] : undefined;

  const sections = material.sections;
  const sources = material.sources;
  // Defensif: bila sections kosong (mis. data lama), jatuh ke tampilan keyPoints lama.
  const hasSections = Array.isArray(sections) && sections.length > 0;
  const readerPages: BookReaderPage[] = hasSections
    ? sections.map((s) => ({
        heading: s.heading,
        paragraphs: s.body,
      }))
    : [];
  const hasSources = Array.isArray(sources) && sources.length > 0;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/materi"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-coklat hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Semua materi
      </Link>

      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-emas">
        {SECTION_INFO[material.section].name}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {material.title}
      </h1>
      <p className="mt-3 leading-relaxed text-stone-600">{material.short}</p>
      <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-stone-500">
        <Clock className="h-4 w-4" /> Estimasi {material.estimatedMinutes} menit
      </p>

      {hasSections ? (
        <>
          <div className="mt-8">
            <BookReader key={material.slug} pages={readerPages} />
          </div>

          <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold">Ringkasan</h2>
            <ul className="mt-4 space-y-3">
              {material.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coklat-soft text-xs font-bold text-coklat">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold">Poin-poin materi</h2>
          <ul className="mt-4 space-y-3">
            {material.keyPoints.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coklat-soft text-xs font-bold text-coklat">
                  {i + 1}
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm sm:p-8">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Lightbulb className="h-5 w-5 text-emas" /> Contoh soal
        </h2>
        <p className="mt-3 leading-relaxed text-stone-700">{material.example}</p>
        <details className="mt-4">
          <summary className="cursor-pointer font-semibold text-coklat">
            Lihat jawaban
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">
            {material.exampleAnswer}
          </p>
        </details>
      </div>

      {hasSources ? (
        <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold">Sumber</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-stone-700 sm:text-base">
            {(sources as string[]).map((source, i) => (
              <li key={i}>{source}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8">
        <MarkReadButton slug={material.slug} />
      </div>

      <nav className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-6">
        {prev ? (
          <Link
            href={`/materi/${prev.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold hover:border-coklat"
          >
            <ArrowLeft className="h-4 w-4" /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/materi/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
          >
            {next.title} <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/kuis"
            className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
          >
            Lanjut ke kuis <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
