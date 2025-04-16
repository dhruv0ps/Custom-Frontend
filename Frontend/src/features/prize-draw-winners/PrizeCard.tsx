    import React from "react";
    import soonImg from "@/assets/MateRate/soon.webp"; 

    interface PrizeCardProps {
    number: number;
    title?: string;
    drawNumber: string;
    label?: string;
    }

    const PrizeCard: React.FC<PrizeCardProps> = ({ number, title, drawNumber }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Card background */}
        <div className="bg-[#b7eaff] p-6 pt-16 pb-6 rounded-2xl">
          {/* Big Number */}
          <div className="absolute top-4 left-6 text-white text-7xl font-extrabold leading-none ">{number}</div>
  
          {/* Title and Label */}
          <div className="absolute top-6 right-6 text-right">
            {title && <div className="text-white font-bold text-lg">{title}</div>}
            <div className="text-black font-bold text-sm">DRAW WINNER</div>
          </div>
  
          {/* White Card */}
          <div className="w-full bg-white rounded-[20px] overflow-hidden pt-5 pb-5 px-6 mt-8 flex flex-col items-center justify-center shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)]">
          <img
            src={soonImg}
            alt="Coming Soon"
            className="w-32 h-auto object-contain "
            />
            <p className="text-black text-sm font-bold text-center">
            NEXT DRAW – NUMBER {drawNumber}
            </p>
        </div>
        </div>
      </div>
    );
    };

    export default PrizeCard;
