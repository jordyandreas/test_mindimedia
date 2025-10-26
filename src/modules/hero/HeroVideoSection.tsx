"use client";

import Image from "next/image";

export default function HeroVideoSection() {
  return (
    <section
      data-slice-type="image_video_slice"
      data-slice-variation="video"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10 pointer-events-none" />

      {/* YouTube iframe full-screen cover */}
      <iframe
        id="ulamanHeroVideo"
        className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 md:w-[100vw] md:h-[56.25vw] md:min-w-full md:min-h-full object-cover"
        src="https://www.youtube.com/embed/pqkVOxt7Tk4?autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=pqkVOxt7Tk4&modestbranding=1&playsinline=1"
        title="Ulaman Eco Luxury Resort"
        allow="autoplay; fullscreen; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* fallback image if video fails */}
      {/* <div className="hidden absolute inset-0 bg-bg-cream">
        <Image
          src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
          alt="Ulaman Eco Luxury Resort"
          className="w-full h-full object-cover"
        />
      </div> */}
    </section>
  );
}
