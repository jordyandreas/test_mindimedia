"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ArchRevealSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    function handleScroll() {
      const rect = el?.getBoundingClientRect();
      const vh = window.innerHeight;

      // NEW:
      // We let the animation begin when the section is still
      // well below the viewport. That means we pretend our
      // "startPoint" is ~1.4 * viewport height from top.
      //
      // So:
      // - When rect.top == 1.4*vh -> progress = 0
      //   (section top is still below the fold)
      //
      // - When rect.top == 0.15*vh -> progress = 1
      //   (section head is well inside the viewport)
      //
      const startPoint = vh * 1;
      const endPoint = vh * 0.15;

      const raw = rect && (startPoint - rect.top) / (startPoint - endPoint);

      const clamped = raw && Math.max(0, Math.min(1, raw));
      
      if (clamped) {
        setProgress(clamped);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // visual mapping
  const startWidth = 50;
  const endWidth = 100;
  const widthNow = lerp(startWidth, endWidth, progress);

  const startRadius = 720;
  const endRadius = 200;
  const radiusNow = lerp(startRadius, endRadius, easeOut(progress));

  return (
    <section
      ref={sectionRef}
      className={`
        bg-bg-cream
        flex justify-center
        aspect-[16/9] min-h-screen
        xl:h-[150vh] xl:aspect-auto
        sandikala-rounded-exception
        overflow-visible
      `}
      data-slice-type="arch_media"
      data-slice-variation="default"
    >
      <div
        className={`
          relative flex justify-center
          h-full
          overflow-hidden
          bg-cover bg-center bg-no-repeat
          rounded-b-none
        `}
        style={{
          width: `${widthNow}%`,
          borderRadius: `${radiusNow}px ${radiusNow}px 0 0`,
          transition: "border-radius 0.2s linear, width 0.2s linear",
          backgroundImage:
            'url("https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress")',
        }}
      >
        <div className="pointer-events-none select-none absolute inset-0">
          <Image
            src="https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress"
            alt="Ulaman bamboo villa architecture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

// linear interpolation
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// keep the bulby arch longer, then flatten quickly near the end
function easeOut(t: number) {
  return 1 - (1 - t) * (1 - t);
}
