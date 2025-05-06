import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface VideoBannerProps {
    videoSrc: string;
    heading: string;
    primaryButtonLabel: string;
    primaryButtonLink: string;
    secondaryButtonLabel: string;
    secondaryButtonLink: string;
    secondaryButtonBg?: string;     // <-- added
    secondaryButtonText?: string;   // <-- added
    mode?: "demo" | "live";
    backgroundColorClass?: string;
  }

const VideoBanner: React.FC<VideoBannerProps> = ({
  videoSrc,
  heading,
  primaryButtonLabel,
  primaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
  secondaryButtonBg,
  secondaryButtonText,
  mode = "live", 
  backgroundColorClass = "bg-primary",

}) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[65vh] lg:h-[89vh] overflow-hidden bg-white">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-end h-full">
        {/* Heading */}
        <div className="bg-white text-center py-2 sm:py-2 px-4">
          <h1 className="text-base md:text-2xl font-bold text-black sm:whitespace-nowrap">
            {heading}
          </h1>
        </div>

        {/* Buttons */}
        <div className={`${backgroundColorClass} py-4 px-2 sm:py-4 w-full`}>
        <div className="flex justify-center items-center gap-2 sm:gap-6 flex-row  flex-nowrap sm:flex-nowrap px-2 overflow-x-auto">

            {/* Primary Button */}
            <button
              onClick={() => navigate(primaryButtonLink)}
              className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-8 py-2 rounded-full"
            >
              {primaryButtonLabel}
            </button>
            {mode === "demo" && (
 <select
 className="w-[125.5px] sm:w-auto py-2.5 px-3 bg-white rounded-full text-black appearance-none cursor-pointer shadow text-sm"
 defaultValue=""
>
 <option value="" disabled>State</option>
 <option value="nsw">New South Wales</option>
 <option value="vic">Victoria</option>
 <option value="qld">Queensland</option>
 <option value="wa">Western Australia</option>
 <option value="sa">South Australia</option>
 <option value="tas">Tasmania</option>
 <option value="act">Australian Capital Territory</option>
 <option value="nt">Northern Territory</option>
</select>

  )}

            {/* Secondary Button with Hover Arrow */}
            <button
  onClick={() => navigate(secondaryButtonLink)}
  className={`group relative ${secondaryButtonBg || "bg-white"} ${secondaryButtonText || "text-[#1cbeff]"} font-medium px-8 py-2 rounded-full transition-all duration-300 ease-in-out overflow-hidden text-center shadow-sm hover:shadow-md`}
>
  <span className="block w-full transition-opacity duration-200 group-hover:opacity-0">
    {secondaryButtonLabel}
  </span>

  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none w-full">
    {secondaryButtonLabel}
    <ChevronRight className="ml-2 h-5 w-5" />
  </span>
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
