"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CHECKLIST_ITEMS } from "@/lib/islam/checklist";
import { useProgress } from "@/lib/islam/progress";
import { ProgressBar } from "@/components/islam/progress-bar";
import { ClearProgressButton } from "@/components/islam/clear-progress-button";

function todayKey(now: Date): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function ChecklistClient() {
  const { progress, update } = useProgress();
  // Tanggal dibaca setelah mount (useEffect) agar tidak dievaluasi saat prerender.
  const [today, setToday] = useState<string | null>(null);
  const [todayLabel, setTodayLabel] = useState("");

  useEffect(() => {
    const now = new Date();
    setToday(todayKey(now));
    setTodayLabel(
      now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  const checked = today ? (progress.checklist[today] ?? []) : [];
  const categories = [...new Set(CHECKLIST_ITEMS.map((item) => item.category))];

  function toggle(id: string) {
    if (!today) return;
    const key = today;
    update((p) => {
      const current = p.checklist[key] ?? [];
      const next = current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id];
      return { ...p, checklist: { ...p.checklist, [key]: next } };
    });
  }

  // Daftar item dirender selalu (statis) agar tampil di SSR; hanya status
  // centang dan label tanggal yang menunggu mount (pembacaan tanggal).
  return (
    <div>
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-stone-600">
          Hari ini:{" "}
          <span className="font-semibold text-stone-900">
            {todayLabel || "Memuat tanggal…"}
          </span>
        </p>
        <div className="mt-4">
          <ProgressBar
            value={checked.length}
            total={CHECKLIST_ITEMS.length}
            label="Amalan hari ini"
          />
        </div>
        <p className="mt-3 text-sm text-stone-600">
          Centangmu hanya berlaku untuk hari ini dan tersimpan di browser ini saja. Besok
          checklist kembali kosong.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-lg font-extrabold">{category}</h2>
            <div className="mt-3 space-y-3">
              {CHECKLIST_ITEMS.filter((item) => item.category === category).map((item) => {
                const done = checked.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-pressed={done}
                    className={`flex w-full items-center gap-3 rounded-3xl border p-4 text-left shadow-sm transition ${
                      done
                        ? "border-emerald-300 bg-emerald-50"
                        : "border-stone-200 bg-white hover:border-coklat"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                        done ? "border-emerald-500 bg-emerald-500 text-white" : "border-stone-300 bg-white"
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-5 w-5" /> : null}
                    </span>
                    <span>
                      <span className={`block font-semibold ${done ? "text-emerald-900 line-through" : ""}`}>
                        {item.title}
                      </span>
                      <span className="block text-sm text-stone-600">{item.detail}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold">Hapus semua progres</h2>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">
          Menghapus seluruh progres belajar di browser ini: materi yang ditandai, skor kuis,
          riwayat tryout, jurnal, dan checklist. Tindakan ini tidak bisa dibatalkan.
        </p>
        <div className="mt-4">
          <ClearProgressButton />
        </div>
      </div>
    </div>
  );
}
