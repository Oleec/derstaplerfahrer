import { ContactSection } from "../components/sections/ContactSection";
import { FaqSection } from "../components/sections/FaqSection";
import { HeroSection } from "../components/sections/HeroSection";
import { IntroMeetingSection } from "../components/sections/IntroMeetingSection";
import { PricingSection } from "../components/sections/PricingSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { UseCasesSection } from "../components/sections/UseCasesSection";
import { WhySection } from "../components/sections/WhySection";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function LandingPage() {
  useDocumentMeta({
    title: "Der Staplerfahrer | Flexible Staplerfahrer-Unterstützung in Österreich",
    description:
      "Kurzfristige Staplerfahrer-Unterstützung für Lager, Logistik, Produktion und E-Commerce in Österreich. Tageweise buchbar bei Personalausfällen und Auftragsspitzen.",
  });

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <ServicesSection />
        <WhySection />
        <IntroMeetingSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
