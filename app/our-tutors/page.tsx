import PageLayout from "@/components/PageLayout";
import OurTutors from "@/components/OurTutors";
import FAQ from "@/components/FAQ";
import Title from "@/components/Title";
import VetTrainSupport from "@/components/VetTrainSupport";
import ContactUsForm from "@/components/ContactUsForm";
import BecomeTutor from "@/components/BecomeTutor";
import UniversityExperts from "@/components/UniversityExperts";

export default function OurTutorsPage() {
    return (
        <PageLayout>
            <Title title="OUR TUTORS" />
            <VetTrainSupport />
            <OurTutors isShowMore={true} isShowAction={false} />
            <BecomeTutor />
            <UniversityExperts />
            <FAQ />
            <ContactUsForm />
        </PageLayout>
    );
}
