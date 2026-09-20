"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, X } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  fullContent: string[];
}

export default function Resources() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "tree-attention",
      title: "How to Know When a Tree Needs Professional Attention",
      category: "Tree Care Guide",
      date: "October 14, 2026",
      readTime: "4 min read",
      image: "/images/services/tree-care.jpg",
      excerpt:
        "Dead branches, peeling bark, root heave, or sudden leaning can all signal hidden structural hazards. Learn how to spot early warning signs before severe weather strikes.",
      fullContent: [
        "Trees provide immense value, shade, and beauty to any property, but internal decay or fungal decay often develops invisibly before physical failure occurs.",
        "Key Signs to Watch For:",
        "1. Sudden or Progressive Lean: If a mature tree suddenly tilts following heavy rain or high winds, or if the soil on the opposite side begins to heave upward, immediate stabilization is needed.",
        "2. Deadwood and Canopy Dieback: Large dead limbs high in the canopy present serious liability during moderate gusts. Proactive safety pruning removes deadwood before it fractures.",
        "3. Cavities, Cracks & Trunk Fungi: Mushroom conks growing from the root flare or deep longitudinal cracks in the main trunk indicate internal wood rot.",
        "4. Encroaching Utility & Roof Lines: Limbs rubbing against asphalt shingles or service drops can cause costly property damage. Having a certified arborist inspect your property annually is the safest and most cost-effective prevention.",
      ],
    },
    {
      id: "seasonal-landscape",
      title: "Simple Ways to Keep Your Landscape Healthy Through the Seasons",
      category: "Landscape Management",
      date: "September 28, 2026",
      readTime: "5 min read",
      image: "/images/services/landscape-maintenance.jpg",
      excerpt:
        "Proper mowing heights, seasonal root feeding, deep watering techniques, and organic mulch layers make all the difference in property resilience throughout summer heat and winter cold.",
      fullContent: [
        "A healthy landscape doesn't require constant chemical treatments—it relies on proper cultural practices that foster deep root systems and natural disease resistance.",
        "Seasonal Best Practices:",
        "• Maintain Proper Mowing Height: Avoid cutting grass too short. Keeping turf at 3 to 3.5 inches shades the soil, prevents weed seeds from germinating, and retains vital soil moisture.",
        "• Organic Mulching: Maintain a 2 to 3-inch layer of shredded hardwood or bark mulch around trees and plant beds. Always keep mulch pulled 2 inches back from the trunk base to prevent moisture rot.",
        "• Deep, Infrequent Watering: Shallow daily sprinkling produces weak, shallow roots. Water deeply 1 to 2 times per week early in the morning to encourage vigorous root penetration.",
        "• Fall Aeration and Overseeding: Cool-season grasses benefit tremendously from autumn core aeration, breaking up heavy compacted soil and introducing drought-hardy seed varieties.",
      ],
    },
    {
      id: "post-storm",
      title: "What to Do After a Major Storm",
      category: "Emergency & Safety",
      date: "August 20, 2026",
      readTime: "3 min read",
      image: "/images/services/daylight-tree-canopy.jpg",
      excerpt:
        "Step-by-step safety priorities after high winds or severe weather. Understand what hazards require immediate emergency dispatch and how to safely inspect your property.",
      fullContent: [
        "Severe thunderstorms, high wind events, and ice storms can leave outdoor properties littered with hazardous debris and structurally compromised trees.",
        "Immediate Action Checklist:",
        "1. Safety First — Stay Clear of Downed Power Lines: Always assume any wire on the ground or touching a tree branch is energized. Stay at least 35 feet away and immediately notify your local utility.",
        "2. Assess Hanging Branches ('Hangers'): Large broken limbs suspended in tree canopies can drop unpredictably hours or days after the storm passes. Do not walk or park beneath damaged trees.",
        "3. Avoid DIY Chainsaw Work on Tensioned Wood: Storm-damaged trees are under tremendous mechanical tension and can spring back violently when cut without commercial rigging.",
        "4. Call for Professional Emergency Clearing: Certified crews equipped with grapple cranes, bucket trucks, and chippers will systematically clear blocked driveways and stabilize damaged trees safely.",
      ],
    },
  ];

  return (
    <section id="resources" className="bg-[var(--bg-card)] text-[var(--text-charcoal)] border-b border-stone-200">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="text-sm font-extrabold uppercase tracking-widest text-[var(--corporate-green)] mb-3">
            Property Advice &amp; Insights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-charcoal)] tracking-tight leading-tight mb-5">
            Helpful advice for your property.
          </h2>
          <p className="text-lg sm:text-xl text-[#38443D] leading-relaxed font-medium">
            Straightforward guidance from our certified specialists to help you care for your trees,
            maintain healthy turf, and protect your outdoor investment all year round.
          </p>
        </div>

        {/* 3 Editorial Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-[var(--bg-canvas)] border border-stone-200 rounded-sm overflow-hidden flex flex-col group hover:border-[var(--corporate-green)] transition-all duration-200 corporate-shadow"
            >
              <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[var(--corporate-green)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow hover:bg-[#1E6B3E]">
                  {article.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-sm text-[#4A564F] font-bold mb-3">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-[#216F48]" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-[#216F48]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[var(--text-charcoal)] group-hover:text-[var(--corporate-green)] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-base text-[#38443D] leading-relaxed mb-6 font-medium">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="text-base font-bold text-[var(--corporate-green)] group-hover:text-[#103B26] flex items-center space-x-2 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-[var(--bg-card)] text-[var(--text-charcoal)] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm p-6 sm:p-8 shadow-2xl relative border border-stone-200">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800"
              aria-label="Close article"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--corporate-green)] mb-1">
              {selectedArticle.category} • {selectedArticle.date}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-charcoal)] mb-4 pr-8">
              {selectedArticle.title}
            </h3>

            <div className="relative h-64 w-full rounded-sm overflow-hidden mb-6 bg-stone-100">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-base text-[#2D3730] leading-relaxed font-medium">
              {selectedArticle.fullContent.map((paragraph, i) => (
                <p key={i} className={paragraph.startsWith("Key") || paragraph.startsWith("Immediate") || paragraph.startsWith("Seasonal") ? "font-bold text-[var(--corporate-green)] pt-2" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#4A564F]">
                Published by ABC Landscape Certified Specialists
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="bg-[var(--corporate-green)] text-white text-sm font-bold uppercase px-6 py-3 rounded-sm hover:bg-[#1E6B3E]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
