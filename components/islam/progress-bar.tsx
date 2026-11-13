export function ProgressBar({
  value,
  total,
  label,
}: {
  value: number;
  total: number;
  label?: string;
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      {label ? (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-stone-700">{label}</span>
          <span className="font-semibold text-coklat">
            {value}/{total} ({pct}%)
          </span>
        </div>
      ) : null}
      <div
        className="h-3 w-full overflow-hidden rounded-full bg-stone-200"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#8b5e3c] to-amber-600 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
