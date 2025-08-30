
import Second from "./components/Second";
import Three from "./components/Three";
import Image from "next/image";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";
import Seven from "./components/Seven";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import NewOne from "./components/NewOne";
import Section from "./components/Section";
import Footer from "./components/Footer";
import TwoFooter from "./components/TwoFooter";


import { MapPin, Search, Truck, Package, LogIn } from "lucide-react";

export default function Home() {
  return (
    <>
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500  flex flex-col">
      
      {/* Top Navbar */}
      <header className="bg-white shadow-sm px-4 md:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center  font-extrabold text-lg sm:text-xl text-orange-500 md:pl-15">
          <Truck className="w-6 h-6 flex-shrink-0" aria-hidden="true" /> 
          food<span className=" text-amber-400">waGon</span>
        </div>

        {/* Location (hidden on mobile) */}
        <div className="hidden md:flex items-center font-extrabold text-sm text-gray-700 truncate max-w-xs">
          Deliver to: 
          <MapPin className="w-4 h-4 text-orange-500 mx-1 flex-shrink-0" aria-hidden="true" />
          <span className="font-bold truncate">Mohammadpur Bus Stand, Dhaka</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 text-sm  md:pr-17 ">
          <button 
            className="flex items-center gap-1 text-gray-600 hover:text-black transition"
            aria-label="Search Food"
          >
            <Search className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> 
            <span className="hidden sm:inline">Search Food</span>
          </button>
          <button 
            className="px-3   sm:px-4 py-2 bg-gradient-to-r  bg-transparent rounded-md text-orange-500  shadow-lg font-semibold hover:opacity-90 flex items-center gap-1 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition text-sm"
            aria-label="Login"
          >
            <LogIn className="w-4 h-4 flex-shrink-0 " aria-hidden="true" /> 
            <span className="hidden sm:inline ">Login</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 md:px-20 pt-5 flex-1">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Are you starving?
          </h2>
          <p className="text-black/60 mb-6 text-sm sm:text-base md:text-lg">
            Within a few clicks, find meals that are accessible near you
          </p>

          {/* Search Box */}
          <div className="bg-white p-4 rounded-[8px] shadow-md h-70 max-w-100  mx-auto md:mx-0 md:max-w-160 md:h-40 ">
            
            {/* Delivery / Pickup Toggle - responsive */}
            <div className="flex flex-col sm:flex-row  rounded-[16px] overflow-hidden mb-4">
              <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-orange-500 font-semibold transition w-full sm:w-auto">
                <Truck size={18} /> Delivery
              </button>
              <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-orange-500 font-semibold transition w-full sm:w-auto">
                <Package size={18} /> Pickup
              </button>
            </div>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row mt-3 gap-2  ">
               
              <input
                type="text"
                placeholder="Enter Your Address"
                className="flex-1 border border-gray-300  text-gray-500 rounded-[16px] sm:rounded-l-md sm:rounded-[8px] px-3 py-2 text-sm focus:outline-none w-full"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-[8px] sm:rounded-r-md sm:rounded-[8px] flex items-center justify-center gap-2 hover:bg-orange-600 transition w-full sm:w-auto">
                <Search size={16} /> Find Food
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
     <div className="flex justify-center items-center mt-20  md:justify-end w-full md:mt-[150px]">
  <Image
    src="/imgbg.png"
    alt="Delicious food"
    width={400}
    height={300}
    className="rounded-full object-cover object-bottom shadow-lg shadow-black"
    priority
  />
</div>


      </div>

      
    </section>

    <Second />

    <Three/>

    <Four/>

    <Five/>

    <Six/>

    <Seven/>

    <Eight/>

    <Nine/>

    <Ten/>

    <NewOne/>

    <Section/>

    <Footer/>
    <hr/>

    <TwoFooter/>
    </>
  );
}
