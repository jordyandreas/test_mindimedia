import { HeroContent } from "./hero.types";

export default function HeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-black text-white"
      id="hero"
    >
      {/* bg image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg/95" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center fade-up">
        <p className="mb-2 font-display text-base text-accent-gold tracking-wide uppercase">
          {hero.subheading}
        </p>
        <h1 className="max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
          {hero.heading}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-text-dim md:text-base">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-full bg-accent-gold/90 px-6 py-3 text-sm font-semibold text-black hover:bg-accent-gold">
            Book Your Stay
          </button>
          <button className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">
            Explore Villas
          </button>
        </div>
      </div>
    </section>
  );
}
