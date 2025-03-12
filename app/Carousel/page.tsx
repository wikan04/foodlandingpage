"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const categories = [
  {
    name: "Cupcake",
    items: 22,
    image: "🍰",
    bg: "bg-green-100",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Pizza",
    items: 25,
    image: "🍕",
    bg: "bg-gray-100",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Kebab",
    items: 12,
    image: "🌯",
    bg: "bg-blue-100",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Salmon",
    items: 22,
    image: "🍣",
    bg: "bg-red-100",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Doughnut",
    items: 11,
    image: "🍩",
    bg: "bg-yellow-100",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Burger",
    items: 30,
    image: "🍔",
    bg: "bg-purple-100",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Taco",
    items: 18,
    image: "🌮",
    bg: "bg-orange-100",
    bgImage: "/background-hero-bold.jpg",
  },
];

export default function CategoryCarousel() {
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.navigation?.update();
      }, 100);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800">Browse Our Trending</h1>
      <h2 className="text-3xl font-bold text-sushi">Recipes</h2>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 10 },
            768: { slidesPerView: 4.5, spaceBetween: 10 },
            1024: { slidesPerView: 5.5, spaceBetween: 10 },
          }}
          className="mt-4"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div
                className={`group relative flex flex-col items-center justify-center w-auto h-[175px] rounded-xl shadow-md overflow-hidden transition-transform duration-300 ${category.bg} hover:scale-105`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                />

                {/* Content */}
                <span className="text-4xl mb-2 relative z-10">
                  {category.image}
                </span>
                <p className="font-bold text-md relative z-10">
                  {category.name}
                </p>
                <p className="text-gray-500 text-sm relative z-10">
                  {category.items} Items
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons di Bawah */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <button className="prev-button flex items-center gap-2 bg-sushi text-white px-4 py-2 rounded-full shadow-md transition hover:bg-sushiLight">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-sushi">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
          PREV
        </button>
        <button className="next-button flex items-center gap-2 bg-sushi text-white px-4 py-2 rounded-full shadow-md transition hover:bg-sushiLight">
          NEXT
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-sushi">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </button>
      </div>
    </div>
  );
}
