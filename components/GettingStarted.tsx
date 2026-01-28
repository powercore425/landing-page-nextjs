import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "CONNECT",
    description: (
      <>
        Fill out our 1-minute <span className="text-gold font-bold underline">contact form</span> to book your free consultation and we will get back to you within 48 hours. You will be hearing directly from our co-founder Phil and we&apos;ll find out if Maslin Academy is right for you and your child.
      </>
    ),
  },
  {
    number: "2",
    title: "ASSESS",
    description: (
      <>
        If Maslin Academy is right for you, we&apos;ll get started right away with our <span className="text-gold font-bold underline">Gap Analysis</span> to discover what exactly the student is missing in their education and create a holistic, custom-tailored plan that includes knowledge gaps, optimal behavioral approach and areas of focus for lasting improvements.
      </>
    ),
  },
  {
    number: "3",
    title: "IMPROVE",
    description: "Working 1-on-1 with their personal tutor, students are supported through our proprietary exercises, individually designed to fill in the gaps we discovered during the analysis.",
  },
];

export default function GettingStarted() {
  return (
    <section className="w-full py-12 md:py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/process_bg.png"
          alt="Process background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
        {/* White Card Container */}
        <div className="bg-paper rounded-[20px] shadow-lg p-6 md:p-8 lg:p-12 xl:p-16">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-grey font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase mb-3 md:mb-4">
              OUR PROCESS
            </p>
            <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px]">
              Getting Started with Maslin Academy is Quick and Easy
            </h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6 md:gap-10 mb-8 md:mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row gap-4 md:gap-6 items-start">
                {/* Number */}
                <div className="flex-shrink-0 pt-1">
                  <span className="text-gold font-rubik font-bold text-[36px] md:text-[44px] lg:text-[52px] leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 md:gap-3 flex-1">
                  <h3 className="text-ink font-rubik font-bold text-[18px] md:text-[22px] lg:text-[28px] leading-[130%]">
                    {step.title}
                  </h3>
                  <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-ink text-paper rounded-lg font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-90 transition-opacity">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
