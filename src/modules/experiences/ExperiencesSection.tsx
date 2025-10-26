"use client";

import Image from "next/image";

type Experience = {
  id: string;
  image: string;
  alt: string;
  title: string;
  href?: string;
};

const EXPERIENCES: Experience[] = [
  {
    id: "yoga",
    image:
      "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
    alt: "Yoga Shala at Ulaman Eco Luxury Retreat: Bamboo sanctuary for yoga, meditation, and wellness in Bali’s lush nature.",
    title: "Private Yoga Session (Hatha, Yin or Fly High Yoga)",
  },
  {
    id: "romantic-bed",
    image:
      "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
    alt: "Bed decorations",
    title: "Romantic Bed Decorations",
  },
  {
    id: "helicopter",
    image:
      "https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress",
    alt: "Helicopter flight",
    title: "VIP Airport Transfers via Helicopter",
  },
  {
    id: "floating",
    image:
      "https://images.prismic.io/ulaman/ZnDlX5m069VX10tJ_eco-retreat-bali.jpg?auto=format,compress",
    alt: "Best floating breakfast or lunch in Bali at Ulaman Eco Luxury Retreat",
    title: "Floating Breakfast or Lunch",
  },
  {
    id: "tennis",
    image:
      "https://images.prismic.io/ulaman/ZnWOMpbWFbowew-3_eco-reosrt.jpg?auto=format,compress",
    alt: "Girl playing tennis",
    title: "Private Tennis Coach",
  },
  {
    id: "culinary",
    image:
      "https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress",
    alt: "Earth dining space",
    title:
      "Romantic 5-Star Culinary Experience by Ulaman's Natural Waterfalls!",
  },
];

export default function ExperiencesSection() {
  return (
    <section
      data-slice-type="experiences_catalog"
      data-slice-variation="allExperiencesCollage"
      className="bg-bg-cream text-brand"
    >
      <div className="app-container py-12 sm:py-20 xl:py-24">
        {/* collage grid */}
        <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
          <figure
            className="
              columns-2 gap-1.5 space-y-2
              md:columns-3 md:gap-2
              xl:column
            "
          >
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className={[
                  // per-item aspect ratio (copied from real markup)
                  idx === 0
                    ? "aspect-[10/14] sm:aspect-[10/19] lg:aspect-[10/14] xl:aspect-[10/12.5]"
                    : idx === 1
                    ? "aspect-[10/13] sm:aspect-[10/16] lg:aspect-[10/12] xl:aspect-[10/9.5]"
                    : idx === 2
                    ? "aspect-[10.8/10] sm:aspect-[10/15] lg:aspect-[10.7/10] xl:aspect-[10/9]"
                    : idx === 3
                    ? "aspect-[10.3/10] sm:aspect-[10/20] lg:aspect-[10/16.7] xl:aspect-[10/13]"
                    : idx === 4
                    ? "aspect-[10/15.5] sm:aspect-[10/19.5] lg:aspect-[10/14] xl:aspect-[10/12.5]"
                    : "aspect-[10/11] sm:aspect-[10/15.5] lg:aspect-[10/12] xl:aspect-[10/9.5]",
                ].join(" ")}
              >
                <div className="relative rounded-md overflow-hidden w-full h-full">
                  <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                    <Image
                      src={exp.image}
                      alt={exp.alt}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    {/* label badge */}
                    <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                      <h6
                        className="
                          badge py-1 leading-tight glass backdrop-blur-3xl
                          bg-light-background/40 text-light-emphasis
                          font-medium text-tiny xl:text-smallest
                          w-fit max-w-full
                        "
                      >
                        {exp.title}
                      </h6>
                    </footer>
                  </article>
                </div>
              </div>
            ))}
          </figure>

          {/* CTA button */}
          <nav className="text-center">
            <a
              href="/activities"
              className="btn-primary ui-underline-anim reverse"
            >
              Discover All Experiences
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
