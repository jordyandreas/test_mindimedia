// components/ui/LocationModal.tsx
"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { LocationItem } from "@/modules/maps/Maps";

interface LocationModalProps {
  location: LocationItem;
  onClose: () => void;
}

export default function LocationModal({
  location,
  onClose,
}: LocationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative flex flex-col sm:flex-row bg-white w-full sm:max-w-4xl rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C69C4D] hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src={location.images[0]}
            alt={location.title}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-3 overflow-auto">
          <p className="text-sm text-gray-500">Open 24 / 7</p>
          <h4 className="text-2xl font-serif text-[#C69C4D]">
            {location.title}
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {location.description}
          </p>
          <a
            href="https://wa.me/6281238580063"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#C69C4D] underline hover:text-black transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
