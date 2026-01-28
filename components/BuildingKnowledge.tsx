"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function BuildingKnowledge() {
  const { ref, className, style } = useAnimation({ direction: "left", delay: 100 });

  return (
    <section ref={ref} className={`w-full bg-paper py-8 md:py-12 ${className}`} style={style}>
      <div className="w-full max-w-[1120px] mx-auto py-8 md:py-12">
        <div className="flex flex-col sm:flex-row items-start px-4 sm:px-12 lg:px-20 gap-8 md:gap-12 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 relative">
            <div className="absolute inset-0 rounded-[20px] overflow-hidden">
              <Image
                src="/images/who_we_are.jpg"
                alt="Maslin Academy building knowledge"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="text-ink font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase">
                WHO WE ARE
              </p>
              <h2 className="text-ink font-rubik font-medium text-[28px] md:text-[34px] lg:text-[38px] leading-[130%]">
                Maslin Academy: Building Knowledge, Step by Step
              </h2>
              <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                Founded by educators frustrated with the guesswork in traditional tutoring, we built something different: a <span className="font-bold italic text-gold">Holistic SYSTEM</span> that treats academic improvement like the science it should be. Our team brings together diagnostic assessments, subject-matter experts, and mental performance coaches – three elements that are critical for academic and professional success.              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button className="w-full sm:w-auto px-5 py-2 bg-ink text-paper rounded-[4px] font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-90 transition-opacity">
                Our Story
              </button>
              <button className="w-full sm:w-auto px-5 py-2 bg-transparent text-gold border-2 border-gold rounded-[4px] font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:bg-gold hover:text-paper transition-colors">
                Meet Our Tutors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
