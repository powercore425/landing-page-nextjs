"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function Hero() {
  const { ref, className, style } = useAnimation({ direction: "fadeIn", delay: 0 });

  return (
    <section ref={ref} className={`relative w-full flex flex-col items-center justify-center min-h-[400px] md:h-[522px] overflow-hidden mt-[80px] md:mt-[96px] ${className}`} style={style}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Students studying"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-12 lg:px-20 xl:px-20 2xl:px-40 w-full max-w-[1920px] mx-auto flex flex-row justify-between items-center">
        <div className="z-10 flex flex-col w-full max-w-[700px] min-h-[300px] md:h-[362px]">
          {/* Fill Container */}
          <div className="flex flex-col items-start gap-6 md:gap-12 w-full h-full">
            {/* Copy Section */}
            <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
              <h1 className="w-full text-ink font-rubik font-normal text-[32px] md:text-[42px] lg:text-[52px] leading-[110%] uppercase">
                REACH YOUR <span className="text-gold font-rubik italic font-bold">PEAK</span><br />THE MASLIN WAY
              </h1>
              <p className="w-full text-ink font-rubik font-normal text-base md:text-lg lg:text-xl leading-[160%]">
                We combine scientific gap analysis, elite instructors, and mental performance coaching to guarantee measurable results.
              </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                {/* Let's Talk Button */}
                <button className="w-full sm:w-auto flex flex-row justify-center items-center px-5 py-2 bg-ink text-paper border-2 border-ink rounded font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-60 transition-opacity">
                  Let&apos;s Talk
                </button>

                {/* Our Approach Button */}
                <button className="w-full sm:w-auto flex flex-row justify-center items-center px-5 py-2 bg-paper text-gold border-2 border-gold rounded font-rubik font-normal text-sm md:text-base leading-[160%] hover:bg-gold hover:text-paper transition-colors">
                  Our Approach
                </button>
              </div>

              {/* Rating */}
              <div className="flex flex-col items-start gap-2 w-full">
                {/* 5 Stars */}
                <div className="flex flex-row items-center gap-1 h-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 relative"
                    >
                      <Image
                        src="/images/star.png"
                        alt="star"
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  ))}
                </div>

                {/* Rating Text */}
                <p className="w-full text-[#757575] font-rubik font-normal text-sm leading-[160%] h-[22px]">
                  5/5 Google Ratings (20+)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
