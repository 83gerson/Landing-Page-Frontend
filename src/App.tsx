import React from 'react';
import { HeroSection } from './components/HeroSection';
import { DescriptionSection } from './components/DescriptionSection';
import { StepByStepSection } from './components/StepByStepSection';
import { ContactSection } from './components/ContactSection';
import { SocialSection } from './components/SocialSection';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-sans bg-[#F9F5F0] text-[#5A3921] min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <DescriptionSection />
        <StepByStepSection />
        <ContactSection />
        <SocialSection />
      </main>
      <Footer />
    </div>;
}