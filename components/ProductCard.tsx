import Image from "next/image";
import Link from "next/link";
import DeliveryBadge from "./DeliveryBadge";
import { type Product, fromPrice, formatGBP, imageFor } from "@/lib/products";

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const hover = imageFor(product, "luxe"); // shows the fuller Luxe design on hover, when one exists
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {hover !== product.image && (
          <Image src={hover} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        )}
        <DeliveryBadge />
        <span className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-white py-3 text-center text-[10px] font-display font-semibold uppercase tracking-[0.08em] transition-transform duration-500 group-hover:translate-y-0">
          View
        </span>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-[12px] font-display font-semibold uppercase tracking-[0.08em] md:text-[13px]">{product.name}</h3>
        <p className="mt-1.5 text-[12px] tracking-[0.08em] text-muted">From {formatGBP(fromPrice(product))}</p>
      </div>
    </Link>
  );
}
