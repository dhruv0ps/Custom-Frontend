import type React from "react"
import img1 from "@/assets/Homepage/Fleet.gif"
import imgIcon from "@/assets/Home/OverhauledCompetition.jpg";
import carImage from "@/assets/Homepage/Car-Washing.gif"
import { ChevronRight } from "lucide-react";

const FleetEnterpriseServices: React.FC = () => {
  return (
    <>
      <div className="bg-white  px-4  md:px-12 md:py-16">
        <div className=" max-w-full sm:max-w-[80%] mx-auto">

          <div className="flex flex-row-reverse gap-x-6 items-center justify-between md:block mt-2 ">

          <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-primary text-right sm:text-left flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
  <span>Fleet</span>
  <span className="text-lg sm:text-2xl md:text-4xl">Enterprise Services</span>
</h2>

<div className="bg-white rounded-xl shadow-lg w-32 h-28 md:w-32 md:h-32 flex items-center justify-center p-3 mt-0 md:mt-4">
  <img
    src={img1}
    alt="Fleet Icon"
    loading="lazy"
    className="w-26 h-24"
  />
</div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-10 mt-6">
            {/* Icon Section */}


            {/* Content Columns */}
            <div className="flex flex-col md:flex-row gap-10 flex-1">
              {/* Left Column */}
              <div className="basis-1/2">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">Embark On A Journey Of Excellence</h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>• Major Organisations</li>
                  <li>• Government</li>
                  <li>• Corporate</li>
                  <li>• Business: Small, Medium to Large</li>
                  <li>• Rental</li>
                  <li>• Fleet</li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="basis-1/2">
                <h3 className="text-lg md:text-2xl font-bold text-primary mb-3">Strategic Partners At Your Fingertips</h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>• Revolutionise your fleet exit</li>
                  <li>• Vehicles tailored to your business needs</li>
                  <li>• Your gateway to driving success</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-end mt-12 mb-6">
            <button className="group relative px-6 py-3 font-semibold text-base rounded-full transition bg-primary text-white shadow hover:scale-105 overflow-hidden">
              <span className="block group-hover:opacity-0 transition-opacity duration-200">
                Learn More
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn More <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#e5f6ff]  ">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-6 px-4 md:px-8 sm:py-16">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex flex-row-reverse gap-x-16 sm:flex-col sm:items-start justify-between gap-4 mb-6">

              <div>
                <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-primary text-right sm:text-left">

                  <span className="block sm:hidden">
                    <span className="block text-3xl">Overhauled</span>
                    <span className="block text-3xl">Competition</span>
                  </span>
                  <span className="hidden sm:inline whitespace-nowrap">Overhauled Competition</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-2 font-semibold text-gray-800 text-right sm:text-left">
                  Coming soon...
                </p>
              </div>

              {/* Icon */}
              <div className="bg-white rounded-xl shadow-md w-32 h-28 sm:w-32 sm:h-32 p-3 flex items-center justify-center">
                <img
                  src={carImage}
                  alt="Competition Icon"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* Main Heading */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Your Dream Build Awaits!
            </h3>

            {/* Description List */}
            <ul className="text-gray-700 space-y-2 mb-4 whitespace-nowrap">
              <li>• We're turning the spotlight on you</li>
              <li>• Your car will undergo a stunning transformation</li>
            </ul>

            {/* How To Enter */}
            <h4 className="text-primary font-bold text-xl md:text-2xl mb-2">How To Enter</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Get in to win</li>
              <li>• Share your unique automotive story</li>
              <li>• Turn your dream build into a reality</li>
            </ul>
          </div>


          <div className="basis-full md:basis-[60%] relative">
            <div className="w-full max-w-full sm:mt-24 mx-auto">
              <img
                src={imgIcon}
                alt="Car Coming"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>

            <button
              className="group absolute bottom-4 right-4 bg-primary text-white px-6 py-2 rounded-full font-semibold text-base shadow-md hover:scale-105 transition-transform overflow-hidden"
              onClick={() => console.log("Enter Now clicked")}
            >
              <span className="block group-hover:opacity-0 transition-opacity duration-200">
                Enter Now
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Enter Now <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FleetEnterpriseServices