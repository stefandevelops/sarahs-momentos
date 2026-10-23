import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import NewsletterForm from "@/components/NewsletterForm";
import TrustStrip from "@/components/TrustStrip";
import DeliveryZones from "@/components/DeliveryZones";
import Subscription from "@/components/Subscription";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import { COLLECTIONS, OCCASIONS, PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { WEDDING_PRICE_GUIDE } from "@/lib/placeholders";

const INSTAGRAM = ["/images/couture-pink.jpg", "/images/atelier.jpg", "/images/sunlit.jpg", "/images/weddings.jpg", "/images/orchid.jpg", "/images/seasonal.jpg"];

export default function Home() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 8);
  const featured = COLLECTIONS.filter((c) => ["seasonal", "roses", "couture", "gift-sets"].includes(c.key));

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[58vh] min-h-[380px] w-full md:h-[calc(100vh-170px)] md:min-h-[560px]">
          <Image src="/images/hero.jpg" alt="A lavish autumn arrangement of burnt-orange roses, burgundy dahlias and copper beech" fill priority sizes="100vw" className="object-cover object-[70%_50%]" />
        </div>
        <div className="container-x md:absolute md:inset-0 md:flex md:items-center">
          <div className="py-12 text-center md:max-w-[460px] md:py-0 md:text-left">
            <p className="kicker text-gold-deep">{SITE.tagline}</p>
            <h1 className="h-display mt-4 text-[26px] leading-[1.2] md:text-[40px]">The art of<br />giving flowers</h1>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted max-md:mx-auto">
              Luxury, hand-crafted designs from Belfast — hand-delivered by our own florists across the city and the surrounding area.
            </p>
            <Link href="/shop" className="btn-dark mt-8">Shop the collection</Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* FEATURED COLLECTIONS */}
      <section className="container-x py-20 md:py-28">
        <SectionTitle eyebrow="Discover" title="The Collections" />
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-8 lg:grid-cols-4">
          {featured.map((c) => (
            <Link key={c.key} href={`/shop?collection=${c.key}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                <Image src={c.image} alt={c.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
              </div>
              <h3 className="mt-5 text-center text-[12px] font-display font-semibold uppercase tracking-[0.08em] md:text-[13px]">{c.name}</h3>
              <p className="mt-2 hidden text-center text-sm text-muted md:block">{c.blurb}</p>
              <p className="mt-3 text-center"><span className="eyebrow link-u text-gold-deep">Shop now</span></p>
            </Link>
          ))}
        </div>
      </section>

      {/* EDITORIAL BAND — BLACK & WHITE */}
      <section className="bg-ink text-white">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[620px]">
            <Image src="/images/atelier.jpg" alt="A florist hand-tying a bouquet" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover grayscale" />
          </div>
          <div className="flex items-center px-6 py-16 md:px-20">
            <div className="max-w-md">
              <p className="kicker text-gold">Our story</p>
              <h2 className="h-display mt-3 text-2xl leading-snug md:text-3xl">Every bouquet,<br />a moment kept</h2>
              <div className="mt-6 h-px w-10 bg-gold" />
              <p className="mt-6 leading-relaxed text-white/80">
                Sarah&rsquo;s Momentos began with a simple belief: flowers should feel as considered as the moments they mark. Each design is composed by hand
                from the finest seasonal stems, with the restraint and finish of a couture house.
              </p>
              <Link href="/about" className="btn-white mt-10">Discover the house</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="container-x py-20 md:py-28">
        <SectionTitle eyebrow="Most loved" title="Bestsellers" />
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
          {bestsellers.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
        <div className="mt-14 text-center"><Link href="/shop" className="btn-light">View all flowers</Link></div>
      </section>

      {/* OCCASIONS */}
      <section className="border-y border-line bg-stone py-16 md:py-20">
        <div className="container-x">
          <SectionTitle eyebrow="Flowers for every occasion" title="Shop by Occasion" />
          <ul className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
            {OCCASIONS.map((o) => (
              <li key={o} className="bg-stone">
                <Link href={o === "Sympathy" ? "/sympathy" : `/shop?occasion=${encodeURIComponent(o)}`} className="group flex h-20 items-center justify-center px-3 text-center text-[11px] font-display font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-white hover:text-gold-deep md:h-24 md:text-[12px]">
                  {o}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DELIVERY — postcode checker + zones */}
      <DeliveryZones />

      {/* SUBSCRIPTIONS */}
      <Subscription />

      {/* WEDDINGS TEASER */}
      <section className="grid border-b border-line md:grid-cols-[1.6fr_1fr]">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[560px]">
          <Image src="/images/weddings.jpg" alt="Wedding table flowers in ivory and blush" fill sizes="(min-width:768px) 62vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center justify-center bg-stone px-6 py-16 text-center">
          <div className="w-full max-w-sm">
            <p className="kicker text-gold-deep">Bespoke</p>
            <h2 className="h-display mt-2 text-2xl leading-snug md:text-3xl">Weddings<br />&amp; Events</h2>
            <div className="mx-auto mt-6 h-px w-10 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-muted">Bridal flowers, ceremony and reception design, christenings and private celebrations — composed around you.</p>
            <p className="mt-8 text-[11px] font-display font-semibold uppercase tracking-[0.08em]">Price guide</p>
            <ul className="mt-4 divide-y divide-line border-y border-line text-left text-sm">
              {WEDDING_PRICE_GUIDE.map((w) => (
                <li key={w.item} className="flex justify-between gap-4 py-2.5">
                  <span>{w.item}</span>
                  <span className="shrink-0 text-muted">from £{w.from}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">Placeholder prices for the prototype.</p>
            <Link href="/weddings-events" className="btn-dark mt-8">Enquire</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews />

      {/* FAQ */}
      <div className="border-t border-line bg-stone"><FAQ /></div>

      {/* INSTAGRAM */}
      <section className="py-20 md:py-24">
        <div className="container-x text-center">
          <p className="eyebrow">Follow us</p>
          <a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="h-display link-u mt-3 inline-block text-xl md:text-2xl">{SITE.instagram.handle}</a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-1 md:grid-cols-6">
          {INSTAGRAM.map((src, i) => (
            <a key={i} href={SITE.instagram.url} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden bg-stone">
              <Image src={src} alt="" fill sizes="(min-width:768px) 17vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-line bg-stone py-20 text-center">
        <div className="container-x">
          <SectionTitle eyebrow="The Momentos letter" title="Join our list" />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted">Seasonal collections, first access to limited designs and gentle reminders before the moments that matter.</p>
          <div className="mt-10"><NewsletterForm /></div>
        </div>
      </section>
    </>
  );
}
