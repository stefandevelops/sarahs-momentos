"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV } from "@/lib/site";
import { useBasket } from "./BasketProvider";

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function Header() {
  const { count, setOpen } = useBasket();
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  useEffect(() => setMenu(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="bg-ink py-2 text-center text-[10px] font-display font-semibold uppercase tracking-[0.08em] text-white">
        <span className="md:hidden">Delivery across Belfast</span><span className="hidden md:inline">Luxury flower delivery across Belfast &amp; surroundings</span>
      </div>
      <div className="container-x grid grid-cols-[1fr_auto_1fr] items-center py-3 md:py-4">
        <div>
          <button className="eyebrow md:hidden" onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-label="Menu">
            <span className="block h-px w-6 bg-ink" />
            <span className="mt-1.5 block h-px w-6 bg-ink" />
          </button>
          <Link href="/contact" className="eyebrow link-u hidden md:inline-block">
            Contact
          </Link>
        </div>
        <Logo />
        <div className="flex justify-end">
          <button onClick={() => setOpen(true)} className="relative flex items-center gap-2" aria-label={`Basket, ${count} items`}>
            <span className="eyebrow hidden md:inline">Basket</span>
            <BagIcon />
            {count > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
      <nav className="hidden border-y border-line md:block" aria-label="Main">
        <ul className="flex justify-center gap-12 py-3.5">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={`eyebrow link-u ${pathname === n.href ? "text-gold-deep" : ""}`}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {menu && (
        <nav className="border-t border-line bg-white md:hidden" aria-label="Mobile">
          <ul className="container-x divide-y divide-line">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block py-4 text-[12px] font-display font-semibold uppercase tracking-[0.08em]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="border-b border-line md:hidden" />
    </header>
  );
}
