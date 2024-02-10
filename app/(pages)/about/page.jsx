import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="mt-10 mb-10  text-4xl md:text-6xl text-orange-400 text-center">
        About Me
      </h1>
      <div className="w-full flex justify-center max-w-6xl">
        <div className="flex flex-col  lg:flex-row">
          {/* <div className="w-full justify-center flex md:block">
           
          </div> */}
          <div className="flex flex-col items-center md:block px-4 prose text-white">
          <Image
              src="/2.jpg"
              alt="profile"
              width={250}
              height={250}
              className="my-4 rounded-full md:float-left shapeOutside mx-4"
            />
            <p>
              Introducing Brandon Funk, a dynamic and creative professional with
              a passion for art and photography that extends far beyond the
              canvas. At the age of 34, Brandon is a devoted father of two who
              has seamlessly woven his love for family into the tapestry of his
              professional journey.
            </p>
            <p>
              As a self-taught individual, Brandon's commitment to continuous
              learning is a testament to his indomitable spirit. Armed with a
              robust skill set encompassing Next.js, Tailwind CSS, REST API,
              React, JavaScript, and MongoDB, he has honed his expertise in the
              ever-evolving landscape of web development. Brandon's proficiency
              is not just confined to code; his innovative and design-oriented
              mindset sets him apart in the competitive digital arena.
            </p>
            <p>
              Known for his trustworthiness, diligence, and fast-learning
              abilities, Brandon is the epitome of a hardworking professional.
              His creative mind, fueled by a genuine passion for design, has
              consistently delivered cutting-edge solutions for his clients.
              Whether crafting visually stunning websites or navigating the
              intricacies of backend development, Brandon Funk is a name
              synonymous with reliability, innovation, and a relentless pursuit
              of excellence.
            </p>
            <p>
              Embark on a journey through Brandon's portfolio, where each
              project reflects not only his technical prowess but also the
              unique blend of artistry and functionality that defines his work.
              Join him on the path of limitless possibilities, where creativity
              knows no bounds, and every challenge is an opportunity to showcase
              the magic of thoughtful design and robust development.
            </p>
          </div>
          <div className="flex flex-col w-full items-center md:ml-6 px-6 mb-20">
            <h1 className="text-4xl mb-4">Skills</h1>
            <div className="mb-1 text-base font-medium dark:text-white">
              HTML
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
              Javascript
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              CSS
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
                style={{ width: "65%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              Tailwind
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-800/40">
              <div
                className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
                style={{ width: "85%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
              React
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-yellow-400 h-2.5 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
              NextJS
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
              MongoDB
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
                style={{ width: "35%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex md:flex-row flex-col gap-6 m-10">
          <div className="flex gap-5">
            <Image src="/html.png" alt="html" height={50} width={50} />
            <Image src="/css.png" alt="html" height={50} width={50} />
            <Image src="/javascript.png" alt="html" height={50} width={50} />
            <Image src="/reactjs.png" alt="html" height={50} width={50} />
            <Image src="/tailwind.png" alt="html" height={50} width={50} />
          </div>
          <div className="flex gap-5">
            <Image src="/typescript.png" alt="html" height={50} width={50} />
            <Image src="/redux.png" alt="html" height={50} width={50} />
            <Image src="/github.png" alt="html" height={50} width={50} />
            <Image src="/nextlogo.png" alt="html" height={50} width={50} />
            <Image src="/mongodb.png" alt="html" height={50} width={50} />
          </div>
        </div>
      <button
        type="submit"
        className="text-black border-1 mb-6 hover:scale-95 hover:bg-gray-100 border px-2 py-1 rounded-lg mx-4 w-1/2 md:w-1/4 mt-6 border-gray-500  headText tracking-wider flex items-center justify-center gap-2"
      >
        <Link href="/" className="headText flex items-center justify-center gap-2">
          <BiArrowBack /> Back Home
        </Link>
      </button>
    </div>
  );
};

export default AboutPage;
