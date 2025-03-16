"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Roboto } from "next/font/google";
import BackgroundAnimation from './BackgroundAnimation';

// Configure Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false); // Hide header on scroll down
      } else {
        setIsHeaderVisible(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-lightGray shadow-lg py-4 px-4 lg:px-10 fixed top-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${roboto.className}`}
    >
      <BackgroundAnimation />
      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto flex-wrap">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="relative w-30 sm:w-30">
            <Image
              src="/logo.svg"
              alt="logo.svg"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white flex items-center">
            Ninja Abroad
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white">
          <Link href="/" passHref>
            <span className="hover:text-lightBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="hover:text-lightBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              About us
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span className="hover:text-lightBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              MasterClasses
            </span>
          </Link>
          <Link href="/programs" passHref>
            <span className="hover:text-lightBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Programs
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-lightBlue text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Contact us
            </span>
          </Link>
        </nav>

        {/* Call-to-Action Button (Desktop) */}


        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-lightGray p-4 shadow-md transition-transform duration-300 ease-in-out">
          <Link href="/" passHref>
            <span
              onClick={toggleMenu}
              className="text-white hover:text-lightBlue text-base font-bold transition duration-300"
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              onClick={toggleMenu}
              className="text-white hover:text-lightBlue text-base font-bold transition duration-300"
            >
              About us
            </span>
          </Link>
          <Link href="/classes" passHref>
            <span
              onClick={toggleMenu}
              className="text-white hover:text-lightBlue text-base font-bold transition duration-300"
            >
              MasterClasses
            </span>
          </Link>
          <Link href="/programs" passHref>
            <span
              onClick={toggleMenu}
              className="text-white hover:text-lightBlue text-base font-bold transition duration-300"
            >
              Programs
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              onClick={toggleMenu}
              className="text-white hover:text-lightBlue text-base font-bold transition duration-300"
            >
              Contact us
            </span>
          </Link>
        </div>
      )}
    </header>
  );
} 