"use client";
import { useState } from "react";
import { checkPostcode, formatDeliveryDate, formatPrice, type PostcodeResult } from "@/lib/delivery";

/** Client-side postcode check. Logic lives in lib/delivery.ts; data is PLACEHOLDER (lib/placeholders.ts). */
export default function PostcodeChecker() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<PostcodeResult | null>(null);
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const now = new Date();
          setCheckedAt(now);
          setResult(checkPostcode(value, now));
        }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end"
      >
        <label className="flex-1">
          <span className="sr-only">Delivery postcode</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a postcode, e.g. BT9 5AB"
            autoComplete="postal-code"
            className="field uppercase placeholder:normal-case"
          />
        </label>
        <button className="btn-dark shrink-0">Check</button>
      </form>

      <div aria-live="polite" className="mt-8 min-h-[1px]">
        {result && !result.ok && <p className="text-center text-sm text-muted">{result.error}</p>}
        {result && result.ok && checkedAt && (
          <div className="border border-line bg-white px-6 py-7 text-center">
            <p className="kicker text-gold-deep">Yes, we deliver to {result.postcode}</p>
            <p className="mt-3 text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{result.zone.name}</p>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="label">Delivery</dt>
                <dd>
                  {formatPrice(result.zone.price)}
                  {result.zone.freeOver !== null && <span className="block text-muted">Free over £{result.zone.freeOver}</span>}
                </dd>
              </div>
              <div>
                <dt className="label">Earliest</dt>
                <dd>{formatDeliveryDate(result.earliest, checkedAt)}</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-muted">{result.zone.deliveredBy}.</p>
          </div>
        )}
      </div>
    </div>
  );
}
