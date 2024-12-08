'use client'

import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
import Link from 'next/link'
import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import heartIcon from "../../public/icons/akar-icons_heart.svg";
import searchIcon from "../../public/icons/akar-icons_search.svg";
import cartIcon from "../../public/icons/ant-design_shopping-cart-outlined.svg";
import userIcon from "../../public/icons/mdi_account-alert-outline.svg";
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const navLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
]

const icons = [
    { name: "heart icon", link: userIcon },
    { name: "search icon", link: searchIcon },
    { name: "cart", link: heartIcon },
    { name: "user", link: cartIcon },
]

const Navbar = () => {
    return (
        <header className={`${poppins.className} bg-white flex items-center justify-between p-4 z-20 fixed top-0 right-0 left-0 custom:p-[30px]`}>
            <div className='flex items-center gap-2'>
                <Image alt='Furniro logo golden color transparent png' src={logo} height={32} width={50} />
                <p className={`${montserrat.className} font-bold text-2xl custom:text-3xl`}>
                    Furniro
                </p>
            </div>

            <nav className="hidden custom:block">
                <ul className='flex gap-[4.69rem]'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.link} className='hover:opacity-60 active:opacity-30 font-[500] text-[16px] cursor-pointer transition-all'>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="hidden custom:block">
                <ul className='flex gap-[4.69rem]'>
                    {icons.map((icon, index) => (
                        <li key={index}>
                            <Image alt={icon.name} src={icon.link} height={19} width={23} className='hover:opacity-60 active:opacity-30 text-[16px] cursor-pointer transition-all' />
                        </li>
                    ))}
                </ul>
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="custom:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.link} className='text-lg font-medium'>
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-8 flex justify-around">
                        {icons.map((icon, index) => (
                            <Image key={index} alt={icon.name} src={icon.link} height={24} width={24} className='hover:opacity-60 active:opacity-30 cursor-pointer transition-all' />
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Navbar

