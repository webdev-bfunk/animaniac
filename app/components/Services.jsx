import React from 'react'

const Services = () => {
  return (
    <div className='w-full max-w-5xl p-4'> 
        <h1 className='text-4xl md:text-6xl text-orange-400 text-right'>Services</h1>
            {/* <div classNameName='bg-gradient-to-r from-transparent via-yellow-200 to-transparent h-1 w-1/2 md:-ml-10'/> */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
        <div className="hover:scale-105 max-w-sm rounded overflow-hidden flex flex-col justify-between shadow-lg bg-gray-300 min-h-[400px]">
  <img className="w-full max-h-[200px] overflow-hidden" src="/pexels8.jpg" alt="SEO" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-orange-400 headText tracking-wider">SEO</div>
    <p className="text-gray-700 text-base readingText line-clamp-3">
      Search engine optimization. Get your business more traffic! Add this and that and do stuff and more.
    </p>
    <button
              type="submit"
              className="text-black border-1 mt-2 hover:scale-95 hover:bg-gray-100 border px-2 py-1 rounded-lg mx-auto w-full border-gray-500  headText tracking-wider"
            >
              Details
            </button>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  readingText text-gray-700 mr-2 mb-2">$40</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  readingText text-gray-700 mr-2 mb-2">20%+ more traffic</span>
  </div>
  </div>
        <div className="hover:scale-105 max-w-sm rounded overflow-hidden flex flex-col justify-between shadow-lg bg-gray-300  min-h-[400px]">
  <img className="w-full max-h-[200px] overflow-hidden" src="/pexels-k1.jpg" alt="Branding" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-orange-400 headText tracking-wider">Marketing & Branding</div>
    <p className="text-gray-700 text-base line-clamp-3">
      Give your business it's own unique identity and reach more customers. Includes doing things and also more stuff.
    </p>
    <button
              type="submit"
              className="text-black border-1 mt-2 hover:scale-95 hover:bg-gray-100 border px-2 py-1 rounded-lg mx-auto w-full border-gray-500  headText tracking-wider"
            >
              Details
            </button>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  readingText text-gray-700 mr-2 mb-2">$50</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  readingText text-gray-700 mr-2 mb-2">Includes logos.</span>
  </div>
  </div>
        <div className="hover:scale-105 max-w-sm rounded overflow-hidden flex flex-col justify-between shadow-lg bg-gray-300 min-h-[400px]">
  <img className="w-full max-h-[200px] overflow-hidden" src="/pexels7.jpg" alt="WebDevelopment" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-orange-400 headText tracking-wider">Web Development</div>
    <p className="text-gray-700 text-base line-clamp-3">
      Custom website design, hosting, and more.Really one line? This doesn't include this and that because screw you.
    </p>
    <button
              type="submit"
              className="text-black border-1 mt-2 hover:scale-95 hover:bg-gray-100 border px-2 py-1 rounded-lg mx-auto w-full border-gray-500  headText tracking-wider"
            >
              Details
            </button>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2 readingText">$100+</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2 readingText">+ more perks</span>
      </div>
  </div>
</div>
    </div>
  )
}

export default Services