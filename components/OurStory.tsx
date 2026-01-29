"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimation } from "./AnimatedSection";

const founders = [
  {
    name: "PHILIPE ANDRE",
    image: "/images/head1.jpg",
    linkedin: "https://linkedin.com/in/philipe-andre",
    description: (
      <>
        With a decade of tutoring experience, Philipe believes anything is teachable. His dream is to become a Physics and Math professor, and his <span className="font-bold text-gold">GENUINE PASSION</span> for helping young minds shines through in every session.
      </>
    ),
  },
  {
    name: "TATIANA TURCANU",
    image: "/images/head2.jpg",
    linkedin: "https://linkedin.com/in/tatiana-turcanu",
    description: (
      <>
        A University of Ottawa graduate in Health Sciences, Tatiana brings six years of specialized tutoring in Biology and Chemistry. Her <span className="font-bold text-gold">TRANSFORMATIVE</span> philosophy: &quot;My goal for all my students is to teach them to never need me again. It all starts with reaching out for help :)&quot;
      </>
    ),
  },
];

export default function OurStory() {
  const { ref, className, style } = useAnimation({ direction: "up", delay: 100 });

  return (
    <section ref={ref} className={`w-full bg-paper py-12 md:py-20 ${className}`} style={style}>
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20">
        {/* OUR STORY Section */}
        <div className="flex flex-col gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Header */}
          <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase">
            OUR STORY
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-20">
            {/* Left - Image */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="w-full aspect-square max-w-[500px] mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-paper border-2 border-border">
                  <Image
                    src="/images/who_we_are.jpg"
                    alt="Maslin Academy story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
              <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%]">
                Maslin Academy Started With a Simple Observation - the System is Failing Our Students.
              </h2>
              <div className="flex flex-col gap-4 md:gap-6">
                <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  We watched bright students struggle not because they lacked ability, but because critical gaps in the system left them unprepared. Milestones that should be stepping stones—like the transition from middle school to high school, or from high school to university—became stumbling blocks instead.
                </p>
                <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
                  This frustration ignited a vision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Maslin Academy Was Founded */}
        <div className="flex flex-col gap-6 md:gap-8 mb-16 md:mb-20">
          <h3 className="text-ink font-rubik font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[130%]">
            That&apos;s why they founded Maslin Academy.
          </h3>
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              Traditional tutoring wasn&apos;t enough. Students needed more than homework help—they needed someone to fill the gaps the system leaves behind, to develop critical thinking skills, deeper understanding, and emotional support.
            </p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              Here, education is <span className="font-bold text-gold">PERSONAL</span>, <span className="font-bold text-gold">HOLISTIC</span> and <span className="font-bold text-gold">TRANSFORMATIVE</span>.
            </p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              We prepare students not just for tests, but for the next chapter of their lives. We build confidence alongside competence, developing essential skills needed for higher education and beyond.
            </p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              At Maslin Academy, we believe every student deserves more than the system offers. They deserve mentors who see their potential, understand their struggles, and commit to their success.
            </p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              When students thrive, we all win.
            </p>
          </div>
        </div>

        {/* Meet the Founders */}
        <div className="flex flex-col gap-8 md:gap-12 mb-16 md:mb-20">
          <h3 className="text-ink font-rubik font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[130%]">
            Meet the Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-paper border-2 border-border rounded-[20px] p-6 md:p-8 relative">
                {/* LinkedIn Icon */}
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-ink rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-paper" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>

                {/* Founder Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-paper mb-4 md:mb-6 flex items-center justify-center overflow-hidden flex-shrink-0 mx-auto">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Founder Name */}
                <h4 className="text-ink font-rubik font-bold text-[16px] md:text-[18px] lg:text-[20px] uppercase text-center mb-3 md:mb-4">
                  {founder.name}
                </h4>

                {/* Founder Description */}
                <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] text-center">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Statement */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-ink font-rubik font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[130%]">
            When Students Thrive, We All Win.
          </h3>
          <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
            At Maslin Academy, we believe every student deserves more than the system offers. They deserve mentors who see their potential, understand their struggles, and commit to their success.
          </p>
        </div>
      </div>
    </section>
  );
}
