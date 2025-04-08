import type React from "react"
import { useState } from "react"
import { PlusCircle, XCircle } from "lucide-react"
import { ChevronRight } from "lucide-react"
import * as HoverCard from "@radix-ui/react-hover-card"
import img1 from "@/assets/Homepage/03-Helpdesk.gif"
const AboutYouSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>

    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-[80%] mx-auto">
        <h3 className="text-xl md:text-4xl font-bold text-primary mb-4">It's About You</h3>

        <p className="text-gray-700 mb-6 text-base md:text-[17px] leading-relaxed max-w-[80%]">
          Welcome to our cutting-edge automotive platform, meticulously crafted by industry leaders
          committed to revolutionising the automotive experience for Australians while offering
          substantial savings.
        </p>

        <div className="border border-gray-200 rounded-md p-4 md:p-6 relative">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-700  md:text-lg">Read More</h4>
            <button
              className="text-primary hover:scale-110 transition-transform"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Collapse content" : "Expand content"}
            >
              {expanded ? <XCircle size={20} /> : <PlusCircle size={20} />}
            </button>
          </div>

          {expanded && (
            <ul className="list-decimal list-inside text-gray-700 space-y-3 text-sm md:text-base mt-3">
              <li>
                Powered by advanced technology and dynamic tools, we empower users to make informed
                decisions. With a user-friendly interface and genuine discounts, we cater to all your
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
              <li>
                Embrace the #1 destination for a game changing car experience today!
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>

    <div className="bg-primary py-20 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Customer Service Icon Card */}
        <div className="bg-white  rounded-lg shadow-md mb-6 w-40 h-40 flex items-center justify-center">
         <img
         src={img1} 
         loading="lazy"
         />
        </div>

        {/* Heading */}
        <h3 className="text-white text-3xl font-bold mb-2">Contact Us</h3>

        {/* Subheading */}
        <p className="text-white text-xl mb-8">We Would Love To Hear From You</p>

        {/* Contact Button with Hover Effect */}
        <HoverCard.Root openDelay={0} closeDelay={100}>
        <HoverCard.Trigger asChild>
  <button
    className="group bg-white text-primary px-8 py-3 rounded-full font-medium text-lg flex items-center transition-transform hover:scale-105"
    onClick={() => (window.location.href = "/contact")}
  >
  <span className="block group-hover:opacity-0 transition-opacity duration-200">
    Get In Touch
  </span>

  {/* Hover state: text + arrow appears in the center */}
  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
  Get In Touch
    <ChevronRight className="ml-1 h-4 w-4" />
  </span>
  </button>
</HoverCard.Trigger>

          <HoverCard.Portal>
            
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </div>
    </>
  )
}

export default AboutYouSection
