import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0">
      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 h-full w-full animate-grid-pan [background-size:60px_60px] [background-image:linear-gradient(to_right,#1e306f14_1px,transparent_0),linear-gradient(to_bottom,#1e306f14_1px,transparent_0)]" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute -top-16 sm:-top-32 -left-16 sm:-left-32 h-32 sm:h-64 w-32 sm:w-64 animate-float rounded-full bg-gradient-to-r from-[#1378d1] to-[#1e306f] opacity-20 blur-3xl" />
      <div className="absolute -bottom-16 sm:-bottom-32 -right-16 sm:-right-32 h-32 sm:h-64 w-32 sm:w-64 animate-float animation-delay-2000 rounded-full bg-gradient-to-r from-[#1378d1] to-[#1e306f] opacity-20 blur-3xl" />

      {/* Animated Grid Highlights */}
      <div className="absolute left-1/4 top-1/3 h-16 sm:h-32 w-16 sm:w-32 animate-pulse rounded-lg border-2 border-[#1378d1]/30 bg-[#1378d1]/10" />
      <div className="absolute right-1/4 bottom-1/4 h-12 sm:h-24 w-12 sm:w-24 animate-pulse animation-delay-500 rounded-lg border-2 border-[#1378d1]/30 bg-[#1378d1]/10" />

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
  );
};

export default BackgroundAnimation; 