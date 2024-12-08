import Carousel from "@/components/home-sections/carousel";
import BentoLayout from "@/components/home-sections/Bento";
import Browse from "@/components/home-sections/Browse";
import Hero from "@/components/home-sections/Hero";
import ProductCard from "@/components/home-sections/Product";





export default function Home() {
  return (
    <main>
      <Hero />
      <Browse />
      <ProductCard />
      <Carousel />
      <BentoLayout/>
    
    </main>
  );
}
