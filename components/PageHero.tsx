import Image from "next/image";

export default function PageHero({ image, eyebrow, title, intro }: { image: string; eyebrow?: string; title: string; intro?: string }) {
  return (
    <section>
      <div className="relative h-[52vh] min-h-[340px] w-full md:h-[62vh]">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="container-x py-14 text-center md:py-20">
        {eyebrow && <p className="kicker text-gold-deep">{eyebrow}</p>}
        <h1 className="h-display mt-2 text-2xl md:text-4xl">{title}</h1>
        <div className="mx-auto mt-6 h-px w-10 bg-gold" />
        {intro && <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">{intro}</p>}
      </div>
    </section>
  );
}
