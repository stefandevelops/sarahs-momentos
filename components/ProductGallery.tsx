"use client";
import Image from "next/image";
import DeliveryBadge from "./DeliveryBadge";
import { SIZES, imageFor, type Product, type SizeKey } from "@/lib/products";

/** Main photo crossfades to the selected size; thumbnails switch size too. */
export default function ProductGallery({ product, size, onSize }: { product: Product; size: SizeKey; onSize: (s: SizeKey) => void }) {
  const distinct = new Set(SIZES.map((s) => imageFor(product, s.key))).size > 1;
  return (
    <div className="md:sticky md:top-44 md:self-start">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone">
        {SIZES.map((s) => (
          <Image key={s.key} src={imageFor(product, s.key)} alt={`${product.name}, ${s.label}`} fill
            priority={s.key === "classic"} sizes="(min-width:768px) 55vw, 100vw"
            className={`object-cover transition-all duration-700 ease-out ${size === s.key ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"}`} />
        ))}
        <DeliveryBadge size="lg" />
        <span className="kicker absolute right-4 top-4 bg-white/90 px-3 py-1.5 text-ink">{SIZES.find((s) => s.key === size)?.label}</span>
      </div>
      {distinct && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {SIZES.map((s) => (
            <button key={s.key} type="button" onClick={() => onSize(s.key)} aria-label={`Show ${s.label}`} aria-pressed={size === s.key}
              className={`relative aspect-[3/4] overflow-hidden border transition-colors ${size === s.key ? "border-ink" : "border-transparent opacity-70 hover:opacity-100"}`}>
              <Image src={imageFor(product, s.key)} alt="" fill sizes="15vw" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
