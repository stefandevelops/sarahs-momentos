"use client";
import { useState, type ReactNode } from "react";
import type { Product, SizeKey } from "@/lib/products";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";

/** Shares the selected size between the gallery and the options form. */
export default function ProductBuy({ product, header, footer }: { product: Product; header: ReactNode; footer: ReactNode }) {
  const [size, setSize] = useState<SizeKey>("classic");
  return (
    <>
      <ProductGallery product={product} size={size} onSize={setSize} />
      <div className="md:py-6">
        {header}
        <ProductOptions product={product} size={size} onSize={setSize} />
        {footer}
      </div>
    </>
  );
}
