export default function SectionTitle({ eyebrow, title, className = "" }: { eyebrow?: string; title: string; className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && <p className="kicker text-gold-deep">{eyebrow}</p>}
      <h2 className="h-display mt-2 text-xl md:text-[26px]">{title}</h2>
      <div className="mx-auto mt-5 h-px w-10 bg-gold" />
    </div>
  );
}
