import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { FooterAndFloatingWhatsApp } from './components/FooterAndFloatingWhatsApp';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { HoursAndLocationSection } from './components/HoursAndLocationSection';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <GallerySection />
          <HoursAndLocationSection />
        </main>
        <FooterAndFloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
