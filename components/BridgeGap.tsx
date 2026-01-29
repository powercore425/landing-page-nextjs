"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

type BridgeGapVariant = "cta" | "pricing";

interface BridgeGapProps {
  variant?: BridgeGapVariant;
}

export default function BridgeGap({ variant = "cta" }: BridgeGapProps) {
  const { ref, className, style } = useAnimation({ direction: "up", delay: 100 });

  if (variant === "pricing") {
    return (
      <section
        ref={ref}
        className={`w-full py-12 md:py-20 bg-paper relative overflow-hidden ${className}`}
        style={style}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/ready_bg.png"
            alt="Pricing background pattern"
            fill
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
          {/* Header */}
          <div className="text-center max-w-[820px] mx-auto mb-10 md:mb-14">
            <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase mb-3 md:mb-4">
              PRICING
            </p>
            <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] mb-4 md:mb-6">
              Three Paths, One Mission.
              <br />
              Peak Performance.
            </h2>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              High school <span className="font-bold text-gold">MASTERY</span>, university-level{" "}
              <span className="font-bold text-gold">PRECISION</span>, or emergency exam prep — each plan at
              Maslin Academy combines our proven tutoring methodology for results you can measure.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Left card */}
            <div className="bg-paper border-2 border-gold rounded-[20px] p-6 md:p-8 flex flex-col">
              <h3 className="text-ink font-rubik font-bold text-[20px] md:text-[22px] leading-[130%] mb-4">
                Emergency Cramming
              </h3>
              <p className="text-grey font-rubik font-normal text-[14px] leading-[160%]">Starting at:</p>
              <p className="text-ink font-rubik font-bold text-[24px] md:text-[28px] leading-none mt-2 mb-4">
                $80/hr*
              </p>
              <ul className="text-ink font-rubik font-normal text-[14px] leading-[170%] flex flex-col gap-2 mb-4">
                <li>- 2-6 weeks before exams</li>
                <li>- Prioritize survival topics</li>
                <li>- Teach fast test-taking strategies</li>
                <li>- Give condensed review sheets and daily practice</li>
              </ul>
              <p className="text-grey font-rubik font-normal text-[12px] leading-[160%] mb-6">
                * Extra fees are added for the administrative costs associated for priority services for any grade
                level.
              </p>
              <button className="mt-auto w-full sm:w-auto px-5 py-2 bg-ink text-paper rounded-[4px] font-rubik font-normal text-[14px] leading-[160%] hover:opacity-90 transition-opacity">
                Inquiry Today
              </button>
            </div>

            {/* Middle card */}
            <div className="bg-midnight border-2 border-midnight rounded-[20px] p-6 md:p-8 flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image src="/images/tutors_bg.png" alt="Card background" fill className="object-cover" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold text-gold mb-4">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
                    />
                    <path
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-paper font-rubik font-bold text-[22px] md:text-[24px] leading-[130%] mb-4">
                  The Maslin Way
                </h3>
                <p className="text-paper/80 font-rubik font-normal text-[14px] leading-[160%]">
                  Elementary and high school starting at:
                </p>
                <p className="text-paper font-rubik font-bold text-[28px] md:text-[32px] leading-none mt-2 mb-4">
                  $70/hr
                </p>
                <ul className="text-paper/90 font-rubik font-normal text-[14px] leading-[170%] flex flex-col gap-2 mb-6">
                  <li>- 8-16 weeks before exams</li>
                  <li>
                    - Start with our <span className="font-bold text-gold">Gap Analysis</span>
                  </li>
                  <li>- Work through a custom learning roadmap that fixes old holes while staying ahead of school</li>
                  <li>- Use weekly low-stakes testing + deliberate practice</li>
                </ul>
                <button className="mt-auto w-full sm:w-auto px-5 py-2 bg-gold text-midnight rounded-[4px] font-rubik font-normal text-[14px] leading-[160%] hover:opacity-90 transition-opacity">
                  Inquiry Today
                </button>
              </div>
            </div>

            {/* Right card */}
            <div className="bg-paper border-2 border-gold rounded-[20px] p-6 md:p-8 flex flex-col">
              <h3 className="text-ink font-rubik font-bold text-[20px] md:text-[22px] leading-[130%] mb-4">
                University Tutoring
              </h3>
              <p className="text-grey font-rubik font-normal text-[14px] leading-[160%]">Starting at:</p>
              <p className="text-ink font-rubik font-bold text-[24px] md:text-[28px] leading-none mt-2 mb-4">
                $90/hr
              </p>
              <ul className="text-ink font-rubik font-normal text-[14px] leading-[170%] flex flex-col gap-2 mb-6">
                <li>- Start with a free consultation</li>
                <li>- Build a custom, result focused roadmap</li>
                <li>- Test prep</li>
                <li>- Supplementary mental performance tools</li>
              </ul>
              <button className="mt-auto w-full sm:w-auto px-5 py-2 bg-ink text-paper rounded-[4px] font-rubik font-normal text-[14px] leading-[160%] hover:opacity-90 transition-opacity">
                Inquiry Today
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={`w-full py-12 md:py-20 bg-midnight relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/tutors_bg.png" alt="Background pattern" fill className="object-cover" />
      </div>

      <div className="w-full max-w-[1120px] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-start px-4 sm:px-12 lg:px-20 gap-8 md:gap-12 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 relative">
            <div className="absolute w-full aspect-square rounded-full overflow-hidden">
              <Image src="/images/ready_hero.png" alt="Ready to bridge the gap" fill className="object-cover" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white w-full lg:w-auto">
            <h2 className="text-[28px] md:text-[34px] lg:text-4xl font-bold mb-4 md:mb-6 font-rubik">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed font-rubik">
              In one comprehensive session, we&apos;ll pinpoint exactly where the gaps are and map a personalized path
              forward.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="w-full sm:w-auto px-5 py-2 bg-gold text-midnight rounded-lg font-semibold text-base md:text-lg hover:bg-gold/90 transition-colors font-rubik">
                Book A Gap Analysis
              </button>
              <button className="w-full sm:w-auto px-5 py-2 bg-transparent text-white rounded-lg font-semibold text-base md:text-lg border-2 border-white hover:bg-white hover:text-midnight transition-colors font-rubik">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
