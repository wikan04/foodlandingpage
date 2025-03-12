import React from "react";
import FoodCard from "../components/FoodCard";

interface FoodItem {
  image: string;
  alt: string;
  title: string;
  category: string;
  rating: number;
  bg: string;
}

// Data makanan
const foodItems: FoodItem[] = [
  {
    image: "/pizza.jpg",
    alt: "Pizza Paperoni",
    title: "Pizza Paperoni",
    category: "Pizza",
    rating: 4,
    bg: "bg-blackSqueeze",
  },
  {
    image: "/pizza2.jpg",
    alt: "Pizza Meat",
    title: "Pizza Meat",
    category: "Pizza",
    rating: 3,
    bg: "bg-blackSqueeze",
  },
  {
    image: "/Doner_Kebab.jpg",
    alt: "Doner Kebab",
    title: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    bg: "bg-linkWater",
  },
  {
    image: "/Salmon_Roll.jpg",
    alt: "Salmon Roll",
    title: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    bg: "bg-amour",
  },
  {
    image: "/Cupcake_Choco.jpg",
    alt: "Cupcake Choco",
    title: "Cupcake Choco",
    category: "Cupcake",
    rating: 4,
    bg: "bg-riceFlower",
  },
  {
    image: "/Doughnut_Milk.jpg",
    alt: "Doughnut Milk",
    title: "Doughnut Milk",
    category: "Doughnut",
    rating: 4,
    bg: "bg-coconutCream",
  },
  {
    image: "/Doughnut_Unicorn.jpg",
    alt: "Doughnut Unicorn",
    title: "Doughnut Unicorn",
    category: "Doughnut",
    rating: 4,
    bg: "bg-coconutCream",
  },
  {
    image: "/Kathi_Kebab.jpg",
    alt: "Kathi Kebab",
    title: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    bg: "bg-linkWater",
  },
];

const ReceiptPage: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold text-gray-800">
          Browser Our Trending
        </h1>
        <h2 className="text-3xl font-bold text-sushi">Receipt</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {foodItems.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </div>
      <section className="flex mx-auto justify-center items-center">
        <button className="rounded-full border-0 bg-sushi px-6 py-2 text-lg text-white font-bold focus:outline-none">
          ALL Receipt
        </button>
      </section>
    </section>
  );
};

export default ReceiptPage;
