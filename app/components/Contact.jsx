import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full max-w-5xl p-4'> 
        <h1 className='text-4xl md:text-6xl text-orange-400 text-center'>Contact Me</h1>
            {/* <div className='bg-gradient-to-r from-transparent via-yellow-200 to-transparent h-1 w-1/2 md:-ml-10'/> */}
            <div className="m-5  grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="w-full md:w-3/4">
          <form className="w-full mx-auto p-5">
            <div className="mb-5">
              <label
                htmlFor="email"
                className=" headText tracking-wider block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=" readingText tracking-wider focus:bg-gray-900 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="name@email.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className=" headText tracking-wider block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder='Password'
                className=" readingText tracking-wider bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white headText tracking-wider"
              >
                Your message
              </label>
            <textarea
              rows={5}
              className=" readingText tracking-wider mb-5 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message..."
            />
            <button
              type="submit"
              className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800  headText tracking-wider"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-3/4 flex justify-center items-center">
          <Image
            src="/vecteezy3.png"
            alt="me"
            width={300}
            height={300}
            className="  "
          />
        </div>
      </div>
      </div>
  )
}

export default Contact