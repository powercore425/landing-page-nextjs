import Image from "next/image";

export default function ExamPrep() {
  return (
    <section className="w-full py-12 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/process_bg.png"
          alt="Exam preparation background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 md:px-8 lg:px-20 relative z-10">
        {/* White Card Container */}
        <div className="bg-paper rounded-[20px] shadow-lg p-6 md:p-8 lg:p-12 xl:p-16 text-center">
          <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] mb-4 md:mb-6">
            Walk Into Your Exam With Zero Surprises
          </h2>
          <p className="text-ink font-rubik font-normal text-[14px] md:text-[16px] leading-[160%] mb-6 md:mb-8 max-w-2xl mx-auto">
            Our instructors aren't just teachers - they're top academic performers who know exactly what it takes to excel and are equipped to help you prepare for your exams.
          </p>
          <button className="w-full sm:w-auto px-5 py-2 bg-ink text-paper rounded-lg font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-90 transition-opacity">
            Exam Preparation
          </button>
        </div>
      </div>
    </section>
  );
}
