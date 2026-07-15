import Image from "next/image";
import Link from "next/link";

import logo from "@/public/fitness-logo.png";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start pb-10">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image
              src={logo}
              alt="FitNex Logo"
              width={150}
              priority
              className="h-auto"
            />

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Empowering you to live a healthier, stronger and happier life.
            </p>

            <div className="mt-5 flex items-center gap-5 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#B7F10A]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/codey_sis"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#B7F10A]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/Codey_sis"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#B7F10A]"
              >
                <FaTwitter />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#B7F10A]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="transition hover:text-[#B7F10A]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#B7F10A]">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="transition hover:text-[#B7F10A]"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/trainers"
                  className="transition hover:text-[#B7F10A]"
                >
                  Trainers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 font-semibold">Support</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/faq" className="transition hover:text-[#B7F10A]">
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-[#B7F10A]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="transition hover:text-[#B7F10A]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold">Contact Us</h3>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-[#B7F10A]" />

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#B7F10A]"
                >
                  123 Fitness Street, Lagos, Nigeria
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-[#B7F10A]" />

                <a
                  href="tel:+9045808495"
                  className="transition hover:text-[#B7F10A]"
                >
                  +234 801 234 5678
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-[#B7F10A]" />

                <a
                  href="mailto:codeysis.1@gmail.com"
                  className="transition hover:text-[#B7F10A]"
                >
                  info@fitnex.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-5">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} FitNex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
