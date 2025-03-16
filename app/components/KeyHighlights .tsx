import React from "react";

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
    <section className="relative py-16 bg-[#0d1317] overflow-hidden">
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
