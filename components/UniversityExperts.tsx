"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

const steps = [
  {
    title: "INTRODUCTION",
    description: "Personal interview and teaching philosophy assessment.",
    icon: "/images/icon_message.png",
  },
  {
    title: "COMPLETE HIGH SCHOOL ONBOARDING",
    description: "Yes all of it - administrative training session covering our methods and systems.",
    icon: "/images/icon_onboarding.png",
  },
  {
    title: "PASS A COMPETENCE EXAM",
    description: "2-6 week intensive teaching phase focusing on learning strategies.",
    icon: "/images/icon_pass.png",
  },
  {
    title: "CONDUCT MOCK SESSION",
    description: "Prove ability to break down complex concepts into manageable bite-sized pieces.",
    icon: "/images/icon_conduct.png",
  },
  {
    title: "COMPLETE 2 SESSION TRIAL PERIOD",
    description: "2-3 shadowing sessions where they observe, receive feedback, and refine their approach.",
    icon: "/images/icon_complete.png",
  },
];

export default function UniversityExperts() {
  const { ref, className, style } = useAnimation({ direction: "up", delay: 100 });

  return (
    <section ref={ref} className={`w-full bg-paper py-12 md:py-20 ${className}`} style={style}>
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row items-start gap-2 md:gap-12 lg:gap-20">
          {/* Left - Content */}
          <div className="w-full flex flex-col gap-6 md:gap-8">
            {/* Header */}
            <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase">
              POST-SECONDARY
            </p>

            {/* Main Title */}
            <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%]">
              University Subject Matter Experts With a Passion for Teaching
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              University courses demand a different level of expertise. Our university tutors have not only excelled academically but have proven they can guide students through complex material with <span className="font-bold italic text-gold">CLARITY</span> and <span className="font-bold italic text-gold">CONFIDENCE</span>.
            </p>

            {/* Five-Step Process */}
            <div className="flex flex-col gap-6 md:gap-8 mt-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-row gap-4 md:gap-6 items-start">
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-gold">
                    <div className="absolute inset-0 overflow-hidden ">
                      <Image
                        src={step.icon}
                        alt="Tutor with students"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-2 pr-0 sm:pr-4 lg:pr-12">
                    <h3 className="text-ink font-rubik font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[130%] uppercase">
                      {step.title}
                    </h3>
                    <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="relative w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0">
            <div className="absolute inset-0 rounded-[20px] overflow-hidden ">
              <Image
                src="/images/approach5.png"
                alt="Tutor with students"
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
