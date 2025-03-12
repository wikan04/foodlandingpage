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
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center md:mb-0">
          <img src="/elemesicon.jpg" alt="" />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-auto">
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
        <div className="flex justify-center">
          <button className="mr-1 inline-flex px-6 py-2 text-md text-gray-700 font-medium focus:outline-none">
            Masuk
          </button>
          <button className="inline-flex rounded-full border-0 bg-sushi px-6 py-2 text-md text-white font-medium focus:outline-none">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </header>
  );
}
