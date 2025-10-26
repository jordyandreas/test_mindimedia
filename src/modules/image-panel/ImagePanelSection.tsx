import Image from "next/image";

export function ImagePanelSection() {
  return (
    <section
      data-slice-type="image_panel"
      data-slice-variation="withLabels"
      className="bg-bg-cream text-brand"
    >
      <ul
        className="
          flex px-1.5 gap-1.5
          sm:px-6 lg:px-9 lg:gap-3.5
          xl:gap-5 xl:px-5
        "
      >
        {/* Card 1 */}
        <li
          className="
            aspect-[10/16] w-1/2 overflow-hidden rounded-md group
            sm:w-1/3 sm:aspect-[10/14]
          "
        >
          <figure className="w-full h-full relative">
            <Image
              src="https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress"
              alt="farm to table at Ulaman Bali"
              loading="lazy"
              width={500}
              height={500}
              className="object-cover w-full h-full scale-125"
            />
            <figcaption
              className="
                absolute bottom-5 inset-x-0 flex justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            >
              <span
                className="
                  text-xs bg-light-background p-2 rounded-md capitalize
                "
              >
                Ulaman Salad
              </span>
            </figcaption>
          </figure>
        </li>

        {/* Card 2 */}
        <li
          className="
            aspect-[10/16] w-1/2 overflow-hidden rounded-md group
            sm:w-1/3 sm:aspect-[10/14]
          "
        >
          <figure className="w-full h-full relative">
            <Image
              src="https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress"
              alt="Chef Arik by Ulaman Bali"
              loading="lazy"
              width={500}
              height={500}
              className="object-cover w-full h-full scale-125"
            />
            <figcaption
              className="
                absolute bottom-5 inset-x-0 flex justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            >
              <span
                className="
                  text-xs bg-light-background p-2 rounded-md capitalize
                "
              >
                Our Chef: Arik
              </span>
            </figcaption>
          </figure>
        </li>

        {/* Card 3 (hidden on mobile) */}
        <li
          className="
            hidden sm:block
            aspect-[10/16] w-1/2 overflow-hidden rounded-md group
            sm:w-1/3 sm:aspect-[10/14]
          "
        >
          <figure className="w-full h-full relative">
            <Image
              src="https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress"
              alt="Earth Restaurant By Ulaman"
              loading="lazy"
              width={500}
              height={500}
              className="object-cover w-full h-full scale-125"
            />
            <figcaption
              className="
                absolute bottom-5 inset-x-0 flex justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            >
              <span
                className="
                  text-xs bg-light-background p-2 rounded-md capitalize
                "
              >
                E.A.R.T.H Restaurant
              </span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}
