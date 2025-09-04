"use client";

import Image from 'next/image';

const restaurants = [
  {
    id: 1,
    name: 'Foodworld',
    rating: 46,
    discount: '20% off',
    deliveryType: 'Fast',
    imageSrc: '/img10.png', // Use your image path
    logoSrc: '/sm1.png', // Use your logo path
    status: 'Opens tomorrow',
    statusClass: 'bg-orange-100 text-orange-500',
    discountClass: 'bg-orange-500',
  },
  {
    id: 2,
    name: 'Pizzahub',
    rating: 40,
    discount: '15% off',
    deliveryType: 'Fast',
    imageSrc: '/img11.png',
    logoSrc: '/sm2.png',
    status: 'Opens tomorrow',
    statusClass: 'bg-orange-100 text-orange-500',
    discountClass: 'bg-orange-500',
  },
  {
    id: 3,
    name: 'Donuts hut',
    rating: 20,
    discount: '10% off',
    deliveryType: 'Fast',
    imageSrc: '/img12.png',
    logoSrc: '/sm3.png',
    status: 'Open Now',
    statusClass: 'bg-green-100 text-green-600',
    discountClass: 'bg-orange-500',
  },
  {
    id: 4,
    name: 'Donuts hut',
    rating: 50,
    discount: '15% off',
    deliveryType: 'Fast',
    imageSrc: '/img13.png',
    logoSrc: '/sm4.png',
    status: 'Open Now',
    statusClass: 'bg-green-100 text-green-600',
    discountClass: 'bg-orange-500',
  },
];

export default function FeaturedRestaurants() {
  return (
    <div className="max-w-7xl  mx-auto px-4 py-10 bg-white md:px-20 ">
      <h2 className="text-center mt-7 font-extrabold text-black text-3xl leading-20 mb-15">Featured Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurants.map((rest) => (
          <div key={rest.id} className="space-y-2">
            <div className="relative rounded-[16px] overflow-hidden">
              <Image
                src={rest.imageSrc}
                alt={rest.name}
                width={300}
                height={200}
                className="object-cover w-full h-48 rounded-lg"
              />
              {/* Discount Tag */}
              <span
                className={`absolute top-3 left-3 flex  gap-1 px-2 py-1 text-xs text-white rounded ${rest.discountClass}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16v-4M5 12h2m4 0h2m4 0h2M9 16l2-2 4 4"
                  />
                </svg>
                {rest.discount}
              </span>
              {/* Fast Tag */}
              <span className="absolute top-3 right-3 flex  gap-1 px-2 py-1 text-xs font-bold text-white bg-yellow-400 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {rest.deliveryType}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={rest.logoSrc}
                alt={`${rest.name} logo`}
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <p className="font-bold text-black text-sm">{rest.name}</p>
                <div className="flex items-center text-yellow-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.373 2.45a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.372-2.45a1 1 0 00-1.175 0l-3.373 2.45c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.98 9.402c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                  {rest.rating}
                </div>
              </div>
            </div>
            <span
              className={`inline-block px-3 py-1 text-xs font-bold rounded ${rest.statusClass}`}
            >
              {rest.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}