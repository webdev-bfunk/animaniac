import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div className="prose text-white p-4 ">
        <h1 className="text-4xl md:text-6xl text-orange-400">About Me</h1>
        {/* <div className='bg-gradient-to-r from-transparent via-yellow-200 to-transparent h-1 w-1/2 -mt-8 md:-mt-14 md:-ml-10'/> */}
        <p className="indent-8">
          Introducing Brandon Funk, a dynamic and creative professional with a
          passion for art and photography that extends far beyond the canvas. At
          the age of 34, Brandon is a devoted father of two who has seamlessly
          woven his love for family into the tapestry of his professional
          journey.
        </p>
        <p className="indent-8">
          As a self-taught individual, Brandon's commitment to continuous
          learning is a testament to his indomitable spirit. Armed with a robust
          skill set encompassing Next.js, Tailwind CSS, REST API, React,
          JavaScript, and MongoDB, he has honed his expertise in the
          ever-evolving landscape of web development. Brandon's proficiency is
          not just confined to code; his innovative and design-oriented mindset
          sets him apart in the competitive digital arena.
        </p>
        {/* <p className="indent-8">
          Known for his trustworthiness, diligence, and fast-learning abilities,
          Brandon is the epitome of a hardworking professional. His creative
          mind, fueled by a genuine passion for design, has consistently
          delivered cutting-edge solutions for his clients. Whether crafting
          visually stunning websites or navigating the intricacies of backend
          development, Brandon Funk is a name synonymous with reliability,
          innovation, and a relentless pursuit of excellence.
        </p>
        <p className="indent-8">
          Embark on a journey through Brandon's portfolio, where each project
          reflects not only his technical prowess but also the unique blend of
          artistry and functionality that defines his work. Join him on the path
          of limitless possibilities, where creativity knows no bounds, and
          every challenge is an opportunity to showcase the magic of thoughtful
          design and robust development.
        </p> */}
        <div className="w-full flex items-center justify-center">
          <button
                type="submit"
                className="text-black border-1 mt-2 hover:scale-95 hover:bg-gray-100 border px-2 py-1 rounded-lg bg-gray-200 border-gray-500  headText tracking-wider"
              >
                Learn more
              </button>
        </div>
      </div>
      <div>
        <Image src="/melines3.png" alt="picture" height={350} width={350} />
      </div>
      </div>
    </div>
  );
};

export default About;
