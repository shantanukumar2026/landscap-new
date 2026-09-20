"use client";

import React from "react";
import Image from "next/image";
import DecorativeLeaves from "./DecorativeLeaves";
import { ArrowRight, ShieldCheck, Award, Check } from "lucide-react";

interface AboutSectionProps {
  onOpenContact: (servicePref: string) => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  const companyValues = [
    {
      title: "Horticultural & Arboricultural Knowledge",
      desc: "Our leaders and specialists apply science-backed plant pathology, soil biology, and safe structural tree dynamics to every property.",
    },
    {
      title: "Direct Accountability & Communication",
      desc: "You receive direct contact with a dedicated local district supervisor who knows your grounds, your goals, and your schedule.",
    },
    {
      title: "Modern Specialized Equipment",
      desc: "From state-of-the-art crane rigs and organic mulch blowers to quiet commercial mowers, we invest in tools that protect your turf.",
    },
  ];

  return (
    <section id="about" className="relative bg-[var(--bg-card)] text-[var(--text-charcoal)] border-b border-stone-200">
      <DecorativeLeaves />
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-1 bg-[var(--corporate-green)] hover:bg-[#1E6B3E]"></span>
              <span className="text-sm font-extrabold uppercase tracking-widest text-[var(--corporate-green)]">
                BUILT ON EXPERIENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight mb-6">
              People who take pride in the work.
            </h2>

            <p className="text-lg sm:text-xl text-[#38443D] leading-relaxed mb-8 font-medium">
              Great landscapes do not happen by accident. They require knowledge, attention to detail,
              and people who care about doing the job properly. Our teams work with property owners to
              understand what their landscape needs and provide dependable care throughout the year.
            </p>

            <div className="pt-6 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onOpenContact("Company Overview")}
                className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-8 py-4 text-base font-bold rounded-sm transition-colors inline-flex items-center space-x-2 corporate-shadow"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Value Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyValues.map((val, idx) => (
              <div key={idx} className="bg-[var(--bg-canvas)] border border-stone-200 p-6 rounded-sm hover:border-[var(--corporate-green)] group transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--corporate-green)] corporate-shadow mb-4 group-hover:bg-[#1E6B3E] group-hover:text-white transition-colors">
                  {idx === 0 ? <ShieldCheck className="w-6 h-6" /> : idx === 1 ? <Check className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                </div>
                <h4 className="text-xl font-bold text-[var(--text-charcoal)] mb-2 group-hover:text-[var(--corporate-green)] transition-colors">{val.title}</h4>
                <p className="text-sm font-medium text-[#38443D]">{val.desc}</p>
              </div>
            ))}

            <div className="bg-[var(--corporate-green)] text-white p-6 rounded-sm flex flex-col justify-center items-center text-center corporate-shadow hover:bg-[#1E6B3E]">
              <h4 className="text-2xl font-black mb-2 text-white">46+ Years</h4>
              <p className="text-sm font-bold opacity-90">Of Dedicated Local Service</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
