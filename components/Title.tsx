"use client";

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <section className="w-full bg-midnight relative overflow-hidden mt-[80px] md:mt-[96px] flex flex-col items-center justify-center">
            <div className="w-full max-w-[1120px] h-[153px] flex justify-center items-center">
                <p className="text-paper font-rubik font-normal text-[32px] md:text-[42px] lg:text-[52px] leading-[110%] uppercase">
                    {title}
                </p>
            </div>
        </section>
    );
}
