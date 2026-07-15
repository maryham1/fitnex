"use client";
import { FaPlay, FaCheckCircle, FaPause } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
// import { FaPlay } from "react-icons/fa";
export default function AboutHero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <section className="bg-white py-10 px-4 md:px-15 lg:px-15">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-2">
          <p className="uppercase text-[#729700] font-semibold text-sm">
            About Us
          </p>

          <h2 className="text-xl lg:text-4xl font-bold text-gray-900 ">
            We&apos;re More Than <br /> Just a Gym
          </h2>

          <p className="text-gray-600  text-md">
            At FitNex, we believe fitness is a lifestyle. Our supportive
            community, expert coaches, and proven programs help you stay
            motivated and achieve lasting results.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-y-5 mt-8">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#729700]" />
              <span className="text-gray-700">Personalized Training</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#729700]" />
              <span className="text-gray-700">Supportive Community</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#729700]" />
              <span className="text-gray-700">Nutrition Guidance</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#729700]" />
              <span className="text-gray-700">Flexible Plans</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 bg-[#729700] hover:bg-[#a6de08] transition text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
            Learn More About Us
            <span>&rarr;</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/muscle.png"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/fitness-video.mp4" type="video/mp4" />
          </video>

          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-15 h-15 rounded-full bg-[#B7F10A] hover:scale-110 transition-all duration-300 shadow-xl flex items-center justify-center">
              {isPlaying ? (
                <FaPause className="text-black text-lg" />
              ) : (
                <FaPlay className="text-black text-lg ml-1" />
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
