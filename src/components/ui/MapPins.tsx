// components/ui/MapPin.tsx
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MapPinProps {
  title: string;
  icon: string;
  top: string;
  left: string;
  onClick: () => void;
}

export default function MapPin({
  title,
  icon,
  top,
  left,
  onClick,
}: MapPinProps) {
  return (
    <button
      onClick={onClick}
      style={{ top, left }}
      className={cn(
        "group hover:gap-2 absolute flex items-center justify-center bg-white text-[#C69C4D] rounded-full h-9 px-2 text-sm transition-all duration-300",
        "hover:bg-[#C69C4D] hover:text-white"
      )}
    >
      <div className="w-5 shrink-0">
        <Image src={icon} alt={title} width={20} height={20} />
      </div>
      <span className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-[max-width] duration-300 whitespace-nowrap invisible group-hover:visible">
        {title}
      </span>
    </button>
  );
}
