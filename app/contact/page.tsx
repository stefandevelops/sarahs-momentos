import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="container-x grid gap-16 py-16 md:grid-cols-[1fr_1.4fr] md:gap-24 md:py-24">
      <div>
        <p className="kicker text-gold-deep">We&rsquo;d love to hear from you</p>
        <h1 className="h-display mt-2 text-2xl md:text-4xl">Contact</h1>
        <div className="mt-6 h-px w-10 bg-gold" />
        <dl className="mt-10 space-y-7 text-sm">
          <div><dt className="label">Email</dt><dd><a className="link-u" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
          <div><dt className="label">Instagram</dt><dd><a className="link-u" href={SITE.instagram.url} target="_blank" rel="noreferrer">{SITE.instagram.handle}</a></dd></div>
          <div><dt className="label">Facebook</dt><dd><a className="link-u" href={SITE.facebook.url} target="_blank" rel="noreferrer">{SITE.facebook.name}</a></dd></div>
          <div><dt className="label">Web</dt><dd>{SITE.domain}</dd></div>
          <div><dt className="label">Delivery area</dt><dd className="text-muted">Belfast and the surrounding area, hand-delivered by our own florists.</dd></div>
        </dl>
      </div>
      <div><EnquiryForm variant="contact" /></div>
    </section>
  );
}
