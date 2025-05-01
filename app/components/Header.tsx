"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Roboto } from "next/font/google";
import BackgroundAnimation from './BackgroundAnimation';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= 50 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${roboto.className}`}
    >
      <BackgroundAnimation />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative w-20">
                <Image
                  src="/logo.svg"
                  alt="Ninja Abroad"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 drop-shadow-sm">
                Ninja Abroad
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/classes" className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                MasterClasses
              </Link>
              <Link href="/programs" className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Programs
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm px-4 py-6 space-y-4 shadow-lg">
            <Link href="/" className="block text-slate-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="block text-slate-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/classes" className="block text-slate-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              MasterClasses
            </Link>
            <Link href="/programs" className="block text-slate-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Programs
            </Link>
            <Link href="/contact" className="block text-slate-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}