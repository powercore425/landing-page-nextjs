"use client";

import { useState } from "react";
import Image from "next/image";
import { useAnimation } from "./AnimatedSection";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const { ref, className, style } = useAnimation({ direction: "zoomIn", delay: 100 });

    return (
        <section ref={ref} className={`w-full py-12 md:py-20 relative overflow-hidden bg-paper ${className}`} style={style}>
            {/* Background - Dark blue top, gold pattern bottom */}
            <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
                {/* White Card Container */}
                <div className="bg-paper rounded-[20px]">
                    <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
                        <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] text-center">
                            Contact Us
                        </h2>
                        <p className="text-ink font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] text-center">
                            Send us a message – we&apos;ll get back to you right away!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* First Name & Last Name */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label htmlFor="firstName" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 h-[40px] bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                                        placeholder="Enter first name"
                                        required
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label htmlFor="lastName" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 h-[40px] bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                                        placeholder="Enter last name"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Email & Phone */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label htmlFor="email" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 h-[40px] bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                                        placeholder="Enter email address"
                                        required
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label htmlFor="phone" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 h-[40px] bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                                        placeholder="Enter phone number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message textarea */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                                    IS THERE ANYTHING ELSE YOU&apos;D LIKE US TO KNOW?
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] min-h-[100px] focus:outline-none focus:border-ink resize-none"
                                    placeholder="Enter message"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-5 py-2 bg-ink text-paper rounded-lg font-rubik font-normal text-sm md:text-base leading-[160%] hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
