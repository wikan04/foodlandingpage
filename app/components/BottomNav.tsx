"use client";

import { useState, useEffect } from "react";
import {
  HomeIcon,
  TagIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BottomNav() {
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout: NodeJS.Timeout | null = null;
  let delayTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (delayTimeout) clearTimeout(delayTimeout);

      scrollTimeout = setTimeout(() => {
        delayTimeout = setTimeout(() => {
          setIsVisible(true);
        }, 200);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (delayTimeout) clearTimeout(delayTimeout);
    };
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 z-10 w-full bg-white shadow-md border-t flex justify-around py-3 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href="/">
        <button
          className={`flex flex-col items-center text-gray-500 ${
            active === "home" ? "text-black" : ""
          }`}
          onClick={() => setActive("home")}
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>
      </Link>

      <Link href="#">
        <button
          className={`flex flex-col items-center text-gray-500 ${
            active === "promotions" ? "text-black" : ""
          }`}
          onClick={() => setActive("promotions")}
        >
          <TagIcon className="w-6 h-6" />
          <span className="text-xs">Promotions</span>
        </button>
      </Link>

      <Link href="#">
        <button
          className={`flex flex-col items-center text-gray-500 ${
            active === "others" ? "text-black" : ""
          }`}
          onClick={() => setActive("others")}
        >
          <EllipsisHorizontalIcon className="w-6 h-6" />
          <span className="text-xs">Others</span>
        </button>
      </Link>
    </nav>
  );
}
