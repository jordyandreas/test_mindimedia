import React from "react";

type Activity = {
  time: string;
  title: string;
  color: string;
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SCHEDULE: Record<string, (Activity | null)[]> = {
  "7 AM": Array(7).fill({
    time: "7 AM",
    title: "Yoga (All Levels)",
    color: "#D7DEBF",
  }),
  "12 PM": Array(7).fill({
    time: "12 PM",
    title: "Sound Healing",
    color: "#CED5CE",
  }),
  "1 PM": Array(7).fill(null),
};

export default function ExperiencesCatalogSection() {
  return (
    <section
      data-slice-type="experiences_catalog"
      data-slice-variation="activitiesTimetable"
      className="bg-[#f8f5e9] text-[#1f281c]"
      // page bg in screenshot is warm off-white; adjust to your token if you have one
    >
      <div className="app-container py-20">
        {/* header */}
        <header className="text-center max-w-[74rem] mx-auto space-y-6">
          <h2
            className="text-[clamp(2rem,1vw+1.75rem,2.75rem)] leading-tight font-normal text-[#c69c4d]"
            style={{
              fontFamily: "Americana, serif", // your display-2 font
            }}
          >
            Weekly Schedule
          </h2>
          <p className="text-base text-[#2f352b]">
            Advanced Booking Is Recommended
          </p>
        </header>

        {/* timetable wrapper */}
        <div className="mt-12 overflow-x-auto">
          <div
            className="
              relative
              mx-auto
              min-w-[60rem]
              max-w-[74rem]
              text-[0.8rem] leading-relaxed
              lg:text-[0.9rem]
            "
            style={{
              // define the gold line color once
              // screenshot gold lines ~ #d5be83 but a hair darker than text gold
              // tweak if you have --color-accent-gold token
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ["--grid-border" as any]: "#d3bd80",
            }}
          >
            {/* GRID */}
            {/*
              We’ll emulate a table using CSS grid.
              Columns: [time] + 7 days
            */}
            <div
              className="
                grid
                grid-cols-[5rem_repeat(7,minmax(6rem,1fr))]
              "
            >
              {/* ───────── Day header row ───────── */}
              {/* empty top-left cell */}
              <div
                className="
                  border-t-[1px] border-b-[1px]
                  border-[color:var(--grid-border)]
                  border-l-0 border-r-[1px]
                  border-r-[color:var(--grid-border)]
                  h-full
                "
                style={{
                  // match screenshot spacing: header cells have ~24px padding
                  padding: "1.5rem",
                }}
              />

              {DAYS.map((day, i) => (
                <div
                  key={day}
                  className={`
                    border-t-[1px] border-b-[1px]
                    border-[color:var(--grid-border)]
                    ${i === DAYS.length - 1 ? "border-r-0" : "border-r-[1px]"}
                    border-r-[color:var(--grid-border)]
                    h-full text-center text-[#c69c4d] font-normal
                  `}
                  style={{
                    padding: "1.5rem",
                  }}
                >
                  {day}
                </div>
              ))}

              {/* ───────── Body rows ───────── */}
              {Object.entries(SCHEDULE).map(
                ([time, activities], rowIdx, arr) => {
                  const isLastRow = rowIdx === arr.length - 1;

                  return (
                    <React.Fragment key={time}>
                      {/* Time label col */}
                      <div
                        className={`
                        border-b-[1px]
                        ${isLastRow ? "" : "border-b-[1px]"}
                        border-[color:var(--grid-border)]
                        border-r-[1px] border-r-[color:var(--grid-border)]
                        border-t-0
                        border-l-0
                        flex items-start
                        text-[#c69c4d]
                        font-normal
                      `}
                        style={{
                          paddingTop: "1.5rem",
                          paddingBottom: "1.5rem",
                          paddingLeft: "0",
                          paddingRight: "1rem",
                          minHeight: "7rem", // to match tall rows for 7 AM and 12 PM
                        }}
                      >
                        <span className="block w-full text-right pr-4 leading-none">
                          {time}
                        </span>
                      </div>

                      {/* Day cells for this row */}
                      {activities.map((activity, idx) => (
                        <div
                          key={idx}
                          className={`
                          relative
                          border-b-[1px]
                          ${isLastRow ? "" : "border-b-[1px]"}
                          border-[color:var(--grid-border)]
                          ${
                            idx === activities.length - 1
                              ? "border-r-0"
                              : "border-r-[1px]"
                          }
                          border-r-[color:var(--grid-border)]
                          border-t-0
                          flex
                          items-start
                          min-h-[7rem]
                          px-2
                          py-4
                        `}
                        >
                          {activity ? (
                            <div
                              className="
                              rounded-md
                              w-full
                              max-w-[90%]
                              mx-auto
                              h-[4rem]
                              flex items-center justify-center text-center
                              text-[#1f281c]
                              font-normal
                              leading-snug
                              shadow-[0_0_0_1px_rgba(0,0,0,0.03)]
                            "
                              style={{
                                backgroundColor: activity.color,
                              }}
                            >
                              {activity.title}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </React.Fragment>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* footer link */}
        <footer className="max-w-[74rem] mx-auto mt-10 lg:mt-12">
          <a
            href="https://drive.google.com/file/d/1HOiTV2UmmH4joOGKhwJhYdPIeN3Y9NfK/view"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              text-[#c69c4d]
              text-sm
              font-normal
              tracking-wide
              relative
              group
            "
          >
            <span className="pr-2">DOWNLOAD PDF</span>
            <span
              className="
                absolute
                left-0
                right-0
                -bottom-0.5
                h-[1px]
                bg-[#c69c4d]
                origin-left
                scale-x-100
                group-hover:scale-x-100
              "
            />
          </a>
        </footer>
      </div>
    </section>
  );
}
