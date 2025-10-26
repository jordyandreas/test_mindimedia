"use client";

import GalleryCard from "@/components/card/GalleryCard";
import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  const images = [
    {
      src: "/images/resort/resort-hero-1.jpg",
      alt: "Ulaman Bali",
    },
    {
      src: "/images/resort/resort-hero-2.jpg",
      alt: "The Best Infinity Pool at Sunset Time in Bali",
    },
    {
      src: "/images/resort/resort-hero-3.jpg",
      alt: "Ice Bath and Hot Bath at Riverside Spa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextSlide = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="text-text-dark flex justify-center">
      <div
        className="
          flex flex-col sm:flex-row
          gap-10 sm:gap-11 lg:gap-20 xl:gap-32
          sm:items-center lg:justify-between
          w-full max-w-7xl
          px-4 sm:px-6 lg:px-10
          py-16 md:py-24
        "
      >
        {/* LEFT: IMAGE / SLIDER */}
        <div className="w-full xl:max-w-md flex-shrink-0 flex justify-center sm:justify-start">
          <GalleryCard
            images={images}
            layout="about"
            controlsOnHoverAt="always"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="w-full xl:max-w-xl relative">
          <div className="space-y-8 lg:space-y-6 xl:space-y-8">
            <h2 className={"display-5"}>
              <div>An award-winning eco-luxury resort offering</div>
              <div>a unique hideaway experience. Embrace</div>
              <div>authenticity, balance, and harmony with</div>
              <div>nature in a healing, luxurious environment.</div>
            </h2>

            <p className="text-text-dark/90 text-base md:text-[1.05rem] leading-relaxed">
              We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
              offers{" "}
              <em className="italic">
                a secluded, lush haven with luxurious amenities and impeccable
                service
              </em>
              . Immerse yourself in traditional Balinese culture and leave
              feeling renewed, all while minimizing your ecological footprint.
              Recharge your mind, body, and soul in this unique holistic
              retreat.
            </p>

            <p>
              <a
                href="/about"
                className="
                  inline-block text-accent-gold text-sm font-medium uppercase tracking-wide
                  underline underline-offset-4 decoration-accent-gold/60 hover:decoration-accent-gold
                "
              >
                About Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
