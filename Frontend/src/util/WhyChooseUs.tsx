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
        <h2 className="text-2xl md:text-2xl font-bold mb-8 text-center md:text-left">
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
                  <h3 className="font-bold text-lg text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt="Promotion"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-12 w-full">
        <div className="flex justify-center gap-4 flex-wrap px-4">
          <Link
            to="/"
           className="text-black bg-[#d9d9d9] border border-[#d9d9d9] text-[16px] font-semibold rounded-full transition-all duration-300 shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)] px-6 py-2"
          >
            Home
          </Link>
          <Link
            to="/sell-your-car/form"
            className="text-[#1cbeff] bg-white border border-white text-[18px] font-semibold rounded-full transition-all duration-300 shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)] px-6 py-2"
          >
            Sign Me Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;