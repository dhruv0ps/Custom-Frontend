import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Fleet/Fleet-Strategy-by-Wheelz.webp"
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    const features = [
        {
          title: "Cost Savings",
          desc: "Access exclusive volume discounts for fleet purchases, maximising your budget.",
        },
        {
          title: "Effortless Acquisition",
          desc: "Streamlined process of vehicle selection, saving you time and simplifying the buying journey.",
        },
        {
          title: "Dedicated Account Management",
          desc: "Support with a dedicated account manager for prompt and tailored solutions.",
        },
        {
          title: "Efficient Selling Process",
          desc: "Streamline the selling journey, saving time and effort through a user-friendly process.",
        },
        {
          title: "Targeted Audience Exposure",
          desc: "Reach a specifically targeted automotive audience of businesses and fleet managers.",
        },
      ];
      

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-full sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-center md:text-left text-nowrap">
            Protection, Peace & Prosperity
          </h2>
          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img
                  src={checkbox}
                  alt="checkmark"
                  className="sm:w-[50px] sm:h-[50px] w-[56px] h-[56px] object-contain shrink-0"
                />
                <div>
                  <h3 className="font-semibold sm:text-lg mb-1 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={rightImage}
            alt="Sell Your Car by Wheelz"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Buttons */}
      {/* CTA Buttons */}
           <div className="mt-12 w-full">
             <div className="flex justify-center gap-4 flex-wrap px-4">
               <Link
                 to="/"
                 className="bg-gray-300 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all min-w-[140px] text-center"
               >
                 Home
               </Link>
               <Link
                 to="/sell-your-car/form"
                 className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-md transition-all min-w-[140px] text-center"
               >
               Acess Form
               </Link>
             </div>
           </div>
    </section>
  );
}
