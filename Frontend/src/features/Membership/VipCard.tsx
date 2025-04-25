import type React from "react";
import { useNavigate } from "react-router-dom";
import vip from "@/assets/Membership/vip-icon.webp";
import {ChevronRight} from "lucide-react"
interface VipCardProps {
  className?: string;
}

const VipCard: React.FC<VipCardProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-[#25c2ff] rounded-3xl overflow-hidden shadow-lg w-full mx-auto ${className}`}>
      {/* Header with VIP icon and price */}
      <div className="flex items-center justify-between p-4">
        <div className="bg-white rounded-xl  w-20 h-20 flex items-center justify-center">
        <img
  src={vip}
  title="VIP icon"
  loading="lazy"
  decoding="async"
  className="w-[72px] h-[72px] object-contain rounded-full"
/>
        </div>
        <div
  className="
    bg-white 
    rounded-l-[50px] 
    overflow-hidden 
    border border-white 
     pr-[72px]  
    mt-[15px] mb-[32px] 
    transform translate-x-[25px]
  "
>
<div className="bg-white rounded-l-full py-2 pl-6 pr-10 mr-[-20px] ">
          <span className="text-primary text-5xl font-bold">$10</span>
        </div>
      </div>


      </div>

      {/* Benefits list */}
      <div className="bg-white mx-4 rounded-xl p-4 mb-4">
        <ul className="space-y-3">
          {[
            "Mates Rates Discounts",
            "VIP Prize Draws",
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
              <span className="text-black font-semibold text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
     <div className="sm:px-4 pb-6">
    <div className="flex flex-row md:flex-row md:items-center md:justify-between gap-4">
      <div className="text-black rounded-r-full pr-6   text-lg sm:text-xl font-semibold bg-white sm:bg-transparent ">
      <span className="block sm:inline whitespace-nowrap ">
        Your Loyalty Means,
        </span>
        <span className="sm:text-white font-bold text-primary"> MORE SAVINGS!</span>
      </div>
      <button
    onClick={() => navigate("/signup")}
    className="group relative bg-white hover:bg-gray-100 text-[#25c2ff] px-8 sm:py-3 mr-2 sm:mr-6 whitespace-nowrap font-semibold text-sm sm:text-base md:text-base rounded-full shadow-md overflow-hidden md:min-w-[150px] text-center"
  >
    
    <span className="block w-full transition-opacity duration-200 group-hover:opacity-0 text-center">
      Sign Me Up
    </span>

    
    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none w-full">
      Sign Me Up
      <ChevronRight className="ml-2 h-5 w-5" />
    </span>
  </button>
  </div>
</div>

    </div>
  )
}

export default VipCard
