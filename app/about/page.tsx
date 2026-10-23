import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-16 text-center md:py-24">
        <p className="kicker text-gold-deep">{SITE.tagline}</p>
        <h1 className="h-display mt-3 text-2xl md:text-4xl">The House of Sarah&rsquo;s Momentos</h1>
        <div className="mx-auto mt-6 h-px w-10 bg-gold" />
      </section>
      <section className="bg-ink text-white">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[600px]">
            <Image src="/images/atelier.jpg" alt="Hand-tying a bouquet in the studio" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover grayscale" />
          </div>
          <div className="flex items-center px-6 py-16 md:px-20">
            <div className="max-w-md space-y-5 leading-relaxed text-white/80">
              <p className="eyebrow text-gold">Our philosophy</p>
              <p>We believe flowers are the most personal of gifts — a way of saying what words cannot. Every design is composed by hand, with a fashion-house eye for proportion, colour and finish.</p>
              <p>Based in Belfast, we design every arrangement in-house and hand-deliver it ourselves across the city and the surrounding area, so every bouquet arrives exactly as it left our studio.</p>
              <p className="text-sm text-white/60">[Placeholder copy — Sarah&rsquo;s own story to follow.]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-x py-20 md:py-28">
        <h2 className="h-display text-center text-xl">What We Do</h2>
        <div className="mx-auto mt-5 h-px w-10 bg-gold" />
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px bg-line md:grid-cols-4">
          {SERVICES.map((s) => (
            <li key={s} className="flex h-24 items-center justify-center bg-white px-3 text-center text-[11px] font-display font-semibold uppercase tracking-[0.08em]">{s}</li>
          ))}
        </ul>
        <div className="mt-14 text-center"><Link href="/shop" className="btn-dark">Shop the collection</Link></div>
      </section>
    </>
  );
}
