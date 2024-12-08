import Image from "next/image";
import hero from "../../../public/images/hero.png"
import Button from "@/components/Button";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  return (
    <section className={`relative w-full ${poppins.className} pt-24`}>
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen w-full">
        <Image 
          src={hero} 
          alt="hero image" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF3E3] rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40.2rem] lg:absolute lg:top-[10rem] lg:right-[3.5rem]">
          <p className="font-[500] text-sm sm:text-base mb-2 sm:mb-4">New Arrival</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B88E2F] font-bold mb-4 sm:mb-6">
            Discover Our New Collection
          </h1>
          <p className="font-[500] text-sm sm:text-base mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Button 
            name="BUY NOW" 
            className="bg-[#B88E2F] font-bold text-white w-full sm:w-auto h-[50px] sm:h-[60px] md:h-[74px] px-6 sm:px-8 md:px-10 lg:h-[74px] lg:w-[222px] hover:opacity-80 active:opacity-55 transition-all cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

