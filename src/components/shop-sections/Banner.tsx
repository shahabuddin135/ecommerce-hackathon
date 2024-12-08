import React from 'react'
import shopBanner from '../../../public/images/shopBanner.png'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



const Banner = () => {
    return (
        <section className={`${poppins.className}`}>

            <div className='relative flex justify-center items-center'>
                <Image src={shopBanner} alt='shop banner' className='h-[20rem] w-screen object-cover mt-24' height={316} width={1000} />

                <div className='absolute space-y-5'>
                    <h1 className='text-center font-semibold text-5xl'>
                        Shop
                    </h1>
                    <div className='flex gap-5 items-center font-semibold justify-center'>
                        <p>Home</p>
                        <MdOutlineKeyboardArrowRight className='text-black size-6 font-semibold opacity-75' />
                        <p className='text-gray-700'>Shop</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;