import React from "react";
import teddyImage from "@/assets/Charity/Charity.jpg"; 
import donateGif from "@/assets/Homepage/Donate.gif"; 

const SupportCharitiesSection: React.FC = () => {
  return (
    <div className="bg-[#feedf4] py-20 px-6">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left - Teddy Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={teddyImage}
            alt="Teddy with Heart"
           className="rounded-[40px] shadow-xl w-[471px] h-[360px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1  md:text-left">
            <div className="flex justify-end items-end mb-4">
            <h2 className="text-4xl font-bold text-red-600 mb-4">We Support Charities</h2>
            </div>
         

          {/* Donation Icon */}
          <div className="mb-6 flex justify-center md:justify-end">
            <img
              src={donateGif}
              alt="Donate Icon"
            className="w-[115px] h-[115px] rounded-xl shadow-md bg-white p-2 object-contain"
              loading="lazy"
            />
          </div>
<div className="flex justify-end">
          <h3 className="text-xl font-bold text-primary mb-4">
            We're Building Hope, One Donation At A Time
          </h3></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <p className="text-gray-700 mb-6 max-w-xl leading-relaxed">
    We contribute to supported charities on behalf of our members and all users who utilise
    our services for buying and selling cars. <br className="hidden md:block" />
    Each donation is a stepping stone toward a future filled with hope and opportunity.
    <br className="hidden md:block" />
    Discover more on our charity page today.
  </p>

  <div className="flex items-end justify-end md:justify-start w-full">
    <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition-all">
      Donate Now
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default SupportCharitiesSection;
