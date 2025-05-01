import React, { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState<
    { left: string; top: string; animationDelay: string }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3000}ms`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#f1f5f9] via-white to-[#e2e8f0]">
      {/* Subtle Gradient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 opacity-10 blur-3xl" />

      {/* Floating Particles */}
      {particles.map((particle, idx) => (
        <div
          key={idx}
          className="absolute h-1 w-1 rounded-full bg-blue-400 opacity-30 animate-slow-float"
          style={particle}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
