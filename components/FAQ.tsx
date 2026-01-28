"use client";

import { useState } from "react";
import { useAnimation } from "./AnimatedSection";

const faqs = [
  { question: "Why do you offer monthly payments instead of a pay-as-you-go option?", answer: "We offer monthly payments to ensure consistent progress and commitment." },
  { question: "Can I use your services without a Gap Analysis?", answer: "A Gap Analysis is essential to identify learning gaps and create a personalized plan." },
  { question: "Do you offer tutoring for university courses? What about IB?", answer: "Yes, we offer tutoring for university courses and IB programs." },
  { question: "How is a tutor assigned to my child?", answer: "Tutors are carefully matched based on your child's needs and learning style." },
  { question: "What is the learning approach at Maslin Academy?", answer: "We use a holistic, diagnostic-based approach that addresses knowledge gaps and builds confidence." },
  { question: "Do you offer online or in-person tutoring?", answer: "We offer both online and in-person tutoring options to suit your preferences." },
  { question: "Where are you located?", answer: "We have locations in multiple areas and also offer online services." },
  { question: "Can tutoring sessions be rescheduled if needed?", answer: "Yes, sessions can be rescheduled with advance notice." },
  { question: "Are your tutoring services available year-round?", answer: "Yes, our tutoring services are available throughout the year." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, className, style } = useAnimation({ direction: "fadeIn", delay: 100 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`w-full py-12 md:py-20 relative overflow-hidden faq-background-fixed ${className}`}
      style={style}
    >

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 flex flex-col gap-8 md:gap-12 relative z-10">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-paper rounded-[20px] shadow-lg overflow-hidden border-2 transition-all duration-300 ${isOpen ? "border-gold shadow-xl" : "border-border hover:border-gold/50"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex flex-row justify-between items-center gap-4 md:gap-6 hover:bg-gold/5 transition-all duration-200 group"
                >
                  <span className="text-ink font-rubik font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[160%] flex-1 text-left transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                    ? "bg-gold text-midnight rotate-180"
                    : "bg-border text-ink group-hover:bg-gold/20 rotate-0"
                    }`}>
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5 pt-0">
                    <div className="pt-2 border-t border-border">
                      <p className="text-grey font-rubik font-normal text-[14px] md:text-[16px] leading-[180%] mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
