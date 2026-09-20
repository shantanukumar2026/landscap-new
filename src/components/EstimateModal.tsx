"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Building2, Home, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function EstimateModal({ isOpen, onClose, initialService = "" }: EstimateModalProps) {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<"commercial" | "residential" | "hoa">("commercial");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
    zipCode: "",
    propertyDetails: "",
    urgency: "standard",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  const availableServices = [
    "Landscape Maintenance & Mowing",
    "Tree Pruning & Deadwood Removal",
    "Tree Removal & Crane Dismantling",
    "Plant Health Care & Soil Fertilization",
    "Shrub Care & Seasonal Flower Beds",
    "Storm Damage Assessment & Clearing",
    "Commercial Master Grounds Contract",
    "Irrigation Inspection & Water Audit",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 overflow-y-auto">
      <div className="bg-[var(--bg-card)] text-[#111613] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden relative my-8">
        {/* Header */}
        <div className="bg-[#143823] text-white p-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#86c5a2]">
              ABC Landscape • Service Request
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Request a Free Property Estimate
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#eaf3ed] text-[#237249] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#111613] mb-2">
                Estimate Request Received
              </h4>
              <p className="text-sm text-[#59655e] max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-[#111613]">{formData.fullName || "valued client"}</span>.
                Your local district supervisor will review your property details and contact you within 24 hours to coordinate your on-site assessment.
              </p>
              <div className="bg-[#f8f9f7] border border-stone-200 p-4 rounded-sm max-w-md mx-auto text-left text-xs text-[#2b332e] mb-6 space-y-1">
                <div><strong>Services Requested:</strong> {selectedServices.join(", ") || "General Evaluation"}</div>
                <div><strong>Location:</strong> {formData.address ? `${formData.address}, ${formData.zipCode}` : "Provided in form"}</div>
                <div><strong>Emergency / Priority:</strong> {formData.urgency === "emergency" ? "24/7 Priority Emergency" : "Standard 24-48h Quote"}</div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#143823] hover:bg-[#1c4d31] text-white px-6 py-2.5 text-xs font-bold uppercase rounded-sm"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200 text-xs">
                <span className={`font-bold ${step === 1 ? "text-[#143823]" : "text-[#8a968f]"}`}>
                  1. Property Type
                </span>
                <span className="text-stone-300">→</span>
                <span className={`font-bold ${step === 2 ? "text-[#143823]" : "text-[#8a968f]"}`}>
                  2. Select Services
                </span>
                <span className="text-stone-300">→</span>
                <span className={`font-bold ${step === 3 ? "text-[#143823]" : "text-[#8a968f]"}`}>
                  3. Contact &amp; Schedule
                </span>
              </div>

              {/* Step 1: Property Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#2b332e]">
                    What type of property do you need serviced?
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPropertyType("commercial")}
                      className={`p-4 border rounded-sm text-left transition-colors flex flex-col justify-between h-32 ${
                        propertyType === "commercial"
                          ? "border-[#143823] bg-[#eaf3ed] text-[#143823]"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <Building2 className="w-6 h-6 mb-2" />
                      <div>
                        <div className="font-bold text-sm">Commercial</div>
                        <div className="text-[11px] text-[#59655e]">Offices, Retail, Campuses</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPropertyType("hoa")}
                      className={`p-4 border rounded-sm text-left transition-colors flex flex-col justify-between h-32 ${
                        propertyType === "hoa"
                          ? "border-[#143823] bg-[#eaf3ed] text-[#143823]"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <ShieldCheck className="w-6 h-6 mb-2" />
                      <div>
                        <div className="font-bold text-sm">HOA / Community</div>
                        <div className="text-[11px] text-[#59655e]">Neighborhood Common Areas</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPropertyType("residential")}
                      className={`p-4 border rounded-sm text-left transition-colors flex flex-col justify-between h-32 ${
                        propertyType === "residential"
                          ? "border-[#143823] bg-[#eaf3ed] text-[#143823]"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <Home className="w-6 h-6 mb-2" />
                      <div>
                        <div className="font-bold text-sm">Residential</div>
                        <div className="text-[11px] text-[#59655e]">Single-Family Home / Estate</div>
                      </div>
                    </button>
                  </div>

                  <div className="pt-4">
                    <label className="block text-xs font-bold uppercase text-[#2b332e] mb-1">
                      Urgency Level
                    </label>
                    <div className="flex gap-4 text-xs">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="standard"
                          checked={formData.urgency === "standard"}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="accent-[#237249]"
                        />
                        <span>Standard Planning (24–48h callback)</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="emergency"
                          checked={formData.urgency === "emergency"}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="accent-[#e5a93c]"
                        />
                        <span className="text-[#a4640d] font-semibold">Priority Storm / Hazard</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Select Services */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#2b332e]">
                    Select the service(s) you need:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableServices.map((service) => {
                      const isChecked = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`p-3 text-left border rounded-sm text-xs font-semibold flex items-center justify-between transition-colors ${
                            isChecked
                              ? "bg-[#143823] text-white border-[#143823]"
                              : "bg-[#f8f9f7] text-[#2b332e] border-stone-200 hover:border-[#237249]"
                          }`}
                        >
                          <span>{service}</span>
                          {isChecked && <CheckCircle2 className="w-4 h-4 text-[#86c5a2] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#2b332e]">
                    Your Contact &amp; Property Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#59655e] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#f8f9f7] border border-stone-300 p-2.5 text-sm rounded-sm focus:outline-none focus:border-[#237249]"
                        placeholder="Robert Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#59655e] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8f9f7] border border-stone-300 p-2.5 text-sm rounded-sm focus:outline-none focus:border-[#237249]"
                        placeholder="(631) 943-2157"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#59655e] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f8f9f7] border border-stone-300 p-2.5 text-sm rounded-sm focus:outline-none focus:border-[#237249]"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#59655e] mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        className="w-full bg-[#f8f9f7] border border-stone-300 p-2.5 text-sm rounded-sm focus:outline-none focus:border-[#237249]"
                        placeholder="e.g. 60601"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#59655e] mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#f8f9f7] border border-stone-300 p-2.5 text-sm rounded-sm focus:outline-none focus:border-[#237249]"
                      placeholder="123 Estate Dr / Office Blvd"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#59655e] mb-1">
                      Property Notes / Tree Concerns (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.propertyDetails}
                      onChange={(e) => setFormData({ ...formData, propertyDetails: e.target.value })}
                      className="w-full bg-[#f8f9f7] border border-stone-300 p-2.5 text-sm rounded-sm focus:outline-none focus:border-[#237249]"
                      placeholder="e.g. Large oak tree near driveway needs pruning, or 10-acre corporate mowing quote."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center space-x-1 text-xs font-bold text-[#59655e] hover:text-[#111613]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <span />
                )}

                <button
                  type="submit"
                  className="bg-[#143823] hover:bg-[#1c4d31] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center space-x-2"
                >
                  <span>{step === 3 ? "Submit Estimate Request" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
