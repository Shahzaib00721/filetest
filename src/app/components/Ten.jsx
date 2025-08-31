// pages/index.js
"use client";
export default function Home() {
  return (
    <div className="flex justify-center items-center rounded-[16px] px-4 pt-0">
      <div className="max-w-5xl mt-10 w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-2/2 order-first md:order-first">
          <img
            className="w-full h-full object-cover"
            src="/img26.png" // Replace with your image URL
            alt="Crispy Sandwiches"
          />
        </div>

        {/* Right Side - Text */}
        <div className="p-6  flex flex-col  md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-800 leading-10 mb-6 ">
            Celebrate  parties <span className="text-amber-500">
              with Fried Chicken</span>
          </h2>
          <p className="text-gray-600 mb-4 mt-0">
            Enjoy the large size of sandwiches.<br/> Complete perfect slice of sandwiches.
          </p>
          <button className="bg-amber-500 drop-shadow-[0_4px_7px_rgba(255,165,0,0.6)] text-white font-bold shadow-md py-2 px-6 mt-20 rounded-[8px] hover:bg-orange-600 transition">
            Proceed to Order
          </button>
        </div>
      </div>
    </div>
  )
}
