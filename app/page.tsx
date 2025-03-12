import Image from "next/image";
import HeroPage from "./Hero/page";
import ReceiptPage from "./Reciept/page";
import CategoryCarousel from "./Carousel/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <CategoryCarousel />
      <ReceiptPage />
    </>
  );
}
