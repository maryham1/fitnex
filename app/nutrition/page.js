import Image from "next/image";
import nutritionImg from "@/public/nutrition.png"; // Use the generated food image

import { FiClipboard, FiHeart, FiUsers, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const features = [
  {
    icon: FiClipboard,
    title: "Personalized Plans",
    description:
      "Meal plans tailored to your fitness goals and dietary preferences.",
  },
  {
    icon: FiHeart,
    title: "Balanced Nutrition",
    description:
      "Balanced meals to fuel your workouts and recovery effectively.",
  },
  {
    icon: FiUsers,
    title: "Expert Guidance",
    description:
      "Get support from certified nutrition professionals and coaches.",
  },
  {
    icon: FiTrendingUp,
    title: "Sustainable Results",
    description:
      "Healthy habits that help you achieve lasting success and wellbeing.",
  },
];

export const metadata = {
  title: "Nutrition",
};

export default function NutritionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 px-4 md:px-15 lg:px-15">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mt-20 items-center">
          {/* Left */}
          <div className="space-y-3">
            <p className="uppercase text-[#729700] text-xs md:text-sm font-semibold ">
              Nutrition
            </p>

            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black leading-tight">
              Fuel Your Body,
              <br />
              Achieve Your Goals
            </h1>

            <p className="text-gray-600  leading-8">
              Good nutrition is the key to great results. Whether your goal is
              weight loss, muscle gain, or improving your overall health, our
              nutrition experts provide personalized meal plans and guidance to
              help you stay on track.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B7F10A]/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#729700] text-md  md:text-xl" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-black">{item.title}</h3>

                      <p className="text-sm text-gray-500 leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div>
            <Image
              src={nutritionImg}
              alt="Healthy Nutrition"
              placeholder="blur"
              className=" w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
