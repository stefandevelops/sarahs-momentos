/**
 * PLACEHOLDER PRODUCT DATA — names, descriptions and prices are illustrative only
 * and must be replaced with the client's real range before launch.
 */
export type SizeKey = "classic" | "deluxe" | "luxe";

export const SIZES: { key: SizeKey; label: string; note: string }[] = [
  { key: "classic", label: "Classic", note: "Generous and elegant" },
  { key: "deluxe", label: "Deluxe", note: "Fuller, with additional premium stems" },
  { key: "luxe", label: "Luxe", note: "Our most abundant expression" },
];

export type CollectionKey = "seasonal" | "roses" | "couture" | "gift-sets" | "orchids" | "sympathy";

export const COLLECTIONS: { key: CollectionKey; name: string; blurb: string; image: string }[] = [
  { key: "seasonal", name: "Seasonal Edit", blurb: "Autumn's warmest tones, gathered by hand.", image: "/images/seasonal.jpg" },
  { key: "roses", name: "The Rose Collection", blurb: "Single-variety roses, endlessly romantic.", image: "/images/blush-roses.jpg" },
  { key: "couture", name: "Couture Arrangements", blurb: "Our florists' signature, most sculptural designs.", image: "/images/couture-white.jpg" },
  { key: "gift-sets", name: "Luxury Gift Boxes", blurb: "Flowers and keepsakes, beautifully boxed.", image: "/images/gift-box.jpg" },
  { key: "orchids", name: "Orchid Planters", blurb: "Long-lasting elegance for home or office.", image: "/images/orchid.jpg" },
  { key: "sympathy", name: "Sympathy", blurb: "Gentle tributes, made with care.", image: "/images/sympathy.jpg" },
];

