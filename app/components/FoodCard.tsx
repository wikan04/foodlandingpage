import React from "react";

interface FoodCardProps {
  image: string;
  alt: string;
  title: string;
  category: string;
  rating: number;
  bg: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  alt,
  title,
  category,
  rating,
  bg,
}) => {
  return (
    <div
      className={`relative rounded-lg p-4 overflow-hidden group`}
      style={{
        backgroundImage: "url('/background-hero-bold.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`absolute inset-0 ${bg} opacity-100 group-hover:opacity-90 transition-opacity duration-300`}
      />
      <div className="relative z-10">
        <img
          alt={alt}
          className="h-32 w-1/2 rounded-lg object-cover"
          height="400"
          src={image}
          width="600"
        />
        <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sushi">{category}</p>
        <div className="mt-2 flex">
          {Array.from({ length: 5 }, (_, index) => (
            <p key={index}>{index < rating ? "⭐" : "☆"}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
