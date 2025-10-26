import React from "react";

export default function CallToActionSection2() {
  return (
    <section
      data-slice-type="call_to_action"
      data-slice-variation="default"
      className="app-container bg-bg-cream text-brand py-24 sm:py-28 xl:py-32"
    >
      <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[24.35rem] lg:max-w-[30rem]">
        {/* headline */}
        <div className="text-center space-y-em" id="cta-15-text-block">
          <h4 className="heading display-4">
            <div>Reconnect With Yourself In</div>
            <div>Luxurious Comfort.</div>
          </h4>
        </div>

        {/* CTA button */}
        <ul className="flex flex-wrap w-full justify-center items-center text-brand gap-x-5 gap-y-8">
          <li className="inline-block cta-buttons">
            <button className="ui-underline-anim reverse btn-primary">
              Book Your Stay
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
