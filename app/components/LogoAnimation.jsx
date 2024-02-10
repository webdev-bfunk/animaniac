"use client"
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";

const LogoAnimation = () => {
    
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }
  return (
    <div className="flex w-full justify-end items-end">
            <motion.section 
      variants={gridVariants} 
      initial="hidden" 
      animate="show" 
      className="md:flex mr-20 hidden">
{/* 
        <motion.div 
        variants={gridVariants} 
        whileInView={{ 
          rotate: [90, 180, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0] }} 
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
          
          <h1 className="text-8xl -ml-8 font-extrabold">Hello</h1>
        </motion.div>
        <div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></div> */}
<Link href="/" className="flex w-full md:justify-end text-end md:items-end ">
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8">R</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0],  
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1] }}  className="text-white text-8xl -ml-8 ">u</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8 ">n</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8 ">C</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-10 ">M</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-10 ">D</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-9 ">C</motion.h1>
  
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0],  
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1] }}  className="text-white text-8xl -ml-8 ">r</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8 ">e</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8 ">a</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8 ">t</motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-8 ">e</motion.h1>
       </Link>
      </motion.section>

      <motion.section 
      variants={gridVariants} 
      initial="hidden" 
      animate="show" 
      className="md:hidden flex">
        <Link href="/" className="flex mx-10">
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0],  
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1] }}  className="text-white text-8xl ">R<span className="text-4xl">un</span></motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-12 ">C<span className="text-4xl">MD</span></motion.h1>
        <motion.h1 variants={gridVariants} 
        whileInView={{ 
          rotate: [0, 360, 0], 
          transition: { 
            duration: 1.8, ease: easeInOut }, 
            borderRadius: ["50%", "25%", "50%", "100%"], 
            scale: [1, .5, .2, .1, 1, 1.5, .5], x: [50, 100, 0], opacity: [0, .2, .5, 1]  }}  className="text-white text-8xl -ml-16">C<span className="text-4xl">reate</span></motion.h1>
      </Link>
         </motion.section>
    </div>
  )
}

export default LogoAnimation