import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductBuy from "@/components/ProductBuy";
import ProductCard from "@/components/ProductCard";
import DeliveryInfo from "@/components/DeliveryInfo";
import { COLLECTIONS, PRODUCTS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return { title: p?.name ?? "Product" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const collection = COLLECTIONS.find((c) => c.key === product.collection)!;
  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.collection === product.collection)
    .concat(PRODUCTS.filter((p) => p.collection !== product.collection))
    .slice(0, 4);

  return (
    <>
      <div className="container-x pt-6 text-[10px] font-display font-semibold uppercase tracking-[0.08em] text-muted md:pt-8">
        <Link href="/shop" className="link-u">Shop</Link> <span className="mx-2">/</span>
        <Link href={`/shop?collection=${collection.key}`} className="link-u">{collection.name}</Link>
      </div>
      <section className="container-x grid gap-10 pb-20 pt-6 md:grid-cols-[1.15fr_1fr] md:gap-16 md:pt-8 lg:gap-24">
        <ProductBuy
          product={product}
          header={
            <>
              <p className="kicker text-gold-deep">{collection.name}</p>
              <h1 className="h-display mt-2 text-2xl leading-snug md:text-[32px]">{product.name}</h1>
              <p className="mt-2 text-sm text-muted">{product.subtitle}</p>
              <div className="my-8 h-px w-10 bg-gold" />
            </>
          }
          footer={
            <div className="mt-12 space-y-8 border-t border-line pt-10">
              <div>
                <p className="label">The design</p>
                <p className="mt-2 leading-relaxed text-muted">{product.description}</p>
                <p className="mt-3 text-sm text-muted"><span className="text-ink">Stems:</span> {product.stems}. Exact stems vary with the season.</p>
              </div>
              <div>
                <p className="label mb-5">Delivery</p>
                <DeliveryInfo compact />
              </div>
            </div>
          }
        />
      </section>
      <section className="border-t border-line py-20">
        <div className="container-x">
          <h2 className="h-display text-center text-xl">You may also love</h2>
          <div className="mx-auto mt-5 h-px w-10 bg-gold" />
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
