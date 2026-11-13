"use client";

import { useState } from "react";
import { BookOpenText, Trash2 } from "lucide-react";
import type { JournalEntry } from "@/lib/islam/types";
import { EXAMPLE_JOURNAL_ENTRY, useProgress } from "@/lib/islam/progress";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

function JournalCard({
  entry,
  isExample,
  onDelete,
}: {
  entry: JournalEntry;
  isExample?: boolean;
  onDelete?: () => void;
}) {
  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-bold">{entry.ayah}</h3>
        <span className="flex items-center gap-2 text-xs text-stone-500">
          {isExample ? (
            <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-800">
              Contoh
            </span>
          ) : null}
          {formatDate(entry.date)}
        </span>
      </div>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        <div>
          <dt className="font-semibold text-stone-900">Apa yang dijelaskan ayat ini</dt>
          <dd className="mt-0.5 text-stone-600">{entry.whatItSays}</dd>
        </div>
        <div>
          <dt className="font-semibold text-stone-900">Apa yang kurasakan</dt>
          <dd className="mt-0.5 text-stone-600">{entry.whatIFeel}</dd>
        </div>
        <div>
          <dt className="font-semibold text-stone-900">Pelajaran yang kuambil</dt>
          <dd className="mt-0.5 text-stone-600">{entry.lesson}</dd>
        </div>
      </dl>
      {onDelete ? (
        <button
          type="button"
          onClick={onDelete}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
        >
          <Trash2 className="h-3.5 w-3.5" /> Hapus entri ini
        </button>
      ) : null}
    </article>
  );
}

export function JurnalClient() {
  const { progress, update } = useProgress();
  const [ayah, setAyah] = useState("");
  const [whatItSays, setWhatItSays] = useState("");
  const [whatIFeel, setWhatIFeel] = useState("");
  const [lesson, setLesson] = useState("");
  const [saved, setSaved] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!ayah.trim() || !whatItSays.trim() || !whatIFeel.trim() || !lesson.trim()) return;
    const entry: JournalEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      date: new Date().toISOString(),
      ayah: ayah.trim(),
      whatItSays: whatItSays.trim(),
      whatIFeel: whatIFeel.trim(),
      lesson: lesson.trim(),
    };
    update((p) => ({ ...p, journal: [entry, ...p.journal] }));
    setAyah("");
    setWhatItSays("");
    setWhatIFeel("");
    setLesson("");
    setSaved(true);
  }

  const inputCls =
    "w-full rounded-2xl border border-stone-300 bg-white px-4 py-2.5 text-sm shadow-sm outline-none placeholder:text-stone-400 focus:border-coklat focus:ring-2 focus:ring-coklat/20";

  return (
    <div>
      <form
        onSubmit={submit}
        className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <BookOpenText className="h-5 w-5 text-coklat" /> Tulis refleksi baru
        </h2>
        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="jurnal-ayah" className="mb-1.5 block text-sm font-semibold">
              Ayat / surah
            </label>
            <input
              id="jurnal-ayah"
              value={ayah}
              onChange={(e) => setAyah(e.target.value)}
              placeholder="Contoh: QS Ibrahim: 7"
              className={inputCls}
              required
            />
          </div>
          <div>
            <label htmlFor="jurnal-isi" className="mb-1.5 block text-sm font-semibold">
              Apa yang dijelaskan ayat ini
            </label>
            <textarea
              id="jurnal-isi"
              value={whatItSays}
              onChange={(e) => setWhatItSays(e.target.value)}
              rows={3}
              placeholder="Tulis dengan kata-katamu sendiri apa yang kamu pahami dari ayat ini."
              className={inputCls}
              required
            />
          </div>
          <div>
            <label htmlFor="jurnal-rasa" className="mb-1.5 block text-sm font-semibold">
              Apa yang kurasakan
            </label>
            <textarea
              id="jurnal-rasa"
              value={whatIFeel}
              onChange={(e) => setWhatIFeel(e.target.value)}
              rows={3}
              placeholder="Apa yang ayat ini sentuh di hatimu hari ini?"
              className={inputCls}
              required
            />
          </div>
          <div>
            <label htmlFor="jurnal-pelajaran" className="mb-1.5 block text-sm font-semibold">
              Pelajaran yang kuambil
            </label>
            <textarea
              id="jurnal-pelajaran"
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
              rows={3}
              placeholder="Satu pelajaran yang ingin kamu bawa ke hari-hari berikutnya."
              className={inputCls}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 rounded-full bg-coklat px-6 py-3 text-sm font-semibold text-white hover:bg-coklat-dark"
        >
          Simpan ke jurnal
        </button>
        {saved ? (
          <p className="mt-3 text-sm font-medium text-emerald-700">
            Entri tersimpan di browser kamu.
          </p>
        ) : null}
        <p className="mt-3 text-xs leading-relaxed text-stone-500">
          Tulis pelajaran yang kamu ambil, bukan klaim soal maksud Allah atas kejadian pribadimu
          — misal jangan menulis “Allah pasti bermaksud…” tentang kejadian tertentu.
        </p>
      </form>

      <div className="mt-10">
        <h2 className="text-lg font-bold">Entri jurnalmu</h2>
        {progress.journal.length === 0 ? (
          <div className="mt-4">
            <p className="mb-4 text-sm leading-relaxed text-stone-600">
              Kamu belum menulis apa-apa. Di bawah ini satu entri contoh supaya kamu tahu
              bentuknya — ini bukan datamu, dan akan hilang begitu kamu menulis entri pertama.
            </p>
            <JournalCard entry={EXAMPLE_JOURNAL_ENTRY} isExample />
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {progress.journal.map((entry) => (
              <JournalCard
                key={entry.id}
                entry={entry}
                onDelete={() =>
                  update((p) => ({ ...p, journal: p.journal.filter((j) => j.id !== entry.id) }))
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
