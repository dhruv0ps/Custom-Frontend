import { useState } from "react";
import img1 from "@/assets/Wheelz-Australia-White-and-Blue-Color-300x66.webp"
export default function TopDealsSection() {
  const [_loading, setLoading] = useState(false);
  
  const handleEnquire = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Thank you for your enquiry. We'll be in touch soon!");
    }, 1000);
  };
  
  return (
    <div className="bg-[#0e2a5f] ">
      <div className="py-12 px-4 max-w-[80%] mx-auto">    
          <div className="flex flex-col items-center justify-center mb-4">
        <h2 className=" mb-2">
         <img src={img1} />
        </h2>
        <h2 className="text-white text-xl">Demonstrator & Pre-Owned</h2>
      </div>
      
      {/* Top Deals Title with Stars */}
      <div className="flex items-center justify-center mb-10">
        <div className="text-white opacity-70 mr-2">✧</div>
        <div className="text-white mr-1">✦</div>
        <h2 className="text-[#18c3ff] text-2xl font-semibold px-2">This Months Top Deals</h2>
        <div className="text-white ml-1">✦</div>
        <div className="text-white opacity-70 ml-2">✧</div>
      </div>
      
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="bg-white rounded-lg p-6 flex flex-col items-center border-4 border-[#18c3ff]"
          >
            {/* Car Icon */}
            <div className="bg-[#18c3ff] rounded-full p-4 mb-4">
              <svg 
                width="50" 
                height="50" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 9l2 -4h8l2 4" />
                <path d="M5 9h12v5a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-5z" />
                <path d="M15 4v2" />
                <path d="M9 4v2" />
                <path d="M5 9v8" />
                <path d="M19 9v8" />
              </svg>
            </div>
            
            {/* Soon Text */}
            <h3 className="text-5xl font-bold text-[#333] mb-4">SOON</h3>
            
            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full mb-6">
              <div className="h-full rounded-full bg-gradient-to-r from-[#18c3ff] to-[#18c3ff]/50 w-1/2"></div>
            </div>
            
            {/* Enquire Button */}
            <button 
              onClick={handleEnquire}
              className="bg-[#18c3ff] text-white px-4 py-2 rounded-full ml-auto"
            >
              Enquire Now
            </button>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}