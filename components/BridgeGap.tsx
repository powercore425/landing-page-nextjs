import Image from "next/image";

export default function BridgeGap() {
  return (
    <section className="w-full py-12 md:py-20 bg-midnight relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/tutors_bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1120px] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-start px-4 sm:px-12 lg:px-10 gap-8 md:gap-12 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full aspect-square sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0 relative">
            <div className="absolute w-full aspect-square rounded-full overflow-hidden">
              <Image
                src="/images/ready_hero.png"
                alt="Ready to bridge the gap"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white w-full lg:w-auto">
            <h2 className="text-[28px] md:text-[34px] lg:text-4xl font-bold mb-4 md:mb-6 font-rubik">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed font-rubik">
              In one comprehensive session, we'll pinpoint exactly where the gaps are and map a personalized path forward.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="w-full sm:w-auto px-5 py-2 bg-gold text-midnight rounded-lg font-semibold text-base md:text-lg hover:bg-gold/90 transition-colors font-rubik">
                Book A Gap Analysis
              </button>
              <button className="w-full sm:w-auto px-5 py-2 bg-transparent text-white rounded-lg font-semibold text-base md:text-lg border-2 border-white hover:bg-white hover:text-midnight transition-colors font-rubik">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
