
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const MembershipBenefits: React.FC = () => {
    const navigate = useNavigate()
    const benefits = [
        {
            number: "1",
            title: "Sell Your Car",
            subtitle: "Free From Start To End",
            description: "Enjoy a hassle free car selling experience with no hidden fees, as we manage every step for you from listing to final sale, entirely free of charge.",
        },
        {
            number: "2",
            title: "Buy a New Car",
            subtitle: "Pay Less Via Our Network",
            description: "Access exclusive deals and discounts on new cars through our extensive network, ensuring you pay less than the market price for your next vehicle.",
        },
        {
            number: "3",
            title: "Mates Rates",
            subtitle: "Diverse Range Of Services",
            description: "Benefit from special 'Mates Rates' pricing on a wide range of automotive services, all designed to save you money.",
        },
        {
            number: "4",
            title: "Trade Promotion",
            subtitle: "Entry Into Every Draw",
            description: "Gain automatic entry into every promotional draw we decide to run, giving you a chance to win exciting prizes just by being a part of our community.",
        },
        {
            number: "5",
            title: "Virtual Tours",
            subtitle: "Guided By Car Experts",
            description: "Be among the first to explore new vehicles with our virtual tours, guided by car experts who provide insights tailored to your preferences.",
        },
    ];

    return (
        <div className="bg-[#8ddeff] py-8 md:px-4 md:py-12">
            
            <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-6 md:mb-8">Your Membership, Your Savings</h2>
            
            {/* Mobile view: display as single column list */}
            <div className="md:hidden space-y-4 max-w-sm mx-auto">
                {benefits.map((item, index) => (
                    <div 
                        key={index}
                        className="  flex items-center"
                    >
                     <div className="bg-white rounded-lg shadow-inner w-[80px] h-[80px] text-[75px] text-[#1CBEFF] font-bold text-center p-[5px] my-[15px] mx-0 flex items-center justify-center mr-4"style={{ boxShadow: "inset grey 0px 0px 8px 1px" }}>
  {item.number}
</div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-black">
                                {item.title} <span className="text-black">- {item.subtitle}</span>
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Desktop view: display as grid */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-md flex flex-col h-full"
                    >
                        <div className="text-6xl font-bold text-sky-400 text-center leading-none mb-4">{item.number}</div>
                        <h3 className="text-lg font-bold text-black text-center mb-1">
                            {item.title}
                        </h3>
                        <p className="text-base font-semibold text-sky-400 text-center mb-2">
                            {item.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 font-medium text-center leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="max-w-full sm:max-w-[80%] mx-auto mt-6 flex flex-row sm:flex-row items-center justify-between">
  <div className="bg-white rounded-r-full py-2 pl-2 sm:ml-6 sm:pl-6 pr-8 mb-4 sm:mb-0">
    <h2 className="text-base md:text-3xl font-bold text-black">
      <span className="block sm:inline whitespace-nowrap">
        Sell Free, Buy Smart, Win
      </span>
      <span className="block sm:inline text-4xl sm:text-[#1cbeff] sm:text-3xl text-[#1cbeff] sm:ml-2">
        SAVE BIG!
      </span>
    </h2>
  </div>
                <button
  onClick={() => navigate("/signup")}
  className="group relative bg-[#1cbeff] hover:bg-[#00b2e3] transition-all px-8 py-3 mr-2 sm:mr-6  text-white font-semibold text-sm sm:text-base md:text-base rounded-full shadow-md overflow-hidden md:min-w-[150px] text-center"
>
  {/* Default Text */}
  <span className="block w-full transition-opacity duration-200 group-hover:opacity-0">
    Sign Me Up
  </span>

  {/* Hover Text with Arrow */}
  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none w-full">
    Sign Me Up
    <ChevronRight className="ml-2 h-5 w-5" />
  </span>
</button>
            </div>
        </div>
    );
};

export default MembershipBenefits;
