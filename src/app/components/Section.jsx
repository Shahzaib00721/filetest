// pages/index.js
"use client";
export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/bgpic.jpg)' }}>
      <div className="bg-opacity-60 text-center p-8 rounded-lg w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-white text-4xl font-bold mb-14">
          Are you ready to order with the best deals?
        </h2>
        <button className="bg-orange-500 text-white py-3 px-8 font-bold rounded-[10px] text-xl hover:bg-orange-600 transition">
          Proceed to Order
        </button>
      </div>
    </div>
  )
}
