"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function CurtainRevealSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 0 = curtain ketutup rapat di tengah
  // 1 = curtain kebuka maksimal ke sisi kiri/kanan
  const [curtainProgress, setCurtainProgress] = useState(0);

  // 0 = text hidden, 1 = text terlihat
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // --- CURTAIN OPEN PROGRESS ---
      // mulai buka saat top section baru nongol sedikit (di bawah layar)
      const curtainStart = vh; // top masih di bawah viewport
      // curtain fully open ketika top section kira2 udah naik ke ~50vh
      const curtainEnd = vh * 0.5;

      let curtainRaw = (curtainStart - rect.top) / (curtainStart - curtainEnd);
      if (curtainRaw < 0) curtainRaw = 0;
      if (curtainRaw > 1) curtainRaw = 1;

      // --- TEXT FADE PROGRESS ---
      // text mulai muncul ketika center section udah mendekati center viewport
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;

      // textStartY: mulai fade in ketika center section ada di bawah tengah viewport
      const textStartY = vh * 0.65; // mulai sedikit lebih awal biar smooth
      const textEndY = viewportCenter; // full visible pas di tengah

      let textRaw = (textStartY - sectionCenter) / (textStartY - textEndY);
      if (textRaw < 0) textRaw = 0;
      if (textRaw > 1) textRaw = 1;

      setCurtainProgress(curtainRaw);
      setTextProgress(textRaw);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // tiny helper
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // =========================
  // CURTAIN MOTION
  // =========================
  //
  // STATE 0 (awal, ketutup rapat di tengah):
  // - translateX = 0 (dua gambar numpuk di tengah)
  // - translateY = 120px (agak di bawah mata)
  // - rotate = 0deg (lurus tegak)
  //
  // STATE 1 (kebuka penuh):
  // - kiri: jauh banget ke kiri (-45vw), sedikit naik (-20px), rotasi -8deg
  // - kanan: jauh ke kanan (45vw), sedikit naik (-20px), rotasi 8deg
  //
  // kenapa pakai vw? supaya bener-bener ke sisi layar, bukan cuma 180px
  //
  const leftX = lerp(0, -45, curtainProgress); // in vw
  const rightX = lerp(0, 45, curtainProgress); // in vw

  const sharedY = lerp(120, -20, curtainProgress); // px
  const leftRot = lerp(0, -8, curtainProgress); // deg
  const rightRot = lerp(0, 8, curtainProgress); // deg

  // =========================
  // TEXT MOTION
  // =========================
  // kamu minta: opacity aja, kecilin text
  const textOpacity = textProgress;

  return (
    <section className="bg-bg-cream py-24 sm:py-28 lg:py-32">
      <div
        ref={sectionRef}
        className="
          relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8
          min-h-[90vh] flex items-center justify-center
          overflow-visible
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            absolute left-1/2 top-1/2
            w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px]
            aspect-[10/14]
            rounded-md overflow-hidden
            shadow-[0_40px_120px_rgba(0,0,0,0.4)]
            will-change-transform
          "
          style={{
            transform: `
              translate(-50%, -50%)
              translate(calc(${leftX}vw), ${sharedY}px)
              rotate(${leftRot}deg)
            `,
          }}
        >
          <Image
            src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
            alt="Reiki Healing"
            fill
            className="object-cover"
            sizes="360px"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            absolute left-1/2 top-1/2
            w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px]
            aspect-[10/14]
            rounded-md overflow-hidden
            shadow-[0_40px_120px_rgba(0,0,0,0.4)]
            will-change-transform
          "
          style={{
            transform: `
              translate(-50%, -50%)
              translate(calc(${rightX}vw), ${sharedY}px)
              rotate(${rightRot}deg)
            `,
          }}
        >
          <Image
            src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
            alt="Ulaman Retreats"
            fill
            className="object-cover"
            sizes="360px"
          />
        </div>

        {/* CENTER TEXT */}
        <div
          className="
            relative z-10 max-w-[640px]
            text-center px-4 sm:px-6
          "
          style={{
            opacity: textOpacity,
          }}
        >
          {/* heading a bit smaller now */}
          <h2
            className="
              font-americana text-accent-gold
              text-[1.25rem] leading-snug
              sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem]
            "
          >
            Discover your path to
            <br />
            wellness and growth.
          </h2>

          {/* body = 12px like you asked */}
          <p
            className="
              mt-4 sm:mt-5 text-text-dark/80
              text-[12px] leading-relaxed
              sm:text-[12px] sm:leading-relaxed
            "
          >
            At Ulaman we redefine luxury as an experience that not only pampers
            the senses but also nurtures the soul. Nestled in pristine nature,
            our eco-luxury retreat offers a sanctuary for healing and
            transformation. With personalized programs year-round, enjoy
            dedicated attention and care, immersing yourself in relaxation,
            rejuvenation, or profound inner change through meticulously curated
            activities and treatments.{" "}
            <em>Your transformative journey begins here.</em>
          </p>

          <button
            className="
              mt-6 inline-block text-accent-gold uppercase tracking-wide
              text-[11px] font-medium border-b border-accent-gold/60
              hover:border-accent-gold
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
