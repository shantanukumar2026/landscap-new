"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, CalendarCheck, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenContact: (subject?: string) => void;
}

export default function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className="text-white relative overflow-hidden py-16 sm:py-24">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/ui/nature-bg.jpg"
          alt="Lush green nature background"
          fill
          className="object-cover"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0A2616]/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-[#216F48] text-[#EBF4EE] text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6 hover:bg-[#1E6B3E]">
            <span className="w-2 h-2 rounded-full bg-[#86C5A2]" />
            <span>EXPERT TREE &amp; LANDSCAPE ASSISTANCE</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to take better care of your property?
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-[#E0EFE7] leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Tell us about your property and we will help you find the right proactive care plan.
            From single tree health evaluations to full commercial grounds management.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => onOpenContact("General Inquiry")}
              className="w-full sm:w-auto bg-[var(--bg-card)] hover:bg-[#F4F8F5] text-[var(--corporate-green)] px-9 py-4 text-base font-extrabold rounded-sm shadow-lg transition-all duration-150 flex items-center justify-center space-x-2.5"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:16319432157"
              className="w-full sm:w-auto bg-[#216F48] hover:bg-[#1E6B3E] text-white border-2 border-[#86C5A2]/30 px-8 py-4 text-base font-bold rounded-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5 text-[#86C5A2]" />
              <span>Call Toll-Free: +1 (631) 943-2157</span>
            </a>
          </div>

          {/* Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#216F48] text-sm text-[#C8E2D4] font-semibold">
            <div className="flex items-center justify-center space-x-2.5">
              <CalendarCheck className="w-5 h-5 text-[#86C5A2]" />
              <span>Prompt In-Person Site Visits</span>
            </div>
            <div className="flex items-center justify-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-[#86C5A2]" />
              <span>Fully Certified &amp; Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#86C5A2]" />
              <span>Dedicated Local District Teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
