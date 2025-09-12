// pages/index.js

export default function Home() {
  return (
    <div className="flex justify-center items-center rounded-[16px]   px-4 pt-4 mb-10">
      <div className="max-w-5xl mt-10 w-full bg-white rounded-[16px] shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Text */}
        <div className="p-6  flex flex-col  md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-800 leading-10 mb-6 ">
            Best deals <span className="text-amber-500">Crispy Sandwiches</span>
          </h2>
          <p className="text-gray-600 mb-4 mt-0">
            Enjoy the large size of sandwiches.<br/> Complete perfect slice of sandwiches.
          </p>
          <button className="bg-amber-500 drop-shadow-[0_4px_7px_rgba(255,165,0,0.6)] text-white font-bold shadow-md py-2 px-6 mt-20 rounded-[8px] hover:bg-orange-600 transition">
            Proceed to Order
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-2/2">
          <img
            className="w-full h-full object-cover"
            src="/img25.png" // Replace with your image URL
            alt="Crispy Sandwiches"
          />
        </div>
        
      </div>





























      
    </div>



  )
}
