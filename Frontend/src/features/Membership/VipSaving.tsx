import React from "react";

import img1 from "@/assets/Membership/1312.jpg";
import img2 from "@/assets/Membership/1221.jpg";
import img3 from "@/assets/Membership/1291.jpg";
import img4 from "@/assets/Membership/1271.jpg";
import img5 from "@/assets/Membership/1241.jpg";
import img6 from "@/assets/Membership/1261.jpg";
import img7 from "@/assets/Membership/1213.png";
import img8 from "@/assets/Membership/1311.jpg";
import adImage from "@/assets/Membership/For-Rent.webp";
import HoverArrowButton from "@/util/HoverButton";
import { BASE_URL } from "@/config";
const VipSavingsPage: React.FC = () => {
  

 const highlightText = (text: string) => {
  const pattern =
    /(\$\d{1,3}(?:,\d{3})*(?:\.\d+)?|\+\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?|saving him.*?\b|free\b|thousands\b|Sold car in 24Hrs\b|instant[ \u00A0]offer\b|under[ \u00A0]?\d+[ \u00A0]?hr(?:s)?\b|under an hour for\b)/gi;


  const highlightClass = "text-[#00ccff] font-semibold";
  const matches = text.match(pattern) || [];

  let matchIndex = 0;

  return text.split(pattern).map((part, index) => {
    // Compare in order instead of using .includes
    if (matchIndex < matches.length && part === matches[matchIndex]) {
      matchIndex++;
      return (
        <span key={index} className={highlightClass}>
          {part}
        </span>
      );
    }
    return part;
  });
};


  const cards = [
    { img: img1, region: "NT", benefits: ["Saved +$150 on a mechanical service", "Sold his used car for free", "Won $100 in our ‘bucks bonanza’ draw", "Bought new tyres saving him +$350", "Saved +$300 switching insurance provider"], name: "Meet Cyril, He Saved Over", saved: "$800 WITH US", bg: "#ceedff" },
    { img: img2, region: "ACT", benefits: ["Bought a new car and saved +$1,800", "Sold his used car in under 1hr", "Won $150 in ‘your tank, our treat’ draw", "Saved +$50 on a dent repair", "Tinted car windows saving him +$100"], name: "Meet Eric, He Saved Over", saved: "$2,000 WITH US", bg: "#b1e3ff" },
    { img: img3, region: "SA", benefits: ["Bought a new car and saved +$2,000", "Sold his car for more Vs. instant offer", "Won $50 in ‘your tank, our treat’ draw", "Saved +$250 on ‘mates rates’ services", "Saved +$411 switching insurance provider"], name: "Meet Barry, He Saved Over", saved: "$2,500 WITH US", bg: "#86d1fc" },
    { img: img4, region: "TAS", benefits: ["Secured new car at a great price +$1,888", "Sold her old car in under an hour for free", "Won $250 in our ‘glow goals’ draw", "Saved $1,250 through mates rates services", "Saved +$250 switching insurance provider"], name: "Meet Sally, She Saved Over", saved: "$3,500 WITH US", bg: "#c6e8ff" },
    { img: img5, region: "WA", benefits: ["Saved over $3,500 on his new car purchase", "Saved over $1,500 on ‘mates rates’ services", "Won $100 in our ‘bucks bonanza’ draw", "Saved $400 switching insurance provider", "Saved thousands via his new finance deal"], name: "Meet Paul, He Saved Over", saved: "$5,000 WITH US", bg: "#b7eaff" },
    { img: img6, region: "QLD", benefits: ["Saved +$1,750 on ‘mates rates’ services", "Sold car in 24hrs, cash received same day", "Won $5,000 in our ‘drive, relax, spend’ draw", "Bought a new car saving +$4,500", "Saved +$3,985 refinancing her car loan"], name: "Meet Milly, She Saved Over", saved: "$9,000 WITH US", bg: "#5ccbf5" },
    { img: img7, region: "VIC", benefits: ["Saved over $3,500 on her new car purchase", "Won $500 in our ‘glow goals’ draw", "Saved over $2,500 on mates rates services", "Saved $500 switching insurance provider", "Saved thousands via her new finance offer"], name: "Meet Tiffany, She Saved Over", saved: "$11,000 WITH US", bg: "#1cbeff" },
    { img: img8, region: "NSW", benefits: ["Saved +$5,750 on mates rates services", "Sold car in 24hrs, cash received same day", "Won $100 in our ‘bucks bonanza’ draw", "Bought a new car saving +$4,500", "Saved +$3,000 refinancing his car loan"], name: "Meet Nick, He Saved Over", saved: "$13,000 WITH US", bg: "#002b63", dark: true },
  ];

  return (
    <div className="bg-[#e5e5e5]">
     <div className="w-full sm:px-4 px-0 max-w-[95%] sm:max-w-[80%] mx-auto py-10">

        <h2 className="text-2xl text-center font-bold text-[#1cbeff] mb-2">
          UNLOCK GENUINE SAVINGS!
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A Year In The Life Of Our Members Discounts*
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-3xl shadow-lg p-4 w-full sm:max-w-sm flex flex-col justify-between"
              style={{ backgroundColor: card.bg }}
            >
              <div className="flex items-center justify-between mb-4">
              
<img 
  src={card.img} 
  alt={card.region} 
  className="w-24 h-24 mt-1 sm:mt-0 md:w-28 md:h-28 rounded-xl object-cover object-center" 
/>
                <div className="flex flex-col items-end">
                  <h3 className="text-white font-bold uppercase text-[30px] text-right">VIP</h3>
                  <span className="bg-white text-[#1cbeff] font-bold text-[24px] text-right rounded-l-full overflow-hidden border border-white ml-0 px-6 py-2 w-full">
                    {card.region}
                  </span>

                </div>
              </div>

              <div className="bg-white p-4 rounded-xl mb-6">
                <ul className="space-y-3">
                  {card.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-[#8cd6f4] rounded-md p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-black text-[13px] sm:text-[11px] whitespace-nowrap sm:mt-2 mt-1 ">{highlightText(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold sm:text-nowrap ${card.dark ? "text-white" : "text-black"}`}>{card.name}</p>
                  <h4 className="text-white font-bold uppercase  text-[20px] sm:text-[24px] sm:text-nowrap">{card.saved}</h4>
                </div>
                <HoverArrowButton
                  label="Sign Me Up"
                 onClick={() => (window.location.href = `${BASE_URL}/become-member/membership`)}
                  className="bg-white hover:bg-gray-100 px-6 py-2 rounded-full"
                  textClass="text-[#1cbeff] font-semibold"
                  hoverTextClass="text-[#1cbeff] font-semibold"
                />

              </div>
            </div>
          ))}

          {/* Last Card: AdBox */}
          <div className="bg-[#8c8d91] rounded-3xl shadow-lg p-6 sm:max-w-sm w-full mx-auto">
            <h3 className="text-black font-bold uppercase text-right text-lg mb-1">
              MADE YOU LOOK
            </h3>
            <span className="text-[#1cbeff] font-semibold uppercase text-[14px] leading-[1.5em] text-right block  cursor-pointer mb-2">
              ADVERTISE YOUR BUSINESS HERE
            </span>
            <p className="text-white text-[14px] leading-[1.5em] text-right pr-[10px] mt-[10px] break-words mb-4">
              Boost your visibility and reach more customers, rent this prime space on our website today!
            </p>
            <div className="flex justify-end mb-4">
              <HoverArrowButton
                label="Enquire Now"
               onClick={() => (window.location.href = `${BASE_URL}/become-member/membership`)}
                className="bg-white hover:bg-gray-100 px-6 py-2 rounded-full shadow hover:shadow-md"
                textClass="text-[#1cbeff] font-semibold"
                hoverTextClass="text-[#1cbeff] font-semibold"
              />
            </div>
            <div className="bg-white rounded-[10px] overflow-hidden shadow-[0px_2px_10px_rgba(0,0,0,0.3)]">
              <img src={adImage} alt="For Rent Sign" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 sm:py-8 block md:hidden">
    <div className="max-w-full  mx-auto flex flex-row items-center justify-between  sm:px-0">
      
      {/* Text Block */}
      <div className="bg-white rounded-r-full py-1 sm:py-2 pl-2 pr-4 sm:pl-6 sm:pr-18 flex-shrink"
       style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-base sm:text-base  font-bold whitespace-nowrap">
        Monthly Membership
          <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">
          {""} Simply pays for itself
          </span>
        </h2>
      </div>
  
      {/* Button */}
      <div className=" sm:w-auto mr-4 sm:mr-2">
      <HoverArrowButton
  label="Sign Me Up"
  onClick={() => (window.location.href = `${BASE_URL}/become-member/membership`)}
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

export default VipSavingsPage;
