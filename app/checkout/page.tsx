"use client";
import Link from "next/link";
import { useBasket } from "@/components/BasketProvider";
import { formatGBP } from "@/lib/products";

export default function CheckoutPage() {
  const { items, subtotal } = useBasket();
  return (
    <section className="container-x max-w-2xl py-20 text-center md:py-28">
      <p className="kicker text-gold-deep">Almost there</p>
      <h1 className="h-display mt-2 text-2xl md:text-4xl">Checkout</h1>
      <div className="mx-auto mt-6 h-px w-10 bg-gold" />
      <p className="mt-8 leading-relaxed text-muted">
        Secure payments are coming in the next phase. This prototype does not take payment or place real orders.
      </p>
      {items.length > 0 && (
        <p className="mt-6 text-sm">{items.length} item{items.length > 1 ? "s" : ""} in your basket · Subtotal {formatGBP(subtotal)}</p>
      )}
      <Link href="/shop" className="btn-light mt-10">Continue shopping</Link>
    </section>
  );
}
