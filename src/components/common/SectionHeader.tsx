type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl fade-up ${alignClass}`}>
      {eyebrow && (
        <p className="font-display text-accent-gold text-sm uppercase tracking-wide">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-3xl text-white md:text-4xl">{title}</h2>

      {description && (
        <p className="mt-4 text-text-softer text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
