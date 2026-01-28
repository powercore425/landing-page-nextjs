"use client";

import { useState } from "react";
import Image from "next/image";

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-12 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/faq_bg.png"
          alt="FAQ background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 flex flex-col gap-8 md:gap-12 relative z-10">
        <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-paper rounded-[20px] shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 flex flex-row justify-between items-center gap-4 md:gap-6 hover:opacity-90 transition-opacity"
              >
                <span className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] flex-1 text-left">
                  {faq.question}
                </span>
                <span className="text-ink font-rubik font-bold text-[20px] md:text-[24px] leading-none flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-3 md:pb-4">
                  <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
