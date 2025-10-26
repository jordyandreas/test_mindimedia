// components/sections/UlamanMapSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import MapPin from "@/components/ui/MapPins";
import LocationModal from "@/components/modal/Modal";

export interface LocationItem {
  id: string;
  title: string;
  top: string;
  left: string;
  icon: string;
  images: string[]; // carousel later
  description: string;
  note?: string; // e.g. "Open 24 / 7"
}

// NOTE:
// All top/left come from inline style="top: X%; left: Y%;"
// You already gave these in your HTML. I mapped most of them here.
const LOCATIONS: LocationItem[] = [
  {
    id: "tennis",
    title: "Tennis Court",
    top: "8%",
    left: "56%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description: "Private tennis court area.",
    note: "Available by request",
  },
  {
    id: "gym",
    title: "Gym",
    top: "17%",
    left: "53%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jWpm069VX1y4H_Group5988.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description: "Eco-friendly gym with natural ventilation and garden views.",
    note: "Open 24 / 7",
  },
  {
    id: "lake",
    title: "Bio-Filtered Lake",
    top: "24%",
    left: "33%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Naturally filtered freshwater lake designed for balance and regeneration.",
  },
  {
    id: "reception",
    title: "Reception",
    top: "13%",
    left: "56%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zoag7R5LeNNTwy1E_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Welcome to the Ulaman reception, a stunning masterpiece built above the Ulaman River. Designed by Inspiral Architects and Prima Design Studio, it features rammed earth, bamboo latticework, marble, and terrazzo skylights. Enjoy seamless registration and a welcome drink.",
    note: "Open 24 / 7",
  },
  {
    id: "ulin-poolside",
    title: "Ulin Poolside",
    top: "36%",
    left: "60%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Poolside lounging surrounded by jungle greenery and natural water features.",
  },
  {
    id: "tree-house",
    title: "Tree House",
    top: "31%",
    left: "47%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Handbuilt timber + bamboo treehouse experience elevated above the waterway.",
  },
  {
    id: "cliffside-yoga",
    title: "Cliffside Yoga Shala",
    top: "37%",
    left: "41%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Open-air cliffside shala for sunrise / sunset yoga and sound healing.",
  },
  {
    id: "cocoon-jungle",
    title: "Cocoon Jungle",
    top: "39%",
    left: "63%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Immersive bamboo-and-thatch cocoon structures nested in the jungle.",
  },
  {
    id: "grand-lagoon",
    title: "Grand Lagoon Villa with Pool",
    top: "26%",
    left: "10%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description: "Expansive water-facing villa with private lagoon-style pool.",
  },
  {
    id: "avatar-tree-house",
    title: "Avatar Tree House",
    top: "18%",
    left: "14%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Signature organically-shaped treehouse villa inspired by flowing forms.",
  },
  {
    id: "ulaman-hall",
    title: "Ulaman Hall",
    top: "70%",
    left: "61%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Spacious bamboo hall for private gatherings, retreats, ceremonies.",
  },
  {
    id: "earth-lounge",
    title: "E.A.R.T.H Lounge & Bar",
    top: "42%",
    left: "52%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Organic-architecture lounge and cocktail bar overlooking the water.",
  },
  {
    id: "riverside-spa",
    title: "Riverside Spa",
    top: "30%",
    left: "28%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Signature bamboo spa built literally on the riverbank. Sound of water everywhere.",
  },
  {
    id: "waterfall-deck",
    title: "Waterfall & Waterfall Deck",
    top: "37%",
    left: "36%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Natural waterfall and wooden viewing deck for meditation and cold plunge.",
  },
  {
    id: "jungle-garden-pool",
    title: "Jungle Garden Pool",
    top: "46%",
    left: "71%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Secluded swimming pool surrounded by dense tropical planting.",
  },
  {
    id: "earth-lounge-pool",
    title: "E.A.R.T.H Lounge Pool",
    top: "38%",
    left: "54%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description: "Infinity-style pool just below the E.A.R.T.H Lounge.",
  },
  {
    id: "gift-shop",
    title: "Gift Shop",
    top: "12%",
    left: "65%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5pm069VX1y_y_Layer2.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Local crafts, bamboo design goods, wellness products, and resort merch.",
  },
  {
    id: "floating-lake",
    title: "Floating Lake",
    top: "21%",
    left: "25%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description: "Serene inner lake walkway experience with floating villas.",
  },
  {
    id: "earth-restaurant",
    title: "E.A.R.T.H Restaurant",
    top: "21%",
    left: "42%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Fine plant-forward dining inside Ulaman’s signature bamboo architecture.",
  },
  {
    id: "waterfall-infinity-pool",
    title: "Waterfall Infinity Pool",
    top: "23%",
    left: "48%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description: "Tiered infinity pool near the waterfall zone. Unreal view.",
  },
  {
    id: "mandala-yoga",
    title: "Mandala Yoga Shala",
    top: "57%",
    left: "65%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format",
    images: [
      "https://images.prismic.io/ulaman/ZpCoch5LeNNTxFPd_ulaman.jpg?auto=format,compress",
    ],
    description:
      "Sacred circular yoga shala designed for group practice, workshops, and ceremony.",
  },
];

export default function UlamanMapSection() {
  const [activeLocation, setActiveLocation] = useState<LocationItem | null>(
    null
  );

  return (
    <section
      data-slice-type="map_of_ulaman"
      className="relative bg-[#efeadc] py-10"
    >
      {/* MAP WRAPPER */}
      <div className="flex justify-center overflow-x-auto">
        {/* relative container == the coordinate system for pins */}
        <div className="relative min-w-[80rem] max-w-[108rem] mx-auto">
          {/* MAP IMAGE */}
          <Image
            src="/images/maps/map-ulaman-illustration.jpg"
            alt="Ulaman resort map"
            width={1728}
            height={1080}
            priority
            className="w-full h-auto select-none pointer-events-none"
          />

          {/* ICON PINS */}
          {LOCATIONS.map((loc) => (
            <MapPin
              key={loc.id}
              title={loc.title}
              icon={loc.icon}
              top={loc.top}
              left={loc.left}
              onClick={() => setActiveLocation(loc)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeLocation && (
        <LocationModal
          location={activeLocation}
          onClose={() => setActiveLocation(null)}
        />
      )}
    </section>
  );
}
