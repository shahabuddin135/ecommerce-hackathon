import React from "react";
import Image, { StaticImageData } from "next/image"; 
import compareIcon from "../../../public/icons/compare.png";
import shareIcon from "../../../public/icons/share.png";
import heartIcon from "../../../public/icons/heart.png";

import gImage1 from "../../../public/images/g-image1.png";
import gImage3 from "../../../public/images/g-image3.png";
import gImage4 from "../../../public/images/g-image4.png";
import gImage5 from "../../../public/images/g-image5.png";
import gImage6 from "../../../public/images/g-image6.png";
import gImage7 from "../../../public/images/g-image7.png";
import gImage8 from "../../../public/images/g-image8.png";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const hoverIcons = [
  {
    alt: "Compare",
    src: compareIcon,
  },
  {
    alt: "Share",
    src: shareIcon,
  },
  {
    alt: "Heart",
    src: heartIcon,
  },
];

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  image: string | StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: gImage1,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: null,
    discount: null,
    image: gImage8,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: gImage3,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    originalPrice: null,
    discount: null,
    image: gImage4,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    originalPrice: null,
    discount: null,
    image: gImage5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    originalPrice: null,
    discount: null,
    image: gImage6,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: gImage7,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    originalPrice: null,
    discount: null,
    image: gImage8,
  },
  {
    id: 9,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: gImage1,
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: null,
    discount: null,
    image: gImage8,
  },
  {
    id: 11,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: gImage3,
  },
  {
    id: 12,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    originalPrice: null,
    discount: null,
    image: gImage4,
  },
  {
    id: 13,
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    originalPrice: null,
    discount: null,
    image: gImage5,
  },
  {
    id: 14,
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    originalPrice: null,
    discount: null,
    image: gImage6,
  },
  {
    id: 15,
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: gImage7,
  },
  {
    id: 16,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    originalPrice: null,
    discount: null,
    image: gImage8,
  },

];

const ShopGrid: React.FC = () => {
  return (

<section className={`${poppins.className} flex justify-center items-center my-[46px] flex-col h-auto`}>

    <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-fit  ${poppins.className}`}>

      {products.map((product) => (
        <div key={product.id} className="group relative bg-white border shadow-sm h-auto w-full max-w-[285px] mx-auto overflow-hidden">
          {/* Product Image */}
          <div className="relative w-full">
            <Image
              src={product.image}
              alt={product.name}
              height={301}
              width={285}
              className="object-cover transition-transform duration-300"
            />
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold rounded-full h-12 w-12 flex justify-center items-center">
                -{product.discount}%
              </div>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white text-yellow-600 px-10 font-semibold hover:opacity-75 active:opacity-50 transition-all cursor-pointer">
              Add to cart
            </button>
            <ul className="flex gap-5 mt-4">
              {hoverIcons.map((icon, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-center justify-center text-white hover:opacity-65 active:opacity-40 transition-all cursor-pointer"
                >
                  <Image src={icon.src} alt={icon.alt} width={12} height={13} />
                  <p className="text-[14px] font-semibold">{icon.alt}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Details */}
          <div className="p-4 bg-[#F4F5F7]">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="mt-2">
              <span className="text-md font-semibold">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-400 ml-2">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
</section>
  );
};

export default ShopGrid;
