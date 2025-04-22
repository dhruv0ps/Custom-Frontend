import rocket from "@/assets/Homepage/Icon-46-Rocket.gif"
import manImg from "@/assets/Homepage/Business-partners-by-Wheelz.webp"
import { ChevronRight } from "lucide-react"
import { useState } from "react";

export default function BusinessPartnerSection() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <section className="bg-[#eef9ff]">
      <div className="container max-w-full sm:max-w-[80%] mx-auto py-6">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary pt-6 px-4 sm:px-0 flex justify-end text-right">
          Business Partner Opportunities
        </h2>

        {/* ✅ Desktop Layout */}
        <div className="hidden md:flex px-4 py-6 flex-row items-center justify-between gap-16">
          <div className="w-1/2 relative">
            <img
              src={manImg}
              alt="Business partners by Wheelz"
              title="Business partners by Wheelz"
              loading="lazy"
              decoding="async"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="w-1/2 relative">
            <div className="absolute top-0 right-0 w-28 h-28 sm:mt-12">
              <div className="relative w-full h-full overflow-hidden">
                <img src={rocket} alt="Rocket icon" className="w-full h-full object-contain" />
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{ boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-left mb-4 text-gray-800 mt-32">
              Calling All Automotive Businesses
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Boost your sales results! Unlock exclusive partnerships tailored to meet your needs and expand your reach.
              Collaborate with us to connect with more customers and secure your position in our automotive community today,
              bypassing our waiting list placement.
            </p>

            <div
              className="p-4 mb-8 border rounded-lg border-gray-100 sm:mt-16"
              style={{
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                boxShadow: "inset 0px 0px 5px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Current Positions Filling Fast</h4>
              <p className="text-gray-600">
                Auto Groups | Dealerships | Service Providers <br />
                Fleet Procurement | Manufacturers | Retail Groups
              </p>
            </div>

            <div className="flex justify-end">
              <PartnerUpButton isActive={isActive} onClick={handleClick} />
            </div>
          </div>
        </div>

        <div className="block md:hidden   py-8 space-y-6">
  <div className="relative w-full px-4">
    <img
      src={manImg}
      alt="Business partners by Wheelz"
      title="Business partners by Wheelz"
      loading="lazy"
      decoding="async"
      className="rounded-2xl shadow-lg w-full h-auto object-cover"
    />
  
  <div className="flex flex-row mt-12">
    <div className="w-20 h-20">
      <img src={rocket} alt="Rocket icon" className="object-contain w-full h-full" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 text-right mt-4 ">Calling All Automotive Businesses</h3>
    </div>
  </div>

  <div>
    
    <p className="text-gray-700 mt-2 p-4">
      Boost your sales results! Unlock exclusive partnerships tailored to meet your needs and expand your reach.
      Collaborate with us to connect with more customers and secure your position in our automotive community today, 
      bypassing our waiting list placement.
    </p>
  </div>

  <div
    className="p-4 mr-16 border rounded-lg border-gray-100"
    style={{
      backgroundColor: "#FFFFFF",
      overflow: "hidden",
      borderRadius:"0px 100px 100px 0px",
      boxShadow: "inset 0px 0px 5px 0px rgba(0, 0, 0, 0.3)",
    }}
  >
    <h4 className="font-bold mb-2 text-black ">Current Positions Filling Fast:</h4>
    <p className="text-black  text-sm">
      Auto Groups • Dealerships • Service Providers <br />
      Fleet Procurement • Manufacturers • Retail Groups
    </p>
  </div>

  <div className="flex justify-end mr-2">
    {/* Simplified button that matches the image */}
    <button
      className="px-6  py-3 font-semibold text-lg rounded-full
        bg-[#00b2ff] text-white shadow-lg
        transition-all duration-300"
      onClick={handleClick}
    >
      Partner Up
    </button>
  </div>
</div>
      </div>
    </section>
  );
}

// ✅ Reusable Button Component
function PartnerUpButton({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <button
    className={`group relative px-12 py-3 font-semibold text-lg rounded-full
      bg-[#00b2ff] text-white shadow-lg
      hover:scale-105 transition-all duration-300 overflow-hidden
      ${isActive ? "scale-110" : ""}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-center gap-1">
      <span className="block group-hover:opacity-0 transition-opacity duration-200">
        Partner Up
      </span>
      <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Partner Up <ChevronRight className="ml-2 h-5 w-5" />
      </span>
    </div>
  </button>
  );
}
