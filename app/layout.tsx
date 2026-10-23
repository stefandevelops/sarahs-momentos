import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BasketDrawer from "@/components/BasketDrawer";
import { BasketProvider } from "@/components/BasketProvider";
import { SITE } from "@/lib/site";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-jost" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: { default: `${SITE.name} — Luxury Florist, Belfast`, template: `%s — ${SITE.name}` },
  description: `${SITE.tagline}. Luxury flowers with same day and next day delivery across Belfast and the surrounding area.`,
  // Prototype with placeholder content: keep it out of search results until John supplies real details.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${jost.variable} ${cormorant.variable}`}>
      <body>
        <BasketProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BasketDrawer />
        </BasketProvider>
      </body>
    </html>
  );
}
