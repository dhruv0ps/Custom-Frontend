import type React from "react"
import { useNavigate } from "react-router-dom"
import vip from "@/assets/Membership/vip-icon.webp"
const VipCard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#25c2ff] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto">
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
      <div className="px-4 pb-6 ">
        <div className="text-black text-xl font-semibold mb-4">
          Your Loyalty Means,
          <span className="text-white font-bold"> MORE SAVINGS!</span>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white hover:bg-gray-100 text-[#25c2ff] font-bold px-8 py-3 rounded-full transition float-right"
        >
          Sign Me Up
        </button>
      </div>
    </div>
  )
}

export default VipCard
