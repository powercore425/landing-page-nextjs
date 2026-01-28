"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function StopGuessing() {
  const { ref, className, style } = useAnimation({ direction: "left", delay: 100 });

  return (
    <section ref={ref} className={`w-full flex flex-col gap-12 md:gap-20 py-12 md:py-20 bg-paper ${className}`} style={style}>
      <div className="w-full max-w-[1120px] mx-auto py-8 md:py-12">
        <div className="flex flex-col sm:flex-row items-start px-4 sm:px-12 lg:px-20 gap-8 md:gap-12 lg:gap-20">
          {/* Left - Image */}
          <div className="relative w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] overflow-hidden">
              <Image
                src="/images/gap_hero.jpg"
                alt="Student working at desk with laptop and book"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-4 md:gap-6 flex-1">
            <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase">
              GAP ANALYSIS
            </p>
            <h2 className="text-ink font-rubik font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[110%]">
              Stop Guessing Why They&apos;re Struggling. Learn Exactly What&apos;s Holding Them Back.
            </h2>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
              At Maslin Academy, we don&apos;t guess – we systematically identify the exact gaps holding them back and fix the root cause, building a foundation of <span className="font-bold text-gold italic">CURIOSITY</span> and confidence that extends far beyond graduation.
            </p>
            <button className="w-full sm:w-auto px-5 py-2 bg-paper text-gold border-2 border-gold rounded-lg font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-90 transition-opacity">
              What&apos;s A Gap Analysis?
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <div className="flex flex-col gap-4 md:gap-6 flex-1">
            <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase">
              MENTAL PERFORMANCE COACHING (MPC)
            </p>
            <h2 className="text-ink font-rubik font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[110%]">
              Turn Academic Stress Into Peak Performance
            </h2>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
              Mental Performance Coaches turn test anxiety into calm focus, replace perfectionism with healthy <span className="text-gold font-bold">CONFIDENCE</span>, and teach students how to bounce back from a bad quiz in 10 minutes instead of spiraling for days.
            </p>
            <button className="w-full sm:w-auto px-5 py-2 bg-paper text-gold border-2 border-gold rounded-lg font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-90 transition-opacity">
              What is MPC?
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] overflow-hidden">
              <Image
                src="/images/mental_hero.jpg"
                alt="Person standing on mountain peak"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
