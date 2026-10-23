import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/lib/site";

/** John's original round logo (HQ, black with gold border). Swap the file via LOGO.imageSrc in lib/site.ts. */
export default function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const cls = size === "footer" ? "h-36 w-36 md:h-44 md:w-44" : "h-[84px] w-[84px] md:h-[124px] md:w-[124px]";
  return (
    <Link href="/" aria-label="Sarah's Momentos — home" className="inline-block rounded-full">
      <Image src={LOGO.imageSrc ?? "/brand/logo-badge.png"} alt={LOGO.wordmark} width={LOGO.imageWidth} height={LOGO.imageHeight}
        priority={size === "header"} quality={95} sizes={size === "footer" ? "176px" : "124px"}
        className={`${cls} drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]`} />
    </Link>
  );
}
