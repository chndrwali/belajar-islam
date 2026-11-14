"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BookOpenText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  List,
} from "lucide-react";

export interface BookReaderPage {
  heading?: string;
  paragraphs: string[];
}

interface BookReaderProps {
  pages: BookReaderPage[];
}

/**
 * BookReader — menampilkan daftar halaman satu per layar, seperti membaca buku.
 *
 * - Indikator "Halaman X dari Y" + progress bar.
 * - Tombol Sebelumnya/Berikutnya besar (full-width di mobile) + keyboard panah kiri/kanan.
 * - Toggle "Lihat semua" untuk mode baca penuh (semua halaman sekaligus).
 * - Penanda selesai di halaman terakhir.
 * - Komponen ini TIDAK menulis apa pun ke localStorage: menandai sudah dibaca
 *   tetap tugas tombol manual (MarkReadButton) di halaman.
 */
export function BookReader({ pages }: BookReaderProps) {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const total = pages.length;
  const isLast = index === total - 1;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);
  const goNext = useCallback(() => {
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  // Keyboard: panah kiri/kanan hanya aktif dalam mode per halaman.
  useEffect(() => {
    if (showAll || total <= 1) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showAll, total, goPrev, goNext]);

  if (total === 0) return null;

  const renderPage = (page: BookReaderPage, key: string | number) => (
    <article key={key}>
      {page.heading ? (
        <h3 className="text-lg font-bold text-coklat">{page.heading}</h3>
      ) : null}
      <div className={page.heading ? "mt-3 space-y-4" : "space-y-4"}>
        {page.paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-stone-700">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );

  const completionNote = (
    <p className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700">
      <CheckCircle2 className="h-5 w-5 shrink-0" />
      Kamu sudah sampai di akhir bacaan.
    </p>
  );

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-bold text-stone-700" aria-live="polite">
          {showAll
            ? `Semua halaman (${total} halaman)`
            : `Halaman ${index + 1} dari ${total}`}
        </p>
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:border-coklat hover:text-coklat"
        >
          {showAll ? (
            <>
              <BookOpenText className="h-4 w-4" /> Baca per halaman
            </>
          ) : (
            <>
              <List className="h-4 w-4" /> Lihat semua
            </>
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200"
        role="progressbar"
        aria-valuenow={showAll ? total : index + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label="Kemajuan membaca"
      >
        <div
          className="h-full rounded-full bg-emas transition-all duration-300"
          style={{ width: `${((showAll ? total : index + 1) / total) * 100}%` }}
        />
      </div>

      {showAll ? (
        <div className="mt-6 space-y-8">
          {pages.map((page, i) => renderPage(page, i))}
          {completionNote}
        </div>
      ) : (
        <div className="mt-6">
          {renderPage(pages[index], index)}
          {isLast ? completionNote : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={goPrev}
              disabled={index === 0}
              aria-label="Halaman sebelumnya"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-base font-semibold text-stone-700 hover:border-coklat hover:text-coklat disabled:cursor-not-allowed disabled:opacity-40 sm:flex-1"
            >
              <ChevronLeft className="h-5 w-5" /> Sebelumnya
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Halaman berikutnya"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coklat px-6 py-3.5 text-base font-semibold text-white hover:bg-coklat-dark disabled:cursor-not-allowed disabled:opacity-40 sm:flex-1"
            >
              Berikutnya <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-3 hidden text-center text-xs text-stone-400 sm:block">
            Tip: gunakan tombol panah kiri / kanan di keyboard untuk berpindah halaman.
          </p>
        </div>
      )}
    </div>
  );
}
