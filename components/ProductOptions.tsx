"use client";
import { useMemo, useState } from "react";
import { SIZES, formatGBP, imageFor, type Product, type SizeKey } from "@/lib/products";
import { useBasket } from "./BasketProvider";

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function ProductOptions({ product, size, onSize: setSize }: { product: Product; size: SizeKey; onSize: (s: SizeKey) => void }) {
  const { add } = useBasket();
  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + (d.getHours() >= 13 ? 2 : 1)); // next-day cut-off 1pm (placeholder rule)
    return isoDate(d);
  }, []);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const price = product.prices[size];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!date) return setError("Please choose a delivery date.");
        setError("");
        add({ slug: product.slug, name: product.name, image: imageFor(product, size), size, price, deliveryDate: date, message });
      }}
      className="space-y-8"
    >
      <p className="text-xl tracking-[0.06em]">{formatGBP(price)}</p>

      <fieldset>
        <legend className="label mb-3">Size</legend>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((s) => (
            <button
              type="button"
              key={s.key}
              onClick={() => setSize(s.key)}
              aria-pressed={size === s.key}
              className={`border px-2 py-4 text-center transition-colors ${
                size === s.key ? "border-ink bg-ink text-white" : "border-line hover:border-gold-deep"
              }`}
            >
              <span className="block text-[11px] font-display font-semibold uppercase tracking-[0.08em]">{s.label}</span>
              <span className={`mt-1 block text-xs ${size === s.key ? "text-white/80" : "text-muted"}`}>{formatGBP(product.prices[s.key])}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">{SIZES.find((s) => s.key === size)?.note}.</p>
      </fieldset>

      <label className="block">
        <span className="label">Delivery date</span>
        <input type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="field" />
        {error && <span className="mt-2 block text-sm text-[#a0302a]">{error}</span>}
      </label>

      <label className="block">
        <span className="label">Gift message (optional)</span>
        <textarea
          rows={3}
          maxLength={200}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message, handwritten on our card"
          className="field resize-none"
        />
        <span className="mt-1 block text-right text-xs text-muted">{message.length}/200</span>
      </label>

      <button className="btn-dark w-full">Add to basket — {formatGBP(price)}</button>
    </form>
  );
}
