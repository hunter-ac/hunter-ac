import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ServicesSection from "@/components/ServicesSection";
import ComplementaryServicesSection from "@/components/ComplementaryServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ProfilesSection from "@/components/ProfilesSection";
import ReportsSection from "@/components/ReportsSection";
import CandidateServicesSection from "@/components/CandidateServicesSection";
import AboutSection from "@/components/AboutSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuePropositionSection />
      <ServicesSection />
      <ComplementaryServicesSection />
      <MethodologySection />
      <ProfilesSection />
      <ReportsSection />
      <CandidateServicesSection />
      <AboutSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
