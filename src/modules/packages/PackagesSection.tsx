"use client";

import { packagesData } from "@/data/packageData";
import { useRef, useState, useEffect, useCallback } from "react";
import PackageCard from "./PackageCard";

export default function PackagesCarousel() {
  // ref to the scrollable row
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // update arrow enable/disable based on scroll position
  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth - 4; // fudge
    setCanPrev(scrollLeft > 2);
    setCanNext(scrollLeft < maxScroll);
  }, []);

  // attach scroll listener
  useEffect(() => {
    updateButtons();
    const el = trackRef.current;
    if (!el) return;
    const fn = () => updateButtons();
    el.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn);
    return () => {
      el.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
    };
  }, [updateButtons]);

  // scroll helpers
  function scrollByCard(dir: "prev" | "next") {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).getBoundingClientRect().width
      : 320;
    const delta = dir === "next" ? cardWidth + 24 : -(cardWidth + 24);
    el.scrollTo({
      left: el.scrollLeft + delta,
      behavior: "smooth",
    });
  }

  return (
    <section
      data-slice-type="packages_carousel"
      data-slice-variation="withTitle"
      className="bg-bg-cream text-text-dark flex flex-col space-y-11 lg:space-y-16 py-16 sm:py-20"
    >
      {/* heading */}
      <header className="flex justify-center px-4">
        <div
          className={`
            mx-auto
            text-center
            space-y-5 sm:space-y-6 xl:space-y-5
            max-w-[24.35rem] lg:max-w-[30rem]
          `}
        >
          <h2
            className={`
              font-americana text-accent-gold
              text-[1.6rem] leading-[1.25]
              sm:text-[1.9rem]
              md:text-[2.1rem]
              lg:text-[2.2rem]
            `}
          >
            <div>Book one of our special</div>
            <div>packages for a getaway you’ll</div>
            <div>never forget.</div>
          </h2>
        </div>
      </header>

      {/* carousel row */}
      <div
        className={`
          flex items-start sm:items-center
          sm:px-8 lg:px-20 2xl:px-52
          gap-6 sm:gap-9 lg:gap-20
        `}
      >
        {/* left vertical nav buttons (only >=sm, like original) */}
        <div className="hidden sm:flex flex-col gap-4 text-accent-gold">
          {/* Prev */}
          <button
            onClick={() => scrollByCard("prev")}
            disabled={!canPrev}
            className={`
              w-16 lg:w-20 aspect-square
              flex items-center justify-center
              border border-current rounded
              rotate-180
              text-accent-gold
              transition-opacity duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
            `}
          >
            <ArrowIcon />
          </button>

          {/* Next */}
          <button
            onClick={() => scrollByCard("next")}
            disabled={!canNext}
            className={`
              w-16 lg:w-20 aspect-square
              flex items-center justify-center
              border border-current rounded
              text-accent-gold
              transition-opacity duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
            `}
          >
            <ArrowIcon />
          </button>
        </div>

        {/* scroll track */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className={`
              flex -ml-4
              overflow-x-auto
              pb-4
              snap-x snap-mandatory
              no-scrollbar
            `}
          >
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`
                  pl-4 pb-1
                  snap-start
                  flex-shrink-0
                  basis-auto
                  group
                  sm:pl-10 sm:last:pr-10
                  lg:pl-18 lg:last:pr-18
                `}
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// lil arrow icon same as lucide "move-right"
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[1.2]"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
}