export const OCCASIONS = [
  "Birthday",
  "Anniversary",
  "Love & Romance",
  "Thank You",
  "New Baby",
  "Christenings & Communions",
  "Sympathy",
  "Just Because",
] as const;
export type Occasion = (typeof OCCASIONS)[number];

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  collection: CollectionKey;
  occasions: Occasion[];
  prices: Record<SizeKey, number>;
  image: string;
  description: string;
  stems: string;
  bestseller?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "blush-rose-cylinder",
    name: "Blush Rose",
    subtitle: "Pale pink roses in a glass cylinder vase",
    collection: "roses",
    occasions: ["Birthday", "Love & Romance", "Thank You", "Just Because"],
    prices: { classic: 65, deluxe: 95, luxe: 145 },
    image: "/images/blush-roses.jpg",
    description: "Long-stemmed blush roses, gathered simply and presented in a clear glass cylinder. Quietly romantic and effortlessly modern.",
    stems: "Blush garden roses, rose foliage",
    bestseller: true,
  },
  {
    slug: "grand-red-rose-dome",
    name: "Grand Red Rose",
    subtitle: "A dome of red velvet roses",
    collection: "roses",
    occasions: ["Anniversary", "Love & Romance"],
    prices: { classic: 95, deluxe: 145, luxe: 250 },
    image: "/images/red-roses.jpg",
    description: "The definitive romantic gesture: deep red roses arranged into a perfect dome and set in a hand-blown glass vase.",
    stems: "Red Naomi roses",
    bestseller: true,
  },
  {
    slug: "amber-autumn-vase",
    name: "Amber Autumn",
    subtitle: "Seasonal arrangement in smoked glass",
    collection: "seasonal",
    occasions: ["Birthday", "Thank You", "Just Because"],
    prices: { classic: 75, deluxe: 110, luxe: 165 },
    image: "/images/seasonal.jpg",
    description: "Golden chrysanthemums, apricot roses, rose hips and copper beech, styled loosely in a smoked amber vase for the season.",
    stems: "Chrysanthemum, rose, rose hip, copper beech",
    bestseller: true,
  },
  {
    slug: "ivory-couture",
    name: "Ivory Couture",
    subtitle: "Orchids, calla lilies and cream roses",
    collection: "couture",
    occasions: ["Anniversary", "Thank You", "Christenings & Communions"],
    prices: { classic: 120, deluxe: 175, luxe: 250 },
    image: "/images/couture-white.jpg",
    description: "A tall, sculptural composition of white phalaenopsis orchids, ivory calla lilies and cream roses with silver-dollar eucalyptus.",
    stems: "Phalaenopsis orchid, calla lily, rose, eucalyptus",
    bestseller: true,
  },
  {
    slug: "rose-pink-couture",
    name: "Pretty in Pink Couture",
    subtitle: "Peonies, roses and orchids in every pink",
    collection: "couture",
    occasions: ["Birthday", "New Baby", "Love & Romance"],
    prices: { classic: 110, deluxe: 160, luxe: 235 },
    image: "/images/couture-pink.jpg",
    description: "An exuberant study in pink: peonies, garden roses, sweet peas and orchids, arranged by our most senior florists.",
    stems: "Peony, rose, sweet pea, orchid, wax flower",
    bestseller: true,
  },
  {
    slug: "sunlit-hand-tied",
    name: "Sunlit",
    subtitle: "Golden roses and ranunculus",
    collection: "seasonal",
    occasions: ["Birthday", "Thank You", "New Baby", "Just Because"],
    prices: { classic: 55, deluxe: 85, luxe: 125 },
    image: "/images/sunlit.jpg",
    description: "Sunshine in a vase: golden roses and ranunculus with white spray roses and fresh seasonal greenery.",
    stems: "Rose, ranunculus, spray rose, pittosporum",
    bestseller: true,
  },
  {
    slug: "blush-gift-box",
    name: "The Blush Gift Box",
    subtitle: "Boxed roses with a scented candle",
    collection: "gift-sets",
    occasions: ["Birthday", "Anniversary", "Thank You"],
    prices: { classic: 85, deluxe: 120, luxe: 175 },
    image: "/images/gift-box.jpg",
    description: "Blush roses set in a white keepsake box, finished with gold satin ribbon and paired with a hand-poured candle.",
    stems: "Blush roses, scented soy candle",
    bestseller: true,
  },
  {
    slug: "white-orchid-planter",
    name: "White Orchid Planter",
    subtitle: "Phalaenopsis in a white ceramic planter",
    collection: "orchids",
    occasions: ["Thank You", "New Baby", "Sympathy", "Just Because"],
    prices: { classic: 65, deluxe: 95, luxe: 140 },
    image: "/images/orchid.jpg",
    description: "An arching white orchid dressed with moss in a matte ceramic planter. Lasts for weeks with minimal care.",
    stems: "Phalaenopsis orchid, moss",
    bestseller: true,
  },
  {
    slug: "serenity-wreath",
    name: "Serenity Wreath",
    subtitle: "White roses, lisianthus and hellebore",
    collection: "sympathy",
    occasions: ["Sympathy"],
    prices: { classic: 95, deluxe: 140, luxe: 210 },
    image: "/images/sympathy.jpg",
    description: "A calm, classic tribute of white roses, lisianthus and hellebores on a bed of silver eucalyptus.",
    stems: "Rose, lisianthus, hellebore, eucalyptus",
  },
  {
    slug: "christening-blush",
    name: "Christening Blush",
    subtitle: "Soft ivory and blush hand-tied",
    collection: "couture",
    occasions: ["Christenings & Communions", "New Baby"],
    prices: { classic: 70, deluxe: 105, luxe: 150 },
    image: "/images/atelier.jpg",
    description: "A delicate hand-tied bouquet of blush roses, white ranunculus and gypsophila, wrapped in tissue for a gentle celebration.",
    stems: "Rose, ranunculus, gypsophila, eucalyptus",
  },
  {
    slug: "seasonal-luxe-bouquet",
    name: "The Momento Bouquet",
    subtitle: "Our signature seasonal bouquet",
    collection: "seasonal",
    occasions: ["Anniversary", "Birthday", "Love & Romance"],
    prices: { classic: 90, deluxe: 135, luxe: 195 },
    image: "/images/hero.jpg",
    description: "Peonies, garden roses and ranunculus in soft blush and butter tones — the bouquet that defines our house style.",
    stems: "Peony, garden rose, ranunculus, astilbe",
  },
  {
    slug: "red-rose-gift-set",
    name: "Red Rose & Candle Set",
    subtitle: "Red roses with a scented candle",
    collection: "gift-sets",
    occasions: ["Anniversary", "Love & Romance"],
    prices: { classic: 110, deluxe: 160, luxe: 245 },
    image: "/images/red-roses.jpg",
    description: "Our red rose dome, paired with a hand-poured candle and presented in a keepsake gift bag.",
    stems: "Red Naomi roses, scented soy candle",
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const fromPrice = (p: Product) => Math.min(...Object.values(p.prices));
export const formatGBP = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);

/**
 * Per-size photos. A base listed here has /images/variants/<base>-deluxe.jpg and -luxe.jpg;
 * anything else falls back to the Classic photo for every size.
 */
export const VARIANT_BASES = new Set<string>(["blush-roses", "red-roses", "seasonal", "couture-white", "couture-pink", "sunlit", "gift-box", "orchid", "sympathy", "atelier"]);

export function imageFor(product: Product, size: SizeKey): string {
  if (size === "classic") return product.image;
  const base = product.image.replace(/^\/images\//, "").replace(/\.jpg$/, "");
  return VARIANT_BASES.has(base) ? `/images/variants/${base}-${size}.jpg` : product.image;
}
