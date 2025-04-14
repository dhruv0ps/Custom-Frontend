import React from "react";

import img1 from "@/assets/Membership/Membership-Booking.webp";
import img2 from "@/assets/Membership/Car-Purchase-Wheelz.webp";
import img3 from "@/assets/Membership/Membership-Services-by-Wheelz-Australia.webp";
import discountsImg from "@/assets/Membership/Discount-Offers-at-Wheelz-Australia.webp";
import logo from "@/assets/Wheelz-Australia-White-and-Blue-Color-300x66.webp"

import { useNavigate } from "react-router-dom";
import VipCard from "./VipCard";

const MembershipPricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#002b63] text-white py-10 px-4">
    <div className="flex justify-center mb-4">
  <img src={logo} alt="Wheelz Logo" className="h-16 w-auto" />
</div>
      <div className="text-center mb-10">
       
        <h2 className="text-xl font-semibold">MONTHLY MEMBERSHIP</h2>
        <p className="text-gray-300 mt-1">Cancel Your Membership Anytime</p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <img src={img1} alt="Using phone" className="rounded-xl" />
          <img src={discountsImg} alt="Discounts" className="rounded-xl" />
        </div>

       <VipCard/>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <img src={img2} alt="Happy Couple" className="rounded-xl" />
          <img src={img3} alt="Excited Users" className="rounded-xl" />
        </div>
      </div>

      <div className=" mx-auto py-8 mt-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-row   sm:flex-row items-center justify-between">
        <div className="bg-white rounded-full  sm:rounded-r-full  py-2 pl-6  pr-6 sm:pr-72 mb-4 sm:mb-0 w-full sm:w-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center sm:text-left">
            <div className='flex flex-col  sm:flex-row '>
              <span className="text-black">That’s less than  </span>
            <span className="text-primary"> $2.31 a week</span></div>
          </h2>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition w-full sm:w-auto"
        >
          Sign Me Up
        </button>
      </div>
    </div>
    </div>
  );
};

export default MembershipPricing;
