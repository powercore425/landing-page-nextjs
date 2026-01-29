import PageLayout from "@/components/PageLayout";
import OurTutors from "@/components/OurTutors";
import FAQ from "@/components/FAQ";
import Title from "@/components/Title";
import ContactUsForm from "@/components/ContactUsForm";

export default function AboutUsPage() {
    return (
        <PageLayout>
            <Title title="ABOUT US" />
            <OurTutors isShowMore={true} isShowAction={false} />
            <FAQ />
            <ContactUsForm />
        </PageLayout>
    );
}
