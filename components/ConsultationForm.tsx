"use client";

import { useState } from "react";
import Image from "next/image";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    grade: "",
    subjects: "",
    hearAboutUs: "",
    services: [] as string[],
    message: "",
    emailUpdates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox" && name === "services") {
      const serviceValue = (e.target as HTMLInputElement).value;
      setFormData({
        ...formData,
        services: checked
          ? [...formData.services, serviceValue]
          : formData.services.filter((s) => s !== serviceValue),
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  return (
    <section className="w-full py-12 md:py-20 relative overflow-hidden bg-paper">
      {/* Background - Dark blue top, gold pattern bottom */}
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
        {/* White Card Container */}
        <div className="bg-paper rounded-[20px]">
          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
            <h2 className="text-ink font-rubik font-bold text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[110%] text-center">
              Book a Free Consultation
            </h2>
            <p className="text-ink font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] text-center">
              Send us a messge or book your free consultation today to get started the Maslin Way. If we're a good fit - we'll get started right away.
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
              {/* Grade & Subjects */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex flex-col gap-1">
                  <label htmlFor="grade" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                    WHAT GRADE ARE YOU IN?
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2 h-[40px] bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                    required
                  >
                    <option value="">Select a grade</option>
                    <option value="grade-9">Grade 9</option>
                    <option value="grade-10">Grade 10</option>
                    <option value="grade-11">Grade 11</option>
                    <option value="grade-12">Grade 12</option>
                    <option value="university">University</option>
                  </select>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label htmlFor="subjects" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                    WHAT SUBJECTS ARE YOU INTERESTED IN?
                  </label>
                  <input
                    type="text"
                    id="subjects"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    className="w-full px-4 py-2 h-[40px] bg-paper border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                    placeholder="Enter subjects"
                    required
                  />
                </div>
              </div>
              {/* How did you hear about us */}
              <div className="flex flex-col gap-1">
                <label htmlFor="hearAboutUs" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                  HOW DID YOU HEAR ABOUT US?
                </label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-paper h-[40px] border-2 border-border rounded-[4px] text-grey font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%] focus:outline-none focus:border-ink"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="google">Google</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Services checkbox */}
              <div className="flex flex-col gap-2">
                <label className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                  WHAT SERVICE(S) ARE YOU INTERESTED IN? (SELECT ALL THAT APPLY)
                </label>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      name="services"
                      value="private-tutoring"
                      checked={formData.services.includes("private-tutoring")}
                      onChange={handleChange}
                      className="w-5 h-5 md:w-6 md:h-6 border-2 border-border rounded-full focus:outline-none"
                    />
                    <span className="text-ink font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%]">
                      Private tutoring
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      name="services"
                      value="mental-performance-coaching"
                      checked={formData.services.includes("mental-performance-coaching")}
                      onChange={handleChange}
                      className="w-5 h-5 md:w-6 md:h-6 border-2 border-border rounded-full focus:outline-none"
                    />
                    <span className="text-ink font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%]">
                      Mental Performance Coaching (MPC)
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      name="services"
                      value="emergency-cramming"
                      checked={formData.services.includes("emergency-cramming")}
                      onChange={handleChange}
                      className="w-5 h-5 md:w-6 md:h-6 border-2 border-border rounded-full focus:outline-none"
                    />
                    <span className="text-ink font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%]">
                      Emergency Cramming
                    </span>
                  </div>
                </div>
              </div>
              {/* Message textarea */}
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-ink font-rubik font-bold text-[14px] lg:text-[16px] leading-[160%] tracking-[0.05em] uppercase">
                  IS THERE ANYTHING ELSE YOU'D LIKE US TO KNOW?
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
              {/* Email updates checkbox */}
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="emailUpdates"
                  checked={formData.emailUpdates}
                  onChange={handleChange}
                  className="w-5 h-5 md:w-6 md:h-6 border-2 border-border rounded-full focus:outline-none"
                />
                <span className="text-ink font-rubik font-normal text-[14px] lg:text-[16px] leading-[160%]">
                  Sign me up for emails and updates
                </span>
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
