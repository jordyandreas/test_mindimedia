"use client";

import GalleryCard, { GalleryImage } from "@/components/card/GalleryCard";

type RoomCardProps = {
  room: {
    name: string;
    slug: string;
    images: GalleryImage[];
    description: string;
  };
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="group space-y-4 sm:space-y-4 -mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0 w-[22rem] lg:w-[28rem]">
      {/* Image gallery - clickable to slug */}
      <GalleryCard
        images={room.images}
        layout="room"
        controlsOnHoverAt="xl"
        href={room.slug}
      />

      {/* Text content */}
      <footer className="space-y-4">
        <header className="space-y-2.5 lg:space-y-3.5">
          <a
            href={room.slug}
            className="
              block
              font-americana text-accent-gold
              text-[1.25rem] md:text-[1.5rem] leading-tight
              hover:text-accent-gold transition-colors duration-200
            "
          >
            {room.name}
          </a>

          <div className="text-text-dark/80 text-sm md:text-base leading-relaxed pr-4 xl:pr-20 mt-3">
            <p
              dangerouslySetInnerHTML={{
                __html: room.description,
              }}
            />
          </div>
        </header>

        <nav>
          <a
            href={room.slug}
            className="
              inline-block text-accent-gold text-sm font-medium capitalize
              underline underline-offset-4 decoration-accent-gold/60 hover:decoration-accent-gold
            "
          >
            Discover
          </a>
        </nav>
      </footer>
    </article>
  );
}
