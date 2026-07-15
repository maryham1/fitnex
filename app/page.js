import Image from "next/image";
import hero from "@/public/hero-image.png";
// import { GiWeightLiftingUp } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import flexible from "@/public/flexible.png";
import muscle from "@/public/muscle.png";
import performance from "@/public/performance.png";
import weightloss from "@/public/weightloss.png";
import Link from "next/link";
import { GiWeightLiftingUp, GiLotus } from "react-icons/gi";
import { IoFlameOutline, IoFlashOutline } from "react-icons/io5";
import { FiUsers, FiAward, FiCalendar, FiStar } from "react-icons/fi";
import AboutHero from "./_components/about-component/AboutHeroSec";
import PopularClasses from "./_components/PopularClasses";

//programs array

const programs = [
  {
    program_Name: "Muscle Building",
    description: "Build strength and size with customized workout plans.",
    icon: GiWeightLiftingUp,
    image: muscle,
  },
  {
    program_Name: "Weight Loss",
    description:
      "Burn fat and lose weight with effective and sustainable plans.",
    icon: IoFlameOutline,
    image: weightloss,
  },
  {
    program_Name: "Flexibility & Yoga",
    description: "Improve flexibility, reduce stress and strengthen your body.",
    icon: GiLotus,
    image: flexible,
  },
  {
    program_Name: "Performance",
    description: "Enhance endurance, speed and overall athletic performance.",
    icon: IoFlashOutline,
    image: performance,
  },
];

//statical array
const stats = [
  {
    icon: FiUsers,
    value: "10K+",
    label: "Happy Members",
  },
  {
    icon: FiAward,
    value: "25+",
    label: "Expert Trainers",
  },
  {
    icon: FiCalendar,
    value: "50+",
    label: "Weekly Classes",
  },
  {
    icon: FiStar,
    value: "4.8",
    label: "Average Rating",
  },
];

export default function Home() {
  return (
    <>
      <header className="relative min-h-screen z-40">
        <Image
          src={hero}
          quality={100}
          width={100}
          placeholder="blur"
          height={100}
          alt="hero image"
          className="w-full h-screen   object-cover "
        />
        <div className="absolute inset-0  flex flex-col md:flex-row lg:flex-row  mx-auto px-4 md:px-15 lg:px-15 py-10 mt-20 gap-10 lg:justify-between justify-between items-start md:justify-center md:items-center lg:items-center">
          <div className=" flex flex-col gap-7 lg:gap-7 items-start   justify-center text-white   ">
            <p className="uppercase text-[#B7F10A] text-xs md:text-sm lg:text-sm font-semibold">
              strong body. strong mind. strong you
            </p>
            <h1 className="uppercase text-[#B7F10A] text-2xl md:text-3xl lg:text-6xl ">
              <span className="text-white font-bold">
                level up <br /> your
              </span>{" "}
              fitness
            </h1>
            <p className="text-white text-md md:text-md  text-lg w-auto md:w-[450px] lg:w-[450px]">
              Expert guidance, customized programs, and world class facilities
              to help you become your best self.
            </p>
            <div className="flex  md:flex-row lg:flex-row  gap-4">
              <button className="px-6 py-2 rounded-full bg-[#B7F10A] text-black">
                <Link href="/join">Get Started &rarr;</Link>
              </button>
              <button className="px-6 py-2 text-center rounded-full bg-transparent border-2  border-white text-white">
                <Link href="/programs">Explore programs</Link>
              </button>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <GiWeightLiftingUp size={30} className="text-[#B7F10A]" />
                <div>
                  <h4 className="text-xs md:text-sm lg:text-sm font-semibold text-center">
                    Modern equipment
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm text-center">
                    Top quality always
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaUserTie size={30} className="text-[#B7F10A]" />
                <div>
                  <h4 className="text-xs md:text-sm lg:text-sm font-semibold text-center">
                    Experts Trainers
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm text-center">
                    Certified and experienced
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IoTrendingUp size={30} className="text-[#B7F10A]" />
                <div>
                  <h4 className="text-xs md:text-sm lg:text-sm font-semibold text-center">
                    Result Driven
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm text-center">
                    Your goals, our mission
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white w-auto  bg-black/80 rounded-md border border-gray-700 border-[1px] p-2">
            <h4 className="text-xl font-semibold">10k+</h4>
            <p>Happy Members</p>
            <div className="flex">
              <div className="bg-[#B7F10A] p-3 rounded-full"></div>
              <div className="bg-[#B7F10A] p-3 rounded-full border border-2 border-[#182001] -ml-2"></div>
              <div className="bg-[#B7F10A] p-3 rounded-full border border-2 border-[#182001] -ml-2"></div>
              <div className="bg-[#B7F10A] p-3 rounded-full border border-2 border-[#182001] -ml-2"></div>
              <div className="bg-[#B7F10A] p-3 rounded-full border border-2 border-[#182001] -ml-2"></div>
              <div className="bg-[#B7F10A] p-3 rounded-full border border-2 border-[#182001] -ml-2"></div>
            </div>
          </div>
        </div>
      </header>

      {/* our program */}
      <section className="px-4 md:px-15 lg:px-15 bg-white py-10 ">
        <div className="flex flex-col gap-10">
          <div className="text-center space-y-2 lg:space-y-2">
            <h4 className="text-[#729700] uppercase text-xs md:text-sm lg:text-sm font-bold ">
              our program
            </h4>
            <h1 className="text-black text-md md:text-2xl lg:text-3xl font-bold">
              Find the Perfect Program for You
            </h1>
            <p className="text-gray-700 text-sm lg:text-md">
              Whether you want to build muscle, lose weight and improve your
              overall <br /> wellness we have a program that fit your goals
            </p>
          </div>

          <div className="flex flex-col lg:flex-row md:flex-row flex-wrap  gap-10 ">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  className="bg-white shadow-md max-w-[300px] md:max-w-[250px] lg:max-w-[220px] mx-auto rounded-xl border border-[1px] relative border-gray-300 transition-all duration-300 overflow-hidden group "
                  key={program.program_Name}
                >
                  <Image
                    src={program.image}
                    alt="no image"
                    placeholder="blur"
                    className="h-[150px] object-cover rounded-b-none rounded-xl group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-[130px] left-6 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <Icon className="text-[#B7F10A] text-md" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="capitalize text-md text-black font-bold text-md  ">
                      {program.program_Name}
                    </h4>
                    <p className="capitalize text-sm text-gray-500  ">
                      {program.description}
                    </p>
                    <button className="">
                      <Link
                        href=""
                        className="text-[#729700] font-semibold text-sm "
                      >
                        Learn more &rarr;{" "}
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* statical section */}
      <section className="bg-black px-4 md:px-15 lg:px-15  py-10">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center justify-center gap-4 py-6"
                >
                  <Icon className="text-[#B7F10A] text-2xl" />

                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {stat.value}
                    </h3>

                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* about section */}
      <AboutHero showButton={true} />
      {/* popular class */}
      <PopularClasses />
    </>
  );
}
