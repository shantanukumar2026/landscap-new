"use client";

import React, { useState } from "react";
import {
  MapPin,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  Building2,
  Home,
  Hotel,
  TreePine,
  Droplets,
  Award,
  Clock,
  Users,
  Wrench,
  Sparkles,
  Sun,
  Flower2,
  BadgeCheck,
  Gem,
  Star,
  ArrowRight,
} from "lucide-react";

interface IndustryHighlightsProps {
  onOpenContact: (subject: string) => void;
}

const industries = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    tagline: "Trusted care for the homes and families we serve.",
    description:
      "Your home deserves a landscape that's safe, healthy, and beautiful year-round. Our residential teams bring certified expertise and personal attention to every property.",
    highlights: [
      {
        title: "Local Expertise",
        description:
          "Deep knowledge of Mumbai's soil, climate and tree species for thriving landscapes.",
        icon: MapPin,
      },
      {
        title: "Safety First",
        description:
          "Trained teams, strict safety standards and modern equipment on every job.",
        icon: ShieldCheck,
      },
      {
        title: "Sustainable Practices",
        description:
          "Environment-friendly solutions for a greener tomorrow with native plantings.",
        icon: Leaf,
      },
      {
        title: "Dedicated Support",
        description:
          "A committed team for ongoing care and long-term relationships.",
        icon: HeartHandshake,
      },
    ],
    features: [
      { label: "Certified Arborists", icon: Award },
      { label: "Year-Round Programs", icon: Clock },
      { label: "Family-Safe Methods", icon: Users },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    tagline: "Enterprise-grade property care at scale.",
    description:
      "From corporate campuses to retail plazas, our commercial teams deliver reliable, accountable landscape management that protects your brand and property value.",
    highlights: [
      {
        title: "Property Intelligence",
        description:
          "Custom maintenance plans built on site assessments, foot traffic, and seasonal data.",
        icon: Building2,
      },
      {
        title: "Compliance Ready",
        description:
          "Full COI documentation, ADA clearance standards, and municipal code adherence.",
        icon: BadgeCheck,
      },
      {
        title: "Scalable Operations",
        description:
          "Multi-site portfolio management with single point-of-contact accountability.",
        icon: Wrench,
      },
      {
        title: "Transparent Reporting",
        description:
          "Digital photo audits, scheduled reports, and real-time service tracking.",
        icon: Clock,
      },
    ],
    features: [
      { label: "Multi-Site Management", icon: Building2 },
      { label: "24/7 Emergency Response", icon: Clock },
      { label: "Dedicated Account Manager", icon: Users },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: Hotel,
    tagline: "Five-star grounds for five-star experiences.",
    description:
      "Resorts, hotels, country clubs, and event venues require immaculate outdoor environments. Our hospitality teams create and maintain landscapes that impress every guest.",
    highlights: [
      {
        title: "Guest-First Presentation",
        description:
          "Pristine grounds, seasonal color rotations, and resort-caliber curb appeal.",
        icon: Gem,
      },
      {
        title: "Quiet Maintenance",
        description:
          "Low-disruption scheduling with electric equipment options for guest comfort.",
        icon: Sun,
      },
      {
        title: "Botanical Excellence",
        description:
          "Curated plantings, living walls, and signature landscape features.",
        icon: Flower2,
      },
      {
        title: "Event-Ready Grounds",
        description:
          "Rapid turnaround detailing for weddings, conferences, and VIP occasions.",
        icon: Star,
      },
    ],
    features: [
      { label: "Luxury Presentation", icon: Sparkles },
      { label: "Low-Noise Equipment", icon: TreePine },
      { label: "Seasonal Color Programs", icon: Droplets },
    ],
  },
];

export default function IndustryHighlights({
  onOpenContact,
}: IndustryHighlightsProps) {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const current = industries[activeIndustry];

  return (
    <section
      id="industry-highlights"
      className="relative bg-[var(--bg-canvas)] border-b border-stone-200"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 pb-10 border-b border-stone-200">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-1 bg-[var(--corporate-green)]"></span>
              <span className="text-sm font-extrabold uppercase tracking-widest text-[var(--corporate-green)]">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight">
              Specialized care for every property type.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l-2 border-stone-100">
            <p className="text-lg text-[#38443D] leading-relaxed font-medium">
              Whether it&apos;s a family home, a corporate campus, or a luxury
              resort — we bring the right expertise, equipment, and attention to
              every landscape.
            </p>
          </div>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {industries.map((industry, index) => {
            const TabIcon = industry.icon;
            const isActive = index === activeIndustry;
            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActiveIndustry(index)}
                className={`group flex items-center space-x-3 px-6 py-3.5 rounded-sm text-base font-bold transition-all duration-200 border-2 ${
                  isActive
                    ? "bg-[var(--corporate-green)] text-white border-[var(--corporate-green)] corporate-shadow"
                    : "bg-[var(--bg-card)] text-[var(--text-charcoal)] border-stone-200 hover:border-[var(--corporate-green)] hover:text-[var(--corporate-green)]"
                }`}
              >
                <TabIcon
                  className={`w-5 h-5 transition-colors ${
                    isActive
                      ? "text-[#86C5A2]"
                      : "text-stone-400 group-hover:text-[var(--corporate-green)]"
                  }`}
                />
                <span>{industry.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Content */}
        <div className="mb-10">
          {/* Tagline + Description Row */}
          <div className="mb-10 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-charcoal)] mb-3 tracking-tight">
              {current.tagline}
            </h3>
            <p className="text-lg text-[#38443D] leading-relaxed font-medium">
              {current.description}
            </p>
          </div>

          {/* Highlight Cards — Matching reference image style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
            {current.highlights.map((item, idx) => {
              const CardIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[var(--bg-card)] border border-stone-200 rounded-sm p-6 sm:p-7 hover:border-[var(--corporate-green)] hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-sm bg-[#EBF4EE] flex items-center justify-center mb-5 group-hover:bg-[var(--corporate-green)] transition-colors duration-300">
                    <CardIcon className="w-7 h-7 text-[var(--corporate-green)] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-[var(--text-charcoal)] mb-2 group-hover:text-[var(--corporate-green)] transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#4A564F] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Feature Pills + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-stone-200">
            <div className="flex flex-wrap items-center gap-3">
              {current.features.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 bg-[var(--bg-card)] px-4 py-2.5 rounded-full border border-stone-200 corporate-shadow"
                  >
                    <FeatIcon className="w-4 h-4 text-[var(--corporate-green)]" />
                    <span className="font-bold text-sm text-[var(--text-charcoal)]">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenContact(`${current.label} Property Inquiry`)
              }
              className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-8 py-3.5 text-base font-bold rounded-sm transition-colors inline-flex items-center space-x-2 shadow shrink-0"
            >
              <span>Contact {current.label} Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
