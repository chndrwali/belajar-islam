import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, HeartHandshake, Lightbulb, Quote } from "lucide-react";
import { KISAH_NABI } from "@/lib/islam/kisah";

export function generateStaticParams() {
  return KISAH_NABI.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kisah = KISAH_NABI.find((k) => k.slug === slug);
  if (!kisah) return { title: "Kisah tidak ditemukan | Belajar Islam" };
  return { title: `${kisah.name} | Belajar Islam`, description: kisah.summary };
}

export default async function KisahDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kisah = KISAH_NABI.find((k) => k.slug === slug);
  if (!kisah) notFound();

  const idx = KISAH_NABI.findIndex((k) => k.slug === slug);
  const prev = idx > 0 ? KISAH_NABI[idx - 1] : undefined;
  const next = idx < KISAH_NABI.length - 1 ? KISAH_NABI[idx + 1] : undefined;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/kisah"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-coklat hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Semua kisah
      </Link>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{kisah.name}</h1>
        <span dir="rtl" className="font-arabic shrink-0 text-4xl text-coklat">
          {kisah.arabic}
        </span>
      </div>
      <p className="mt-3 text-lg leading-relaxed text-stone-600">{kisah.summary}</p>

      <div className="mt-8 space-y-4">
        {kisah.story.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-stone-700">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <HeartHandshake className="h-5 w-5 text-coklat" /> Cobaan
        </h2>
        <p className="mt-2 leading-relaxed text-stone-700">{kisah.trial}</p>
      </div>

      {kisah.prayer ? (
        <div className="mt-6 rounded-3xl border border-amber-200 bg-emas-soft p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Quote className="h-5 w-5 text-emas" /> Doa beliau
          </h2>
          <p className="mt-2 leading-relaxed text-stone-700">{kisah.prayer}</p>
        </div>
      ) : null}

      <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Lightbulb className="h-5 w-5 text-emas" /> Pelajaran
        </h2>
        <p className="mt-2 leading-relaxed text-stone-700">{kisah.lesson}</p>
      </div>

      <nav className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-6">
        {prev ? (
          <Link
            href={`/kisah/${prev.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold hover:border-coklat"
          >
            <ArrowLeft className="h-4 w-4" /> {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/kisah/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
          >
            {next.name} <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/kisah"
            className="inline-flex items-center gap-2 rounded-full bg-coklat px-5 py-2.5 text-sm font-semibold text-white hover:bg-coklat-dark"
          >
            Semua kisah <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
