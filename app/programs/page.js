"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Muscle Building",
    image: "/muscle.png",
    description:
      "Focus on strength training and progressive overload to build lean muscle.",

    duration: "7 weeks",
    difficulty: "Intermediate",
    sessions: "3 days/week",
    trainer: "Jason Miller",
    equipment: "Full gym access",
    results: "Strength, muscle gain, improved physique",
  },

  {
    id: 2,
    title: "Weight Loss",
    image: "/weightloss.png",
    description: "Effective calorie-burning workouts and nutrition guidance.",

    duration: "12 weeks",
    difficulty: "Intermediate",
    sessions: "2 days/week",
    trainer: "David Lee",
    equipment: "Full gym access",
    results: "Fat loss, improved endurance",
  },

  {
    id: 3,
    title: "Strength & Power",
    image: "/performance.png",
    description: "Increase overall strength and functional performance.",

    duration: "10 weeks",
    difficulty: "Intermediate",
    sessions: "4 days/week",
    trainer: "David Lee",
    equipment: "Full gym access",
    results: "Power, strength and muscle gain",
  },

  {
    id: 4,
    title: "Endurance",
    image: "/flexible.png",
    description: "Boost stamina and cardiovascular performance.",

    duration: "5 weeks",
    difficulty: "Intermediate",
    sessions: "5 days/week",
    trainer: "Emily Davis",
    equipment: "Full gym access",
    results: "Better endurance and cardio fitness",
  },

  {
    id: 5,
    title: "Flexibility & Mobility",
    image: "/flexible.png",
    description: "Improve flexibility and mobility for everyday movement.",

    duration: "12 weeks",
    difficulty: "Intermediate",
    sessions: "3 days/week",
    trainer: "Sarah Johnson",
    equipment: "Full gym access",
    results: "Improved flexibility and posture",
  },

  {
    id: 6,
    title: "Athletic Performance",
    image: "/about/second.png",
    description: "Improve speed, agility and sports performance.",

    duration: "8 weeks",
    difficulty: "Intermediate",
    sessions: "4 days/week",
    trainer: "Jason Miller",
    equipment: "Full gym access",
    results: "Speed, agility and explosive power",
  },
];
export default function Page() {
  const [open, setOpen] = useState(null);
  return (
    <main className="">
      <section className=" max-w-7xl px-4 md:px-15 py-10">
        <div className="mb-16 text-center mt-20">
          <p className="font-semibold uppercase text-xs md:text-sm text-lime-500">
            Our Programs
          </p>

          <h1 className="text-xl md:text-2xl text-black text-4xl font-bold">
            Programs Designed for Results
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose from a variety of professionally designed fitness programs
            tailored to your goals. Click any program to learn more.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              className="overflow-hidden rounded-xl border bg-white shadow transition-all duration-300"
              key={program.id}
            >
              <Image
                src={program.image}
                alt={program.title}
                // placeholder="blur"
                width={500}
                height={300}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-md md:text-xl text-black  font-bold">
                  {program.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600">
                  {program.description}
                </p>

                <button
                  onClick={() =>
                    setOpen(open === program.id ? null : program.id)
                  }
                  className=" text-sm font-semibold text-lime-500 hover:text-lime-600"
                >
                  {open === program.id ? "Show Less ↑" : "Learn More →"}
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ${
                    open === program.id
                      ? "grid-rows-[1fr] mt-6"
                      : "grid-rows-[0fr] h-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 border-t pt-5">
                      <p>
                        <span className="font-semibold text-black">
                          Duration:
                        </span>{" "}
                        {program.duration}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Difficulty:
                        </span>{" "}
                        {program.difficulty}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Sessions:
                        </span>{" "}
                        {program.sessions}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Trainer:
                        </span>{" "}
                        {program.trainer}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Equipment:
                        </span>{" "}
                        {program.equipment}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Results:
                        </span>{" "}
                        {program.results}
                      </p>

                      <button className="mt-4 w-full rounded-lg bg-lime-500 py-3 font-semibold text-black transition hover:bg-lime-400">
                        <Link href="/join">Join Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
