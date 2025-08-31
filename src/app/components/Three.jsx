import { MapPin, Utensils, Receipt, Pizza } from "lucide-react";

export default function Three() {
  const steps = [
    {
      icon: <MapPin size={40} className="text-white" />,
      title: "Select location",
      desc: "Choose the location where your food will be delivered.",
    },
    {
      icon: <Utensils size={40} className="text-white" />,
      title: "Choose order",
      desc: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      icon: <Receipt size={40} className="text-white" />,
      title: "Pay advanced",
      desc: "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      icon: <Pizza size={40} className="text-white" />,
      title: "Enjoy meals",
      desc: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-6 md:px-20">
      {/* Tailwind mein mb-30 nahi hota, mb-16 ya mb-20 use karo */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600 mb-16">
        How does it work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Icon container with background */}
            <div className="  bg-yellow-400 drop-shadow-[0_4px_7px_rgba(255,165,0,0.6)] w-20 h-20 flex items-center justify-center rounded-full shadow-lg">
              {step.icon /* Yahan aapka icon inject hoga */}
            </div>

            <h3 className="mt-5 text-lg font-bold text-black">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-[200px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
