import Image from "next/image";

const testimonials = [
  {
    name: "Samira, Grade 12, Chemistry",
    content: "“We are grateful to Tatiana for her personalized approach and hard work with our daughter. Olivia is now very excited for next year’s grade 12 chemistry courses thanks to Tatiana.”",
    rating: 5,
  },
  {
    name: "Grade 10, Science and Math",
    content: "“They didn't just help me understand the material, they inspired me to believe in myself and my abilities. I'm incredibly grateful to Maslin Academy for matching me with such amazing tutors who genuinely cared about my success.”",
    rating: 5,
  },
  {
    name: "Sophie, Grade 12, Physics",
    content: "“Philipe really cared about my knowledge intake and was able to explain concepts in many different ways. If you want help with your physics, he is your guy.”",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-paper py-12">
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 py-8 md:py-12">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-3 md:gap-4 w-full max-w-[920px]">
            <p className="text-ink font-rubik font-light text-[14px] md:text-[16px] leading-[24px] tracking-[0.1em] uppercase text-center">
              TESTIMONIALS
            </p>
            <h2 className="text-ink font-rubik font-medium text-[28px] md:text-[34px] lg:text-[38px] leading-[130%] text-center max-w-[700px]">
              What People Are Saying
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-[920px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 bg-paper border-2 border-border rounded-[20px] p-6 md:p-8 lg:p-12 flex flex-col items-center gap-8 md:gap-12"
              >
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex flex-row gap-1 self-end mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 relative"
                      >
                        <Image
                          src="/images/star.png"
                          alt="star"
                          fill
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-ink font-rubik font-normal text-[16px] leading-[160%] text-center">
                    {testimonial.content}
                  </p>
                  <p className="text-ink font-rubik font-bold text-[16px] leading-[160%] tracking-[0.05em] uppercase text-center">
                    {testimonial.name}
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
