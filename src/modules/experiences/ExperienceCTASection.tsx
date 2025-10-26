"use client";

export default function ExperienceCTASection() {
  return (
    <section
      className="
        bg-bg-cream text-text-dark
        flex justify-center
        px-4 sm:px-6 lg:px-10
        py-16 md:py-24
      "
      data-slice-type="call_to_action"
      data-slice-variation="default"
    >
      <div
        className="
          w-full
          max-w-[31.25rem] lg:max-w-[40rem]
          mx-auto
          flex flex-col items-center
          space-y-8 sm:space-y-10
        "
      >
        {/* Heading */}
        <div
          className="
            text-center space-y-[0.4em]
          "
          id="cta-4-text-block"
        >
          <h2 className="display-4">
            <div>Experience a blend of nature, comfort and</div>
            <div>luxury like never before.</div>
          </h2>
        </div>

        {/* CTA Button Row */}
        <ul
          className="
            flex flex-wrap w-full justify-center items-center
            text-accent-gold
            gap-x-5 gap-y-8
          "
        >
          <li className="inline-block">
            <a
              href="/book"
              className="
                inline-block
                text-accent-gold
                text-sm font-medium uppercase tracking-wide
                underline underline-offset-4 decoration-accent-gold/60 hover:decoration-accent-gold
              "
            >
              Book Your Stay
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
