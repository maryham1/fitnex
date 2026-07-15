"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Do I need a membership before joining?",
    answer:
      "Yes. All members are required to have an active membership before accessing our facilities or joining fitness classes.",
  },
  {
    question: "Can beginners join your fitness programs?",
    answer:
      "Absolutely! We offer beginner, intermediate, and advanced programs. Our trainers will help you choose the right plan based on your goals.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer:
      "Yes. Certified personal trainers are available for one-on-one coaching, personalized workout plans, and nutrition guidance.",
  },
  {
    question: "What should I bring to my first class?",
    answer:
      "Bring comfortable workout clothes, a water bottle, a towel, and athletic shoes. We'll take care of the rest.",
  },
  {
    question: "Can I freeze or cancel my membership?",
    answer:
      "Yes. Memberships can be frozen or cancelled based on our membership policy. Please contact our support team for assistance.",
  },
  {
    question: "Do you have nutrition coaching?",
    answer:
      "Yes. Our nutrition experts provide customized meal plans and healthy lifestyle coaching to complement your workouts.",
  },
  {
    question: "Are group classes included in the membership?",
    answer:
      "Most memberships include access to group classes. Premium memberships include unlimited access to all available classes.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Saturday from 6:00 AM to 9:00 PM and Sundays from 8:00 AM to 6:00 PM.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-black py-10 px-4 md:px-15 lg:px-15 mt-20">
        <div className="max-w-5xl space-y-4 ">
          <p className="uppercase tracking-widest text-sm text-[#B7F10A] font-semibold">
            Support
          </p>

          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white ">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-400  text-md md:text-md lg:text-lg">
            Find answers to the most common questions about memberships,
            classes, personal training, and everything FitNex.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 md:px-15 lg:px-15">
        <div className="max-w-4xl mx-auto rounded-xl border border-gray-200 shadow-sm">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-200 border-t-0 border-l-0 border-r-0 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <FiChevronUp className="text-[#729700] text-xl" />
                ) : (
                  <FiChevronDown className="text-[#729700] text-xl" />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#729700] py-10 px-4 md:px-15 lg:px-15">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mt-4 text-md md:text-md lg:text-lg text-white/90">
            Our support team is always ready to help you begin your fitness
            journey.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
