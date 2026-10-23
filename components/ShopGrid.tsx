"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { COLLECTIONS, OCCASIONS, PRODUCTS, fromPrice, type CollectionKey } from "@/lib/products";

const PRICE_BANDS = [
  { key: "all", label: "All prices", test: () => true },
  { key: "u75", label: "Under £75", test: (n: number) => n < 75 },
  { key: "75-120", label: "£75 – £120", test: (n: number) => n >= 75 && n <= 120 },
  { key: "o120", label: "£120 and above", test: (n: number) => n > 120 },
] as const;

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap border px-4 py-2 text-[10px] font-display font-semibold uppercase tracking-[0.08em] transition-colors ${
        active ? "border-ink bg-ink text-white" : "border-line text-ink hover:border-gold-deep hover:text-gold-deep"
      }`}
    >
      {children}
    </button>
  );
}

export default function ShopGrid() {
  const params = useSearchParams();
  const initialCollection = (params.get("collection") as CollectionKey | null) ?? "all";
  const initialOccasion = params.get("occasion") ?? "all";
  const [collection, setCollection] = useState<string>(initialCollection);
  const [occasion, setOccasion] = useState<string>(initialOccasion);
  const [price, setPrice] = useState<string>("all");
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    const band = PRICE_BANDS.find((b) => b.key === price)!;
    const r = PRODUCTS.filter(
      (p) =>
        (collection === "all" || p.collection === collection) &&
        (occasion === "all" || p.occasions.includes(occasion as never)) &&
        band.test(fromPrice(p)),
    );
    if (sort === "low") r.sort((a, b) => fromPrice(a) - fromPrice(b));
    if (sort === "high") r.sort((a, b) => fromPrice(b) - fromPrice(a));
    return r;
  }, [collection, occasion, price, sort]);

  return (
    <div>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:justify-center md:px-0">
        <Chip active={collection === "all"} onClick={() => setCollection("all")}>All</Chip>
        {COLLECTIONS.map((c) => (
          <Chip key={c.key} active={collection === c.key} onClick={() => setCollection(c.key)}>
            {c.name}
          </Chip>
        ))}
      </div>

      <div id="occasions" className="mt-8 grid scroll-mt-48 gap-6 border-y border-line py-5 md:grid-cols-3 md:items-end">
        <label>
          <span className="label">Occasion</span>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="field cursor-pointer">
            <option value="all">All occasions</option>
            {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label>
          <span className="label">Price</span>
          <select value={price} onChange={(e) => setPrice(e.target.value)} className="field cursor-pointer">
            {PRICE_BANDS.map((b) => <option key={b.key} value={b.key}>{b.label}</option>)}
          </select>
        </label>
        <label>
          <span className="label">Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="field cursor-pointer">
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>

      <p className="mt-6 text-center text-[11px] font-display font-semibold uppercase tracking-[0.08em] text-muted">{list.length} designs</p>

      {list.length === 0 ? (
        <p className="py-24 text-center h-display text-[18px]">No designs match — try another filter.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
          {list.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 4} />)}
        </div>
      )}
    </div>
  );
}
