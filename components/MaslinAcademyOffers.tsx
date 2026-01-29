"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

const features = [
    {
        title: "Strategic Gap Analysis",
        description: "A comprehensive assessment that reveals the specific knowledge gaps standing between your current performance and your goals.",
        image: "/images/approach1.png",
    },
    {
        title: "Private Tutoring – The Maslin Way",
        description: "Personalized sessions designed to strengthen foundational skills, ignite intellectual curiosity, and foster a lifelong love of learning.",
        image: "/images/approach2.png",
    },
    {
        title: "Mental Performance Coaching (MPC)",
        description: "Personalized mental training that builds resilience, sharpens focus, and develops the mindset to perform under pressure.",
        image: "/images/approach6.png",
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
                            Programs
                        </p>
                        <h2 className="text-ink font-rubik font-medium text-[28px] md:text-[34px] lg:text-[38px] leading-[130%] text-center max-w-[700px]">
                            Maslin Academy Offers a Variety of Programs and Services
                        </h2>
                        <p className="text-ink font-rubik font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-center max-w-[700px]">
                            Our <span className="font-bold italic text-gold">Holistic</span> approach bridges the critical gaps in education, supporting students from elementary school to university <span className="font-bold italic text-gold">SUCCESS</span>.
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
