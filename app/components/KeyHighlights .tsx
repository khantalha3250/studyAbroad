"use client";
import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

const KeyHighlights = () => {
  const highlights = [
    { value: "150,000+", label: "IELTS Successes" },
    { value: "10,739+", label: "Permanent Residency" },
    { value: "7,000+", label: "Study Abroad Candidates" },
    { value: "500+", label: "Work Permit" },
    { value: "25", label: "Countries Landed in" },
    { value: "98%", label: "Visa Success Rate" },
  ];

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-transparent">
      {/* Animated Background Elements */}
      <BackgroundAnimation />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="animate-fade-in-up text-3xl md:text-5xl font-bold text-[#f8f8fa] mb-6 leading-tight drop-shadow-xl">
          We Have Helped Thousands Fly Abroad
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in-up bg-[#1378d1]/10 p-6 rounded-xl border border-[#1378d1]/30 shadow-md text-center transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-4xl font-bold text-[#f8f8fa]">{item.value}</h3>
              <p className="text-lg text-[#9b9b9b] mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
