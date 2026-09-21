"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronUp,
  Trees,
  Check,
  ShieldCheck,
  Award,
} from "lucide-react";

interface FooterProps {
  onOpenContact?: (servicePref?: string) => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#298A52] to-[#125730] text-white overflow-hidden">
      {/* Decorative SVG background — matches Hero pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-halftone" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <circle cx="20" cy="20" r="12" fill="#176136" opacity="0.5"/>
          </pattern>
          <rect x="60%" y="0" width="40%" height="70%" fill="url(#footer-halftone)" />
          <path d="M0,0 Q350,150 450,600 L0,600 Z" fill="#32A362" opacity="0.35"/>
          <path d="M0,0 Q150,250 300,600 L0,600 Z" fill="#3DBC72" opacity="0.4"/>
          <path d="M1440,600 Q1100,500 1300,200 L1440,200 Z" fill="#176136" opacity="0.5"/>
        </svg>
      </div>

      {/* ─── Main Footer Content ─── */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">

          {/* ── Column 1 — Brand, Contact & Socials (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Logo card — white card matching Header branding */}
            <a href="#" className="bg-white/95 backdrop-blur rounded-sm p-4 inline-flex items-center space-x-3 w-fit shadow-xl border border-white/20 group transition-all hover:shadow-2xl">
              <div className="w-11 h-11 bg-[var(--corporate-green)] rounded-sm flex items-center justify-center text-white shrink-0 shadow group-hover:bg-[#1E6B3E] transition-colors">
                <Trees className="w-5 h-5 text-[#86C5A2]" />
              </div>
              <div className="leading-tight">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[var(--text-charcoal)] block">
                  ABC<span className="text-[#1B5E3B] font-light">LANDSCAPE</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#3D4A41] block mt-0.5">
                  Tree Care &amp; Landscape Management
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="text-sm leading-relaxed text-white font-medium pr-2 max-w-sm">
              Professional landscape management, certified arborist tree care, and grounds maintenance for residential estates and commercial properties across Long Island and the greater New York region.
            </p>

            {/* Contact details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 group">
                <div className="w-7 h-7 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[#8DE0AE]" />
                </div>
                <span className="text-white font-medium leading-snug">
                  133 New York Ave, Huntington,<br/>NY 11743, United States
                </span>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-7 h-7 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#8DE0AE]" />
                </div>
                <a href="tel:16319432157" className="text-white font-extrabold hover:text-[#8DE0AE] transition-colors text-base">
                  +1 (631) 943-2157
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-7 h-7 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#8DE0AE]" />
                </div>
                <a href="mailto:nick@aptreescorp.com" className="text-white font-bold hover:text-[#8DE0AE] transition-colors">
                  nick@aptreescorp.com
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-7 h-7 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Clock className="w-4 h-4 text-[#8DE0AE]" />
                </div>
                <span className="text-white/90 font-medium">
                  Mon – Fri : 8:00 AM to 6:00 PM EST
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="pt-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 block mb-2.5">
                FOLLOW US
              </span>
              <div className="flex items-center space-x-2">
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-8 h-8 rounded-sm bg-white/15 border border-white/25 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/30 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0-.01-2.8 1.4 1.4 0 0 0 .01 2.8m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
                </a>
                {/* X / Twitter */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X Twitter"
                  className="w-8 h-8 rounded-sm bg-white/15 border border-white/25 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/30 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-8 h-8 rounded-sm bg-white/15 border border-white/25 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/30 transition-all">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-8 h-8 rounded-sm bg-white/15 border border-white/25 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/30 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-8 h-8 rounded-sm bg-white/15 border border-white/25 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/30 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Column 2 — Core Services (2 cols) ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5">
              <span className="w-6 h-0.5 bg-[#8DE0AE]"></span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#8DE0AE]">
                Services
              </h4>
            </div>
            <ul className="space-y-3 text-sm font-semibold text-white">
              <li><a href="#services" className="hover:text-white transition-colors block">Landscape Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block">Certified Tree Care</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors block">Commercial Grounds</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block">Storm &amp; Emergency</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block">Irrigation Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block">Plant Health &amp; Soil</a></li>
            </ul>
          </div>

          {/* ── Column 3 — Commercial (2 cols) ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5">
              <span className="w-6 h-0.5 bg-[#8DE0AE]"></span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#8DE0AE]">
                Commercial
              </h4>
            </div>
            <ul className="space-y-3 text-sm font-semibold text-white/75">
              <li><a href="#commercial" className="hover:text-white transition-colors block">Corporate Office Parks</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors block">HOAs &amp; Communities</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors block">Retail &amp; Health Campuses</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors block">Industrial &amp; Logistics</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors block">Municipalities &amp; Govt</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors block">Educational Institutions</a></li>
            </ul>
          </div>

          {/* ── Column 4 — Company (2 cols) ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-5">
              <span className="w-6 h-0.5 bg-[#8DE0AE]"></span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#8DE0AE]">
                Company
              </h4>
            </div>
            <ul className="space-y-3 text-sm font-semibold text-white/75">
              <li><a href="#about" className="hover:text-white transition-colors block">About Our Company</a></li>
              <li><a href="#work" className="hover:text-white transition-colors block">Featured Projects</a></li>
              <li><a href="#residential" className="hover:text-white transition-colors block">Residential Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors block">Why Choose Us</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors block">Property Resources</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors block">Company Blog</a></li>
            </ul>
          </div>

          {/* ── Column 5 — Newsletter & Trust (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            {/* Newsletter */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-6 h-0.5 bg-[#8DE0AE]"></span>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#8DE0AE]">
                  Stay Informed
                </h4>
              </div>
              <p className="text-xs text-white/90 font-medium leading-relaxed mb-3">
                Seasonal tips, tree care advisories, and property insights.
              </p>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address for newsletter"
                    className="w-full bg-white/95 backdrop-blur text-stone-900 placeholder:text-stone-400 text-xs px-4 py-2.5 rounded-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#8DE0AE] shadow font-medium"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 w-7 h-7 rounded-sm bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                  >
                    {isSubscribed ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {isSubscribed && (
                  <div className="text-[11px] text-[#8DE0AE] font-bold mt-1.5 flex items-center space-x-1">
                    <Check className="w-3 h-3" />
                    <span>Subscribed successfully!</span>
                  </div>
                )}
              </form>
            </div>

            {/* Trust card — glass style */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-sm p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#8DE0AE] shrink-0" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">
                  ISA Certified &amp; OSHA Compliant
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-white/90 font-medium">
                All operations performed under ISA standards (ANSI A300) and OSHA 1910.269 compliance with full liability coverage.
              </p>
            </div>

            {/* Quick badge row */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-white">
                <Award className="w-4 h-4 text-[#8DE0AE]" />
                <span>46+ Years</span>
              </div>
              <span className="text-white/50">•</span>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#8DE0AE]" />
                <span>Licensed &amp; Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="relative z-10 border-t border-white/15 py-5 text-xs bg-black/15 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/90 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} ABC Landscape Services, Inc. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/90 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-white/40">•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-white/40">•</span>
              <a href="#resources" className="hover:text-white transition-colors">Resources</a>
              <span className="text-white/40">•</span>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll back to top"
              className="w-8 h-8 rounded-sm bg-white text-[var(--corporate-green)] hover:bg-stone-100 flex items-center justify-center transition-all shadow-lg shrink-0 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
