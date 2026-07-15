"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/fitness-logo.png";

import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-100 w-full bg-black border-b border-[#636462]">
      <div className="flex items-center justify-between px-2 md:px-10 lg:px-10 py-0">
        {/* Logo */}
        <Image
          src={logo}
          alt="fitness logo"
          width={150}
          height={150}
          className="w-32 lg:w-[150px] h-auto"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10 text-white">
          <li className="hover:text-[#A3DC08] hover:underline hover:underline-offset-8 transition-all duration-500">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-[#A3DC08] hover:underline hover:underline-offset-8 transition-all duration-500">
            <Link href="/about">About</Link>
          </li>

          <li className="hover:text-[#A3DC08] hover:underline hover:underline-offset-8 transition-all duration-500">
            <Link href="/programs">Programs</Link>
          </li>

          <li className="hover:text-[#A3DC08] hover:underline hover:underline-offset-8 transition-all duration-500">
            <Link href="/trainers">Trainers</Link>
          </li>

          <li className="hover:text-[#A3DC08] hover:underline hover:underline-offset-8 transition-all duration-500">
            <Link href="/nutrition">Nutrition</Link>
          </li>

          <li className="hover:text-[#A3DC08] hover:underline hover:underline-offset-8 transition-all duration-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-[#B7F10A] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#A3DC08] transition-all duration-500">
          Join Now
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black border-t border-[#636462] px-6 py-6">
          <ul className="flex flex-col gap-6 text-white">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/programs" onClick={() => setIsOpen(false)}>
                Programs
              </Link>
            </li>

            <li>
              <Link href="/trainers" onClick={() => setIsOpen(false)}>
                Trainers
              </Link>
            </li>

            <li>
              <Link href="/nutrition" onClick={() => setIsOpen(false)}>
                Nutrition
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <button className="mt-8 w-full rounded-md bg-[#B7F10A] py-3 font-semibold text-black hover:bg-[#A3DC08] transition">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
