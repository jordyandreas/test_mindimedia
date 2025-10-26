"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function BrandMark({ isScrolled = false }: { isScrolled: boolean }) {
  // Use two target sizes (hero vs scrolled)
  const size = isScrolled ? 64 : 110;

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        transition-all duration-300
      `}
    >
      <Image
        src="/images/logo/logo.png"
        alt="Ulaman Eco Luxury Resort Logo"
        width={size}
        height={size}
        priority
        className={`
          transition-all duration-300
          ${isScrolled ? "opacity-90" : "opacity-100"}
        `}
      />
    </div>
  );
}

function MenuButton({ isScrolled }: { isScrolled: boolean }) {
  const lineColor = isScrolled ? "bg-accent-gold" : "bg-white";

  return (
    <button className="flex items-start gap-3 group">
      <div className="flex flex-col justify-center leading-none">
        <span className={`block h-[2px] w-10 ${lineColor} mb-[6px]`} />
        <span className={`block h-[2px] w-16 ${lineColor}`} />
      </div>
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bg / border / shadow state
  const bgClass = isScrolled
    ? "bg-bg-light-background/95 border-b border-black/20 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm"
    : "bg-transparent border-b border-transparent";

  // height state
  // using fixed h-[...] instead of only min-h avoids layout jump under the bar
  const heightClass = isScrolled ? "h-[105px]" : "h-[150px]";

  // link text color
  const linkColor = isScrolled
    ? "text-accent-gold hover:text-accent-gold"
    : "text-white hover:text-white/80";

  // CTA button styles
  const buttonClasses = isScrolled
    ? "border border-border-gold bg-bg-light-background/80 text-accent-gold hover:bg-bg-light-background"
    : "border border-border-light bg-transparent text-white hover:bg-white/10";


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`
          flex w-full items-center justify-between
          transition-all duration-300
          px-4 md:px-8 xl:px-10
          ${bgClass} ${heightClass}
        `}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-1 items-start md:items-center">
          <nav className="flex items-center space-x-8 md:space-x-10 text-[11px] font-medium tracking-wide uppercase">
            <MenuButton isScrolled={isScrolled} />
            <Link
              href="#villas"
              className={`
    relative inline-block pb-1
    after:absolute after:bottom-0 after:right-0
    after:h-[2px] after:w-0 after:bg-current
    after:transition-all after:duration-300 after:ease-in-out
    hover:after:w-full
    ${linkColor}
  `}
            >
              Villas
            </Link>

            <Link
              href="#spa"
              className={`
    relative inline-block pb-1
    after:absolute after:bottom-0 after:right-0
    after:h-[2px] after:w-0 after:bg-current
    after:transition-all after:duration-300 after:ease-in-out
    hover:after:w-full
    ${linkColor}
  `}
            >
              Spa
            </Link>

            <Link
              href="#dine"
              className={`
    relative inline-block pb-1
    after:absolute after:bottom-0 after:right-0
    after:h-[2px] after:w-0 after:bg-current
    after:transition-all after:duration-300 after:ease-in-out
    hover:after:w-full
    ${linkColor}
  `}
            >
              Dine
            </Link>
            <Link
              href="#retreats"
              className={`
    relative inline-block pb-1
    after:absolute after:bottom-0 after:right-0
    after:h-[2px] after:w-0 after:bg-current
    after:transition-all after:duration-300 after:ease-in-out
    hover:after:w-full
    ${linkColor}
  `}
            >
              Retreats
            </Link>
          </nav>
        </div>

        {/* CENTER LOGO */}
        <div
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            flex flex-col items-center pointer-events-none
          "
        >
          <BrandMark isScrolled={isScrolled} />
        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-1 justify-end items-start md:items-center">
          <button
            className={`
              rounded-tl-md rounded-br-md
              py-3 px-6 md:py-4 md:px-8
              leading-none text-[11px] font-medium uppercase tracking-wide
              transition-colors duration-300
              ${buttonClasses}
            `}
          >
            Stay With Us
          </button>
        </div>
      </div>
    </header>
  );
}
