import Link from "next/link";
import Logo from "./Logo";
import { SITE, SERVICES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <Logo size="footer" />
          <p className="mt-5 kicker text-white/80">{SITE.tagline}</p>
          <div className="mt-6 h-px w-12 bg-gold" />
        </div>
        <div>
          <p className="eyebrow text-gold">Shop</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link className="link-u" href="/shop">All flowers</Link></li>
            <li><Link className="link-u" href="/shop?collection=roses">The Rose Collection</Link></li>
            <li><Link className="link-u" href="/shop?collection=couture">Couture Arrangements</Link></li>
            <li><Link className="link-u" href="/shop?collection=gift-sets">Luxury Gift Boxes</Link></li>
            <li><Link className="link-u" href="/sympathy">Sympathy</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {SERVICES.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a className="link-u" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="link-u" href={SITE.instagram.url} target="_blank" rel="noreferrer">Instagram {SITE.instagram.handle}</a></li>
            <li><a className="link-u" href={SITE.facebook.url} target="_blank" rel="noreferrer">Facebook — {SITE.facebook.name}</a></li>
            <li>{SITE.domain}</li>
            <li className="pt-2 text-white/60">Delivering across Belfast and the surrounding area.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-6 text-[10px] font-display font-semibold uppercase tracking-[0.08em] text-white/60 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Prototype — placeholder products &amp; prices</span>
        </div>
      </div>
    </footer>
  );
}
