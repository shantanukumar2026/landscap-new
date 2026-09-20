"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export default function ContactModal({ isOpen, onClose, initialSubject = " }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: ",
    phone: ",
    email: ",
    address: ",
    serviceType: "Tree Care & Pruning",
    message: ",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, serviceType: initialSubject }));
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 overflow-y-auto">
      <div className="bg-[var(--bg-card)] text-[var(--text-charcoal)] w-full max-w-xl rounded-sm shadow-2xl overflow-hidden relative my-8 border border-stone-200">
        {/* Header */}
        <div className="bg-[var(--corporate-green)] text-white p-6 sm:p-7 flex items-center justify-between hover:bg-[#1E6B3E]">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#86C5A2]">
              ABC LANDSCAPE • DIRECT ASSISTANCE
            </div>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              Contact Our Team
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-stone-200 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#EBF4EE] text-[var(--corporate-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[var(--text-charcoal)] mb-2">
                Thank You, {formData.fullName || "Valued Client"}
              </h4>
              <p className="text-lg text-[#38443D] max-w-md mx-auto mb-6 leading-relaxed font-medium">
                Your message has been dispatched to our local district supervisor. We will contact you
                promptly by telephone or email.
              </p>
              <div className="bg-[#F4F8F5] border border-stone-200 p-4 rounded-sm text-left text-sm text-[var(--text-charcoal)] mb-6 space-y-1">
                <div><strong>Service:</strong> {formData.serviceType}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
                <div><strong>Email:</strong> {formData.email}</div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-8 py-3 text-base font-bold rounded-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--text-charcoal)] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[var(--bg-canvas)] border-2 border-stone-300 p-3 text-base rounded-sm focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)] focus:outline-none"
                    placeholder="e.g. Robert Miller"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--text-charcoal)] mb-1.5">
                    Telephone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[var(--bg-canvas)] border-2 border-stone-300 p-3 text-base rounded-sm focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)] focus:outline-none"
                    placeholder="+1 (631) 943-2157"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--text-charcoal)] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[var(--bg-canvas)] border-2 border-stone-300 p-3 text-base rounded-sm focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)] focus:outline-none"
                    placeholder="name@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--text-charcoal)] mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[var(--bg-canvas)] border-2 border-stone-300 p-3 text-base rounded-sm focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)] focus:outline-none"
                  >
                    <option value="Tree Care & Pruning">Tree Care &amp; Pruning</option>
                    <option value="Landscape Maintenance">Landscape Maintenance</option>
                    <option value="Commercial Grounds Care">Commercial Grounds Care</option>
                    <option value="Residential Property Care">Residential Property Care</option>
                    <option value="Storm & Emergency Assistance">Storm &amp; Emergency Assistance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--text-charcoal)] mb-1.5">
                  Property Address or City / State
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[var(--bg-canvas)] border-2 border-stone-300 p-3 text-base rounded-sm focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)] focus:outline-none"
                  placeholder="Street address or municipality"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--text-charcoal)] mb-1.5">
                  How Can We Help Your Property? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--bg-canvas)] border-2 border-stone-300 p-3 text-base rounded-sm focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)] focus:outline-none"
                  placeholder="Describe your tree or landscape needs..."
                />
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <a
                  href="tel:16319432157"
                  className="flex items-center space-x-2 text-base font-bold text-[var(--corporate-green)] hover:underline"
                >
                  <Phone className="w-5 h-5 text-[#216F48]" />
                  <span>Call +1 (631) 943-2157</span>
                </a>

                <button
                  type="submit"
                  className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-7 py-3.5 text-base font-bold rounded-sm transition-colors flex items-center space-x-2"
                >
                  <span>Submit Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
