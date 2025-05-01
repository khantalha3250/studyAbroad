// components/HeroSection.tsx
"use client";
import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-transparent">
      {/* Animated Background Elements */}
      <BackgroundAnimation />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Headline */}
        <h1 className="animate-fade-in-up text-4xl md:text-6xl font-bold text-[#f8f8fa] mb-6 max-w-4xl leading-tight drop-shadow-xl">
          Guaranteed Success in Your Settle Abroad Goal
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up text-lg md:text-xl text-[#9b9b9b] mb-8 max-w-2xl opacity-0 animation-delay-300">
          Hyper-Personalized Programs for 20+ Study and Settle Abroad Tracks
        </p>

        {/* CTA Button */}
        <button
          className="animate-fade-in-up bg-[#1378d1] text-[#f8f8fa] px-8 py-4 rounded-full text-lg font-medium hover:brightness-110 transition-all duration-300 opacity-0 animation-delay-500 shadow-lg hover:shadow-xl relative overflow-hidden group"
          aria-label="Get started with your study abroad journey"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,#fff_0%,transparent_70%)]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;