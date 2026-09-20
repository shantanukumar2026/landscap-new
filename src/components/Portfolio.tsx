"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, MapPin } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "commercial-maintenance",
      title: "Corporate Campus Landscape & Canopy Revitalization",
      category: "Commercial Property Maintenance",
      location: "Corporate Technology Campus",
      image: "/images/services/daylight-commercial.jpg",
      description: "A 45-acre multi-facility corporate campus requiring complete turf rejuvenation, perimeter shade tree safety pruning, and zero disruption to workday operations.",
      challenge: "Compacted soil and outdated irrigation caused widespread turf stress along major pedestrian access walkways.",
      solution: "Implemented tailored deep-root aeration, smart irrigation zoning, proactive safety pruning, and native flowering borders.",
      result: "Water usage reduced by 22% while turf density increased by 40%, earning regional environmental stewardship honors.",
    },
    {
      id: "mature-tree-care",
      title: "Century-Old Heritage White Oak Canopy Preservation",
      category: "Mature Tree Care",
      location: "Private Historic Residence",
      image: "/images/services/daylight-oak-tree.jpg",
      description: "Health evaluation, micro-nutrient feeding, and non-invasive crown cabling for a 150-year-old landmark specimen tree.",
      challenge: "Heavy deadwood overhanging roof structures and soil compaction from historic foot traffic.",
      solution: "Certified arborists completed deadwood reduction, dynamic cabling installation, and localized air-spade root decompaction.",
      result: "Full vitality restored to the historic canopy with zero structural risk to the surrounding residence.",
    },
    {
      id: "community-improvements",
      title: "Planned Residential Community Grounds & Parkway Stewardship",
      category: "Community Landscape Improvements",
      location: "Lakeside HOA Community",
      image: "/images/hero/sunlit-landscape-hero.jpg",
      description: "Master landscape maintenance and safety management across 350 residential lots, two clubhouses, and tree-lined boulevards.",
      challenge: "Inconsistent previous contractor service, unmanaged street trees creating sightline hazards, and degraded entrance turf.",
      solution: "Structured weekly precision mowing, seasonal bed rotation, uniform street tree crown raising, and monthly board reports.",
      result: "Property aesthetic enhanced with 100% board satisfaction over four consecutive years of partnership.",
    },
    {
      id: "storm-recovery",
      title: "Rapid Post-Storm Clearing & Hazardous Tree Removal",
      category: "Storm Recovery & Cleanup",
      location: "Regional Commercial Center",
      image: "/images/services/daylight-tree-canopy.jpg",
      description: "Immediate 24-hour storm response following severe 70mph winds that brought down mature limbs across main parking access corridors.",
      challenge: "Multiple split trunks threatening utility power lines and blocking primary freight loading docks.",
      solution: "Dispatched heavy grapple crane, chipper fleet, and certified rigging teams within 90 minutes of call.",
      result: "All access roads safely cleared and opened before 6:00 AM business opening with zero structural damage.",
    },
  ];

  return (
    <section id="work" className="bg-[var(--bg-canvas)] border-b border-stone-200">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Section Header (Full Width Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-10 border-b border-stone-200">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-12 h-1 bg-[var(--corporate-green)] hover:bg-[#1E6B3E]"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--corporate-green)]">
                Case Studies &amp; Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight">
              See the difference professional care makes.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l-2 border-stone-100 flex flex-col items-start">
            <p className="text-lg text-[var(--text-charcoal)] opacity-90 leading-relaxed font-medium mb-6">
              Real outcomes for real properties. Explore how our certified teams maintain safety, preserve
              valuable trees, and improve outdoor grounds across the country.
            </p>
            <div className="flex flex-wrap items-center gap-4">
               <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full border border-stone-200 corporate-shadow">
                 <MapPin className="w-5 h-5 text-[var(--corporate-green)]" />
                 <span className="font-bold text-sm text-[var(--text-charcoal)]">National Reach</span>
               </div>
            </div>
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Main Featured Item */}
          <div
            onClick={() => setActiveProject(projects[0])}
            className="lg:col-span-7 bg-[var(--bg-card)] border border-stone-200 rounded-sm overflow-hidden flex flex-col group cursor-pointer hover:border-[var(--corporate-green)] transition-all duration-200 corporate-shadow"
          >
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-stone-100">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[var(--corporate-green)] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm hover:bg-[#1E6B3E]">
                {projects[0].category}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-sm text-[#4A564F] font-bold mb-2">
                  <MapPin className="w-4 h-4 text-[#216F48]" />
                  <span>{projects[0].location}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[var(--text-charcoal)] mb-3 group-hover:text-[var(--corporate-green)] transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-base text-[var(--text-charcoal)] opacity-90 leading-relaxed mb-6 font-medium">
                  {projects[0].description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-base font-bold text-[var(--corporate-green)] flex items-center space-x-2">
                  <span>View Project Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-sm font-semibold text-[#4A564F]">Case Study</span>
              </div>
            </div>
          </div>

          {/* Right Stacked Projects */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {projects.slice(1, 3).map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="bg-[var(--bg-card)] border border-stone-200 rounded-sm overflow-hidden flex flex-col group cursor-pointer hover:border-[var(--corporate-green)] transition-all duration-200 corporate-shadow flex-1"
              >
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--corporate-green)] text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm hover:bg-[#1E6B3E]">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-charcoal)] mb-2 group-hover:text-[var(--corporate-green)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-charcoal)] opacity-90 line-clamp-2 mb-4 font-medium">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-base font-bold text-[var(--corporate-green)] flex items-center space-x-1.5">
                    <span>View Project Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4th Full Width Highlight */}
        <div
          onClick={() => setActiveProject(projects[3])}
          className="bg-[var(--bg-card)] border border-stone-200 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer hover:border-[var(--corporate-green)] transition-all duration-200 corporate-shadow"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative w-full sm:w-48 h-32 rounded-sm overflow-hidden shrink-0 bg-stone-100">
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--corporate-green)]">
                {projects[3].category}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-charcoal)] group-hover:text-[var(--corporate-green)] transition-colors mt-1">
                {projects[3].title}
              </h3>
              <p className="text-base text-[var(--text-charcoal)] opacity-90 mt-1 max-w-2xl font-medium">
                {projects[3].description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center space-x-2 text-base font-bold text-[var(--corporate-green)] bg-[#EBF4EE] px-5 py-3 rounded-sm">
            <span>View Details →</span>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-[var(--bg-card)] text-[var(--text-charcoal)] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm p-6 sm:p-8 shadow-2xl relative border border-stone-200">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800"
              aria-label="Close dialog"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--corporate-green)] mb-1">
              {activeProject.category} • {activeProject.location}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-charcoal)] mb-4 pr-8">
              {activeProject.title}
            </h3>

            <div className="relative h-64 w-full rounded-sm overflow-hidden mb-6 bg-stone-100">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-base text-[#2D3730]">
              <div>
                <h4 className="font-extrabold text-[var(--corporate-green)] text-sm uppercase tracking-wider mb-1">
                  The Challenge
                </h4>
                <p className="text-[var(--text-charcoal)] opacity-90 leading-relaxed font-medium">{activeProject.challenge}</p>
              </div>

              <div>
                <h4 className="font-extrabold text-[var(--corporate-green)] text-sm uppercase tracking-wider mb-1">
                  Our Professional Solution
                </h4>
                <p className="text-[var(--text-charcoal)] opacity-90 leading-relaxed font-medium">{activeProject.solution}</p>
              </div>

              <div className="bg-[#F4F8F5] border border-[#DDE2DD] p-4 rounded-sm">
                <h4 className="font-extrabold text-[var(--corporate-green)] text-sm uppercase tracking-wider mb-1">
                  Documented Outcome
                </h4>
                <p className="text-[var(--corporate-green)] font-bold leading-relaxed">{activeProject.result}</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="bg-[var(--corporate-green)] text-white text-sm font-bold uppercase px-6 py-3 rounded-sm hover:bg-[#1E6B3E]"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
