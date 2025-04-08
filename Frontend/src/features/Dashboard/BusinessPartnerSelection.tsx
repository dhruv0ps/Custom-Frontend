import rocket from "@/assets/Homepage/Icon-46-Rocket.gif"
import manImg from "@/assets/Homepage/Business-partners-by-Wheelz.webp"
import { ChevronRight } from "lucide-react"

export default function BusinessPartnerSection() {
  return (
    <section className="bg-[#eef9ff] py-16 mt-6">
      <div className="container max-w-[80%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="w-full md:w-1/2">
          <img
            src={manImg}
            alt="Business man"
            className="rounded-3xl shadow-xl w-full h-auto object-cover"
          />
        </div>
        
        {/* Right Content */}
        <div className="w-full md:w-1/2 relative">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 text-center md:text-left">
            Business Partner Opportunities
          </h2>
          
          {/* Rocket icon */}
          <div className="absolute top-0 right-0 hidden md:block w-20 h-20">
             <img src={rocket} alt="Rocket icon" className="w-full h-full object-contain" loading="lazy" />
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-semibold mb-2">Calling All Automotive Businesses</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Boost your sales results! Unlock exclusive partnerships tailored to meet your needs and expand your reach.
            Collaborate with us to connect with more customers and secure your position in our automotive community today,
            bypassing our waiting list placement.
          </p>
          
          {/* Highlight Box */}
          <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-gray-200">
            <h4 className="text-base font-semibold mb-2">Current Positions Filling Fast</h4>
            <p className="text-sm text-gray-600">
              Auto Groups | Dealerships | Service Providers <br />
              Fleet Procurement | Manufacturers | Retail Groups
            </p>
          </div>
          
          <div className="flex items-end justify-end">
            <button 
              className="w-full md:w-auto group relative px-6 py-2 font-semibold text-lg rounded-full transition 
                bg-primary overflow-hidden text-white border-primary shadow-[0_4px_12px_rgba(0,178,255,0.3)] 
                hover:scale-105"
            >
              <span className="block group-hover:opacity-0 transition-opacity duration-200">
                Partner Up
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Partner Up <ChevronRight className="ml-1 h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
