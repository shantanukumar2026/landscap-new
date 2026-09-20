"use client";

import React from "react";
import Image from "next/image";
import DecorativeLeaves from "./DecorativeLeaves";
import { ArrowRight, Leaf, Trees, ShieldCheck, CheckCircle2, Building2, CloudRain } from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: (servicePref: string) => void;
}

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const services = [
    {
      id: "landscape-maintenance",
      title: "Landscape Maintenance",
      description: "Reliable year-round care for lawns, planting beds, shrubs, and outdoor spaces throughout the season.",
      image: "/images/services/landscape-maintenance.jpg",
      icon: Trees,
      tag: "Year-Round Service",
      bulletPoints: [
        "Precision lawn mowing, turf edging & seasonal weed prevention",
        "Planting bed maintenance, clean mulch installation & soil care",
        "Shrub pruning, perennial shaping & seasonal color rotation",
        "Scheduled spring property cleanups & autumn leaf clearing",
      ],
    },
    {
      id: "tree-care",
      title: "Professional Tree Care",
      description: "Certified arborist pruning, hazard mitigation, health assessments, and tree preservation.",
      image: "/images/services/tree-care.jpg",
      icon: ShieldCheck,
      tag: "Certified Arborists",
      bulletPoints: [
        "Crown thinning, deadwood removal & structural safety pruning",
        "Root flare decompaction & deep-root soil nutrient feeding",
        "Safe mature tree removal, rigging & stump grinding",
        "Comprehensive health & storm risk diagnostic evaluations",
      ],
    },
    {
      id: "commercial-grounds",
      title: "Commercial Grounds Management",
      description: "Complete outdoor maintenance for corporate parks, HOAs, retail centers, and institutional campuses.",
      image: "/images/services/daylight-commercial.jpg",
      icon: Building2,
      tag: "Commercial Clients",
      bulletPoints: [
        "Master grounds maintenance with single point-of-contact",
        "Pedestrian walkway clearance, curb appeal & sightline safety",
        "Irrigation system audits, smart meters & water efficiency",
        "Transparent schedule reporting and proactive property reviews",
      ],
    },
    {
      id: "storm-emergency",
      title: "Storm & Emergency Tree Response",
      description: "Fast, dependable support when high winds and severe storms impact your trees and property.",
      image: "/images/services/daylight-tree-canopy.jpg",
      icon: CloudRain,
      tag: "24/7 Response",
      bulletPoints: [
        "Rapid clearance of downed trees and dangerous hanging branches",
        "Pre-storm canopy hazard assessments and limb stabilization",
        "Commercial chipper trucks, grapple loaders & safety cranes",
        "Priority emergency scheduling for existing property clients",
      ],
    },
  ];

  return (
    <section id="services" className="relative bg-[var(--bg-card)] border-b border-stone-200">
      <DecorativeLeaves />
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-10 border-b border-stone-200">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-1 bg-[var(--corporate-green)] hover:bg-[#1E6B3E]"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--corporate-green)]">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight">
              Complete care for the places you depend on.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l-2 border-stone-100">
            <p className="text-lg text-[#38443D] leading-relaxed font-medium mb-6">
              From routine landscape maintenance to specialized tree care, our experienced teams help keep
              outdoor spaces healthy, safe, and looking their best.
            </p>
            <div className="flex flex-wrap items-center gap-4">
               <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full border border-stone-200 corporate-shadow">
                 <ShieldCheck className="w-5 h-5 text-[var(--corporate-green)]" />
                 <span className="font-bold text-sm text-[var(--text-charcoal)]">Fully Insured</span>
               </div>
               <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full border border-stone-200 corporate-shadow">
                 <Trees className="w-5 h-5 text-[var(--corporate-green)]" />
                 <span className="font-bold text-sm text-[var(--text-charcoal)]">Local Experts</span>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-sm overflow-hidden corporate-shadow border border-stone-200">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12 transition-colors duration-300 group ${
                  isEven ? "bg-[var(--bg-canvas)]" : "bg-[#F9FAF9]"
                } hover:bg-[#EBF4EE] ${index !== services.length - 1 ? "border-b border-stone-200" : ""}`}
              >
                <div className={`absolute top-0 bottom-0 w-full lg:w-1/2 pointer-events-none z-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-all duration-700 ${isEven ? 'right-0' : 'left-0'}`}>
                  <Icon className="w-80 h-80 sm:w-96 sm:h-96 text-[var(--corporate-green)] -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="absolute inset-0 pointer-events-none z-0">
                   <Leaf className={`absolute w-8 h-8 text-[var(--corporate-green)] opacity-5 animate-float-slow ${isEven ? 'top-10 right-20' : 'top-20 left-10'}`} />
                   <Leaf className={`absolute w-12 h-12 text-[var(--corporate-green)] opacity-[0.03] animate-float-slower ${isEven ? 'bottom-10 left-1/3' : 'bottom-20 right-1/4'}`} style={{ animationDelay: '1.5s' }} />
                </div>

                <div
                  className={`lg:col-span-6 relative z-10 h-80 sm:h-96 w-full rounded-sm overflow-hidden bg-stone-100 corporate-shadow ${isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--corporate-green)] text-white text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-sm corporate-shadow hover:bg-[#1E6B3E]">
                    {service.tag}
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 relative z-10 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-sm bg-[#EBF4EE] text-[var(--corporate-green)] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-lg text-[#38443D] leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start text-base sm:text-lg text-[#1E2822]">
                          <CheckCircle2 className="w-5 h-5 text-[#216F48] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onOpenContact(`Inquiry: ${service.title}`)}
                      className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-6 py-3.5 text-base font-bold rounded-sm transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Contact Our Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-bold text-[#4A564F]">

                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
