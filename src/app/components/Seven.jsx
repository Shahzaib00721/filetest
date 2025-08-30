// components/FoodCarousel.js
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const foodItems = [
  { name: 'Pizza', image: '/img18.png' },
  { name: 'Burger', image: '/img19.png' },
  { name: 'Noodles', image: '/img20.png' },
  { name: 'Sub-sandwich', image: '/img21.png' },
  { name: 'Chowmein', image: '/img22.png' },
  { name: 'Steak', image: '/img23.png' },
];

export default function FoodCarousel() {
  return (
    <section className="bg-[#fff8ec] py-20 px-4 sm:px-6 lg:px-20 ">
      <div className="flex items-center justify-between mb-20">
        <h2 className="font-extrabold text-2xl text-gray-900">Search by Food</h2>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-yellow-500 text-sm font-bold hover:underline">
            View All &gt;
          </a>
          <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition">
            <ChevronLeftIcon className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition">
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex space-x-20 overflow-x-auto no-scrollbar pb-3 pl-4">
        {foodItems.map(({ name, image }) => (
          <div key={name} className="flex-shrink-0 flex flex-col items-center w-24 sm:w-28">
            <div className="w-30 h-30 sm:w-35 sm:h-35 rounded-full overflow-hidden shadow-md">
              <img src={image} alt={name} className="object-cover w-full h-full " />
            </div>
            <p className="mt-2 font-semibold text-xs sm:text-sm text-gray-700 text-center">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}