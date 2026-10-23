import { Suspense } from "react";
import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="container-x pb-24 pt-14 md:pt-20">
      <div className="text-center">
        <p className="kicker text-gold-deep">Luxury flowers, delivered</p>
        <h1 className="h-display mt-2 text-2xl md:text-4xl">Shop All Flowers</h1>
        <div className="mx-auto mt-6 h-px w-10 bg-gold" />
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted">
          Hand-crafted bouquets, couture arrangements, gift boxes and planters — hand-delivered across Belfast and the surrounding area.
        </p>
      </div>
      <div className="mt-12">
        <Suspense fallback={null}>
          <ShopGrid />
        </Suspense>
      </div>
    </div>
  );
}
