"use client";

import React from "react";
import { Trees, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenContact: (servicePref?: string) => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[var(--corporate-green)] text-[#A4B0A8] border-t border-[#1B5E3B] text-base hover:bg-[#1E6B3E]">
      {/* Top Trust Strip */}
      <div className="border-b border-[#1B5E3B] py-8">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 bg-[var(--bg-canvas)] text-white flex items-center justify-center rounded-sm">
              <Trees className="w-6 h-6 text-[var(--corporate-green)]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block">
                ABC<span className="text-[var(--accent-green)] font-light">LANDSCAPE</span>
              </span>
              <span className="text-xs tracking-wider uppercase font-bold text-[#8A968F] block">
                Commercial &amp; Residential Tree &amp; Landscape Care
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-stone-300 font-semibold">
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[var(--accent-green)]" />
              <span>ISA Certified Arborists on Staff</span>
            </span>
            <span>•</span>
            <span>OSHA Safety Compliant</span>
            <span>•</span>
            <span>Licensed &amp; Fully Insured Nationwide</span>
          </div>
        </div>
      </div>

      {/* 4-Column Footer */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Services */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 pb-2 border-b border-[#1B5E3B]">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Professional Tree Care &amp; Pruning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Landscape Maintenance
                </a>
              </li>
              <li>
                <a href="#residential" className="hover:text-white transition-colors">
                  Lawn Care &amp; Soil Nutrition
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-white transition-colors">
                  Commercial Grounds Management
                </a>
              </li>
              <li>
                <a href="#residential" className="hover:text-white transition-colors">
                  Residential Property Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Storm &amp; Emergency Clearing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 pb-2 border-b border-[#1B5E3B]">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Organization
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Certified Arborists
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Project Case Studies
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Safety Protocols
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-white transition-colors">
                  Regional District Depots
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Careers &amp; Apprenticeships
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 pb-2 border-b border-[#1B5E3B]">
              Resources
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Tree Care Diagnostic Guide
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Seasonal Landscape Tips
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Post-Storm Safety Checklist
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Property Manager FAQ
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-white transition-colors">
                  Service Area Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 pb-2 border-b border-[#1B5E3B]">
              Direct Contact
            </h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-base">+1 (631) 943-2157</div>
                  <div className="text-xs text-stone-400">Toll-Free Customer Support</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">nick@aptreescorp.com</div>
                  <div className="text-xs text-stone-400">Direct Inquiries &amp; RFPs</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">National Operations Headquarters</div>
                  <div className="text-xs text-stone-400">
                    133 New York Ave, Huntington, NY 11743
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenContact("Footer Contact")}
                  className="w-full bg-[var(--bg-canvas)] hover:bg-[#103B26] text-white py-3 px-4 rounded-sm font-bold text-sm transition-colors text-center shadow"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="border-t border-[#1B5E3B] py-6 text-sm text-stone-400">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-medium">
          <div>
            &copy; {new Date().getFullYear()} ABC Landscape Services, Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility Statement
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
