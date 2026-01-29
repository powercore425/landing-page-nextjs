import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import Title from "@/components/Title";
import ConsultationForm from "@/components/ConsultationForm";

export default function ProgramsPricingPage() {
    return (
        <PageLayout>
            <Title title="Programs & Pricing" />
            <ConsultationForm isContact={true} />
            <FAQ />
        </PageLayout>
    );
}
