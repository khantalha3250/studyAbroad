// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#0d1317]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute inset-0 h-full w-full animate-grid-pan [background-size:60px_60px] [background-image:linear-gradient(to_right,#1e306f14_1px,transparent_0),linear-gradient(to_bottom,#1e306f14_1px,transparent_0)]" />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute -top-32 -left-32 h-64 w-64 animate-float rounded-full bg-gradient-to-r from-[#1378d1] to-[#1e306f] opacity-20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 animate-float animation-delay-2000 rounded-full bg-gradient-to-r from-[#1378d1] to-[#1e306f] opacity-20 blur-3xl" />
        
        {/* Animated Grid Highlights */}
        <div className="absolute left-1/4 top-1/3 h-32 w-32 animate-pulse rounded-lg border-2 border-[#1378d1]/30 bg-[#1378d1]/10" />
        <div className="absolute right-1/4 bottom-1/4 h-24 w-24 animate-pulse animation-delay-500 rounded-lg border-2 border-[#1378d1]/30 bg-[#1378d1]/10" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-float bg-[#1378d1] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2000}ms`
            }}
          />
        ))}
      </div>

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