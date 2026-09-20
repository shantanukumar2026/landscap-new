"use client";

import React from "react";
import Image from "next/image";
import DecorativeLeaves from "./DecorativeLeaves";
import { Award, ShieldCheck, MapPin, HeartHandshake, Check, Trees } from "lucide-react";

export default function WhyChooseUs() {
  const proofPoints = [
    {
      title: "Experienced Professionals",
      description: "People who understand trees, landscapes, and the properties they care for.",
      icon: Award,
      badge: "Certified Arborists",
      detail: "Our field leaders hold professional credentials in arboriculture and horticultural science.",
    },
    {
      title: "Safety Comes First",
      description: "Clear processes and trained teams help protect your property and our people.",
      icon: ShieldCheck,
      badge: "Zero-Incident Goal",
      detail: "Daily safety briefings, rigorous PPE enforcement, and modern crane rigging protocols on every site.",
    },
    {
      title: "Local Service",
      description: "Our teams understand the properties, weather, and growing conditions in the communities they serve.",
      icon: MapPin,
      badge: "Regional Knowledge",
      detail: "Deep familiarity with local soil profiles, regional climate patterns, and native tree species.",
    },
    {
      title: "Long-Term Care",
      description: "We focus on keeping your landscape healthy today and helping it stay that way.",
      icon: HeartHandshake,
      badge: "Sustainable Health",
      detail: "Proactive care that protects your property value and tree canopy health for decades to come.",
    },
  ];



  return (
    <section id="why-us" className="relative bg-[var(--bg-card)] border-b border-stone-200">
      <DecorativeLeaves />
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Big Animated Tree */}
        <div className="mb-16 border-b border-stone-200 pb-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 relative">
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center space-x-3 mb-5">
              <span className="w-12 h-1 bg-[var(--corporate-green)]"></span>
              <span className="text-sm font-extrabold uppercase tracking-widest text-[var(--corporate-green)]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight mb-6">
              Care you can see. Service you can count on.
            </h2>
            <p className="text-xl sm:text-2xl text-[#38443D] leading-relaxed font-medium">
              We believe outdoor property management should be straightforward, reliable, and backed by
              proven craftsmanship. Here is why property managers and homeowners trust our crews year after year.
            </p>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end items-end pr-8 sm:pr-12 pointer-events-none relative z-0">
            <Trees className="w-48 h-48 sm:w-64 sm:h-64 text-[#EBF4EE] opacity-90 animate-float-slow" />
          </div>
        </div>

        {/* 4 Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {proofPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[var(--bg-offwhite)] border border-stone-200 p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[var(--corporate-green)] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-[#EBF4EE] text-[var(--corporate-green)] rounded-sm flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[var(--corporate-green)] bg-[var(--bg-card)] border border-[#DDE2DD] px-3 py-1 rounded-sm">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base font-semibold text-[#1E2822] leading-snug mb-3">
                    {item.description}
                  </p>

                  <p className="text-sm text-[#4A564F] leading-relaxed font-medium">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-200 flex items-center text-sm text-[var(--corporate-green)] font-bold">
                  <Check className="w-4 h-4 text-[#216F48] mr-2 shrink-0" />
                  <span>Standard on every job</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
