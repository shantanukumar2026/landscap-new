"use client";

import React from "react";
import { Scissors, Trash2, HeartPulse, Sparkles, Sprout, Wind, ArrowRight, CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

interface ResidentialSectionProps {
  onOpenContact: (servicePref: string) => void;
}

export default function ResidentialSection({ onOpenContact }: ResidentialSectionProps) {
  const residentialServices = [
    {
      title: "Tree Pruning & Deadwood Removal",
      desc: "Pruning hazardous overhanging limbs, elevating lower branches, and allowing healthy sunlight into your yard and roofline.",
      icon: Scissors,
    },
    {
      title: "Safe Hazardous Tree Removal",
      desc: "Controlled dismantling of declining, storm-damaged, or hazardous trees with certified rigging equipment and complete lawn protection.",
      icon: Trash2,
    },
    {
      title: "Tree Health Diagnostics & Nutrition",
      desc: "Deep-root soil feeding, pest diagnostics, and disease management tailored to your local tree species by certified arborists.",
      icon: HeartPulse,
    },
    {
      title: "Shrub Pruning & Garden Bed Care",
      desc: "Artful pruning, shearing, and fresh organic bark mulch application to protect roots and maintain crisp border edges.",
      icon: Sparkles,
    },
    {
      title: "Lawn Care & Soil Aeration",
      desc: "Core aeration, overseeding, balanced seasonal nourishment, and sustainable weed management for thick, resilient turf.",
      icon: Sprout,
    },
    {
      title: "Seasonal Property Cleanup",
      desc: "Comprehensive spring garden wake-up, leaf clearing, perennial cutbacks, and complete debris removal leaving your property spotless.",
      icon: Wind,
    },
  ];

  return (
    <section id="residential" className="bg-[var(--bg-card)] text-[var(--text-charcoal)] border-b border-stone-200">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Section Header (Full Width Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-10 border-b border-stone-200">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-1 bg-[var(--corporate-green)] hover:bg-[#1E6B3E]"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--corporate-green)]">
                Residential Home Care
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight">
              Better care for the landscape around your home.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l-2 border-stone-100 flex flex-col items-start">
            <p className="text-lg text-[#38443D] leading-relaxed font-medium mb-6">
              Healthy mature trees and well-maintained grounds make your home more comfortable, safe,
              and enjoyable for your family. Our local professionals provide dependable care built around your property.
            </p>
            <button
              type="button"
              onClick={() => onOpenContact("Residential Property Care")}
              className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-8 py-4 text-base font-bold rounded-sm shadow-md transition-colors inline-flex items-center space-x-2"
            >
              <span>Contact Residential Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Residential Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {residentialServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[var(--bg-canvas)] border border-stone-200 p-6 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[var(--corporate-green)] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 bg-[#EBF4EE] text-[var(--corporate-green)] rounded-sm flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-charcoal)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#38443D] leading-relaxed mb-6 font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-stone-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenContact(`Residential: ${service.title}`)}
                    className="text-base font-bold text-[var(--corporate-green)] hover:text-[#103B26] flex items-center space-x-1.5"
                  >
                    <span>Contact Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-[#4A564F] uppercase tracking-wider">
                    In-Person Site Visit
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creative Trust Metrics (Replaces old banner) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
          <div className="flex items-center space-x-5 group cursor-default">
            <div className="w-16 h-16 bg-[var(--bg-canvas)] rounded-full flex items-center justify-center text-[var(--corporate-green)] corporate-shadow group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-[#1E6B3E] group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-[var(--text-charcoal)] group-hover:text-[var(--corporate-green)] transition-colors">Fully Certified Crews</h4>
              <p className="text-sm font-medium opacity-80 mt-1">ISA Certified Arborists & Insured</p>
            </div>
          </div>

          <div className="flex items-center space-x-5 group cursor-default">
            <div className="w-16 h-16 bg-[var(--bg-canvas)] rounded-full flex items-center justify-center text-[var(--corporate-green)] corporate-shadow group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-[#1E6B3E] group-hover:text-white transition-all duration-300">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-[var(--text-charcoal)] group-hover:text-[var(--corporate-green)] transition-colors">Absolute Respect</h4>
              <p className="text-sm font-medium opacity-80 mt-1">Lawn & Driveway Protection</p>
            </div>
          </div>

          <div className="flex items-center space-x-5 group cursor-default">
            <div className="w-16 h-16 bg-[var(--bg-canvas)] rounded-full flex items-center justify-center text-[var(--corporate-green)] corporate-shadow group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-[#1E6B3E] group-hover:text-white transition-all duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-[var(--text-charcoal)] group-hover:text-[var(--corporate-green)] transition-colors">Zero Mess Guarantee</h4>
              <p className="text-sm font-medium opacity-80 mt-1">Pristine Site Cleanup Included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
