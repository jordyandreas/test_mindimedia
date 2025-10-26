"use client";

import RoomCard from "./RoomCard";
import { GalleryImage } from "@/components/card/GalleryCard";

type Room = {
  name: string;
  slug: string;
  images: GalleryImage[];
  description: string;
};

const ROOMS: Room[] = [
  {
    name: "Floating Lake",
    slug: "/rooms/floating-lake",
    images: [
      {
        src: "/images/rooms/floating-lake-1.jpg",
        alt: "Floating Lake Villa aerial view",
      },
      {
        src: "/images/rooms/floating-lake-2.jpg",
        alt: "Floating Lake bathroom",
      },
      {
        src: "/images/rooms/floating-lake-3.jpg",
        alt: "Floating Lake interior",
      },
    ],
    description:
      "A <em>luxurious</em> floating villa on Ulaman's bio-filtered lake.",
  },
  {
    name: "Cocoon Jungle",
    slug: "/rooms/cocoon-jungle",
    images: [
      {
        src: "/images/rooms/cocoon-1.jpg",
        alt: "Cocoon Upper Deluxe exterior",
      },
      { src: "/images/rooms/cocoon-2.jpg", alt: "Cocoon balcony" },
      { src: "/images/rooms/cocoon-3.jpg", alt: "Cocoon interior" },
      { src: "/images/rooms/cocoon-4.jpg", alt: "Cocoon bathroom" },
    ],
    description:
      "Indulge in an unparalleled <em>blend of exotic elegance and coziness.</em>",
  },
  {
    name: "Avatar Tree House",
    slug: "/rooms/avatar-tree-house",
    images: [
      { src: "/images/rooms/avatar-1.jpg", alt: "Sky villa exterior" },
      { src: "/images/rooms/avatar-2.jpg", alt: "Sky villa room view" },
      { src: "/images/rooms/avatar-3.jpg", alt: "Sky villa bathroom" },
    ],
    description:
      "Experience luxury in an <em>avatar-inspired</em> sky villa with 180° views.",
  },
  {
    name: "Grand Lagoon Private Pool",
    slug: "/rooms/grand-lagoon-private-pool",
    images: [
      { src: "/images/rooms/lagoon-1.jpg", alt: "Grand Lagoon Villa" },
      { src: "/images/rooms/lagoon-2.jpg", alt: "Grand Lagoon interior" },
      { src: "/images/rooms/lagoon-3.jpg", alt: "Grand Lagoon lounge" },
      { src: "/images/rooms/lagoon-4.jpg", alt: "Grand Lagoon bathroom" },
    ],
    description:
      "Indulge in an <em>exclusive riverside villa</em> with jungle lagoon view.",
  },
  {
    name: "Jungle Garden Pool",
    slug: "/rooms/jungle-garden-pool",
    images: [
      {
        src: "/images/rooms/jungle-garden-1.jpg",
        alt: "Poolside villa interior",
      },
      {
        src: "/images/rooms/jungle-garden-2.jpg",
        alt: "Poolside villa bathroom",
      },
      { src: "/images/rooms/jungle-garden-3.jpg", alt: "Pool access view" },
    ],
    description:
      "A <em>luxurious jungle ground-floor oasis</em> with direct access to the infinity pool.",
  },
  {
    name: "Ulin Poolside",
    slug: "/rooms/ulin-poolside",
    images: [
      { src: "/images/rooms/ulin-1.jpg", alt: "Poolside villa interior" },
      { src: "/images/rooms/ulin-2.jpg", alt: "Poolside villa bathroom" },
      { src: "/images/rooms/ulin-3.jpg", alt: "Pool access view" },
      { src: "/images/rooms/ulin-4.jpg", alt: "Evening outdoor dining" },
    ],
    description:
      "A <em>luxurious jungle ground-floor oasis</em> with direct access to the infinity pool.",
  },
];

export default function RoomsCarouselSection() {
  return (
    <section className="bg-bg-cream text-text-dark space-y-10 sm:space-y-11 lg:space-y-16">
      {/* heading */}
      <header className="flex justify-center text-center px-4">
        <div className="w-full max-w-[40rem] space-y-5 sm:space-y-6 xl:space-y-5">
          <h2
            className={`
              font-americana text-accent-gold
              leading-[1.25]
              text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]
              tracking-tight
            `}
          >
            <div>Discover cozy elegance, where tranquility</div>
            <div>meets Bali’s serene beauty.</div>
          </h2>
        </div>
      </header>

      {/* row */}
      <section
        className="
          relative flex sm:gap-9 lg:gap-20 2xl:gap-52
          px-0 sm:px-6 lg:px-10
        "
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
      >
        {/* left side vertical nav (visual only / not wired yet) */}
        <aside className="hidden sm:flex flex-col gap-3.5 lg:gap-6 text-accent-gold pt-24 lg:pt-40">
          <button
            className="
              w-16 lg:w-20
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled
          >
            <div
              className="
                aspect-square w-full rounded-md border border-current
                flex items-center justify-center rotate-180
              "
            >
              <ArrowIcon />
            </div>
          </button>

          <button
            className="
              w-16 lg:w-20
            "
          >
            <div
              className="
                aspect-square w-full rounded-md border border-current
                flex items-center justify-center
              "
            >
              <ArrowIcon />
            </div>
          </button>
        </aside>

        {/* horizontal scroll list of cards */}
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex pl-4 sm:pl-0 -ml-4 gap-6 sm:gap-0">
            {ROOMS.map((room) => (
              <div
                key={room.slug}
                className="
                  min-w-0 shrink-0 grow-0 basis-auto
                  pl-4 sm:pl-7 last:pr-6 pb-1
                "
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 stroke-1"
    >
      <path d="M18 8L22 12L18 16"></path>
      <path d="M2 12H22"></path>
    </svg>
  );
}
