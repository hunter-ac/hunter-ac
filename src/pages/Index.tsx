import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import AuthoritySection from "@/components/AuthoritySection";
import MethodologySection from "@/components/MethodologySection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DifferentiationSection />
      <WhyUsSection />
      <ServicesSection />
      <AuthoritySection />
      <MethodologySection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
