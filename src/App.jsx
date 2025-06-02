import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResidentialCampaignSection from '@/components/ResidentialCampaignSection';
import BusinessCampaignSection from '@/components/BusinessCampaignSection';
import CertificateSection from '@/components/CertificateSection';
import VideoSection from '@/components/VideoSection';
import FinalCallToActionSection from '@/components/FinalCallToActionSection';
import Footer from '@/components/Footer';
import FloatingWhatsappButton from '@/components/FloatingWhatsappButton';

function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCtaClick={scrollToForm} />
      <AboutSection />
      <ResidentialCampaignSection />
      <BusinessCampaignSection />
      <CertificateSection />
      <VideoSection />
      <FinalCallToActionSection />
      <Footer />
      <FloatingWhatsappButton />
      <Toaster />
    </div>
  );
}

export default App;