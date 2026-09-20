"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Trees,
  ShieldCheck,
  Building2,
  Home,
  CloudRain,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  Award,
  Check,
} from "lucide-react";

interface HeaderProps {
  onOpenContact: (subject?: string) => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [activeMegaMenu, setActiveMegaMenu] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"services" | "commercial" | "residential">("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className="w-full sticky top-0 z-50 bg-[var(--bg-card)] corporate-shadow border-b-2 border-stone-200">
      {/* Top Utility Bar */}
      <div className="bg-[#111111] text-white border-b border-stone-800">
        <div className="w-full px-4 sm:px-8 lg:px-12 h-10 flex items-center justify-end text-sm">
          <div className="flex items-center space-x-6">
            <a
              href="tel:16319432157"
              className="flex items-center space-x-2 text-white font-extrabold hover:text-[#86C5A2] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#268051]" />
              <span>+1 (631) 943-2157</span>
            </a>
            <span className="text-stone-600 hidden sm:inline">|</span>
            <a
              href="mailto:nick@aptreescorp.com"
              className="hidden sm:flex items-center space-x-1.5 text-stone-300 hover:text-white font-bold transition-colors"
            >
              <Mail className="w-4 h-4 text-[#268051]" />
              <span>nick@aptreescorp.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-[var(--bg-card)] transition-all duration-200 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group" aria-label="ABC Landscape Homepage">
            <div className="w-10 h-10 bg-[var(--corporate-green)] flex items-center justify-center rounded-sm text-white group-hover:bg-[#1E6B3E] transition-colors shadow">
              <Trees className="w-5 h-5 text-[#86C5A2]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[var(--text-charcoal)] block leading-none">
                ABC<span className="text-[#1B5E3B] font-light">LANDSCAPE</span>
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase font-bold text-[#3D4A41] block mt-0.5">
                Tree Care &amp; Landscape Management
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Absolute Centered for Premium Corporate Look) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 font-extrabold text-[15px] text-[var(--text-charcoal)]">
            {/* Mega Menu Button: Services */}
            <div className="relative" onMouseEnter={() => setActiveMegaMenu(true)}>
              <button
                type="button"
                onClick={() => setActiveMegaMenu(!activeMegaMenu)}
                className={`px-4 py-2 rounded-sm flex items-center space-x-1.5 transition-all duration-200 ${activeMegaMenu
                    ? "bg-[#F4FAF6] text-[var(--corporate-green)]"
                    : "hover:bg-[#F4FAF6] hover:text-[var(--corporate-green)]"
                  }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 opacity-80" />
              </button>
            </div>

            <a
              href="#about"
              className="px-4 py-2 rounded-sm hover:text-[var(--corporate-green)] hover:bg-[#F4FAF6] transition-all duration-200"
            >
              About Us
            </a>

            <a
              href="#work"
              className="px-4 py-2 rounded-sm hover:text-[var(--corporate-green)] hover:bg-[#F4FAF6] transition-all duration-200"
            >
              Our Work
            </a>

            <a
              href="#resources"
              className="px-4 py-2 rounded-sm hover:text-[var(--corporate-green)] hover:bg-[#F4FAF6] transition-all duration-200"
            >
              Resources
            </a>
            <a
              href="#blog"
              className="px-4 py-2 rounded-sm hover:text-[var(--corporate-green)] hover:bg-[#F4FAF6] transition-all duration-200"
            >
              Blog
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#services"
              className="border-2 border-[var(--corporate-green)] text-[var(--corporate-green)] hover:bg-[#EBF5EE] px-4 py-2 text-sm font-extrabold rounded-sm transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => onOpenContact("Mobile Inquiry")}
              className="bg-[var(--corporate-green)] text-white px-4 py-2 text-sm font-bold rounded-sm corporate-shadow hover:bg-[#1E6B3E]"
            >
              Contact Team
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>




      {/* Desktop Mega Menu Dropdowns */}
      {activeMegaMenu && (
        <div
          className="hidden lg:block absolute top-full left-0 w-full bg-[var(--bg-card)] border-b-4 border-[var(--corporate-green)] corporate-shadow transition-all duration-200"
          onMouseLeave={() => setActiveMegaMenu(false)}
        >
          <div className="w-full px-4 sm:px-8 lg:px-12 py-6">
            {/* Tabs */}
            <div className="flex space-x-8 border-b border-stone-200 mb-8">
              <button
                onClick={() => setActiveTab('services')}
                className={`pb-3 text-base font-bold border-b-2 transition-colors ${activeTab === 'services' ? 'border-[var(--corporate-green)] text-[var(--corporate-green)]' : 'border-transparent text-stone-500 hover:text-[var(--text-charcoal)] hover:underline underline-offset-4'}`}
              >
                Core Services
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`pb-3 text-base font-bold border-b-2 transition-colors ${activeTab === 'commercial' ? 'border-[var(--corporate-green)] text-[var(--corporate-green)]' : 'border-transparent text-stone-500 hover:text-[var(--text-charcoal)] hover:underline underline-offset-4'}`}
              >
                Commercial Properties
              </button>
              <button
                onClick={() => setActiveTab('residential')}
                className={`pb-3 text-base font-bold border-b-2 transition-colors ${activeTab === 'residential' ? 'border-[var(--corporate-green)] text-[var(--corporate-green)]' : 'border-transparent text-stone-500 hover:text-[var(--text-charcoal)] hover:underline underline-offset-4'}`}
              >
                Residential Estates
              </button>
            </div>

            {/* Services Dropdown */}
            {activeTab === "services" && (
              <div className="grid grid-cols-1 gap-8">
                <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Landscape Maintenance</span>
                  </a>
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Certified Tree Care</span>
                  </a>
                  <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Commercial Solutions</span>
                  </a>
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Storm Response</span>
                  </a>
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Irrigation Management</span>
                  </a>
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Plant Health Care</span>
                  </a>
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Pest & Disease Control</span>
                  </a>
                  <a href="#services" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                    <span>Soil Enhancement</span>
                  </a>
                </div>
              </div>
            )}

            {/* Commercial Dropdown */}
            {activeTab === "commercial" && (
              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Corporate Office Parks</span>
                </a>
                <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>HOAs & Master Communities</span>
                </a>
                <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Retail & Health Campuses</span>
                </a>
                <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Industrial & Logistics</span>
                </a>
                <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Municipalities & Govt</span>
                </a>
                <a href="#commercial" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Educational Institutions</span>
                </a>
              </div>
            )}

            {/* Residential Dropdown */}
            {activeTab === "residential" && (
              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                <a href="#residential" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Tree Pruning & Health</span>
                </a>
                <a href="#residential" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Safe Tree Removal</span>
                </a>
                <a href="#residential" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Lawn & Shrub Management</span>
                </a>
                <a href="#residential" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Seasonal Cleanups</span>
                </a>
                <a href="#residential" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Stump Grinding</span>
                </a>
                <a href="#residential" onClick={() => setActiveMegaMenu(false)} className="text-[var(--text-charcoal)] hover:text-[var(--corporate-green)] font-bold text-lg flex items-center space-x-3 transition-colors group hover:underline underline-offset-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-green)] group-hover:translate-x-1.5 transition-transform duration-200"><path d="m9 18 6-6-6-6" /></svg>
                  <span>Emergency Residential Response</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[90px] z-50 bg-[#111111]/70">
          <div className="bg-[var(--bg-card)] w-full max-w-sm h-[calc(100vh-90px)] overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-2 border-b border-stone-200 pb-4">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Landscape Maintenance
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Certified Tree Care
                </a>
                <a
                  href="#commercial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Commercial Properties
                </a>
                <a
                  href="#residential"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Residential Services
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  About Our Company
                </a>
                <a
                  href="#work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Featured Work
                </a>
                <a
                  href="#resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Property Resources
                </a>
                <a
                  href="#blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-xl font-bold text-[var(--text-charcoal)] hover:text-[var(--corporate-green)]"
                >
                  Company Blog
                </a>
              </div>

              <div className="bg-[#F4FAF6] p-4 rounded-sm border border-stone-200">
                <div className="text-xs font-bold text-[#3D4A41] uppercase tracking-wider mb-1">
                  Direct Toll-Free Line
                </div>
                <a
                  href="tel:16319432157"
                  className="text-xl font-extrabold text-[var(--corporate-green)] flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5 text-[#1B5E3B]" />
                  <span>+1 (631) 943-2157</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full border-2 border-[var(--corporate-green)] text-[var(--corporate-green)] py-3.5 rounded-sm font-bold text-base text-center block"
              >
                Explore Services
              </a>
              {/* <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact("Mobile Inquiry");
                }}
                className="w-full bg-[var(--corporate-green)] text-white py-4 rounded-sm font-bold text-base text-center shadow flex items-center justify-center space-x-2 hover:bg-[#1E6B3E]"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
