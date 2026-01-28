import Image from "next/image";

const tutors = [
  {
    name: "PHILIPE TURCANU",
    subjects: ["Math", "Physics", "Programming"],
    image: "/images/head1.jpg",
  },
  {
    name: "TATIANA TURCANU",
    subjects: ["Chemistry", "Biology", "English"],
    image: "/images/head2.jpg",
  },
  {
    name: "MELANIE SIMOURD, MD",
    subjects: ["Psychology"],
    image: "/images/head3.jpg",
  },
  {
    name: "SAEID KHOLGI",
    subjects: ["Math", "Physics", "Chemistry"],
    image: "/images/head4.jpg",
  },
];

export default function OurTutors() {
  return (
    <section id="tutors" className="w-full py-12 md:py-20 bg-midnight relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tutors_bg.png"
          alt="Tutors background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-paper font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase mb-3 md:mb-4">
            OUR TUTORS
          </p>
          <h2 className="text-white font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] mb-4 md:mb-6">
            We Hand-Select Only the Best Tutors
          </h2>
          <p className="text-white font-rubik font-normal text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[160%]">
            Exceptional educators, committed to building <span className="text-gold font-bold italic">CONFIDENCE</span> and<span className="hidden md:inline"><br /></span> <span className="text-gold font-bold italic">COMPETENCE</span> with students.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 items-start">
          {tutors.map((tutor, index) => (
            <div key={index} className="bg-paper rounded-[20px] shadow-lg p-4 md:p-6 flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-paper mb-3 md:mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-ink font-rubik font-bold text-[14px] md:text-[16px] px-1 uppercase mb-2 md:mb-3 text-center">
                {tutor.name}
              </h3>
              <p className="text-grey text-center font-rubik font-normal text-[12px] md:text-[14px]">
                {tutor.subjects.join(", ")}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gold text-ink rounded-lg font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-90 transition-opacity">
            See All Tutors
          </button>
        </div>
      </div>
    </section>
  );
}
