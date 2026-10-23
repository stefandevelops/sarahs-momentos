"use client";
import { useId, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FAQS } from "@/lib/placeholders";

/** Accessible accordion (button + aria-expanded + aria-controls). Answers are PLACEHOLDERS. */
export default function FAQ({ asPageTitle = false }: { asPageTitle?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" className="container-x scroll-mt-24 py-20 md:py-28">
      {!asPageTitle && <SectionTitle eyebrow="Good to know" title="Frequently Asked Questions" />}
      <ul className={`mx-auto max-w-3xl border-t border-line ${asPageTitle ? "" : "mt-14"}`}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          const btnId = `${base}-q${i}`;
          const panelId = `${base}-a${i}`;
          return (
            <li key={f.q} className="border-b border-line">
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-[12px] uppercase tracking-[0.2em] transition-colors hover:text-gold-deep md:text-[13px]"
                >
                  {f.q}
                  <span aria-hidden="true" className={`text-lg font-light text-gold-deep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="pb-7 pr-10">
                <p className="text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
