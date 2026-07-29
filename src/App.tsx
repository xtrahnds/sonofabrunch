import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrojanHorse } from './components/TrojanHorse';
import { ServiceMenu } from './components/ServiceMenu';
import { PricingReport } from './components/PricingReport';
import { LocationCoverage } from './components/LocationCoverage';
import { SampleReportModal } from './components/SampleReportModal';
import { InquiryModal } from './components/InquiryModal';
import { FloatingCTA } from './components/FloatingCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('tc');
  const [isSampleReportOpen, setIsSampleReportOpen] = useState<boolean>(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3E8D2] relative selection:bg-[#8B1E2D] selection:text-[#F3E8D2]">
      {/* Cinematic Animated Film Grain Noise & Background Tungsten Glow */}
      <div className="film-grain" />
      <div className="bg-tungsten fixed inset-0 pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenSampleReport={() => setIsSampleReportOpen(true)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Section 3: The Trojan Horse & Remote Peace of Mind Philosophy */}
        <TrojanHorse lang={lang} />

        {/* Section 4: Detailed Service Menu */}
        <ServiceMenu
          lang={lang}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Section 5: Transparent Pricing & Reporting */}
        <PricingReport
          lang={lang}
          onOpenSampleReport={() => setIsSampleReportOpen(true)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Section 5 / Location: Greater Vancouver Coverage Area */}
        <LocationCoverage lang={lang} />
      </main>

      {/* Footer & Legal */}
      <Footer lang={lang} />

      {/* Floating CTA Button (Bottom Right) */}
      <FloatingCTA
        lang={lang}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Sample Wellbeing Report Viewer Modal */}
      <SampleReportModal
        lang={lang}
        isOpen={isSampleReportOpen}
        onClose={() => setIsSampleReportOpen(false)}
      />

      {/* Custom SMS / WhatsApp Inquiry Builder Modal */}
      <InquiryModal
        lang={lang}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
