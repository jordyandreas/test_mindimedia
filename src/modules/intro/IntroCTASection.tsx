"use client";

import ScrollHighlightCharsProgress from "@/components/common/ScrollHighlightHeading";

export default function IntroCTASection() {
  return (
    <section className="text-center flex items-center justify-center">
      <div
        className={`
          w-full max-w-[44rem] px-4 sm:px-6 xl:px-0
          py-[6rem] md:py-[8rem]
        `}
        style={
          {
            "--highlight-color": "#b7872b",
            "--muted-color": "rgba(183,135,43,0.25)",
          } as React.CSSProperties
        }
      >
        <ScrollHighlightCharsProgress
          className="
            text-[2rem] leading-snug md:text-[2.5rem] md:leading-snug
            font-normal
          "
          text={
            "Nestled among the rice fields and coconut trees of Tabanan, Ulaman is only 20 minutes away from the vibrant town of Canggu."
          }
          // tweak this to control how long it takes to fully reveal
          scrollRange={300}
        />
      </div>
    </section>
  );
}
