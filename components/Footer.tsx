import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-midnight relative">
      {/* Main Content Area */}
      <div className="w-full bg-midnight py-8 md:py-12 px-4 sm:px-12 lg:px-20">
        <div className="w-full max-w-[1120px] mx-auto flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex flex-col gap-4">
              <div className="w-[200px] md:w-[250px] lg:w-[297px] h-[60px] md:h-[70px] lg:h-[80px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/bottom_logo.png"
                  alt="Maslin Academy Logo"
                  width={297}
                  height={80}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-20">
              {/* Left Column */}
              <div className="flex flex-col gap-2 md:gap-3">
                <a href="#" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Home
                </a>
                <a href="#tutors" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Meet Our Tutors
                </a>
                <a href="#about" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Our Story
                </a>
                <a href="#programs" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Programs & Pricing
                </a>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2 md:gap-3">
                <a href="#gap-analysis" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Gap Analysis
                </a>
                <a href="#mpc" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Mental Performance Coaching
                </a>
                <a href="#exam-prep" className="text-paper font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-80 transition-opacity whitespace-nowrap">
                  Exam Preparation
                </a>
              </div>
            </div>
          </div>
          {/* Copyright and Legal Links */}
          <div className="flex flex-col gap-2">
            <p className="text-paper font-rubik font-normal text-[12px] md:text-[14px] leading-[160%]">
              Copyright © 2025 Maslin Academy. All rights reserved.
            </p>
            <div className="flex flex-row flex-wrap gap-2 text-paper font-rubik font-normal text-[12px] md:text-[14px] leading-[160%]">
              <a href="#" className="hover:opacity-80 transition-opacity">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Use of Cookies
              </a>
              <span>|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
