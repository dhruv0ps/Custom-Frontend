import React from "react";
import { Button } from "@/components/ui/button";
import turtleVideo from "@/assets/Homepage/iStock-464391536.mp4";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/config";

const TurtleSection: React.FC = () => {
  return (
    <div className="relative bg-black">
      <div className="overflow-visible mb-12 min-h-[125px] py-8 mt-36 md:py-12 lg:mt-32 max-w-full sm:max-w-[80%] mx-auto">

        {/* --- Desktop View --- */}
        <div className="hidden md:block absolute -top-32 lg:-top-24 left-1/2 md:left-12 lg:left-24 transform -translate-x-1/2 md:translate-x-0 z-20 lg:mt-0">
          <div className="bg-white rounded-3xl md:gap-y-6 lg:ml-16 p-4 mt-6 w-[400px] sm:w-[320px] md:w-[380px] lg:w-[400px]">
            <h3 className="text-primary text-xl md:text-2xl font-bold text-end mb-2">
              Yep, that's me!
            </h3>
            <div className="w-full h-[200px] md:h-[180px] lg:h-[200px] bg-white rounded-lg overflow-hidden">
              <video
                src={turtleVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover safari-video-fix"
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  WebkitBoxShadow: 'none',
                  WebkitMaskImage: 'none',
                  maskImage: 'none',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
          </div>
        </div>

        
<div className="block md:hidden relative z-20 -mt-20 text-center ">
  <div className="bg-white rounded-3xl p-4 mx-auto  shadow-lg">
     <div className="w-full h-[160px] bg-white rounded-lg overflow-hidden">
      <video
        src={turtleVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover safari-video-fix"
        style={{
          backgroundColor: 'white',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          WebkitBoxShadow: 'none',
          WebkitMaskImage: 'none',
          maskImage: 'none',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  </div>
  <h3 className="text-primary text-2xl font-bold mt-6">Yep, that's me!</h3>
   
</div>


        {/* --- Shared Section Below --- */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-4 px-4 mt-6 md:mt-0">
          <p className="text-white text-center  sm:mt-0 md:text-right text-base md:text-base font-semibold mb-4 md:mb-0">
            You're probably wondering how I ended up in this situation...
          </p>
          <div className="flex gap-x-10 sm:gap-x-4">
            <Button
              onClick={() => (window.location.href = `${BASE_URL}/ambassador-dashboard`)}
              className="group relative bg-primary hover:bg-sky-500 text-white font-semibold rounded-full px-4 md:px-6 py-2 shadow transition-all flex items-center justify-center overflow-hidden"
            >
              <span className="transition-opacity duration-200 group-hover:opacity-0">
                Learn More
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Learn More
                <ChevronRight className="h-5 w-5" />
              </span>
            </Button>
            <Button
              onClick={() => (window.location.href = `${BASE_URL}/ambassador?tab=dashboard`)}
              className="group relative bg-white hover:bg-white text-primary font-semibold rounded-full px-4 md:px-6 py-2 shadow transition-all flex items-center justify-center overflow-hidden"
            >
              <span className="transition-opacity duration-200 group-hover:opacity-0">
                Dashboard
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Dashboard
                <ChevronRight className="h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurtleSection;
