"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

const features = [
    {
        title: "Diagnostic Assessments",
        description: "We identify knowledge gaps,  mental blocks, attitude barriers, and missing foundations to accelerate progress.",
        image: "/images/approach1.png",
    },
    {
        title: "Individualized Approach",
        description: "We embrace differences in each student and cater to custom needs on an ongoing basis.",
        image: "/images/approach2.png",
    },
    {
        title: "Create Lifelong Learners",
        description: "We promote intellectual growth, curiosity, and lifelong learning alongside developing and trusting your intuition.",
        image: "/images/approach3.png",
    },
];

export default function MaslinAcademyOffers() {
    const { ref, className, style } = useAnimation({ direction: "zoomIn", delay: 100 });

    return (
        <section id="approach" ref={ref} className={`w-full bg-paper py-12 md:py-20 ${className}`} style={style}>
            <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20">
                <div className="flex flex-col items-center gap-8 md:gap-12">
                    <div className="flex flex-col items-center gap-3 md:gap-4 w-full max-w-[920px]">
                        <p className="text-ink font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase text-center">
                            OUR APPROACH
                        </p>
                        <h2 className="text-ink font-rubik font-medium text-[28px] md:text-[34px] lg:text-[38px] leading-[130%] text-center max-w-[700px]">
                            What Makes Maslin Academy Different?
                        </h2>
                        <p className="text-ink font-rubik font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-center max-w-[700px]">
                            We exist to <span className="font-bold italic text-gold">INSPIRE</span> a lasting appreciation for learning, develop critical thinking and to <span className="font-bold italic text-gold">EMPOWER</span> academic independence and lifelong success.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex-1 bg-paper rounded-[20px] px-4 md:px-2 py-8 md:py-12 flex flex-col items-center gap-8 md:gap-12"
                            >
                                <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] flex items-center justify-center relative">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3 w-full">
                                    <h3 className="text-ink font-rubik font-semibold text-[18px] md:text-[20px] lg:text-[22px] leading-[140%] tracking-[0.05em] uppercase text-center">
                                        {feature.title}
                                    </h3>
                                    <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] text-center">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
