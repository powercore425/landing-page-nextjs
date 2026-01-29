"use client";

import Link from "next/link";
import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function ExamPreparationBanner() {
  const { ref, className, style } = useAnimation({ direction: "fadeIn", delay: 100 });

  return (
    <section
      ref={ref}
      className={`w-full py-12 md:py-20 relative overflow-hidden ${className}`}
      style={{
        ...style,
        background: 'linear-gradient(135deg, #E8E3F0 0%, #D4C9E8 100%)',
      }}
    >
      {/* Pattern Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/process_bg.png"
          alt="Process background"
          fill
          className="object-cover"
        />
      </div>

      {/* White Panel */}
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
        <div className="bg-paper rounded-[20px] shadow-xl p-8 md:p-12 lg:p-16 flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Headline */}
          <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] max-w-[800px]">
            Walk Into Your Exam With Zero Surprises
          </h2>

          {/* Body Text */}
          <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%] max-w-[700px]">
            Our instructors aren&apos;t just teachers – they&apos;re top academic performers who know exactly what it takes to excel and are equipped to help you prepare for your exams.
          </p>

          {/* Call-to-Action Button */}
          <Link
            href="/exam-prep"
            className="px-5 py-2 bg-ink text-paper rounded-lg font-rubik font-normal text-base md:text-lg leading-[160%] hover:opacity-60 transition-opacity"
          >
            Exam Preparation
          </Link>
        </div>
      </div>
    </section>
  );
}
