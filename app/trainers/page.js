import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

// Replace these with your images
import trainer1 from "@/public/trainers/trainer1.png";
import trainer2 from "@/public/trainers/trainer2.png";
import trainer3 from "@/public/trainers/trainer3.png";
import trainer4 from "@/public/trainers/trainer4.png";

const trainers = [
  {
    name: "Jason Miller",
    role: "Strength Coach",
    image: trainer1,
  },
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    image: trainer2,
  },
  {
    name: "David Lee",
    role: "Performance Coach",
    image: trainer3,
  },
  {
    name: "Emily Davis",
    role: "Yoga & Mobility Coach",
    image: trainer4,
  },
];

export const metadata = {
  title: "Trainers",
};

export default function Page() {
  return (
    <main className="bg-white py-10 px-4 md:px-15 lg:px-15">
      <div className="max-w-7xl mx-auto  mt-20">
        {/* Heading */}
        <div className="text-center space-y-3 ">
          <p className="uppercase tracking-widest text-[#729700] text-xs md:text-sm  font-semibold">
            Our Trainers
          </p>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black">
            Meet Our Expert Trainers
          </h1>

          <p className="text-gray-500  max-w-xl mx-auto">
            Our certified trainers are here to guide, support and push you to
            achieve your fitness goals.
          </p>
        </div>

        {/* Trainers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <Image
                  src={trainer.image}
                  placeholder="blur"
                  alt={trainer.name}
                  className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="px-4 py-6">
                <h3 className="font-bold text-md md:text-lg group-hover:text-[#729700] transition">
                  {trainer.name}
                </h3>

                <p className="text-gray-500 text-xs">{trainer.role}</p>

                <div className="flex  gap-4 mt-5 text-gray-500">
                  <a href="#" className="hover:text-[#729700] transition">
                    <FaInstagram />
                  </a>

                  <a href="#" className="hover:text-[#729700] transition">
                    <FaFacebookF />
                  </a>

                  <a href="#" className="hover:text-[#729700] transition">
                    <FaTwitter />
                  </a>

                  <a href="#" className="hover:text-[#729700] transition">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-10 bg-black rounded-xl px-8 py-8 md:px-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-10 h-10 rounded-xl border border-[#B7F10A] flex items-center justify-center">
              <FiCalendar className="text-[#B7F10A] text-xl" />
            </div>

            <div>
              <h2 className="text-white text-md md:text-xl font-bold">
                Start Training with the Best
              </h2>

              <p className="text-gray-400 ">
                Book a free consultation with one of our expert trainers today.
              </p>
            </div>
          </div>

          <button className="bg-[#B7F10A] hover:bg-[#9fda00] transition px-8 py-3 rounded-lg font-semibold text-black flex items-center gap-2">
            <a href="/join">Book Now</a>
            <span>&rarr;</span>
          </button>
        </section>
      </div>
    </main>
  );
}
