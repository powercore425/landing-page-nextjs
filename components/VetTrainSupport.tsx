"use client";

import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function VetTrainSupport() {
    const { ref, className, style } = useAnimation({ direction: "left", delay: 100 });

    return (
        <section ref={ref} className={`w-full bg-paper py-8 md:py-12 ${className}`} style={style}>
            <div className="w-full max-w-[1120px] mx-auto py-8 md:py-12">
                <div className="flex flex-col sm:flex-row items-start px-4 sm:px-12 lg:px-20 gap-8 md:gap-12 lg:gap-20">
                    {/* Left - Image */}
                    <div className="w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 relative">
                        <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                            <Image
                                src="/images/tutors_hero.png"
                                alt="Maslin Academy building knowledge"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1 flex flex-col gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <h2 className="text-ink font-rubik font-medium text-[28px] md:text-[34px] lg:text-[38px] leading-[130%]">
                                We Don&apos;t Just Hire Tutors – We Thoroughly Vet, Train and Continuously Support
                            </h2>
                            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                                Every tutor begins their journey with a personal interview with Phil, our co-founder. This isn&apos;t just a formality – it&apos;s where we assess teaching philosophy, communication style, and genuine passion for education. We&apos;re looking for people who <span className="font-bold text-gold">CARE DEEPLY</span> about student growth, not just credentials on paper.
                            </p>
                            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                                Before any tutor works with students, they complete <span className="font-bold text-gold">COMPREHENSIVE TRAINING</span> on our proven instructional approaches:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    <span className="font-bold text-ink">Gap analysis methodology</span> – identifying exactly where students need support
                                </li>
                                <li>
                                    <span className="font-bold text-ink">Adaptive teaching strategies</span> – meeting students where they are and pushing them forward thoughtfully
                                </li>
                                <li>
                                    <span className="font-bold text-ink">Effective communication</span> – explaining concepts clearly while ensuring true understanding
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                            <button className="w-full sm:w-auto px-5 py-2 bg-ink text-paper rounded-[4px] font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:opacity-60 transition-opacity">
                                Meet the Team
                            </button>
                            <button className="w-full sm:w-auto px-5 py-2 bg-transparent text-gold border-2 border-gold rounded-[4px] font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] hover:bg-gold hover:text-paper transition-colors">
                                Our Training Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
