"use client";

import React, { useState } from "react";
import { MapPin, Search, Phone, CheckCircle2, Clock, Navigation } from "lucide-react";

interface ServiceAreaProps {
  searchedZip?: string;
  onOpenContact: (servicePref: string) => void;
}

interface DistrictInfo {
  name: string;
  state: string;
  phone: string;
  email: string;
  leadArborist: string;
  coverage: string;
  responseTime: string;
}

export default function ServiceArea({ searchedZip = "", onOpenContact }: ServiceAreaProps) {
  const [inputZip, setInputZip] = useState(searchedZip);
  const [selectedState, setSelectedState] = useState("all");
  const [foundDistrict, setFoundDistrict] = useState<DistrictInfo | null>({
    name: "Midwest Central Regional District",
    state: "IL",
    phone: "+1 (631) 943-2157",
    email: "nick@aptreescorp.com",
    leadArborist: "Marcus Vance, ISA Board Certified Master Arborist",
    coverage: "Covering a 50-mile radius with 14 active commercial & residential crews",
    responseTime: "Emergency Storm: Under 2 hours • Standard Consults: Within 24-48 hours",
  });

  const regions = [
    { state: "IL", name: "Illinois / Greater Chicago & Suburbs", phone: "(631) 943-2157", crews: 18 },
    { state: "OH", name: "Ohio / Columbus & Cleveland Metro", phone: "(631) 943-2157", crews: 14 },
    { state: "IN", name: "Indiana / Indianapolis & Northern Hub", phone: "(631) 943-2157", crews: 12 },
    { state: "PA", name: "Pennsylvania / Pittsburgh & Philadelphia", phone: "(631) 943-2157", crews: 16 },
    { state: "MI", name: "Michigan / Detroit & Grand Rapids", phone: "(631) 943-2157", crews: 15 },
    { state: "WI", name: "Wisconsin / Milwaukee & Madison", phone: "(631) 943-2157", crews: 11 },
    { state: "MO", name: "Missouri / St. Louis & Kansas City", phone: "(631) 943-2157", crews: 13 },
    { state: "NC", name: "North Carolina / Raleigh & Charlotte", phone: "(631) 943-2157", crews: 17 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputZip.trim()) return;

    setFoundDistrict({
      name: `Regional District Depot (Zone: ${inputZip.trim()})`,
      state: "Active",
      phone: "+1 (631) 943-2157",
      email: "nick@aptreescorp.com",
      leadArborist: "David Reynolds, Regional Tree & Landscape Director",
      coverage: `Direct full-service coverage active for ${inputZip.trim()} and surrounding areas`,
      responseTime: "Standard on-site visit within 24-48 hours",
    });
  };

  const filteredRegions = selectedState === "all"
    ? regions
    : regions.filter((r) => r.state === selectedState);

  return (
    <section id="service-area" className="bg-[var(--bg-canvas)] text-[var(--text-charcoal)] border-b border-stone-200">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="text-sm font-extrabold uppercase tracking-widest text-[var(--corporate-green)] mb-3">
            Service Area & Locations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight mb-5">
            Local service. Professional standards.
          </h2>
          <p className="text-lg sm:text-xl text-[#38443D] leading-relaxed font-medium">
            Wherever you are, our goal is simple: make it easy to get dependable landscape and tree
            care from people who know your area.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-[var(--bg-card)] border border-stone-200 rounded-sm p-6 sm:p-8 lg:p-10 corporate-shadow mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Search */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-bold text-[var(--text-charcoal)] mb-2 flex items-center space-x-2.5">
                <MapPin className="w-6 h-6 text-[#216F48]" />
                <span>Find a Service Location</span>
              </h3>
              <p className="text-base text-[#4A564F] mb-6 font-medium">
                Enter your area or select your state to connect directly with your dedicated local team.
              </p>

              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <label htmlFor="area-search" className="block text-sm font-bold uppercase text-[var(--text-charcoal)] mb-1.5">
                    Enter City, State, or Area
                  </label>
                  <div className="flex">
                    <input
                      id="area-search"
                      type="text"
                      placeholder="e.g. Chicago, Columbus, Philadelphia"
                      value={inputZip}
                      onChange={(e) => setInputZip(e.target.value)}
                      className="flex-1 bg-[var(--bg-canvas)] border-2 border-stone-300 px-4 py-3.5 text-base rounded-l-sm focus:outline-none focus:border-[var(--corporate-green)] focus:bg-[var(--bg-card)]"
                    />
                    <button
                      type="submit"
                      className="bg-[var(--corporate-green)] hover:bg-[#1E6B3E] text-white px-6 text-sm font-bold uppercase tracking-wider rounded-r-sm transition-colors flex items-center space-x-1.5 shrink-0"
                    >
                      <Search className="w-4 h-4" />
                      <span>Find Local Team</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm text-[#4A564F] font-medium">
                  <span>Filter by State:</span>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="bg-[var(--bg-canvas)] border border-stone-300 text-sm px-3 py-2 rounded-sm focus:outline-none text-[var(--text-charcoal)]"
                  >
                    <option value="all">All Available Regions</option>
                    {regions.map((r) => (
                      <option key={r.state} value={r.state}>
                        {r.state} - {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>

            {/* Right Local District Confirmation */}
            <div className="lg:col-span-6 bg-[var(--corporate-green)] text-white p-6 sm:p-8 rounded-sm shadow-md hover:bg-[#1E6B3E]">
              {foundDistrict ? (
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#216F48]">
                    <div className="inline-flex items-center space-x-2 text-sm text-[#86C5A2] font-bold">
                      <CheckCircle2 className="w-5 h-5 text-[#86C5A2]" />
                      <span>Direct Coverage Active</span>
                    </div>
                    <span className="text-xs bg-[#216F48] px-3 py-1 rounded-sm font-bold hover:bg-[#1E6B3E]">
                      Regional Depot
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2">
                    {foundDistrict.name}
                  </h4>
                  <p className="text-sm text-[#C8E2D4] mb-5">
                    {foundDistrict.coverage}
                  </p>

                  <div className="space-y-2.5 text-sm text-[#EBF4EE] mb-6">
                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-[#86C5A2]" />
                      <span className="font-bold text-white">{foundDistrict.phone}</span>
                      <span className="text-[#A8D5BC]">| Direct Dispatch Line</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Clock className="w-4 h-4 text-[#86C5A2]" />
                      <span>{foundDistrict.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Navigation className="w-4 h-4 text-[#86C5A2]" />
                      <span>Supervising Director: {foundDistrict.leadArborist}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenContact(`District: ${foundDistrict.name}`)}
                    className="w-full bg-[var(--bg-card)] hover:bg-[#F4F8F5] text-[var(--corporate-green)] py-3.5 px-6 text-base font-bold rounded-sm transition-colors text-center shadow"
                  >
                    Contact This Local Team
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="border-t border-stone-200 pt-8">
          <div className="text-sm font-bold uppercase tracking-wider text-[#4A564F] mb-4">
            Current Regional Service Districts ({filteredRegions.length})
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredRegions.map((region) => (
              <div
                key={region.name}
                className="bg-[var(--bg-card)] border border-stone-200 p-5 rounded-sm hover:border-[var(--corporate-green)] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[var(--corporate-green)]">{region.state} District</span>
                  <span className="text-xs bg-[#EBF4EE] text-[var(--corporate-green)] font-bold px-2.5 py-0.5 rounded-sm">
                    {region.crews} Active Crews
                  </span>
                </div>
                <div className="text-base font-bold text-[var(--text-charcoal)] mb-2">{region.name}</div>
                <a
                  href={`tel:${region.phone.replace(/\D/g, "")}`}
                  className="text-sm font-bold text-[#216F48] hover:text-[#103B26] flex items-center space-x-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{region.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
