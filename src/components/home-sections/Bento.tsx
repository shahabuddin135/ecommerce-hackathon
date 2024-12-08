import React from "react";
import Image from "next/image";
import bento from "../../../public/images/bentoImage.png";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BentoLayout = () => {
    return (
        <section className={`flex flex-col ${poppins.className} `}>

        <div className="flex flex-col items-center px-4 py-8 md:px-8 gap-10">
           
           <p className="text-[#616161]">
           Share your setup with 
           </p>

            <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold text-[#3A3A3A]">
                #FuniroFurniture
            </h2>

        </div>

        <div>
            <Image src={bento} alt={"bento grid"}  className="h-[49rem] object-contain"/>
        </div>

        </section>
    );
};

export default BentoLayout;
