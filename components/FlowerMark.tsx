/** Minimal geometric flower mark (five petals) in brand gold. */
export default function FlowerMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="12" cy="6.6" rx="3.1" ry="5" transform={`rotate(${r} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
