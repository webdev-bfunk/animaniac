import React from "react";
import { Slideshow } from "./Slideshow";

const Portfolio = () => {
  return (
    <div className="w-full max-w-5xl">
      <div className=" text-white w-full flex flex-col p-4">
        <h1 className="text-4xl md:text-6xl text-orange-400">Past Works</h1>
        {/* <div className='bg-gradient-to-r from-transparent via-yellow-200 to-transparent h-1 w-1/2 -mt-8 md:-mt-14 md:-ml-10'/> */}
        <Slideshow />
      </div>
    </div>
  );
};

export default Portfolio;
