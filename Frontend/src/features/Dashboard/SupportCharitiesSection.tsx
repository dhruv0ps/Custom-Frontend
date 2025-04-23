import React from "react";
import teddyImage from "@/assets/Home/Charities-img.jpg";
import donateGif from "@/assets/Homepage/Donate.gif";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const SupportCharitiesSection: React.FC = () => {
  const DonateNowButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
      <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative mt-[25px] sm:mt-1
        py-2 sm:py-3 
        px-4 sm:px-6 
        font-semibold 
        text-sm sm:text-lg
        rounded-full 
        bg-[#ff0000] 
        text-white 
        border-none 
        shadow-md 
        transition-transform duration-300 
        overflow-hidden 
        min-w-[120px] sm:min-w-[170px] 
        text-center
        ${hovered ? 'scale-105' : 'scale-100'}
      `}
    >
      {/* Static Text */}
      <span
        className={`
          relative 
          z-10 
          flex 
          justify-center 
          items-center 
          w-full 
          transition-opacity duration-200
          ${hovered ? 'opacity-0' : 'opacity-100'}
        `}
      >
        Donate Now
      </span>

      {/* Hover Text + Arrow */}
      <span
        className={`
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center 
          transition-opacity duration-200
          z-20
          ${hovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        Donate Now
        <ChevronRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      </span>
    </button>
    );
  };

  return (
    <div className="bg-[#feedf4]">
      {/* Mobile View - Matching the image */}
      <div className="md:hidden flex flex-col p-6">
        <h2 className="text-4xl font-bold text-[#ff0000] text-end mb-1">
          We Support Charities
        </h2>
        <h3 className="text-base font-bold text-primary text-end mb-6 whitespace-nowrap">
          We're Building Hope, One Donation At A Time
        </h3>
        
        <div className="flex justify-center mb-6">
          <img
            src={teddyImage}
            alt="Teddy with Heart"
            className="rounded-3xl shadow-xl w-78 h-64 object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex">
        <p className="text-gray-600 text-sm mb-4 text-left">
          We contribute to supported charities on behalf of our members
          and all users who utilise our services for buying and selling cars.
          Each donation is a stepping stone toward a future filled with hope and
          opportunity. Discover more on our Charity page today.
        </p>
        
        <div className="flex flex-col mb-6 items-center">
          <img
            src={donateGif}
            alt="Donate Icon"
            loading="lazy"
            className="w-24 h-24 object-contain bg-white rounded-md shadow-md "
          />
          <div className="flex-1 "></div>
          <DonateNowButton />
        </div>
        </div>
      </div>

      {/* Desktop View - Kept unchanged */}
      <div className="max-w-full sm:max-w-[80%] mx-auto hidden md:flex flex-col md:flex-row items-center justify-between gap-12 py-10 ">
        {/* Left - Teddy Image */}
        <div className="flex-1 flex justify-center sm:mt-6">
  <div className="relative sm:w-[620px] sm:h-[420px] sm:aspect-[628/419] w-[200px] aspect-[628/419]">
    <img
      src={teddyImage}
      alt="Teddy with Heart"
      className="absolute top-0 left-0 w-full h-full object-cover rounded-[40px] shadow-xl "
      loading="lazy"
    />
  </div>
</div>

        {/* Right - Content */}
        <div className="flex-1 md:text-left">
          <div className="flex justify-end items-end mb-4">
            <h2 className="text-4xl font-bold text-[#ff0000] mb-4">We Support Charities</h2>
          </div>

          {/* Donation Icon */}
          <div className="mb-6 flex w-full justify-end">
            <div className="relative sm:w-[115px] sm:h-[115px]">
              <img
                src={donateGif}
                alt="Donate Icon"
                loading="lazy"
                className="w-full h-full object-contain rounded-xl bg-white shadow-md"
                style={{
                  boxShadow: "inset 0px 0px 8px 0px rgba(0, 0, 0, 0.3)",
                }}
              />

              <div
                className="box-shadow-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <h3 className="text-2xl font-bold text-primary mb-4">
              We're Building Hope, One Donation At A Time
            </h3>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-gray-700 mb-6 max-w-xl leading-relaxed">
              We contribute to supported charities on behalf of our members and all users who utilise
              our services for buying and selling cars. <br className="hidden md:block" />
              Each donation is a stepping stone toward a future filled with hope and opportunity.
              Discover more on our charity page today.
            </p>

            <div className="flex justify-end">
              <DonateNowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCharitiesSection;