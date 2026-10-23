import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = { title: "Weddings & Events" };

const OFFER = [
  { t: "Weddings", d: "Bridal bouquets, buttonholes, ceremony arches and reception tables, designed around you." },
  { t: "Christenings & Communions", d: "Soft, delicate florals for church, home and celebration." },
  { t: "Private Events", d: "Birthdays, anniversaries and dinners — from a single centrepiece to a full venue dressing." },
  { t: "Corporate", d: "Reception displays, launches and client gifting for brands across Belfast." },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        image="/images/weddings.jpg"
        eyebrow="Bespoke floral design"
        title="Weddings & Events"
        intro="From an intimate ceremony to a grand celebration, we design every element with the care of a couture atelier — consultation, design, installation and clearance."
      />
      <section className="container-x">
        <div className="grid gap-px border-y border-line bg-line md:grid-cols-4">
        {OFFER.map((o) => (
          <div key={o.t} className="bg-white px-6 py-10 text-center">
            <p className="text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{o.t}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{o.d}</p>
          </div>
        ))}
        </div>
      </section>
      <section className="container-x grid gap-12 py-24 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-[4/5] bg-stone">
          <Image src="/images/couture-white.jpg" alt="Ivory orchid and calla lily arrangement" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="kicker text-gold-deep">Begin the conversation</p>
          <h2 className="h-display mt-2 text-2xl">Make an Enquiry</h2>
          <div className="mt-5 h-px w-10 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-muted">Tell us a little about your day and we&rsquo;ll be in touch to arrange a consultation.</p>
          <div className="mt-10"><EnquiryForm variant="wedding" /></div>
        </div>
      </section>
    </>
  );
}
