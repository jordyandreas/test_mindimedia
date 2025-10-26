"use client";

import { useEffect, useRef, useState } from "react";

type ScrollHighlightCharsProgressProps = {
  text: string;
  className?: string;
  scrollRange?: number; // how far (px) from first visible → fully highlighted
};

export default function ScrollHighlightCharsProgress({
  text,
  className = "",
  scrollRange = 300,
}: ScrollHighlightCharsProgressProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [revealCount, setRevealCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      /**
       * New logic:
       * - start = vh (bottom of viewport)
       *   So as soon as the element's top is ABOVE the bottom of viewport,
       *   progress becomes positive → we start revealing.
       *
       * - end = start - scrollRange
       *   After we've scrolled `scrollRange` px more with this block,
       *   it's fully revealed.
       */
      const start = vh; // trigger ASAP when in viewport
      const end = start - scrollRange;

      // map rect.top to a 0..1 progress
      let progress = (start - rect.top) / (start - end);

      // clamp
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const totalChars = text.length;
      const nextReveal = Math.floor(progress * totalChars);

      setRevealCount(nextReveal);
    };

    // run once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [text, scrollRange]);

  const chars = Array.from(text);

  return (
    <div
      ref={containerRef}
      className={`leading-[1.2] font-light text-balance ${className}`}
      style={{
        fontFamily:
          '"Libre Baskerville", "Times New Roman", ui-serif, Georgia, serif',
      }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className={`
            transition-colors duration-[400ms] will-change-[color]
            ${
              i <= revealCount
                ? "text-[var(--highlight-color)]"
                : "text-[var(--muted-color)]"
            }
          `}
          style={{
            display: "inline-block",
            padding: "0 .02em",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
