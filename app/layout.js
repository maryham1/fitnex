import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "Fitnex:%s",
    default: "Fitnex",
  },
  description:
    "Transform your fitness journey with Fitnex. Explore workout programs, personal training, yoga, weight loss plans, and nutrition coaching—all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
