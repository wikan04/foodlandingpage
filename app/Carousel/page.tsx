"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CupcakeIcon from "@/public/carouselicon/cupcakeicon.png";
import PizzaIcon from "@/public/carouselicon/pizzaicon.png";
import KebabIcon from "@/public/carouselicon/kebabicon.png";
import SalmonIcon from "@/public/carouselicon/salmonicon.png";
import SalmonIcon2 from "@/public/carouselicon/salmonicon.png";
import DoughnutIcon from "@/public/carouselicon/doughnuticon.png";
import DoughnutIcon2 from "@/public/carouselicon/doughnuticon.png";
import Image from "next/image";

const categories = [
  {
    name: "Cupcake",
    items: 22,
    image: CupcakeIcon,
    bg: "bg-riceFlower",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Pizza",
    items: 25,
    image: PizzaIcon,
    bg: "bg-blackSqueeze",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Kebab",
    items: 12,
    image: KebabIcon,
    bg: "bg-linkWater",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Salmon",
    items: 22,
    image: SalmonIcon,
    bg: "bg-amour",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Doughnut",
    items: 11,
    image: DoughnutIcon,
    bg: "bg-coconutCream",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Salmon",
    items: 22,
    image: SalmonIcon2,
    bg: "bg-coconutCream",
    bgImage: "/background-hero-bold.jpg",
  },
  {
    name: "Doughnut",
    items: 11,
    image: DoughnutIcon2,
    bg: "bg-linkWater",
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
          slidesPerView={1.5}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          modules={[Navigation]}
          breakpoints={{
            768: { slidesPerView: 3.5, spaceBetween: 10 },
            1024: { slidesPerView: 4.5, spaceBetween: 10 },
            1440: { slidesPerView: 5.5, spaceBetween: 10 },
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
                <div className="relative z-10 w-16 h-16">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
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

      {/* Navigation Buttons (Hanya muncul di layar md ke atas) */}
      <div className="hidden lg:flex justify-end items-center gap-4 mt-6">
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
