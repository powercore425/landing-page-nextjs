import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import Title from "@/components/Title";
import ContactUsForm from "@/components/ContactUsForm";
import OurStory from "@/components/OurStory";

export default function AboutUsPage() {
    return (
        <PageLayout>
            <Title title="ABOUT US" />
            <OurStory />
            <FAQ />
            <ContactUsForm />
        </PageLayout>
    );
}
