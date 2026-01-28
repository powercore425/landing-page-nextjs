import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BuildingKnowledge from "@/components/BuildingKnowledge";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import BridgeGap from "@/components/BridgeGap";
import Testimonials from "@/components/Testimonials";
import GettingStarted from "@/components/GettingStarted";
import OurTutors from "@/components/OurTutors";
import StopGuessing from "@/components/StopGuessing";
import SuccessStory from "@/components/SuccessStory";
import ConsultationForm from "@/components/ConsultationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper overflow-x-hidden">
      <Navbar />
      <Hero />
      <BuildingKnowledge />
      <WhatMakesDifferent />
      <BridgeGap />
      <Testimonials />
      <GettingStarted />
      <OurTutors />
      <StopGuessing />
      <SuccessStory />
      <ConsultationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
