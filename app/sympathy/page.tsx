import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Sympathy Flowers & Wreaths" };

export default function SympathyPage() {
  const list = PRODUCTS.filter((p) => p.occasions.includes("Sympathy") || p.slug === "ivory-couture");
  return (
    <>
      <PageHero
        image="/images/sympathy.jpg"
        eyebrow="With deepest sympathy"
        title="Sympathy Flowers & Wreaths"
        intro="Gentle, dignified tributes for funerals, homes and remembrance. We can deliver directly to funeral directors across Belfast and the surrounding area and design bespoke tributes on request."
      />
      <section className="container-x pb-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-3 lg:px-24">
          {list.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
      <section className="border-t border-line bg-stone py-20 text-center">
        <div className="container-x max-w-2xl">
          <h2 className="h-display text-xl">Bespoke Tributes</h2>
          <div className="mx-auto mt-5 h-px w-10 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Letters, hearts, casket sprays and personal tributes are made to order. Please contact us and we will take care of every detail, quietly and promptly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-dark">Contact us</Link>
            <a href={`mailto:${SITE.email}`} className="btn-light">Email the studio</a>
          </div>
        </div>
      </section>
    </>
  );
}
