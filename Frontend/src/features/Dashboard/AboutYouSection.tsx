import type React from "react"
import { useState } from "react"
import { PlusCircle, XCircle } from "lucide-react"
import { ChevronRight } from "lucide-react"
import img1 from "@/assets/Homepage/03-Helpdesk.gif"
import { useNavigate } from "react-router-dom"
const   AboutYouSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
const navigate = useNavigate()
  return (
    <>

      <div className="bg-white py-16 px-4 md:px-4">
        <div className="max-w-[80%] mx-auto">
          <h3 className="text-xl md:text-4xl font-bold text-primary mb-4 text-center sm:text-left">It's About You</h3>

          <p className="text-gray-700 mb-6 text-base md:text-[17px] leading-relaxed  text-center sm:text-left">
            Welcome to our cutting-edge automotive platform, meticulously crafted by industry leaders
            committed to revolutionising the automotive experience for Australians while offering
            substantial savings.
          </p>

          <div className="border border-gray-200 rounded-md p-4 md:p-6 relative ">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-700  md:text-lg ">Read More</h4>
              <button
                className="text-primary hover:scale-110 transition-transform"
                onClick={(e) => {
                  e.stopPropagation()
                  setExpanded((prev) => !prev)
                }}
                aria-label={expanded ? "Collapse content" : "Expand content"}
              >
                {expanded ? <XCircle size={20} /> : <PlusCircle size={20} />}
              </button>
            </div>

            {expanded && (
              <ul className="list-decimal list-inside text-gray-700 space-y-3 text-sm md:text-base mt-3 text-center sm:text-left">
                <li>
                  Powered by advanced technology and dynamic tools, we empower users to make informed
                  decisions. With a user friendly interface and genuine discounts, we cater to all your
                  automotive needs.
                </li>
                <li>
                  Beyond prioritising your financial savings, we drive positive change through our
                  fundraisers, contributing to meaningful causes on your behalf, creating a powerful
                  ripple effect of positivity.
                </li>
                <li>
                  As a member, enjoy special benefits like partner discounts and exciting trade promotion
                  prize draws. Don't miss the chance to be part of the best online Automotive Ecosystem
                  in Australia, where smart Aussies save time and money daily.
                </li>
                <li className="font-bold">
                  Embrace the #1 destination for a game changing car experience today!
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#ade7ff] sm:bg-primary py-6 sm:py-12 px-4">
        {/* Mobile view - matches the image */}
        <div className="sm:hidden flex flex-row items-center justify-between space-x-6">

          <div className="bg-white rounded-xl shadow-lg w-36 h-28 flex items-center p-3 justify-center">
            <img src={img1} alt="Customer service" loading="lazy" className="w-26 h-24" />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col items-end text-right">
            <h3 className="text-white text-3xl font-bold mb-1">Contact Us</h3>
            <p className="text-black font-semibold text-lg mb-3">We Would Love To Hear From You</p>

            <button
              className="bg-[#18b6ff] text-white px-4 py-2 rounded-full font-medium text-base hover:bg-[#0ca3eb] transition-colors"
            onClick={() => navigate("/contact-us")}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Desktop view - preserved from original */}
        <div className="hidden sm:flex flex-col items-center justify-center text-center">
          <div className="max-w-md mx-auto flex flex-col items-center">
            {/* Customer Service Icon Card */}
            <div className="bg-white rounded-lg shadow-md mb-6 w-36 h-36 flex items-center justify-center">
              <img src={img1} alt="Customer service" loading="lazy" />
            </div>

            {/* Heading */}
            <h3 className="text-white text-3xl font-bold mb-2">Contact Us</h3>

            {/* Subheading */}
            <p className="text-white text-xl mb-8">We Would Love To Hear From You</p>

            
            <button
               onClick={() => navigate("/contact-us")}
  className="group relative bg-white text-primary px-8 py-3 rounded-full font-medium text-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105 cursor-pointer"
>
  {/* Default state */}
  <span className="transition-opacity duration-200 group-hover:opacity-0">
    Get In Touch
  </span>

  {/* Hover state */}
  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
    Get In Touch
    <ChevronRight className="ml-1 h-4 w-4" />
  </span>
</button>
  

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutYouSection
