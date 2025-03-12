"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <a className="flex items-center">
          <img src="/elemesicon.jpg" alt="Elemes Icon" className="h-8" />
        </a>

        {/* Menu untuk desktop */}
        <nav className="hidden lg:flex flex-wrap items-center text-base">
          <a className="mr-5 text-boulder font-medium hover:text-gray-900">
            Home
          </a>
          <a className="mr-5 text-boulder font-medium hover:text-gray-900">
            About
          </a>
          <a className="relative mr-5 hover:text-gray-900">
            <div className="flex flex-col items-center">
              <span className="absolute top-[-17px] left-[75px] -translate-x-1/2 rounded-xl bg-red-500 px-2 py-1 text-xs font-medium text-white">
                HOT
              </span>
              <p className="text-boulder font-medium hover:text-gray-900">
                Promotions
              </p>
            </div>
          </a>
          <a className="mr-5 text-boulder font-medium hover:text-gray-900">
            Blogs
          </a>
          <a className="mr-5 text-boulder font-medium hover:text-gray-900">
            Contact Us
          </a>
        </nav>

        {/* Tombol untuk desktop */}
        <div className="hidden lg:flex items-center">
          <button className="mr-4 px-6 py-2 text-md text-gray-700 font-medium focus:outline-none">
            Masuk
          </button>
          <button className="rounded-full border-0 bg-sushi px-6 py-2 text-md text-white font-medium focus:outline-none">
            Daftar Sekarang
          </button>
        </div>

        {/* Tombol "Daftar Sekarang" untuk mobile */}
        <button className="lg:hidden rounded-full border-0 bg-sushi px-6 py-2 text-md text-white font-medium focus:outline-none">
          Daftar Sekarang
        </button>
      </div>
    </header>
  );
}
