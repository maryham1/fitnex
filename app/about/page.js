import Image from "next/image";
import AboutHero from "../_components/about-component/AboutHeroSec";
import { FiTarget, FiEye, FiStar, FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <div className="mt-20">
        <AboutHero showButton={false} />
      </div>
      {/* ================= MISSION SECTION ================= */}
      <section className="bg-white px-4 md:px-15 lg:px-15 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-full border border-[#B7F10A] flex items-center justify-center mb-6">
              <FiTarget className="text-[#B7F10A] text-2xl" />
            </div>

            <h3 className="font-bold text-xl text-black mb-4">Our Mission</h3>

            <p className="text-gray-500 leading-7">
              To empower people to live healthier, stronger and happier lives
              through expert guidance and supportive fitness programs.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-full border border-[#B7F10A] flex items-center justify-center mb-6">
              <FiEye className="text-[#B7F10A] text-2xl" />
            </div>

            <h3 className="font-bold text-xl text-black mb-4">Our Vision</h3>

            <p className="text-gray-500 leading-7">
              To become the leading fitness community that transforms lives
              worldwide through innovation and excellence.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-full border border-[#B7F10A] flex items-center justify-center mb-6">
              <FiStar className="text-[#B7F10A] text-2xl" />
            </div>

            <h3 className="font-bold text-xl text-black mb-4">Our Values</h3>

            <p className="text-gray-500 leading-7">
              Integrity, excellence, community, accountability and continuous
              improvement in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE FITNEX ================= */}

      <section className="bg-black py-10 md:px-15 px-4 lg:px-15 border border-t-0 border-l-0 border-r-0 border-gray-300/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}

          <div className="text-white">
            <h2 className="text-4xl font-bold mb-5">Why Choose FitNex?</h2>

            <p className="text-gray-400 mb-8 max-w-lg">
              We provide everything you need to achieve your fitness goals with
              world-class facilities, certified trainers and personalized
              programs.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FiCheckCircle className="text-[#B7F10A] text-xl" />
                <span>State-of-the-art equipment</span>
              </div>

              <div className="flex items-center gap-4">
                <FiCheckCircle className="text-[#B7F10A] text-xl" />
                <span>Expert guidance and support</span>
              </div>

              <div className="flex items-center gap-4">
                <FiCheckCircle className="text-[#B7F10A] text-xl" />
                <span>Personalized fitness programs</span>
              </div>

              <div className="flex items-center gap-4">
                <FiCheckCircle className="text-[#B7F10A] text-xl" />
                <span>Proven results</span>
              </div>

              <div className="flex items-center gap-4">
                <FiCheckCircle className="text-[#B7F10A] text-xl" />
                <span>Friendly and motivating community</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-[2fr_1fr] gap-5 items-center">
            {/* Big Image */}

            <div className="relative h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/about/first.png"
                alt="Fitness Trainer"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Images */}

            <div className="flex flex-col gap-5 h-[520px]">
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/about/second.png"
                  alt="Workout"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/about/third.png"
                  alt="Gym"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
