import FlowerMark from "./FlowerMark";
import { TRUST_POINTS } from "@/lib/placeholders";

/** Three short reassurance points shown directly under the hero. Values are PLACEHOLDERS (lib/placeholders.ts). */
export default function TrustStrip() {
  return (
    <section aria-label="Why order from us" className="border-b border-line bg-stone">
      <ul className="container-x grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {TRUST_POINTS.map((t) => (
          <li key={t.title} className="flex items-center justify-center gap-4 py-5 text-center md:py-6">
            <FlowerMark className="h-4 w-4 shrink-0 text-gold" />
            <p>
              <span className="text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{t.title}</span>
              <span className="ml-2 text-[13px] font-light text-muted">{t.body}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
