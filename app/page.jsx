import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import EventsSection from "@/components/EventsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>
      <ProgramsSection />
      <FacilitiesSection />
      <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
