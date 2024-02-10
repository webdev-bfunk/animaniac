import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillFacebook } from "react-icons/ai"; 
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full max-w-5xl flex items-center justify-center px-4 md:px-0'>
        <h1 className='text-xl text-center relative md:w-1/2 flex-col flex items-center z-99 justify-center mb-10 mt-10'>
            <Image src="/vecteez5.png" alt="vector" width={500} height={500} className='absolute -bottom-10 -z-10 opacity-50 cursor-none'/>
            <span className="flex gap-5 text-orange-500">
                <AiFillFacebook size={50} className="p-2 rounded-full bg-slate-900 hover:scale-95 hover:bg-slate-800"/>
                <AiFillGithub size={50} className="p-2 rounded-full bg-slate-900 hover:scale-95 hover:bg-slate-800"/>
                <AiFillLinkedin size={50} className="p-2 rounded-full bg-slate-900 hover:scale-95 hover:bg-slate-800"/>
            </span>
            &copy; Copyright 2024 RunCMDCreate <br />
            All Rights Reserved.
            
        </h1>
    </div>
  )
}

export default Footer