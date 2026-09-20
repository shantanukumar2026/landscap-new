"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CommercialSection from "@/components/CommercialSection";
import ResidentialSection from "@/components/ResidentialSection";
import Portfolio from "@/components/Portfolio";
import AboutSection from "@/components/AboutSection";
import ServiceArea from "@/components/ServiceArea";
import Resources from "@/components/Resources";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedContactSubject, setSelectedContactSubject] = useState("");

  const handleOpenContact = (subject = "") => {
    setSelectedContactSubject(subject);
    setIsContactModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0F1411] selection:bg-[#164E33] selection:text-white">
      {/* Mega Menu Corporate Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Bright Daylight Sunlit Hero Section */}
      <Hero onOpenContact={handleOpenContact} />

      {/* Complete Services Section */}
      <ServicesSection onOpenContact={handleOpenContact} />

      {/* Why Choose Us / Proof Points */}
      <WhyChooseUs />

      {/* Commercial Grounds Section */}
      <CommercialSection onOpenContact={handleOpenContact} />

      {/* Residential Section */}
      <ResidentialSection onOpenContact={handleOpenContact} />

      {/* Featured Projects & Case Studies */}
      <Portfolio />

      {/* Company Story & Trust */}
      <AboutSection onOpenContact={handleOpenContact} />



      {/* Educational & Advice Resources */}
      <Resources />

      {/* Final Call to Action */}
      {/* <FinalCTA onOpenContact={handleOpenContact} /> */}

      {/* Substantial Corporate Footer */}
      {/* <Footer onOpenContact={handleOpenContact} /> */}

      {/* Accessible Contact Modal */}
      {/* <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialSubject={selectedContactSubject}
      /> */}
    </main>
  );
}
