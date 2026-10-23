/**
 * Pure delivery helpers: postcode → zone, price and earliest delivery date.
 * All zones, prices and cut-offs come from lib/placeholders.ts (PLACEHOLDER data).
 * No React / DOM imports so it can be unit-checked with plain Node
 * (see scripts/check-delivery.mts).
 */
import {
  DELIVERY_ZONES,
  NEXT_DAY_CUTOFF_HOUR,
  NO_DELIVERY_WEEKDAYS,
  type DeliveryZone,
} from "./placeholders.ts";

export type PostcodeResult =
  | { ok: true; postcode: string; outward: string; zone: DeliveryZone; earliest: Date }
  | { ok: false; error: string };

const FULL = /^([A-Z]{1,2}\d[A-Z\d]?)(\d[A-Z]{2})$/;
const OUTWARD = /^[A-Z]{1,2}\d[A-Z\d]?$/;

/** Uppercase, strip spaces, split into outward/inward. Returns null if not a UK postcode shape. */
export function parsePostcode(input: string): { outward: string; inward: string | null } | null {
  const s = input.toUpperCase().replace(/\s+/g, "");
  const full = s.match(FULL);
  if (full) return { outward: full[1], inward: full[2] };
  if (OUTWARD.test(s)) return { outward: s, inward: null };
  return null;
}

/** Earliest delivery date for an order placed at `now` (local time). */
export function earliestDelivery(now: Date, zone: DeliveryZone): Date {
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  d.setDate(d.getDate() + 1 + zone.extraDays + (now.getHours() >= NEXT_DAY_CUTOFF_HOUR ? 1 : 0));
  while (NO_DELIVERY_WEEKDAYS.includes(d.getDay())) d.setDate(d.getDate() + 1);
  return d;
}

const OUT_OF_AREA = "Sorry, we currently deliver to Belfast and the surrounding area only.";

/** Check a postcode. `now` is injectable so the function stays pure/testable. */
export function checkPostcode(input: string, now: Date = new Date()): PostcodeResult {
  if (!input.trim()) return { ok: false, error: "Please enter a postcode." };
  const parsed = parsePostcode(input);
  if (!parsed) return { ok: false, error: "That doesn't look like a UK postcode. Please check and try again." };

  const { outward, inward } = parsed;
  const postcode = inward ? `${outward} ${inward}` : outward;
  let zone: DeliveryZone | undefined;

  if (outward.startsWith("BT")) {
    const district = Number(outward.slice(2));
    if (!/^BT\d{1,2}$/.test(outward) || district < 1 || district > 94) {
      return { ok: false, error: OUT_OF_AREA };
    }
    zone = DELIVERY_ZONES.find((z) => z.districts.includes(district));
  }
  if (!zone) return { ok: false, error: OUT_OF_AREA };

  return { ok: true, postcode, outward, zone, earliest: earliestDelivery(now, zone) };
}

export function formatPrice(n: number): string {
  return `£${n.toFixed(2)}`;
}

export function formatDeliveryDate(d: Date, now: Date = new Date()): string {
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const label = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  return d.getTime() === tomorrow.getTime() ? `Tomorrow, ${label}` : label;
}
