import React from 'react';
import Image from 'next/image';
import filterIcon from "../../../public/icons/filter.svg";
import dotsIcon from "../../../public/icons/4dots.svg";
import listIcon from "../../../public/icons/bi_view-list.svg";
import pipeIcon from "../../../public/icons/Line5.png";

const filterBarIcons = [
    {
        alt: "dotsIcon",
        src: dotsIcon,
    },
    {
        alt: "listIcon",
        src: listIcon,
    },
];

const hoverStyle = `hover:opacity-75 active:opacity-45 cursor-pointer`;

const FilterBar = () => {
    return (
        <div className="bg-[#F9F1E7] shadow-lg h-auto flex flex-col md:flex-row items-center justify-around px-4 py-3 md:h-[6.3rem]">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4 md:mb-0">
                <div className="flex gap-2 md:gap-4 items-center">
                    <Image
                        src={filterIcon}
                        alt="Filter Icon"
                        height={16}
                        width={19}
                        className={hoverStyle}
                    />
                    <p className="text-sm md:text-base">Filter</p>
                </div>
                <ul className="flex gap-3 md:gap-5 items-center">
                    {filterBarIcons.map((icon, index) => (
                        <li key={index}>
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                height={16}
                                width={19}
                                className={hoverStyle}
                            />
                        </li>
                    ))}
                </ul>
                <Image
                    src={pipeIcon}
                    alt="Pipe Icon"
                    height={16}
                    width={19}
                    className={`${hoverStyle} h-8 w-2`}
                />
                <p className="text-sm md:text-base">
                    Showing 1&mdash;16 of 32 results
                </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Show Section */}
                <div className="flex items-center gap-2 md:gap-5">
                    <p className="text-sm md:text-base">Show</p>
                    <input type="text" placeholder='16' className='border-none outline-none bg-white h-[3.5rem] flex text-center w-[3.5rem]' />

                </div>

                {/* Short By Section */}
                <div className="flex items-center gap-2 md:gap-5">
                    <p className="text-sm md:text-base">Short by</p>
                    <input type="text" placeholder='Default' className='border-none outline-none bg-white h-[3.5rem] flex text-center w-[11.8rem]' />

                </div>
            </div>
        </div>
    );
};

export default FilterBar;
