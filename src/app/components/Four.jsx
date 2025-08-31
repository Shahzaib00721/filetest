"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MapPin } from "lucide-react"; // Location icon
import "swiper/css";
import "swiper/css/navigation";

const items = [
  {
    name: "Cheese Burger",
    place: "Burger Arena",
    price: "$3.88",
    img: "/img5.png",
  },
  {
    name: "Toffe’s Cake",
    place: "Top Sticks",
    price: "$4.00",
    img: "/img6.png",
  },
  {
    name: "Dancake",
    place: "Cake World",
    price: "$1.99",
    img: "/img7.png",
  },
  {
    name: "Crispy Sandwitch",
    place: "Fastfood Dine",
    price: "$3.00",
    img: "/img8.png",
  },
  {
    name: "Thai Soup",
    place: "Foody man",
    price: "$2.79",
    img: "/img9.png",
  },
];

export default function PopularItems() {
  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-center text-black text-3xl font-extrabold mb-20">
        Popular items
      </h2>
      <div className="relative max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white  rounded-[16px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg text-black font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-1 text-orange-500 text-sm">
                    <MapPin size={14} /> {item.place}
                  </div>
                  <p className="text-black font-bold mt-1">{item.price}</p>
                  <button className="bg-orange-500 text-white w-full mt-3 py-2 rounded-lg hover:bg-orange-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
