import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import Title from "@/components/Title";
import ConsultationForm from "@/components/ConsultationForm";
import BridgeGap from "@/components/BridgeGap";
import MaslinAcademyOffers from "@/components/MaslinAcademyOffers";

export default function ProgramsPricingPage() {
    return (
        <PageLayout>
            <Title title="Programs & Pricing" />
            <MaslinAcademyOffers />
            <BridgeGap variant="pricing" />
            <ConsultationForm isContact={true} />
            <FAQ />
        </PageLayout>
    );
}
