"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full bg-paper flex flex-col items-center py-3 md:py-[23px] px-4 sm:px-12 lg:px-20 gap-2 md:gap-[10px] min-h-[80px] md:h-[96px] transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
      }`}>
      {/* Bottom gradient when scrolled */}
      {isScrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #DFB86A 20%, #DFB86A 80%, transparent 100%)",
          }}
        />
      )}
      <div className="w-full max-w-[1120px] h-[50px] flex flex-row justify-between items-center gap-4 md:gap-8 lg:gap-40">
        {/* Logo */}
        <Link href="/" className="w-[120px] md:w-[150px] lg:w-[186px] h-[40px] md:h-[50px] flex items-center justify-center flex-shrink-0 overflow-hidden hover:opacity-80 transition-opacity">
          <Image
            src="/images/top_logo.png"
            alt="MAS Logo"
            width={186}
            height={50}
            className="object-contain w-full h-full"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex flex-row items-center gap-4 xl:gap-6 max-w-full h-[34px]">
          {/* Menu items */}
          <div className="flex flex-row items-center gap-4 xl:gap-8 max-w-full h-[26px]">
            <Link
              href="/our-tutors"
              className="text-ink font-rubik font-normal text-base leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Our Tutors
            </Link>
            <Link
              href="/about-us"
              className="text-ink font-rubik font-normal text-base leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/programs-pricing"
              className="text-ink font-rubik font-normal text-base leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Programs & Pricing
            </Link>
            <Link
              href="/contact"
              className="text-ink font-rubik font-normal text-base leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Button */}
          <button className="flex flex-row bg-ink justify-center items-center px-5 py-2 text-paper rounded font-rubik font-normal text-sm xl:text-base leading-[160%] hover:opacity-60 transition-opacity whitespace-nowrap flex-shrink-0">
            Book a Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-ink hover:opacity-80 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {
        isOpen && (
          <div className="lg:hidden bg-paper border-t border-border w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/our-tutors" className="text-ink block px-3 py-2 text-base font-medium font-rubik">
                Our Tutors
              </Link>
              <a href="#about" className="text-ink block px-3 py-2 text-base font-medium font-rubik">
                About Us
              </a>
              <a href="#programs" className="text-ink block px-3 py-2 text-base font-medium font-rubik">
                Programs & Pricing
              </a>
              <a href="#contact" className="text-ink block px-3 py-2 text-base font-medium font-rubik">
                Contact Us
              </a>
              <button className="w-full mt-4 mx-3 px-4 py-[4px] bg-ink text-paper rounded font-normal font-rubik">
                Book a Consultation
              </button>
            </div>
          </div>
        )
      }
    </nav >
  );
}
