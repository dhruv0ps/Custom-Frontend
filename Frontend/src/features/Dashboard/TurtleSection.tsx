import React from "react";
import { Button } from "@/components/ui/button";
import turtle from "@/assets/Homepage/Turtle-Medium.jpg";

const TurtleSection: React.FC = () => {
  return (
    <div className="relative bg-black      ">
      <div className=" overflow-visible mb-12 min-h-[125px] py-8  mt-36 md:py-12 lg:mt-32 max-w-[80%] mx-auto ">
      
        <div className="absolute -top-32 lg:-top-24 left-1/2 md:left-12 lg:left-24 transform -translate-x-1/2 md:translate-x-0 z-20 lg:mt-0 ">
          <div className="bg-white rounded-3xl md:gap-y-6 lg:ml-6  p-4 shadow-lg border border-primary mt-6 w-[320px] sm:w-[320px] md:w-[380px] lg:w-[400px]">
            <h3 className="text-primary text-xl md:text-2xl font-bold text-end mb-2">Yep, that's me!</h3>
            <div className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]">
              <img
                src={turtle}
                alt="Turtle with rocket"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Black Section Content */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-4 px-4 mt-28 md:mt-0">
          <p className="text-white text-center md:text-right text-base md:text-lg font-semibold mb-4 md:mb-0">
            You're probably wondering how I ended up in this situation...
          </p>
          <Button className="bg-primary hover:bg-sky-500 text-white font-semibold rounded-full px-4 md:px-6 py-2 shadow transition">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TurtleSection;
