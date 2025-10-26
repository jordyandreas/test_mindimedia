export function CallToActionSection() {
  return (
    <section
      data-slice-type="call_to_action"
      data-slice-variation="default"
      className="
        app-container
        bg-bg-cream
        text-brand
        -mb-18 sm:-mb-14 lg:-mb-20 xl:-mb-18
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-[31.25rem] lg:max-w-[40rem]
          space-y-5 sm:space-y-6 xl:space-y-5
          text-center
        "
      >
        {/* text block */}
        <div className="text-center space-y-em" id="cta-9-text-block">
          <h4 className="heading display-4">
            <span className="block">
              A world-class gastronomic journey where
            </span>
            <span className="block">
              nature’s finest ingredients meet culinary
            </span>
            <span className="block">craftsmanship.</span>
          </h4>
        </div>

        {/* buttons row */}
        <ul
          className="
            flex flex-wrap w-full
            justify-center items-center
            text-brand
            gap-x-5 gap-y-8
          "
        >
          <li className="inline-block cta-buttons">
            <a
              href="https://earthbyulaman.com/"
              className="
                relative
                inline-block
                rounded-full
                px-6 py-2.5
                text-[0.95rem] leading-none tracking-tight font-medium
                text-brand
                ui-underline-anim reverse
                transition-all duration-300
                hover:bg-brand hover:text-bg-cream
                hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                after:content-[''] after:absolute after:left-1/2 after:bottom-0
                after:h-[1px] after:w-0 after:bg-current after:-translate-x-1/2
                after:transition-all after:duration-300 hover:after:w-full
              "
            >
              Visit The Website
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
