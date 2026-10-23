import FlowerMark from "./FlowerMark";
import { NEXT_DAY_CUTOFF_LABEL } from "@/lib/placeholders";

export const DELIVERY_POINTS = [
  { title: "Belfast & surroundings", body: `Hand-delivered by our own florists across Belfast and the surrounding area. Next-day delivery when ordered before ${NEXT_DAY_CUTOFF_LABEL} (placeholder cut-off).` },
  { title: "Thoughtfully presented", body: "Every design arrives gift-wrapped with care instructions and your message handwritten on our card." },
];

export default function DeliveryInfo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-8 ${compact ? "" : "md:grid-cols-2 md:gap-12"}`}>
      {DELIVERY_POINTS.map((d) => (
        <div key={d.title} className={compact ? "flex gap-4" : "text-center"}>
          <FlowerMark className={`h-5 w-5 shrink-0 text-gold ${compact ? "mt-0.5" : "mx-auto"}`} />
          <div>
            <p className={`text-[12px] font-display font-semibold uppercase tracking-[0.08em] ${compact ? "" : "mt-4"}`}>{d.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
