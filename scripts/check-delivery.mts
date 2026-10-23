// Tiny unit check for lib/delivery.ts — run with: node scripts/check-delivery.mts (Node 22.6+ / 23+)
import assert from "node:assert/strict";
import { checkPostcode, parsePostcode, earliestDelivery } from "../lib/delivery.ts";
import { DELIVERY_ZONES } from "../lib/placeholders.ts";

const zoneOf = (pc: string, now = new Date(2026, 9, 21, 10)) => {
  const r = checkPostcode(pc, now);
  return r.ok ? r.zone.id : `error:${r.error}`;
};

// Parsing
assert.deepEqual(parsePostcode("bt1 1aa"), { outward: "BT1", inward: "1AA" });
assert.deepEqual(parsePostcode("BT11AA"), { outward: "BT1", inward: "1AA" });
assert.deepEqual(parsePostcode("bt9"), { outward: "BT9", inward: null });
assert.equal(parsePostcode("hello"), null);

// Zones
assert.equal(zoneOf("BT1 1AA"), "belfast");
assert.equal(zoneOf("bt17 0ab"), "belfast");
assert.equal(zoneOf("BT9"), "belfast");
assert.equal(zoneOf("BT18 9AB"), "greater-belfast"); // Holywood
assert.equal(zoneOf("BT20 3XY"), "greater-belfast"); // Bangor
assert.equal(zoneOf("BT38"), "greater-belfast"); // Carrickfergus
// Outside Belfast and surroundings: politely refused
assert.ok(zoneOf("BT48 7AA").startsWith("error")); // Derry~Londonderry
assert.ok(zoneOf("BT74 6AB").startsWith("error")); // Enniskillen
assert.ok(zoneOf("SW1A 1AA").startsWith("error"));
assert.ok(zoneOf("M1 1AE").startsWith("error"));
assert.ok(zoneOf("BT0").startsWith("error"));
assert.ok(zoneOf("BT99 1AA").startsWith("error"));
assert.ok(zoneOf("").startsWith("error"));
assert.ok(zoneOf("12345").startsWith("error"));

// Earliest delivery (placeholder cut-off 13:00, no Sunday delivery)
const belfast = DELIVERY_ZONES[0];
const ymd = (d: Date) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
assert.equal(ymd(earliestDelivery(new Date(2026, 9, 21, 10), belfast)), "2026-10-22"); // Wed 10:00 → Thu
assert.equal(ymd(earliestDelivery(new Date(2026, 9, 21, 14), belfast)), "2026-10-23"); // Wed 14:00 → Fri
assert.equal(ymd(earliestDelivery(new Date(2026, 9, 23, 12), belfast)), "2026-10-24"); // Fri 12:00 → Sat
assert.equal(ymd(earliestDelivery(new Date(2026, 9, 24, 9), belfast)), "2026-10-26"); // Sat 09:00 → Mon (skip Sun)
assert.equal(ymd(earliestDelivery(new Date(2026, 9, 23, 15), belfast)), "2026-10-26"); // Fri 15:00 → Mon

console.log("check-delivery: all assertions passed");
