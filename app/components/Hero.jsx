import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full max-w-5xl flex items-center justify-center px-4 md:px-0'>
        <h1 className='text-3xl text-center leading-[50px] relative md:w-1/2 flex-col flex items-center justify-center'>
            
            <Image src="/vecteez6.png" alt="vector" width={500} height={500} className='absolute -top-[170px] right-50 -z-10 opacity-50 cursor-none'/>
            <span className=''>Welcome to the intersection of <span className='text-6xl text-yellow-300'>precision</span><br/> and <br/><span className='text-6xl text-yellow-400'>creativity</span> <br />in web development</span>
        </h1>
    </div>
  )
}

export default Hero