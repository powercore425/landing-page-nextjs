import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import BuildingKnowledge from "@/components/BuildingKnowledge";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import BridgeGap from "@/components/BridgeGap";
import Testimonials from "@/components/Testimonials";
import GettingStarted from "@/components/GettingStarted";
import OurTutors from "@/components/OurTutors";
import StopGuessing from "@/components/StopGuessing";
import ExamPreparationBanner from "@/components/ExamPreparationBanner";
import SuccessStory from "@/components/SuccessStory";
import ConsultationForm from "@/components/ConsultationForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <BuildingKnowledge />
      <WhatMakesDifferent />
      <BridgeGap />
      <Testimonials />
      <GettingStarted />
      <OurTutors />
      <StopGuessing />
      <ExamPreparationBanner />
      <SuccessStory />
      <ConsultationForm />
      <FAQ />
    </PageLayout>
  );
}
