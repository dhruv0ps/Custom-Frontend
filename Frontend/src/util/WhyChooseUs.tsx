import React from "react";
import { Link } from "react-router-dom";
import checkbox from "@/assets/SellCar/Check-Box.png"
interface Feature {
  title: string;
  desc: string;
}

interface WhyChooseUsProps {
  title: string;
  features: Feature[];
  image: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, features, image }) => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-full sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-center md:text-left text-nowrap">
         {title}
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
            src={image}
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
};

export default WhyChooseUs;
