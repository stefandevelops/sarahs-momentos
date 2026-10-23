/**
 * Central brand + site configuration.
 * Swap the logo by setting LOGO.imageSrc to a file in /public (e.g. "/brand/logo.svg").
 * While imageSrc is null, <Logo /> renders the text wordmark below.
 */
export const LOGO = {
  imageSrc: "/brand/logo-badge.png" as string | null, // John's original round logo, HQ with gold border
  imageWidth: 400,
  imageHeight: 400,
  wordmark: "Sarah's Momentos",
  showFlowerMark: true,
};

export const SITE = {
  name: "Sarah's Momentos",
  tagline: "Flowers for every occasion",
  url: "https://www.sarahsmomentos.com",
  domain: "www.sarahsmomentos.com",
  email: "Sarahsmomentos@gmail.com",
  instagram: { handle: "@Sarahs_Momentos", url: "https://www.instagram.com/Sarahs_Momentos" },
  facebook: { name: "Sarah's Momentos", url: "https://www.facebook.com/" }, // TODO: confirm page URL
  region: "Belfast",
};

export const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "Occasions", href: "/shop#occasions" },
  { label: "Weddings & Events", href: "/weddings-events" },
  { label: "Sympathy", href: "/sympathy" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  "Bespoke Bouquets",
  "Special Occasions",
  "Events",
  "Weddings",
  "Christenings & Communions",
  "Luxury Gift Boxes",
  "Anniversary",
  "Sympathy Flowers & Wreaths",
];
