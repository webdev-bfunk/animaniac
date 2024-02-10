"use client"
import { AiOutlineMenu } from "react-icons/ai"; 
import React, { useState } from 'react';
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const handleMenuClick = () => {
        setOpen(!open);
    };

  return (
    <>
    <motion.div 
    initial={{ x:50, opacity: 0}}
    animate="show" 
    whileInView={{ x: 0, opacity: 1, 
        scale: [.5, 1],
    transition: { 
        duration: 1.3, ease: easeInOut }
    }}
    className="relative p-2 rounded-lg border border-gray-600 hover:scale-95 hover:bg-slate-800" onClick={handleMenuClick}>
        <AiOutlineMenu size={30} className=""/>
        {open && (
            <ul className="absolute top-full right-0 flex-col w-[140px] bg-slate-800 rounded-md  text-xl items-center text-right space-y-4 justify-center border border-gray-600">
                <li className="hover:bg-slate-700 p-4 rounded-t-md">
                    <Link href="/" className="">Home</Link>
                </li>

                <li className="hover:bg-slate-700 p-4">
                    <Link href="/">About</Link>
                </li>

                <li className="hover:bg-slate-700 p-4">
                    <Link href="/">Services</Link>
                </li>

                <li className="hover:bg-slate-700 p-4">
                    <Link href="/">Portfolio</Link>
                </li>
                <li className="hover:bg-slate-700 p-4 rounded-b-md">                    
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        )}
    </motion.div>
    </>
  )
}

export default MobileNav;
