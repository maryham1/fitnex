"use client";

import { useState } from "react";
import { FaDumbbell, FaRunning, FaHeartbeat } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";

const classes = [
  {
    title: "Strength Training",
    icon: FaDumbbell,
    days: "Mon, Wed, Fri",
    time: "7:00 AM - 9:00 AM",
  },
  {
    title: "HIIT Blast",
    icon: FaRunning,
    days: "Tue, Thu",
    time: "6:30 PM - 8:30 PM",
  },
  {
    title: "Yoga Flow",
    icon: GiLotus,
    days: "Saturday",
    time: "8:00 AM - 10:00 AM",
  },
  {
    title: "Cardio Burn",
    icon: FaHeartbeat,
    days: "Mon, Fri",
    time: "5:30 PM - 7:30 PM",
  },
  {
    title: "Functional Fitness",
    icon: MdSportsGymnastics,
    days: "Mon, Tue",
    time: "8:00 AM - 10:00 AM",
  },
  {
    title: "CrossFit",
    icon: FaDumbbell,
    days: "Wed, Fri",
    time: "4:00 PM - 6:00 PM",
  },
  {
    title: "Pilates",
    icon: GiLotus,
    days: "Tuesday",
    time: "7:00 AM - 8:00 AM",
  },
  {
    title: "Body Conditioning",
    icon: FaHeartbeat,
    days: "Daily",
    time: "6:00 PM - 7:00 PM",
  },
  {
    title: "Bootcamp",
    icon: FaRunning,
    days: "Monday",
    time: "5:00 PM - 6:30 PM",
  },
  {
    title: "Boxing Fitness",
    icon: FaRunning,
    days: "Thursday",
    time: "7:00 PM - 8:30 PM",
  },
  {
    title: "Core Strength",
    icon: FaDumbbell,
    days: "Friday",
    time: "8:00 AM - 9:00 AM",
  },
  {
    title: "Stretch & Mobility",
    icon: GiLotus,
    days: "Sunday",
    time: "9:00 AM - 10:00 AM",
  },
];

const ITEMS_PER_PAGE = 4;

export default function PopularClasses() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(classes.length / ITEMS_PER_PAGE);

  const visibleClasses = classes.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section className="bg-white py-10 px-4 md:px-15 lg:px-15">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-4">
          <p className="uppercase text-[#729700] font-semibold text-xs md:text-sm lg:text-sm">
            Popular Classes
          </p>

          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Join Our Weekly Classes
          </h2>
        </div>

        {/* Cards */}
        <div className="flex  items-center justify-center gap-4">
          {/* Previous */}
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            className="bg-gray-100/50 p-3 rounded-full disabled:opacity-40"
          >
            &larr;
          </button>
          {/* card */}
          <div
            key={page}
            className="flex flex-col lg:flex-row justify-center items-center mx-auto md:flex-row flex-wrap gap-8 animate-slide"
          >
            {visibleClasses.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-gray-100/50 rounded-md flex items-center gap-4 px-8 py-3 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <Icon className="text-[#729700] text-xl" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>

                    <div>
                      <span className="text-xs text-gray-500">{item.days}</span>
                    </div>

                    <div className="text-gray-500 text-xs">{item.time}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
            className="bg-gray-100/50 p-3 rounded-full disabled:opacity-40"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
