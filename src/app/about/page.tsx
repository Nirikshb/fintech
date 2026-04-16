"use client";

import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] pt-48 px-6 text-center text-white">
      <h1 className="text-6xl font-bold mb-8">About Us</h1>
      <p className="text-xl text-white/60 max-w-2xl mx-auto">
        This is the about us page. 
      </p>
      <div className="h-[200vh]" /> {/* Spacer to allow scrolling */}
    </main>
  );
}
