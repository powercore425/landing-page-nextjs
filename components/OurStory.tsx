"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimation } from "./AnimatedSection";

const founders = [
  {
    name: "PHILIPE ANDRE",
    image: "/images/founder1.png",
    linkedin: "https://linkedin.com/in/philipe-andre",
    description: (
      <>
        <span className="font-bold text-ink">PHILIPE ANDRE</span> brings over a decade of tutoring experience and an unwavering belief that "anything is teachable." With dreams of becoming a Physics and Math professor, Phil has spent years working with students of all ages and abilities across countless subjects. <br /><br />Even while pursuing post-graduate studies at the University of Ottawa, he's never stopped tutoring – because for Phil, teaching isn't just work. It's a calling. He pours his heart into every student he takes on, driven by a <span className="font-bold text-gold">GENUINE PASSION</span> for helping young minds unlock their potential.
      </>
    ),
  },
  {
    name: "TATIANA TURCANU",
    image: "/images/founder2.png",
    linkedin: "https://linkedin.com/in/tatiana-turcanu",
    description: (
      <>
        <span className="font-bold text-ink">TATIANA TURCANU</span>, a recent University of Ottawa graduate with a Bachelor's in Health Sciences, brings six years of specialized tutoring in Biology and Chemistry.<br /><br />Her experience extends beyond high school to university-level instruction, including collaboration with teaching assistants and contributions to lesson plan development. <br /><br />Her philosophy is beautifully simple yet <span className="font-bold text-gold">TRANSFORMATIVE</span>: &quot;My goal for all my students is to teach them to never need me again. It all starts with reaching out for help :)&quot;
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
        <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-12 lg:gap-20 mb-12">
          {/* Left - Image */}
          <div className="w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 relative">
            <div className="absolute inset-0 rounded-[20px] overflow-hidden">
              <Image
                src="/images/ready_hero.png"
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
                Our story
              </p>
              <h2 className="text-ink font-rubik font-medium text-[28px] md:text-[34px] lg:text-[38px] leading-[130%]">
                Maslin Academy Started With a Simple Observation – the System is Failing Our Students
              </h2>
              <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                As tutors working at every level of education, Maslin Academy Co-founders witnessed it repeatedly – bright, capable students struggling not because they lacked potential, but because critical gaps in the system left them unprepared for what came next.</p>
              <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                The leap from middle school to high school. The daunting transition to university. Each milestone became a stumbling block rather than a stepping stone. This frustration ignited a vision.
              </p>
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
              Together, Phil and Tatiana recognized that traditional tutoring wasn&apos;t enough. Students needed more than homework help – they needed someone to fill the gaps the system leaves behind. They needed critical thinking skills, deeper understanding, and emotional support to navigate the pressures of modern education.
            </p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              Here, education is <span className="font-bold italic text-gold">PERSONAL</span>, <span className="font-bold italic text-gold">HOLISTIC</span> and <span className="font-bold italic text-gold">TRANSFORMATIVE</span>.
            </p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              Phil, Tatiana, and their team of exceptional tutors don&apos;t just prepare students for the next test – they prepare them for the next chapter of their lives. They build confidence alongside competence, ensuring every student develops not just academic knowledge but the essential skills needed for higher education and beyond.</p>
            <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[160%]">
              At Maslin Academy, we believe every student deserves more than the system offers. They deserve mentors who see their potential, understand their struggles, and commit to their success.            </p>
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
              <div key={index} className="bg-border bg-opacity-20 rounded-[20px] p-6 md:p-12">
                {/* Image Container with LinkedIn Icon */}
                <div className="relative w-full mb-4 md:mb-6 flex flex-row justify-between items-start">
                  {/* Square Image with Rounded Corners */}
                  <div className="aspect-square h-[100px] sm:h-[150px] relative rounded-[20px] overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* LinkedIn Icon - Top Right of Image */}
                  <Link
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg relative"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <Image
                      src={"/images/linkedin.png"}
                      alt={'LinkedIN'}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>

                {/* Founder Description */}
                < p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]" >
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
      </div >
    </section >
  );
}
