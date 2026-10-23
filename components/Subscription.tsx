import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { SUBSCRIPTION_PLANS } from "@/lib/placeholders";

/** Florist's-choice flower subscription. Plans/prices are PLACEHOLDERS. CTA links to /contact until checkout supports subscriptions. */
export default function Subscription() {
  return (
    <section id="subscriptions" className="border-y border-line bg-stone py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="Florist's choice" title="Flower Subscriptions" />
        <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-relaxed text-muted">
          A seasonal hand-tied design, chosen by our florists and delivered on your rhythm. Pause, skip or cancel at any time.
        </p>
        <ul className="mx-auto mt-14 grid max-w-4xl gap-px bg-line md:grid-cols-3">
          {SUBSCRIPTION_PLANS.map((p) => (
            <li key={p.name} className="bg-white px-6 py-10 text-center">
              <h3 className="text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{p.name}</h3>
              <p className="mt-3 text-[13px] font-light text-gold-deep">{p.note}</p>
              <div className="mx-auto my-5 h-px w-8 bg-gold" />
              <p className="text-sm"><span className="text-muted">From</span> £{p.price} <span className="text-muted">per delivery</span></p>
            </li>
          ))}
        </ul>
        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-display font-semibold uppercase tracking-[0.08em] text-muted">
          <li>Seasonal stems</li><li>Free card message</li><li>Pause, skip or cancel any time</li>
        </ul>
        <div className="mt-12 text-center"><Link href="/contact" className="btn-dark">Start a subscription</Link></div>
        <p className="mt-6 text-center text-xs text-muted">Placeholder prices for the prototype.</p>
      </div>
    </section>
  );
}
