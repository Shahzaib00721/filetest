"use client";
import Image from "next/image";

const foodItems = [
  {
    id: 1,
    image: "/img1 (2).png", // Replace with actual image path
    discount: "15",
    title: "Greys Vage",
    days: "6 Days Remaining",
  },
  {
    id: 2,
    image: "/img2.png",
    discount: "10",
    title: "Greys Vage",
    days: "6 Days Remaining",
  },
  {
    id: 3,
    image: "/img3.png",
    discount: "25",
    title: "Greys Vage",
    days: "7 Days Remaining",
  },
  {
    id: 4,
    image: "/img4.png",
    discount: "20",
    title: "Greys Vage",
    days: "8 Days Remaining",
  },
];

export default function Second() {
  return (
    <div className="w-full px-4 py-10 bg-white md:px-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodItems.map((item) => (
          <div key={item.id} className="flex flex-col items-start">
            {/* Card Image with Discount Badge */}
            <div className="relative w-full rounded-[16px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover rounded-lg"
              />
              {/* Discount Badge */}
              <div className="absolute bottom-0 left-0 w-30 text-center  bg-yellow-500 text-white font-bold px-4 py-2 rounded-tr-[20px] flex items-center">
                <span className="text-5xl ">{item.discount}</span>
                <span className="text-2xl text-left  ml-0  " >% Off</span>
      

              </div>
            </div>

            {/* Title */}
            <h3 className="text-gray-800 font-bold text-lg mt-5">
              {item.title}
            </h3>

            {/* Days Remaining */}
            <div className="mt-3 bg-orange-100 text-orange-600 font-semibold text-sm px-4 py-1 rounded-full">
              {item.days}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
