"use client";

import { useState } from "react";

type ReviewSlide = {
  name: string;
  headline: string;
  date: string;
  body: string;
  link?: string; // optional "Continue Reading" link
};

const SLIDES: ReviewSlide[] = [
  {
    name: "Alsana Trawally",
    headline: `"Best Experience In Bali."`,
    date: "June 2024",
    body: `"Best experience I had in Bali out of all the resorts I've been to too, customer service was impeccable
    and the staff were so kind, Mr. Komang made sure we had accommodations and did the best of his ability
    to make sure we had a warming welcoming, it's unbelievable that everything is made of bamboo"`,
  },
  {
    name: "Anne & Steve",
    headline: `"A Truly Memorable Experience."`,
    date: "May 2024",
    body: `"Fabulous architecture, beautiful natural setting and wonderful staff combine to provide a truly memorable experience.
    Our stay at Ulaman Eco Resort was one we will remember forever. We came to just relax in this amazing setting with its beautiful
    architecture set around a waterfall and surrounded by rice paddies..."`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r949534794-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Beata B",
    headline: `"Mind-Blowing Architecture And Top-Notch Service!"`,
    date: "Apr. 2024",
    body: `"From the moment you step into this incredible resort, you feel like you are in another world. A world where imagination
    has no limits and where your body and mind can recharge to the fullest. We were blown away by the incredible architecture
    and design. We loved our stay at Ulaman..."`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r947955747-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Conny H",
    headline: `"Perfect Place To Relax And Heal!"`,
    date: "Apr. 2023",
    body: `"Loved this place so much, I extended and stayed over a week. This place is perfect to relax & heal! The resort is so
    beautiful, peaceful, quiet and embedded into the nature. The food is delicious and the staff does an excellent service.
    The healing & wellness options made it special: the spa was relaxing and I did yoga every day..."`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r946363108-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Janey V",
    headline: `“One Of The Most Beautiful Resorts In The World.”`,
    date: "Jan. 2024",
    body: `“Ulaman eco-resort is, without doubt, one of the most beautiful resorts I have stayed at. Just returned from an amazing
    4 day stay on my own on a yoga wellness and healing experience. I cannot begin to describe how rested and rejuvenated I feel.
    Everything at this super beautiful resort...”`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r935166642-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Alex & Regina",
    headline: `"Immerse Yourself In Nature."`,
    date: "Nov. 2023",
    body: `"Our stay at the Ulaman resort was truly exceptional. The resort's commitment to eco-principles and sustainable practices
    is admirable. The bamboo architecture seamlessly blends with the natural surroundings, creating a serene atmosphere.
    The facilities, including the spa, tennis courts, pools, gym, yoga and restaurant..."`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r926725773-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Mikael R",
    headline: `"Out-Of-This-World Experience."`,
    date: "Aug. 2023",
    body: `"This unique resort feels like stepping into an Avatar movie set with added 5* service and food. Supercool and comfortable
    rooms as well. All in all, truly amazing and highly recommended. Being very well-traveled, I have not experienced something
    like it ever."`,
  },
  {
    name: "Jody T",
    headline: `"Artistic Wonderland."`,
    date: "July 2023",
    body: `"This is an artistic wonderland and a once-in-a-lifetime experience. The architect who designed this place is a genius,
    it is so funky and unique; the shapes and usage of different types of wood (mostly bamboo) make this a 'not to miss' destination.
    The staff there are amazing, they are all so helpful, smart and friendly..."`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r904290293-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Francesco & Veronica",
    headline: `"If I Only Could Give 6 Stars."`,
    date: "Feb. 2023",
    body: `"This is definitely one of the best resort we’ve ever been at, my husband and I spent a 2-day “isolation-self love”
    retreat and it went way over our best expectations. Starting from the staff, who are so friendly, helpful and nice,
    continuing with the extraordinary architecture that surrounds you when you walk inside..."`,
    link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r879239527-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
];

export default function ReviewsSection() {
  // which slide are we showing?
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index < SLIDES.length - 1;

  const trackX = -1 * index * 100; // percentage translate, each slide = 100%

  return (
    <section
      data-slice-type="reviews_section"
      data-slice-variation="default"
      className="text-brand"
    >
      <div
        className="relative outline-none"
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
      >
        {/* HEADER */}
        <header className="app-container">
          <div className="border-b space-y-9 pb-8 sm:flex sm:justify-between sm:items-start sm:space-y-0">
            {/* left side: heading + ratings */}
            <div className="space-y-8">
              <div>
                <h3 className="heading display-3">
                  What Our Guests <br />
                  Have To Say About Us
                </h3>
              </div>

              <div className="flex gap-11 justify-between text-smaller text-accent-gold sm:justify-start sm:gap-14">
                {/* tripadvisor */}
                <div className="xl:flex xl:gap-2 xl:items-center">
                  <span className="flex justify-between gap-x-3 items-center">
                    <span className="text-small flex items-center">
                      <span>4.8&nbsp;</span>
                      <StarSvg />
                      <span>&nbsp;/</span>
                    </span>
                  </span>
                  <span className="sm:opacity-70">295 Tripadvisor Reviews</span>
                </div>

                {/* google */}
                <div className="xl:flex xl:gap-2 xl:items-center">
                  <span className="flex justify-between gap-x-3 items-center">
                    <span className="text-small flex items-center">
                      <span>4.7&nbsp;</span>
                      <StarSvg />
                      <span>&nbsp;/</span>
                    </span>
                  </span>
                  <span className="sm:opacity-70">742 Google Reviews</span>
                </div>
              </div>
            </div>

            {/* right side: arrows */}
            <nav>
              <nav className="flex gap-5 sm:gap-3.5 lg:gap-6 text-brand outline-none text-accent-gold">
                {/* prev */}
                <button
                  className="touch-manipulation p-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed relative"
                  onClick={() => canPrev && setIndex(index - 1)}
                  disabled={!canPrev}
                  aria-label="Previous testimonial"
                >
                  <div className="aspect-square border-current border rounded-md text-current p-0 px-6 rotate-180 flex items-center">
                    <ArrowRightSvg />
                  </div>
                </button>

                {/* next */}
                <button
                  className="touch-manipulation p-0 text-brand disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed relative"
                  onClick={() => canNext && setIndex(index + 1)}
                  disabled={!canNext}
                  aria-label="Next testimonial"
                >
                  <div className="aspect-square border-current border rounded-md text-current p-0 px-6 flex items-center">
                    <ArrowRightSvg />
                  </div>
                </button>
              </nav>
            </nav>
          </div>
        </header>

        {/* CAROUSEL TRACK */}
        <div className="overflow-hidden is-draggable">
          <div
            className="flex -ml-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${trackX}%, 0, 0)`,
            }}
          >
            {SLIDES.map((slide, i) => {
              // mimic their classes:
              // basis-full pl-4, opacity transitions, aria-roledescription="slide"
              const snapped = i === index;
              return (
                <div
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  className={[
                    "min-w-0 shrink-0 grow-0 basis-full pl-4",
                    "[&.is-snapped]:opacity-100",
                    "opacity-0 transition-opacity duration-500",
                    snapped ? "is-snapped is-in-view opacity-100" : "",
                  ].join(" ")}
                >
                  <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                    {/* name / headline / date */}
                    <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                      <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                        {slide.name}
                      </h3>

                      <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                        {slide.headline}
                      </h5>

                      <span className="block text-smallest order-1 sm:order-none">
                        {slide.date}
                      </span>
                    </header>

                    {/* body + link */}
                    <div className="space-y-5 sm:w-1/2 max-w-lg">
                      <div>
                        <p>{slide.body}</p>
                      </div>

                      <nav>
                        {slide.link ? (
                          <a
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ui-underline-anim reverse inline-block btn-primary text-smaller text-accent-gold underline"
                          >
                            Continue Reading
                          </a>
                        ) : (
                          <a className="ui-underline-anim reverse inline-block btn-primary text-smaller" />
                        )}
                      </nav>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SVGs exactly like theirs */

function StarSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-move-right-icon w-7 stroke-1"
    >
      <path d="M18 8L22 12L18 16"></path>
      <path d="M2 12H22"></path>
    </svg>
  );
}
