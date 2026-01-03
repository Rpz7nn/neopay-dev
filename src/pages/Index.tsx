import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PaymentSection from "@/components/PaymentSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import NotificationsSection from "@/components/NotificationsSection";
import AntiFraudSection from "@/components/AntiFraudSection";
import SalesManagementSection from "@/components/SalesManagementSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PaymentSection />
        <IntegrationsSection />
        <NotificationsSection />
        <AntiFraudSection />
        <SalesManagementSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
