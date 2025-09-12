import Image from "next/image";

export default function Three() {
  const steps = [
    {
      img: "/icons (4).png", 
      title: "Select location",
      desc: "Choose the location where your food will be delivered.",
    },
    {
      img: "/icons (1).png",
      title: "Choose order",
      desc: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      img: "/icons (2).png",
      title: "Pay advanced",
      desc: "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      img: "/icons (3).png",
      title: "Enjoy meals",
      desc: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600 mb-16">
        How does it work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
         
            <div className="drop-shadow-[0_2px_5px_rgba(230,140,0,0.1)] w-48 h-48 flex items-center justify-center overflow-hidden">
              <Image
                src={step.img}
                alt={step.title}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-black">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-[200px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
