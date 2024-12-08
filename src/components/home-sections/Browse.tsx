import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import image1 from '../../../public/images/image1.png';
import image2 from '../../../public/images/image2.png';
import image3 from '../../../public/images/image3.png';

const imagesLinks = [
  {
    name: 'wooden furniture',
    link: image1,
    title: 'Dining',
  },
  {
    name: 'wooden furniture',
    link: image2,
    title: 'Living',
  },
  {
    name: 'wooden furniture',
    link: image3,
    title: 'Bedroom',
  },
];

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Browse = () => {
  return (
    <section className=" max-w-screen mt-[57px] px-4">
      <div className={`${poppins.className} text-center`}>
        {/* Title */}
        <h1 className="font-bold text-3xl">
          Browse The Range
        </h1>

        {/* Subtitle */}
        <p className="text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Images List */}
        <ul className="flex flex-col sm:flex-row sm:gap-5 justify-center items-center mt-[64px]">
          {imagesLinks.map((pic, index) => (
            <li
              key={index}
              className="rounded-lg mb-5 overflow-hidden hover:shadow-lg hover:opacity-75 transition-all active:opacity-70 cursor-pointer max-w-[381px] sm:max-w-none "
            >
              {/* Image */}
              <Image
                src={pic.link}
                alt={pic.name}
                height={480}
                width={381}
                className="m-auto"
              />

              {/* Title */}
              <p className="font-semibold text-2xl mb-5 mt-[30px]">
                {pic.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Browse;
