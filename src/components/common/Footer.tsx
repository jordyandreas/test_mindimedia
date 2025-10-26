"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-36 sm:mt-28 lg:mt-40 xl:mt-36">
      {/* Top Instagram header */}
      <article className="space-y-6 pb-2 lg:space-y-9 lg:pb-2.5 xl:pb-3">
        <header className="text-center leading-none text-brand font-normal">
          <a
            href="https://www.instagram.com/ulamanbali/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @ulamanbali
          </a>
        </header>

        {/* placeholder for image carousel */}
        <div className="overflow-hidden flex justify-center">
          {/* TODO: add Instagram carousel here */}
        </div>
      </article>

      {/* Main dark section */}
      <div className="text-light-background bg-dark-emphasis">
        <div className="py-20 xl:py-16 app-container space-y-20">
          {/* Ratings */}
          <section className="pt-20 flex flex-col items-center text-center">
            <ul className="flex flex-col gap-y-3 items-center">
              <li>
                <a
                  href="https://www.google.com/travel/search?q=ulaman%20bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="flex items-center">
                    4.7&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </span>
                  <span>/</span>
                  <span className="opacity-50">742 Google Reviews</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="flex items-center">
                    4.8&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </span>
                  <span>/</span>
                  <span className="opacity-50">295 TripAdvisor Reviews</span>
                </a>
              </li>
            </ul>
          </section>

          {/* Map + Info */}
          <section className="flex flex-col items-center justify-between sm:gap-x-5 sm:flex-row-reverse">
            <div className="flex w-full aspect-[11/10] h-80 sm:w-auto overflow-hidden border-none lg:h-96 xl:w-[41rem] xl:h-auto">
              <Image
                src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                alt="Ulaman Bali Map"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 pt-7 text-smallest prose:p:pr-10 sm:w-64 lg:w-1/3">
              <h3 className="heading display-3">
                Tucked Within Majestic Balinese Nature.
              </h3>
              <p>
                Strategically located near popular areas like Canggu and Ubud,
                experience tranquil nature and luxury. With endless activities,
                you will never want to leave Ulaman.
              </p>
            </div>
          </section>

          {/* Newsletter + Links */}
          <section className="pt-24 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-20 xl:gap-0">
            {/* Newsletter */}
            <div className="max-w-lg space-y-6">
              <h6 className="display-6 text-bg-light-background! text-24">
                Get Notified On Our Offers
              </h6>
              <form
                name="newsletter-signup"
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="input-field"
                />
                <button
                  type="submit"
                  disabled
                  className="ui-underline-anim reverse text-light disabled:opacity-50"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Explore Links */}
            <nav>
              <h6 className="display-6 text-bg-light-background!">Explore</h6>
              <ul className="grid grid-cols-2 pt-7 gap-x-12 gap-y-5">
                {[
                  ["Home", "/"],
                  ["Villas", "/rooms"],
                  ["Dining", "https://earthbyulaman.com/"],
                  ["Spa", "https://riversidespabyulaman.com/"],
                  ["Retreats", "/retreats"],
                  ["Experiences", "/activities"],
                  ["Facilities", "/facilities"],
                  ["Ulaman Map", "/ulaman-map"],
                  ["About", "/about"],
                  ["Articles", "/blog"],
                  ["Contact", "/contact"],
                  ["Video Testimonials", "/testimonials"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="ui-underline-anim">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Connect Links */}
            <nav>
              <h6 className="display-6 text-bg-light-background!">Connect</h6>
              <ul className="grid grid-cols-2 pt-7 gap-x-12 gap-y-5">
                {[
                  ["Whatsapp", "https://wa.me/6281227142854"],
                  ["Directions", "https://www.google.com/maps"],
                  [
                    "TripAdvisor",
                    "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Resort-Tabanan_Bali.html",
                  ],
                  ["Instagram", "https://www.instagram.com/ulamanbali"],
                  ["Facebook", "https://www.facebook.com/UlamanBali/"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-underline-anim"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Awards Marquee */}
          <section className="relative max-w-screen overflow-hidden mt-24 mb-4">
            <div className="flex w-[200%] animate-[slide_60s_linear_infinite]">
              {/* Original list */}
              <ul className="flex gap-x-16 sm:gap-x-20 lg:gap-x-24 w-max pl-16 sm:pl-20 lg:pl-24">
                {[
                  "https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png",
                  "https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png",
                  "https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png",
                  "https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png",
                  "https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png",
                  "https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png",
                  "https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png",
                ].map((src, i) => (
                  <li key={i}>
                    <div className="h-full">
                      <Image
                        src={src}
                        alt="Award logo"
                        width={180}
                        height={80}
                        className="w-auto h-11 lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                ))}
              </ul>

              {/* Duplicate list for seamless loop */}
              <ul className="flex gap-x-16 sm:gap-x-20 lg:gap-x-24 w-max pl-16 sm:pl-20 lg:pl-24">
                {[
                  "https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png",
                  "https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png",
                  "https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png",
                  "https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png",
                  "https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png",
                  "https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png",
                  "https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png",
                ].map((src, i) => (
                  <li key={`dup-${i}`}>
                    <div className="h-full">
                      <Image
                        src={src}
                        alt="Award logo"
                        width={180}
                        height={80}
                        className="w-auto h-11 lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Legal Footer */}
          <footer className="pt-20 app-container">
            <nav>
              <ul className="flex flex-wrap gap-x-1 gap-y-4 justify-between text-smallest">
                <li>
                  <Link href="/legal/terms" className="ui-underline-anim">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    className="ui-underline-anim"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/ulaman-bookings"
                    className="ui-underline-anim"
                  >
                    Ulaman Bookings
                  </Link>
                </li>
                <li>Kids under 6 are not advised.</li>
                <li>
                  © 2024–2025 Two Moons Studio for ulamanbali.com. All Rights
                  Reserved
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>

      {/* Bottom light marquee */}
      <nav className="bg-light-background py-7 text-dark-emphasis max-w-screen overflow-hidden">
        <div className="animate-marquee flex w-[200%]">
          {/* first copy */}
          <ul className="flex gap-x-9 pl-9 xl:gap-x-10 xl:pl-10">
            <li className="flex items-center gap-x-9">
              <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
              <button className="flex whitespace-nowrap">
                <span>The Avatar Experience</span>
                <span>&nbsp;|&nbsp;</span>
                <span>3 days 2 nights</span>
              </button>
            </li>

            <li className="flex items-center gap-x-9">
              <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
              <button className="flex whitespace-nowrap">
                <span>The Ultimate Honeymoon</span>
                <span>&nbsp;|&nbsp;</span>
                <span>3 days 2 nights</span>
              </button>
            </li>

            {/* Add more items here if you have them */}
          </ul>

          {/* duplicate copy for seamless loop */}
          <ul className="flex gap-x-9 pl-9 xl:gap-x-10 xl:pl-10">
            <li className="flex items-center gap-x-9">
              <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
              <button className="flex whitespace-nowrap">
                <span>The Avatar Experience</span>
                <span>&nbsp;|&nbsp;</span>
                <span>3 days 2 nights</span>
              </button>
            </li>

            <li className="flex items-center gap-x-9">
              <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
              <button className="flex whitespace-nowrap">
                <span>The Ultimate Honeymoon</span>
                <span>&nbsp;|&nbsp;</span>
                <span>3 days 2 nights</span>
              </button>
            </li>

            {/* same set duplicated */}
          </ul>
        </div>
      </nav>
    </footer>
  );
}
