"use client";

import React, { useState } from "react";
import Image from "next/image";
import DecorativeLeaves from "./DecorativeLeaves";
import { Building2, ArrowRight, CheckSquare } from "lucide-react";

interface CommercialSectionProps {
  onOpenContact: (servicePref: string) => void;
}

export default function CommercialSection({ onOpenContact }: CommercialSectionProps) {
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(0);

  const propertyTypes = [
    {
      title: "Corporate Headquarters & Office Parks",
      desc: "Immaculate corporate business parks designed to enhance organizational brand prestige and welcome visitors safely.",
      focus: "High-visibility turf manicuring, perimeter tree safety, seasonal color rotation, and scheduled zero-disruption maintenance.",
      image: "/images/services/daylight-commercial.jpg",
    },
    {
      title: "HOA Communities & Master Associations",
      desc: "Comprehensive neighborhood common grounds management, entryway monuments, tree canopy preservation, and transparent board reporting.",
      focus: "Resident pedestrian safety, property value enhancement, clear schedule transparency, and prompt issue resolution.",
      image: "/images/hero/sunlit-landscape-hero.jpg",
    },
    {
      title: "Retail Centers & Commercial Plazas",
      desc: "High-foot-traffic commercial centers requiring clean parking perimeter sightlines, pedestrian walkway clearance, and vibrant planters.",
      focus: "Litter and debris removal, clear line-of-sight for tenant signage, rapid storm clearing, and pristine landscaping.",
      image: "/images/services/landscape-maintenance.jpg",
    },
    {
      title: "Hospitality, Resorts & Country Clubs",
      desc: "Five-star outdoor ambiance, resort-style greenery, outdoor dining grounds, and tranquil visitor surroundings.",
      focus: "Meticulous plant detail, manicured outdoor lawns, quiet electric maintenance options, and pristine living zones.",
      image: "/images/services/tree-care.jpg",
    },
    {
      title: "Healthcare Campuses & Medical Centers",
      desc: "Calming healing gardens, ADA accessible walkway sightlines, emergency vehicle access clearances, and allergen-conscious plantings.",
      focus: "Uncompromising safety standards, clean drop-off corridors, and tranquil green spaces for patients and medical staff.",
      image: "/images/services/daylight-commercial.jpg",
    },
    {
      title: "Educational Campuses & Schools",
      desc: "Campus athletic turf maintenance, quad grounds care, mature shade tree risk mitigation, and educational master grounds planning.",
      focus: "Heavy foot traffic resistance, student safety protocols, storm preparedness, and predictable seasonal budgets.",
      image: "/images/services/daylight-tree-canopy.jpg",
    },
    {
      title: "Industrial Parks & Logistics Facilities",
      desc: "High-durability landscape buffers, security fence clearances, weed abatement, and stormwater retention basin care.",
      focus: "Municipal code compliance, freight line-of-sight clearances, erosion prevention, and efficient scheduled maintenance.",
      image: "/images/services/landscape-maintenance.jpg",
    },
    {
      title: "Municipal & Public Properties",
      desc: "Civic centers, city parks, public rights-of-way, and urban tree canopy programs managed with accountability.",
      focus: "Public risk mitigation, sustainable native plantings, water conservation, and transparent municipal reporting.",
      image: "/images/hero/sunlit-landscape-hero.jpg",
    },
  ];

  return (
    <section id="commercial" className="relative bg-[var(--bg-canvas)] text-[var(--text-charcoal)] border-b border-stone-200">
      <DecorativeLeaves />
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Section Header (Full Width Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-10 border-b border-stone-200">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-1 bg-[var(--corporate-green)] hover:bg-[#1E6B3E]"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--corporate-green)]">
                Commercial Property Care
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight">
              Professional care for commercial properties.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l-2 border-stone-100">
            <p className="text-lg text-[#38443D] leading-relaxed font-medium mb-6">
              Your outdoor property is the welcoming face of your business. We keep landscapes, mature trees,
              and common grounds clean, safe, healthy, and ready for the people who use them every day.
            </p>
            <div className="flex flex-wrap items-center gap-4">
               <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full border border-stone-200 corporate-shadow">
                 <Building2 className="w-5 h-5 text-[var(--corporate-green)]" />
                 <span className="font-bold text-sm text-[var(--text-charcoal)]">Dedicated Managers</span>
               </div>
               <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full border border-stone-200 corporate-shadow">
                 <CheckSquare className="w-5 h-5 text-[var(--corporate-green)]" />
                 <span className="font-bold text-sm text-[var(--text-charcoal)]">Compliance Ready</span>
               </div>
            </div>
          </div>
        </div>

        {/* Commercial Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Property Types Selector */}
          <div className="lg:col-span-5 bg-[var(--bg-card)] border border-stone-200 rounded-sm p-6 corporate-shadow flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A564F] mb-4 pb-2 border-b border-stone-100">
                Select Commercial Sector
              </div>

              <div className="space-y-2">
                {propertyTypes.map((prop, idx) => {
                  const isSelected = idx === selectedPropertyIndex;
                  return (
                    <button
                      key={prop.title}
                      type="button"
                      onClick={() => setSelectedPropertyIndex(idx)}
                      className={`w-full text-left px-4 py-3 rounded-sm text-base font-bold transition-all duration-150 flex items-center justify-between ${
                        isSelected
                          ? "bg-[var(--corporate-green)] text-white corporate-shadow"
                          : "text-[var(--text-charcoal)] hover:bg-[#EBF4EE] hover:text-[var(--corporate-green)]"
                      }`}
                    >
                      <span className="flex items-center space-x-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isSelected ? "bg-[#86C5A2]" : "bg-stone-300"
                          }`}
                        />
                        <span>{prop.title}</span>
                      </span>
                      <ArrowRight
                        className={`w-5 h-5 transition-transform ${
                          isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onOpenContact(`Commercial: ${propertyTypes[selectedPropertyIndex].title}`)}
                className="w-full bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white py-4 px-6 rounded-sm text-base font-bold transition-colors flex items-center justify-center space-x-2 shadow"
              >
                <span>Contact Commercial Team</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sector Spotlight */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] border border-stone-200 rounded-sm overflow-hidden flex flex-col corporate-shadow">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-stone-100">
              <Image
                src={propertyTypes[selectedPropertyIndex].image}
                alt={propertyTypes[selectedPropertyIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#86C5A2] bg-[var(--corporate-green)] px-3 py-1 rounded-sm hover:bg-[#1E6B3E]">
                  Commercial Standard
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {propertyTypes[selectedPropertyIndex].title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-5">
                <p className="text-lg text-[#38443D] leading-relaxed font-medium">
                  {propertyTypes[selectedPropertyIndex].desc}
                </p>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2.5 text-base text-[#1E2822] font-semibold">
                    <CheckSquare className="w-5 h-5 text-[#216F48] shrink-0" />
                    <span>Dedicated local district manager</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-base text-[#1E2822] font-semibold">
                    <CheckSquare className="w-5 h-5 text-[#216F48] shrink-0" />
                    <span>Electronic photo audit reports</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-base text-[#1E2822] font-semibold">
                    <CheckSquare className="w-5 h-5 text-[#216F48] shrink-0" />
                    <span>24/7 priority emergency dispatch</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-base text-[#1E2822] font-semibold">
                    <CheckSquare className="w-5 h-5 text-[#216F48] shrink-0" />
                    <span>Comprehensive COI & safety compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm font-medium text-[#4A564F]">
                  Full liability insurance documentation provided within 24 hours.
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact(`Commercial: ${propertyTypes[selectedPropertyIndex].title}`)}
                  className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white text-sm font-bold uppercase px-6 py-3 rounded-sm transition-colors text-center"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
