"use client";

import { PackageInfo } from "@/data/packageData";
import Image from "next/image";
import Link from "next/link";

type PackageCardProps = {
  pkg: PackageInfo;
};

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article
      className={`
        cursor-pointer
        group
        -mr-4 pl-6 pt-2.5
        sm:mr-0 sm:px-0
        space-y-5
        group-last:pr-6
      `}
    >
      {/* image wrapper */}
      <div
        className={`
          floating-element-decoration
          w-[21.5rem] sm:w-72 lg:w-[21.5rem]
          aspect-[10/10.6]
          relative
        `}
      >
        {/* “floating” look = soft outer shadow / lift */}
        <div
          className={`
            absolute inset-0 rounded-lg
            shadow-[0_30px_80px_rgba(0,0,0,0.4)]
            opacity-30
            blur-2xl
            scale-[0.9]
            pointer-events-none
          `}
        />

        <div className="relative z-10 w-full h-full">
          <Image
            src={pkg.image}
            alt={pkg.alt}
            fill
            className="
              object-cover
              rounded-lg
              transition-transform duration-500 ease-out
              group-hover:scale-[1.03]
            "
          />
        </div>
      </div>

      {/* text / footer */}
      <footer className="space-y-4 text-text-dark">
        {/* badge */}
        <span
          className={`
            inline-block
            rounded-md
            px-2.5 py-1
            text-[0.7rem] tracking-wide uppercase leading-none
            text-dark
            bg-bg-light-empashis
            
          `}
        >
          {pkg.duration}
        </span>

        {/* title + Discover */}
        <div className="space-y-3 sm:space-y-3.5 lg:space-y-3">
          <h3
            className={`
              font-americana text-accent-gold
              text-[1.4rem] leading-tight
              sm:text-[1.45rem]
              lg:text-[1.5rem]
            `}
          >
            {pkg.title}
          </h3>

          <nav>
            <Link
              href={pkg.href}
              className={`
                inline-block
                text-accent-gold lg:text-[0.8rem]
                uppercase tracking-wide
                underline decoration-accent-gold/40 underline-offset-[4px]
                hover:decoration-accent-gold
              `}
            >
              Discover
            </Link>
          </nav>
        </div>
      </footer>
    </article>
  );
}
