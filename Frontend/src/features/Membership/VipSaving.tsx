import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/Membership/Cyril.webp";
import img2 from "@/assets/Membership/Eric.webp";
import img3 from "@/assets/Membership/Barry.webp";
import img4 from "@/assets/Membership/Meet-Sally.webp";
import img5 from "@/assets/Membership/Meet-Paul.webp";
import img6 from "@/assets/Membership/Milly.webp";
import img7 from "@/assets/Membership/Meet-Tiffany.webp";
import img8 from "@/assets/Membership/Meet-Nick.webp";
import adImage from "@/assets/Membership/For-Rent.webp";

const VipSavingsPage: React.FC = () => {
  const navigate = useNavigate();

  const highlightText = (text: string) => {
    const pattern = /(\$\d+(,\d+)?|\+\$?\d+(,\d+)?|saving.*?\b|free\b|thousands\b|Sold car in 24Hrs?)/gi;
    const highlightClass = "text-[#00ccff] font-semibold";
    return text.split(pattern).map((part, index) =>
      pattern.test(part) ? (
        <span key={index} className={highlightClass}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const cards = [
    { img: img1, region: "NT", benefits: ["Saved +$150 on a mechanical service", "Sold old car without spending a dollar", "Won $100 in our ‘bucks bonanza’ draw", "Bought new tyres saving him +$350", "Saved +$300 switching insurance provider"], name: "Meet Cyril, He Saved Over", saved: "$800 WITH US!", bg: "#ceedff" },
    { img: img2, region: "ACT", benefits: ["Bought a new car and saved +$1,800", "Sold old car without spending a dollar", "Won $150 in ‘your tank, our treat’ draw", "Saved +$50 on a dent repair", "Tinted car windows saving him +$100"], name: "Meet Eric, He Saved Over", saved: "$2,000 WITH US!", bg: "#b1e3ff" },
    { img: img3, region: "SA", benefits: ["Bought a new car and saved +$2,000", "Sold old car without spending a dollar", "Won $50 in ‘your tank, our treat’ draw", "Saved +$250 on ‘mates rates’ services", "Saved +$300 switching insurance provider"], name: "Meet Barry, He Saved Over", saved: "$2,500 WITH US!", bg: "#86d1fc" },
    { img: img4, region: "TAS", benefits: ["Secured new car at a great price", "Sold her old car in under an hour for free", "Won $250 in our ‘glow goals’ draw", "Saved $1,250 through mates rates services", "Saved +$250 switching insurance provider"], name: "Meet Sally, She Saved Over", saved: "$3,500 WITH US!", bg: "#c6e8ff" },
    { img: img5, region: "WA", benefits: ["Saved over $3,500 on his new car purchase", "Saved over $1,500 on ‘mates rates’ services", "Won $100 in our ‘bucks bonanza’ draw", "Saved $400 switching insurance provider", "Saved thousands via his new finance deal"], name: "Meet Paul, He Saved Over", saved: "$5,000 WITH US!", bg: "#b7eaff" },
    { img: img6, region: "QLD", benefits: ["Saved +$1,750 on ‘mates rates’ services", "Sold car in 24Hrs, cash received same day", "Won $5,000 in our ‘drive, relax, spend’ draw", "Bought a new car saving +$4,500", "Saved +$3,000 refinancing her car loan"], name: "Meet Milly, She Saved Over", saved: "$9,000 WITH US!", bg: "#5ccbf5" },
    { img: img7, region: "VIC", benefits: ["Saved over $3,500 on her new car purchase", "Won $500 in our ‘glow goals’ draw", "Saved over $2,500 on mates rates services", "Saved $500 switching insurance provider", "Saved thousands via her new finance offer"], name: "Meet Tiffany, She Saved Over", saved: "$11,000 WITH US!", bg: "#1cbeff" },
    { img: img8, region: "NSW", benefits: ["Saved +$5,750 on mates rates services", "Sold car in 24hrs, cash received same day", "Won $100 in our ‘bucks bonanza’ draw", "Bought a new car saving +$4,500", "Saved +$3,000 refinancing his car loan"], name: "Meet Nick, He Saved Over", saved: "$13,000 WITH US!", bg: "#002b63", dark: true },
  ];

  return (
    <div className="bg-[#e5e5e5]">
      <div className="sm:max-w-[80%] mx-auto px-4 py-10">
        <h2 className="text-2xl text-center font-bold text-[#1cbeff] mb-2">
          UNLOCK GENUINE SAVINGS!
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A Year in the Life of Our Members Discounts*
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-3xl shadow-lg p-4 w-full max-w-sm flex flex-col justify-between"
              style={{ backgroundColor: card.bg }}
            >
              <div className="flex items-center justify-between mb-4">
                <img src={card.img} alt={card.region} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex flex-col items-end">
                  <h3 className="text-white font-bold uppercase text-[30px] text-right">VIP</h3>
                  <span className="bg-white text-[#1cbeff] font-bold text-[30px] text-end rounded-l-full overflow-hidden border border-white py-2 pr-24 pl-12 inline-block w-auto">
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
                      <span className="text-black text-[13px]">{highlightText(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold ${card.dark ? "text-white" : "text-black"}`}>{card.name}</p>
                  <h4 className="text-white font-bold uppercase text-[24px]">{card.saved}</h4>
                </div>
                <button onClick={() => navigate("/signup")} className="bg-white text-[#1cbeff] font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
                  Sign Me Up
                </button>
              </div>
            </div>
          ))}

          {/* Last Card: AdBox */}
          <div className="bg-[#8c8d91] rounded-3xl shadow-lg p-6 max-w-sm w-full mx-auto">
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
              <button className="bg-white text-primary font-semibold px-6 py-2 rounded-full shadow hover:shadow-md transition">
                Enquire Now
              </button>
            </div>
            <div className="bg-white rounded-[10px] overflow-hidden shadow-[0px_2px_10px_rgba(0,0,0,0.3)]">
  <img src={adImage} alt="For Rent Sign" className="w-full h-auto object-contain" />
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipSavingsPage;
