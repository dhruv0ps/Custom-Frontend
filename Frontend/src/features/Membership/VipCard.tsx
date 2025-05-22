import type React from "react";

import vip from "@/assets/Membership/vip-icon.webp";
import HoverArrowButton from "@/util/HoverButton";
import { BASE_URL } from "@/config";

interface VipCardProps {
  className?: string;
}

const VipCard: React.FC<VipCardProps> = ({ className }) => {
  

  return (
    <div className={`bg-[#25c2ff] rounded-3xl overflow-hidden shadow-lg w-full mx-auto h-[32.5rem] sm:h-[35.75rem] ${className}`}>
      {/* Header with VIP icon and price */}
      <div className="flex items-center justify-between p-4">
        <div className="bg-white rounded-xl  w-24 h-24 flex items-center justify-center sm:mt-6">
        <img
  src={vip}
  title="VIP icon"
  loading="lazy"
  decoding="async"
  className="w-full h-full  rounded-full"
/>
        </div>
        <div
  className="
    bg-white 
    rounded-l-[50px] 
    overflow-hidden 
    border border-white 
     pr-[36px]  
    mt-[18px] mb-6 
    transform translate-x-[50px]
  "
>
<div className="bg-white rounded-l-full py-2 pl-12 pr-10 mr-[-20px] ">
          <span className="text-primary text-5xl font-bold">$10</span>
        </div>
      </div>


      </div>

      {/* Benefits list */}
      <div className="bg-white mx-4 rounded-xl p-4  mt-2  sm:mt-10 sm:pt-4">
        <ul className="space-y-3">
          {[
            "Mates Rates Discounts",
            "Trade Promotion  Draws",
            "Bill Busters",
            "Exclusive Car Deals",
            "Member Only Offers",
            "Join, Save & Win!",
          ].map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-[#8cd6f4;] rounded-md p-1 mr-3 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-black font-semibold text-xl">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

    {/* Footer */}
    
<div className=" sm:mt-2 sm:pt-6 py-8 ">
  <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-2   sm:gap-0">
    <div className="text-black rounded-r-full pr-6  sm:pr-5 sm:pl-5  sm:text-xl font-semibold bg-white sm:bg-transparent">
      <span className="block sm:inline whitespace-nowrap text-base ml-4 sm:ml-0">
        Your Loyalty Means,
      </span>
      <span className="sm:text-white font-bold text-primary text-xl ml-4 sm:ml-0"> MORE SAVINGS!</span>
    </div>

    <div className=" sm:w-auto ml-14  mt-1.5 sm:ml-0 sm:mt-0  mr-4">
      <HoverArrowButton
  label="Sign Me Up"
  onClick={() => (window.location.href = `${BASE_URL}/become-member/membership`)}
    className="bg-white transition-all px-4 sm:px-6 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
  textClass="text-primary"
  hoverTextClass="text-primary"
/>
      </div>
  </div>
</div>


    </div>
  )
}

export default VipCard
