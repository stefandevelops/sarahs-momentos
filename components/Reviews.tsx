import SectionTitle from "./SectionTitle";
import { RATING, REVIEWS } from "@/lib/placeholders";

function Stars({ n }: { n: number }) {
  return (
    <p className="text-gold" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}<span className="text-line">{"★".repeat(5 - n)}</span>
    </p>
  );
}

/** Review cards + overall rating. ALL CONTENT IS PLACEHOLDER (example reviews, generic initials). */
export default function Reviews() {
  return (
    <section id="reviews" className="container-x py-20 md:py-28">
      <SectionTitle eyebrow="Kind words" title="Reviews" />
      <p className="mt-6 text-center text-sm text-muted">
        Rated <span className="text-ink">{RATING.score} out of {RATING.outOf}</span> from {RATING.count}+ {RATING.source}
        <span className="block text-[12px] font-light">Example rating, placeholder</span>
      </p>
      <ul className="mt-14 grid gap-8 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <li key={r.initials} className="flex flex-col border border-line px-7 py-9 text-center">
            <Stars n={r.stars} />
            <blockquote className="mt-5 flex-1 text-[15px] font-light leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
            <div className="mx-auto my-6 h-px w-8 bg-gold" />
            <p className="text-[12px] font-display font-semibold uppercase tracking-[0.08em]">{r.initials} <span className="text-muted">· {r.occasion}</span></p>
            <p className="mt-2 text-xs text-muted">Example review, placeholder</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
