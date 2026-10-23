"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useBasket } from "./BasketProvider";
import { formatGBP, SIZES } from "@/lib/products";

export default function BasketDrawer() {
  const { items, open, setOpen, remove, setQty, subtotal } = useBasket();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <div className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-ink/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Your basket"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-white transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <p className="eyebrow">Your basket</p>
          <button onClick={() => setOpen(false)} className="eyebrow link-u" aria-label="Close basket">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <p className="h-display text-[18px]">Your basket is empty</p>
            <Link href="/shop" onClick={() => setOpen(false)} className="btn-dark">
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((i) => (
                <li key={i.id} className="flex gap-4 py-5">
                  <div className="relative h-28 w-22 shrink-0 bg-stone">
                    <Image src={i.image} alt={i.name} fill sizes="88px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col text-sm">
                    <div className="flex justify-between gap-2">
                      <p className="text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{i.name}</p>
                      <p>{formatGBP(i.price * i.qty)}</p>
                    </div>
                    <p className="mt-1 text-muted">{SIZES.find((s) => s.key === i.size)?.label}</p>
                    {i.deliveryDate && (
                      <p className="text-muted">
                        Delivery{" "}
                        {new Date(i.deliveryDate).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button className="px-3 py-1" onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease quantity">−</button>
                        <span className="w-6 text-center">{i.qty}</span>
                        <button className="px-3 py-1" onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <button onClick={() => remove(i.id)} className="text-[11px] uppercase tracking-[0.2em] text-muted hover:text-gold-deep">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line px-6 py-6">
              <div className="flex justify-between text-sm">
                <span className="eyebrow">Subtotal</span>
                <span>{formatGBP(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs text-muted">Delivery calculated at checkout.</p>
              <Link href="/checkout" onClick={() => setOpen(false)} className="btn-dark mt-5 w-full">
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
