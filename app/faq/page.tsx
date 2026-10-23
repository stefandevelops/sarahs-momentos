import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <div className="container-x pt-16 text-center md:pt-24">
        <p className="kicker text-gold-deep">Good to know</p>
        <h1 className="h-display mt-2 text-2xl md:text-4xl">Frequently Asked Questions</h1>
        <div className="mx-auto mt-6 h-px w-10 bg-gold" />
      </div>
      <FAQ asPageTitle />
    </>
  );
}
