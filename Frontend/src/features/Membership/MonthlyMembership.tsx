import React from "react";
import { ChevronRight } from "lucide-react"
import img1 from "@/assets/Membership/130.jpg"
import img2 from "@/assets/Membership/Carboy.jpg";
import img3 from "@/assets/Membership/125.jpg"
import discountsImg from "@/assets/Membership/Discount-125760549.jpg";
import logo from "@/assets/Wheelz-Australia-White-and-Blue-Color-scaled.webp"
import { BASE_URL } from "@/config";

import VipCard from "./VipCard";

const MembershipPricing: React.FC = () => {
  

  return (
    <div className="bg-[#002b63] text-white py-10 sm:px-4">
      <div className="max-w-[95%] mx-auto">
      <div className="flex justify-center mb-4 px-4">
        <img src={logo} alt="Wheelz Logo" className="w-68 h-16 " />
      </div>
      <div className="text-center mb-10">

        <h2 className="text-2xl sm:text-xl font-semibold">MONTHLY MEMBERSHIP</h2>
        <p className="text-gray-300 mt-1">Cancel Your Membership Anytime</p>
      </div>
 
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start  sm:px-0">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <img src={img1} alt="Using phone" className="rounded-xl" />
          <img src={discountsImg} alt="Discounts" className="rounded-xl sm:h-[17.1rem]" />
        </div>

        <VipCard className="md:col-span-1" />

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <img src={img2} alt="Happy Couple" className="rounded-xl" />
          <img src={img3} alt="Excited Users" className="rounded-xl" />
        </div>
      </div>
      </div>
      <div className="mx-auto py-8 mt-2">
      <div className="max-w-full sm:max-w-7xl  mx-auto flex flex-row items-center justify-between  sm:px-0">

    {/* Text Section */}
    <div className="bg-white rounded-r-full py-1 sm:py-2 pl-2 pr-16 sm:pl-6 sm:pr-18 flex-shrink"
       style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}>
       <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
                That’s less than  
                <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase"> $2.31 A WEEK</span>
            </h2>
          </div>
        <div className="flex w-full justify-end sm:w-auto sm:mr-2 px-4 sm:px-0">
  <button
    onClick={() => (window.location.href = `${BASE_URL}/auth/register`)}
    className="group relative bg-primary font-semibold text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition overflow-hidden"
  >
    {/* Normal State */}
    <span className="transition-opacity duration-200 group-hover:opacity-0">
      Sign Me Up
    </span>

    {/* Hover State */}
    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      Sign Me Up
      <ChevronRight className="h-5 w-5 ml-1" />
    </span>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPricing;
