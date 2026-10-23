/**
 * ============================================================================
 *  PLACEHOLDER DATA — replace with John's real data before launch.
 * ============================================================================
 *  Every price, delivery zone, cut-off time, rating number, review, wedding
 *  price and FAQ answer in this file is an illustrative PLACEHOLDER. None of it
 *  is Sarah's Momentos' real pricing, policy or customer feedback.
 *  Keep this file the single source for these values so they are easy to swap.
 * ============================================================================
 */

/* ---------- Delivery ---------- */

/** PLACEHOLDER: order cut-off for next-day delivery (24h clock, local time). */
export const NEXT_DAY_CUTOFF_HOUR = 13; // 1pm
export const NEXT_DAY_CUTOFF_LABEL = "1pm";

/** PLACEHOLDER: free delivery threshold within our delivery area (GBP). */
/** Banner shown on every product photo (shop value proposition). Same-day rules are PLACEHOLDER until John confirms them. */
export const PRODUCT_BANNER = "Same day & next day delivery";

export const FREE_DELIVERY_THRESHOLD = 75;

/** PLACEHOLDER: days of the week with no deliveries (0 = Sunday). */
export const NO_DELIVERY_WEEKDAYS = [0];

export type ZoneId = "belfast" | "greater-belfast";

export type DeliveryZone = {
  id: ZoneId;
  name: string;
  areas: string; // human-readable postcode description
  /** BT district numbers covered (e.g. 18 = BT18). */
  districts: number[];
  price: number; // GBP, PLACEHOLDER
  freeOver: number | null; // GBP threshold, PLACEHOLDER
  /** Calendar days added to "tomorrow" when ordered before the cut-off. 0 = next day. */
  extraDays: number;
  deliveredBy: string;
};

const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

/** PLACEHOLDER zones and prices. Districts are BT postcode district numbers. */
export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: "belfast",
    name: "Belfast",
    areas: "BT1 – BT17",
    districts: range(1, 17),
    price: 5.95,
    freeOver: FREE_DELIVERY_THRESHOLD,
    extraDays: 0,
    deliveredBy: "Hand-delivered by our own florists",
  },
  {
    id: "greater-belfast",
    name: "Greater Belfast",
    areas: "Holywood, Bangor, Newtownards, Lisburn, Newtownabbey, Carrickfergus & nearby (BT18–BT28, BT36–BT38)",
    districts: [...range(18, 28), ...range(36, 38)],
    price: 7.95,
    freeOver: FREE_DELIVERY_THRESHOLD,
    extraDays: 0,
    deliveredBy: "Hand-delivered by our own florists",
  },
];

/* ---------- Trust strip ---------- */

/** PLACEHOLDER: overall rating shown in the trust strip and reviews section. */
export const RATING = { score: 4.9, outOf: 5, count: 120, source: "customer reviews" };

export const TRUST_POINTS = [
  { title: `${RATING.score} / ${RATING.outOf} rated`, body: `From ${RATING.count}+ ${RATING.source}` },
  { title: "Next-day delivery", body: `Order by ${NEXT_DAY_CUTOFF_LABEL}, Monday to Saturday` },
  { title: `Free delivery over £${FREE_DELIVERY_THRESHOLD}`, body: "Anywhere in Belfast & surroundings" },
];

/* ---------- Subscriptions ---------- */

/** PLACEHOLDER subscription plans and prices. */
export const SUBSCRIPTION_PLANS = [
  { name: "Weekly", price: 45, note: "Fresh flowers every week" },
  { name: "Fortnightly", price: 50, note: "Our most popular rhythm" },
  { name: "Monthly", price: 55, note: "A standing monthly gesture" },
];

/* ---------- Weddings ---------- */

/** PLACEHOLDER wedding price guide ("from" prices, GBP). */
export const WEDDING_PRICE_GUIDE = [
  { item: "Bridal bouquet", from: 150 },
  { item: "Bridesmaid bouquets", from: 65 },
  { item: "Buttonholes & corsages", from: 15 },
  { item: "Ceremony arrangements", from: 120 },
  { item: "Reception table centrepieces", from: 45 },
];

/* ---------- Reviews ---------- */

/**
 * PLACEHOLDER reviews. These are EXAMPLE texts written for the prototype —
 * not real customer reviews. Initials are generic. Replace with genuine,
 * attributable reviews (with permission) before launch.
 */
export const REVIEWS = [
  { initials: "A.B.", occasion: "Birthday", stars: 5, text: "Example review text: the bouquet arrived beautifully wrapped and the flowers were even lovelier than the photograph." },
  { initials: "C.D.", occasion: "Sympathy", stars: 5, text: "Example review text: a calm, thoughtful service at a difficult time, and an arrangement the family truly appreciated." },
  { initials: "E.F.", occasion: "Wedding", stars: 5, text: "Example review text: our wedding flowers were exactly what we had imagined, from the bridal bouquet to the tables." },
];

/* ---------- FAQ ---------- */

/** PLACEHOLDER answers — confirm every policy with John before launch. */
export const FAQS = [
  {
    q: "When will my flowers be delivered?",
    a: `Order by ${NEXT_DAY_CUTOFF_LABEL} for next-day delivery across Belfast and the surrounding area, Monday to Saturday. You can also choose a later date at checkout. Use the postcode checker to see your zone and earliest date.`,
  },
  {
    q: "What happens if nobody is home?",
    a: "Our florist will try a neighbour or a safe, sheltered place and leave a card to say where your flowers are. If neither is possible we will contact you to arrange redelivery.",
  },
  {
    q: "Will my flowers look like the photographs?",
    a: "Each design is made by hand with the best seasonal stems available that day. The style, palette and size will match the photograph; occasionally a stem is substituted with one of equal or greater value.",
  },
  {
    q: "How long will my flowers last?",
    a: "With fresh water and a trim every couple of days, most designs last around a week, often longer. Care instructions come with every order.",
  },
  {
    q: "Can you deliver to hospitals?",
    a: "Many hospital wards no longer accept fresh flowers. Please check with the ward before ordering; we are happy to suggest an alternative or deliver to the patient's home instead.",
  },
  {
    q: "Can I pre-order for Valentine's Day or Mother's Day?",
    a: "Yes. Pre-orders open several weeks ahead and we recommend ordering early, as these are our busiest days and designs are limited.",
  },
];
