'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Skill from '../components/Skill';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Skill/>
      <ProjectsSection/>
      <AboutSection />
      <ContactSection/>
      <Footer />
    </div>
  );
}