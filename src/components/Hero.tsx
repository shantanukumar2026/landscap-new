"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Trees, Phone, Award } from "lucide-react";

interface HeroProps {
  onOpenContact: (subject?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#298A52] to-[#125730] border-b border-stone-200 overflow-hidden py-6 lg:py-12">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
           <pattern id="halftone" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle cx="20" cy="20" r="12" fill="#176136" opacity="0.6"/>
           </pattern>
           <rect x="60%" y="0" width="40%" height="70%" fill="url(#halftone)" />
           
           <path d="M0,0 Q350,200 450,800 L0,800 Z" fill="#32A362" opacity="0.5"/>
           <path d="M0,0 Q150,300 300,800 L0,800 Z" fill="#3DBC72" opacity="0.6"/>
           
           {/* Small fluid wave on the right */}
           <path d="M1440,800 Q1100,700 1300,400 L1440,400 Z" fill="#176136" opacity="0.7"/>
        </svg>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
              Healthy Trees. <br />
              <span className="text-white">Beautiful Properties.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white leading-relaxed mb-8 font-bold max-w-xl drop-shadow-sm">
              Professional tree and landscape care for homes, businesses, and communities across the United States.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-10">
              <a
                href="#services"
                className="bg-white hover:bg-stone-100 text-[var(--corporate-green)] px-9 py-4 text-lg font-bold rounded-sm shadow-xl transition-all duration-150 flex items-center justify-center space-x-3 text-center focus:ring-4 focus:ring-white/30"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => onOpenContact("General Consultation")}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-white px-8 py-4 text-lg font-bold rounded-sm transition-colors text-center shadow-sm"
              >
                Contact Our Team
              </button>
            </div>

            <div className="pt-6 border-t border-white/20">
              <div className="flex flex-wrap items-center text-base sm:text-lg text-white font-bold gap-y-3">
                <span className="flex items-center space-x-2 mr-5">
                  <CheckCircle2 className="w-6 h-6 text-[#8DE0AE] shrink-0" />
                  <span>Experienced Professionals</span>
                </span>
                <span className="text-white/30 mr-5 hidden sm:inline">•</span>
                <span className="flex items-center space-x-2 mr-5">
                  <Shield className="w-6 h-6 text-[#8DE0AE] shrink-0" />
                  <span>Reliable Service</span>
                </span>
                <span className="text-white/30 mr-5 hidden sm:inline">•</span>
                <span className="flex items-center space-x-2">
                  <Trees className="w-6 h-6 text-[#8DE0AE] shrink-0" />
                  <span>Local Care</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[500px] lg:h-[540px] w-full rounded-sm border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-stone-100 flex flex-col overflow-hidden group">
              <Image
                src="/images/hero/before-usa.jpg"
                alt="Overgrown messy yard before landscaping"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              
              <div className="absolute inset-0 z-10 animate-wipe-reveal">
                <Image
                  src="/images/hero/after-usa.jpg"
                  alt="Beautiful pristine yard after landscaping"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
              </div>
              
              <div className="absolute top-4 left-4 bg-stone-900/70 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm z-0">
                Before
              </div>
              <div className="absolute top-4 left-4 bg-[#8DE0AE] text-[#0A2616] text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-sm z-20 animate-wipe-reveal shadow-lg">
                After
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-20" />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur text-[var(--corporate-green)] p-4 flex items-center justify-between rounded-sm z-30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[#298A52] shrink-0" />
                  <div>
                    <div className="text-xs uppercase font-extrabold tracking-wider text-[#298A52]">
                      Certified Arboriculture
                    </div>
                    <div className="text-sm font-bold text-[#0A2616]">
                      Full Liability & Property Protection
                    </div>
                  </div>
                </div>
                <a
                  href="tel:16319432157"
                  className="bg-[#298A52] text-white px-3.5 py-1.5 rounded-sm font-bold text-xs uppercase hover:bg-[#1E6B3E] transition-colors shrink-0 shadow"
                >
                  Call Toll-Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
