import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import Title from "@/components/Title";
import ConsultationForm from "@/components/ConsultationForm";

export default function ContactPage() {
    return (
        <PageLayout>
            <Title title="CONTACT" />
            <ConsultationForm isContact={true} />
            <FAQ />
        </PageLayout>
    );
}
