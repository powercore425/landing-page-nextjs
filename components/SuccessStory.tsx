"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function SuccessStory() {
  const { ref, className, style } = useAnimation({ direction: "right", delay: 100 });

  return (
    <section ref={ref} className={`w-full py-12 md:py-20 bg-midnight relative overflow-hidden ${className}`} style={style}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/tutors_bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 z-10">
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <div className="text-white flex flex-col gap-4 md:gap-6 flex-1 items-start">
            <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase">
              CASE STUDY
            </p>
            <h2 className="text-white font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[40px] leading-[110%]">
              From Failing Grade 12 Math to A+ in University Calculus
            </h2>
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="text-white font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                Kaitlyn went from failing high school math to earning 86% overall and 92% in Calculus & Vectors – but the real proof of success came at the University of Ottawa, where she earned an A+ in Calculus I and an A- in Linear Algebra her first semester.
              </p>
              <p className="text-white font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                She didn&apos;t just pass; she built the foundation to thrive at the university level, proving that struggling students can surpass expectations with the right support.
              </p>
            </div>
            <button className="w-full sm:w-auto px-5 py-2 text-gold bg-transparent border-2 border-gold rounded-[4px] font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-90 transition-opacity whitespace-nowrap">
              Read the Case Study
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] overflow-hidden">
              <Image
                src="/images/study_hero.jpg"
                alt="Kaitlyn studying with laptop"
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
