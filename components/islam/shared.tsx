import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-2 leading-relaxed text-stone-600">{description}</p> : null}
    </div>
  );
}

export function GradientButton({
  href,
  children,
  variant = "coklat",
}: {
  href: string;
  children: ReactNode;
  variant?: "coklat" | "emas";
}) {
  const styles =
    variant === "emas"
      ? "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600"
      : "bg-gradient-to-r from-[#8b5e3c] to-[#a06b42] hover:from-[#6f4a2e] hover:to-[#8b5e3c]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition ${styles}`}
    >
      {children}
    </Link>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-5 text-center shadow-sm">
      <p className="text-3xl font-extrabold text-coklat">{value}</p>
      <p className="mt-1 text-sm text-stone-600">{label}</p>
    </div>
  );
}
