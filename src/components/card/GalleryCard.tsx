"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryCardProps = {
  images: GalleryImage[];
  layout?: "about" | "room";
  controlsOnHoverAt?: "always" | "xl";
  href?: string;
};

export default function GalleryCard({
  images,
  layout = "room",
  controlsOnHoverAt = "xl",
  href,
}: GalleryCardProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const canPrev = index > 0;
  const canNext = index < total - 1;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!canPrev) return;
    setIndex((i) => (i - 1 < 0 ? 0 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!canNext) return;
    setIndex((i) => (i + 1 > total - 1 ? total - 1 : i + 1));
  };

  const goToSlide = (e: React.MouseEvent, newIdx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(newIdx);
  };

  // width based on context
  const wrapperWidthClass =
    layout === "about"
      ? "w-[90%] sm:w-full xl:max-w-md"
      : "w-[22rem] lg:w-[28rem]";

  const aspectClass = "aspect-[10/14] xl:aspect-[10/13]";
  const radiusClass = "rounded-[1.25rem]";

  // how arrow buttons appear
  const arrowsVisibilityClass =
    controlsOnHoverAt === "always"
      ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      : "opacity-0 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300";

  // shared button base
  const baseBtnClasses = `
    flex items-center justify-center
    w-10 h-10 sm:w-12 sm:h-12
    rounded-md border text-white
    bg-white/20 backdrop-blur-md
    transition duration-300
  `;

  const enabledBtnClasses = `
    border-white/50
    hover:bg-white/30 hover:border-white/80
    cursor-pointer
  `;

  const disabledBtnClasses = `
    border-white/30
    opacity-40
    cursor-default
    pointer-events-none
  `;

  return (
    <div className={`relative group ${wrapperWidthClass}`}>
      <FigureWrapper href={href}>
        <figure
          className={`
            relative w-full h-full overflow-hidden
            ${aspectClass}
            ${radiusClass}
            bg-black/10
            transition-transform duration-500 ease-out
            group-hover:scale-[1.02]
          `}
        >
          {/* IMAGE STACK (crossfade dissolve) */}
          <div className="absolute inset-0">
            {images.map((img, i) => (
              <Image
                key={img.src + i}
                src={img.src}
                alt={img.alt}
                fill
                className={`
                  object-cover ${radiusClass}
                  transition-opacity duration-500 ease-out
                  ${i === index ? "opacity-100" : "opacity-0"}
                `}
                priority={i === 0}
              />
            ))}
          </div>

          {/* NAV OVERLAY ROW
             We now render ONE row with:
             [PrevButton] [Dots] [NextButton]
             - Dots are ALWAYS visible (no opacity classes)
             - Prev/Next have the hover-fade classes individually
          */}
          <div
            className="
              absolute bottom-5 left-0 right-0
              flex items-center justify-between
              px-4
            "
          >
            {/* Prev */}
            <button
              onClick={prev}
              className={`
                ${baseBtnClasses}
                ${canPrev ? enabledBtnClasses : disabledBtnClasses}
                rotate-180
                pointer-events-auto
                ${arrowsVisibilityClass}
              `}
              aria-disabled={!canPrev}
            >
              <ArrowIcon />
            </button>

            {/* Dots (centered naturally in the flex row) */}
            <ul className="flex gap-2">
              {images.map((_, dotIdx) => (
                <li
                  key={dotIdx}
                  onClick={(e) => goToSlide(e, dotIdx)}
                  className={`
                    w-2.5 h-2.5 rounded-full cursor-pointer transition-opacity duration-300
                    ${
                      dotIdx === index
                        ? "bg-white opacity-100"
                        : "bg-white opacity-50 hover:opacity-100"
                    }
                  `}
                />
              ))}
            </ul>

            {/* Next */}
            <button
              onClick={next}
              className={`
                ${baseBtnClasses}
                ${canNext ? enabledBtnClasses : disabledBtnClasses}
                pointer-events-auto
                ${arrowsVisibilityClass}
              `}
              aria-disabled={!canNext}
            >
              <ArrowIcon />
            </button>
          </div>
        </figure>
      </FigureWrapper>
    </div>
  );
}

// We keep FigureWrapper outside render to satisfy React.
function FigureWrapper({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return <>{children}</>;
  }
  return (
    <a href={href} className="block">
      {children}
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 stroke-[1.5]"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
}
