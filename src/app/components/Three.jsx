import { MapPin, Utensils, Receipt, Pizza } from "lucide-react";

export default function Three() {
  const steps = [
    {
      icon: <MapPin size={70} className="text-orange-500" />,
      title: "Select location",
      desc: "Choose the location where your food will be delivered.",
    },
    {
      icon: <Utensils size={70} className="text-orange-500" />,
      title: "Choose order",
      desc: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      icon: <Receipt size={70} className="text-orange-500" />,
      title: "Pay advanced",
      desc: "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      icon: <Pizza size={70} className="text-orange-500" />,
      title: "Enjoy meals",
      desc: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600 mb-30">
        How does it work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Sirf icon bina background ke */}
            {step.icon}
            <h3 className="mt-5 text-xl font-bold text-black">
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
