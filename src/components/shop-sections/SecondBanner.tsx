import React from 'react'

import sBanner1 from "../../../public/images/sBanner1.png"
import sBanner2 from "../../../public/images/sBanner2.png"
import sBanner3 from "../../../public/images/sBanner3.png"
import sBanner4 from "../../../public/images/sBanner4.png"
import Image from 'next/image'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


const bannerIcons = [
    {
alt:"banner icon",
src:sBanner1,
title:"High Quality",
subtitle:"crafted from top materials"
    },
    {
alt:"banner icon",
src:sBanner2,
title:"Warranty Protection",
subtitle:"Over 2 years"
    },
    {
alt:"banner icon",
src:sBanner3,
title:"Free Shipping",
subtitle:"Order over 150 $"
    },
    {
alt:"banner icon",
src:sBanner4,
title:"24 / 7 Support",
subtitle:"Dedicated support"
    },

]



const SecondBanner = () => {
    return (
        <div className={`mt-[56px] py-10 bg-[#FAF3EA] flex justify-center items-center ${poppins.className}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 px-10'>
                {bannerIcons.map((bannerIcon, index) => (
                    <div key={index} className='flex  items-center md:justify-start md:items-center gap-10 space-y-5'>
                        <Image src={bannerIcon.src} alt={bannerIcon.alt} height={60} width={60} className='h-16 w-16'/>
                        <div className='flex flex-col justify-start md:justify-start md:items-start lg:justify-start lg:items-start  gap-2'>
                            <h3 className='text-2xl font-semibold'>{bannerIcon.title}</h3>
                            <p className='text-md font-[400] text-[#898989]'>{bannerIcon.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SecondBanner;