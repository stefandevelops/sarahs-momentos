import PostcodeChecker from "./PostcodeChecker";
import SectionTitle from "./SectionTitle";
import { formatPrice } from "@/lib/delivery";
import { DELIVERY_ZONES, NEXT_DAY_CUTOFF_LABEL } from "@/lib/placeholders";

/** "Do we deliver to you?" — postcode checker + zone cards. Zones/prices are PLACEHOLDERS. */
export default function DeliveryZones() {
  return (
    <section id="delivery" className="container-x scroll-mt-24 py-20 md:py-28">
      <SectionTitle eyebrow="Delivery" title="Do we deliver to you?" />
      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-muted">
        Enter a postcode to see your delivery zone, price and earliest delivery date. Order by {NEXT_DAY_CUTOFF_LABEL} for next-day delivery.
      </p>
      <div className="mt-10"><PostcodeChecker /></div>

      <ul className="mt-16 grid gap-px bg-line sm:grid-cols-2">
        {DELIVERY_ZONES.map((z) => (
          <li key={z.id} className="flex flex-col bg-white px-6 py-8 text-center">
            <h3 className="text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{z.name}</h3>
            <p className="mt-2 text-[13px] font-light text-gold-deep">{z.areas}</p>
            <div className="mx-auto my-5 h-px w-8 bg-gold" />
            <p className="text-sm">{formatPrice(z.price)}{z.freeOver !== null && <span className="text-muted"> · free over £{z.freeOver}</span>}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{z.deliveredBy}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-muted">Placeholder zones and prices for the prototype.</p>
    </section>
  );
}
