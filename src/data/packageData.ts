export type PackageInfo = {
  id: string;
  title: string;
  duration: string; // "3 Days / 2 Nights"
  image: string;
  alt: string;
  href: string;
};

export const packagesData: PackageInfo[] = [
  {
    id: "avatar",
    title: "The Avatar Experience",
    duration: "3 Days / 2 Nights",
    image:
      "https://images.prismic.io/ulaman/Zjrn-kMTzAJOCn4c_eco-luxury-hotel-bali.jpg?auto=format,compress",
    alt: "drone shot of lake and sky villa at ulaman bali",
    href: "/packages/avatar-experience",
  },
  {
    id: "honeymoon",
    title: "The Ultimate Honeymoon",
    duration: "3 Days / 2 Nights",
    image:
      "https://images.prismic.io/ulaman/ZjebwkMTzAJOCiml_Ulaman-eco-retreat.jpg?auto=format,compress",
    alt: "best romantic honeymoons getaway in ulaman bali",
    href: "/packages/ultimate-honeymoon",
  },
  // add more if you want
];
