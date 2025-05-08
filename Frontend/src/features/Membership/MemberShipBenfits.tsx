
import React from 'react';


import HoverArrowButton from '@/util/HoverButton';
import { BASE_URL } from '@/config';
const MembershipBenefits: React.FC = () => {

    const benefits = [
        {
            number: "1",
            title: "Sell Your Car",
            subtitle: "Free From Start To End",
            description: "Enjoy a hassle free car selling experience with no hidden fees, as we manage every step for you from listing to final sale, entirely free of charge.",
        },
        {
            number: "2",
            title: "Buy A  Car",
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
            <h1 className="text-3xl sm:text-4xl text-center font-bold text-black mb-10">
  Your Membership,
  <br className="block sm:hidden" />
  <span className="inline sm:inline-block"> Your Savings</span>
</h1>

            {/* Mobile view: display as single column list */}
            <div className="md:hidden space-y-4 max-w-[95%] mx-auto">
                {benefits.map((item, index) => (
                    <div 
                        key={index}
                        className="  flex items-center justify-center"
                    >
                     <div className="bg-white rounded-lg shadow-inner w-[80px] h-[80px] text-[75px] text-[#1CBEFF] font-bold text-center p-[5px] my-[15px] mx-0 flex items-center justify-center mr-4"style={{ boxShadow: "inset grey 0px 0px 8px 1px" }}>
  {item.number}
</div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-black">
                                {item.title} <span className="text-black">- {item.subtitle}</span>
                            </h3>
                            <p className="text-xs text-black mt-1">
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
                        <p className=" text-sm md:text-base font-semibold text-sky-400 text-center mb-2">
                            {item.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 font-medium text-center leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
         
            <div className="w-full py-4 sm:py-8">
      <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between   sm:px-0">
        
        {/* Text Block */}
        <div
          className="bg-white rounded-r-full py-1 sm:py-2 pr-8 sm:pr-24 sm:px-6 flex-shrink "
          style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
        >
        <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap ml-4">
        Sell Free, Buy Smart, Win,
         <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">SAVE BIG!</span>
        </h2>
      </div>
      <div className="flex justify-end flex-shrink-0 sm:ml-2 mr-4 sm:mr-0">
          <HoverArrowButton
            label="Sign Me Up"
            onClick={() => (window.location.href = `${BASE_URL}/auth/register`)}
            className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-white"
            hoverTextClass="text-white"
          />
        </div>
    </div>
    </div>
        </div>
    );
};

export default MembershipBenefits;
