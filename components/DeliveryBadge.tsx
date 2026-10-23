import { PRODUCT_BANNER } from "@/lib/placeholders";

/** Neill Strain-style delivery banner, overlaid on product photos. */
export default function DeliveryBadge({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-1.5 bg-ink font-display font-semibold uppercase tracking-[0.08em] text-[#f9f9f9] ${
      size === "lg" ? "py-2.5 text-[11px] md:text-[12px]" : "py-2 text-[9px] md:text-[10px]"}`}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
      {PRODUCT_BANNER}
    </span>
  );
}
