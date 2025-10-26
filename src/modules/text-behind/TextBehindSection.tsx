"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function TextBehindImageSection() {
  // We'll track scroll progress only for this section, not the whole page
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // scrollYProgress = 0 when top of section hits bottom of viewport
  // scrollYProgress = 1 when bottom of section hits top of viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /**
   * Horizontal movement mapping.
   *
   * We turn scroll progress (0 → 1) into X translate.
   * Tune these numbers until it matches the feel of the site.
   *
   * Positive = move to the right
   * Negative = move to the left
   */
  const line1X = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const line2X = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      ref={sectionRef}
      data-slice-type="text_behind_image"
      data-slice-variation="video"
      className="relative flex items-center justify-center overflow-hidden bg-bg-cream"
    >
      {/* ===== BACKGROUND MOVING TEXT ===== */}
      <ul className="pointer-events-none absolute inset-0 flex flex-col justify-center w-full leading-none text-accent-muted/30 font-americana text-opacity-10 font-brand select-none">
        {/* Row 1 */}
        <motion.li
          style={{ x: line1X }}
          className="min-w-full whitespace-nowrap flex text-[clamp(3rem,6vw,7rem)] font-brand tracking-[-0.04em] leading-none text-brand/10"
        >
          <span className="block w-full">Balance&nbsp;-&nbsp;Relaxation</span>
        </motion.li>

        {/* Row 2 */}
        <motion.li
          style={{ x: line2X }}
          className="min-w-full whitespace-nowrap flex text-[clamp(3rem,6vw,7rem)] font-brand tracking-[-0.04em] leading-none text-brand/10 justify-end"
        >
          <span className="block w-full text-right">
            Renewal&nbsp;-&nbsp;Healing
          </span>
        </motion.li>
      </ul>

      {/* ===== FOREGROUND CONTENT (VIDEO CAPSULE) ===== */}
      <div className="relative w-full flex justify-center cursor-pointer">
        <div className="flex justify-center">
          <div
            className="
              relative flex justify-center items-center overflow-hidden
              transition-all duration-[1000ms]
              rounded-t-[500px]
              max-w-[65vw] h-[90vw]
              sm:max-w-[53vw] sm:h-[74vw]
              xl:max-w-[37vw] xl:h-[49vw]
            "
          >
            {/* media wrapper */}
            <div className="relative h-full aspect-[18/10] w-full">
              {/* Using <video> like original. 
                 If you only have an image, swap with <Image /> below. */}
              <video
                playsInline
                loop
                muted
                preload="auto"
                className="object-cover w-full h-full rounded-lg"
                poster="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
              >
                <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4" />
                <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm" />
              </video>

              {/* mobile badge */}
              <div
                className="
                  absolute bottom-5 left-5 xl:hidden
                  flex items-center gap-2
                  text-light text-lg
                  bg-brand-lighter/60 text-white
                  rounded-full px-4 py-2
                  backdrop-blur-md
                "
              >
                <span className="inline-block aspect-square w-2.5 bg-current rounded-full" />
                <span>Play Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
