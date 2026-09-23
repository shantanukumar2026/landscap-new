"use client";

import React from 'react';
import { Leaf } from 'lucide-react';

export default function DecorativeLeaves() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left */}
      <Leaf className="absolute top-12 left-8 sm:left-16 w-8 h-8 text-[var(--corporate-green)] opacity-5 animate-float-slow" />
      {/* Top Right */}
      <Leaf className="absolute top-32 right-12 sm:right-24 w-12 h-12 text-[var(--corporate-green)] opacity-[0.03] animate-float-slower" style={{ animationDelay: '1s' }} />
      
      {/* Mid Right */}
      <Leaf className="absolute top-1/3 right-8 w-6 h-6 text-[var(--corporate-green)] opacity-[0.04] animate-float-slow" style={{ animationDelay: '2.5s' }} />
      {/* Mid Left */}
      <Leaf className="absolute top-1/2 left-20 w-10 h-10 text-[var(--corporate-green)] opacity-5 animate-float-slower" style={{ animationDelay: '0.5s' }} />
      
      {/* Bottom Left */}
      <Leaf className="absolute bottom-40 left-10 w-14 h-14 text-[var(--corporate-green)] opacity-[0.03] animate-float-slow" style={{ animationDelay: '3s' }} />
      {/* Bottom Right */}
      <Leaf className="absolute bottom-20 right-1/4 w-8 h-8 text-[var(--corporate-green)] opacity-5 animate-float-slower" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}
