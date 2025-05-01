import img1 from "@/assets/FundRaisers/Good-.png";
import img2 from "@/assets/FundRaisers/Rectangle-363-w1rJv7Re.png";
import img3 from "@/assets/FundRaisers/Rectangle41-4-C_nQ22DT.png";
import img4 from "@/assets/FundRaisers/Rectangle-308-C2wnmwP.png";
import img5 from "@/assets/FundRaisers/Rectangle-309-BI0AwoR.png";
import img6 from "@/assets/FundRaisers/RSPCA-D0_1xrD.png";
import img7 from "@/assets/FundRaisers/993ed8ac-aa58-4170-ba09-70df3ba4bfdd.png"
import img8 from "@/assets/FundRaisers/logo_sociall.png"
import img9 from "@/assets/FundRaisers/PeterMacLogo.jpg"
import { ChevronRightIcon } from '@radix-ui/react-icons';
import {  useRef } from 'react';
interface CharityImageProps {
    src: string;
    alt: string;
    index: number;
  }
const PremiumPartner = () => {
    const charities = [
        {
            number: 1,
            title: "Good Friday Appeal",
            description: "The Good Friday Appeal raises funds for the Royal Children's Hospital in Melbourne, supporting life-saving medical care and research for children.",
            img: img1,
        },
        {
            number: 2,
            title: "Make-A-Wish AUSTRALIA",
            description: "Make-A-Wish Australia grants wishes to children with critical illnesses, bringing joy and hope during tough times.",
            img: img2,
        },
        {
            number: 3,
            title: "Starlight Children's Foundation",
            description: "Starlight brightens the lives of seriously ill children by providing fun, entertainment, and wish granting to lift their spirits.",
            img: img3,
        },
        {
            number: 4,
            title: "FOODBANK",
            description: "Foodbank is Australia's largest food relief organisation, distributing food to those in need and supporting communities during crises.",
            img: img4,
        },
        {
            number: 5,
            title: "Lifeline",
            description: "Lifeline provides 24/7 crisis support and suicide prevention services, offering help to those in emotional distress.",
            img: img5,
        },
        {
            number: 6,
            title: "RSPCA",
            description: "The RSPCA works to prevent animal cruelty, rescue and rehome animals, and promote better welfare standards across Australia.",
            img: img6,
        },
        {
            number: 7,
            title: "Peter MacCallum Cancer Foundation",
            description:
              "The Peter MacCallum Cancer Foundation funds life-saving cancer research, supporting one of the world's leading cancer centres to improve treatment, care and outcomes for patients.",
            img: img9,
          },
          {
            number: 8,
            title: "National Breast Cancer Foundation",
            description:
              "The National Breast Cancer Foundation funds world-class research focused on prevention, early detection and better treatments, with the goal of stopping deaths from breast cancer.",
            img: img8,
          },
          {
            number: 9,
            title: "Beyond Blue",
            description:
              "Beyond Blue supports Australians affected by anxiety, depression and suicide, providing vital mental health services, resources & advocacy to help people feel better & live well.",
            img: img7,
          },
    ];

    // Custom component for properly sized and centered images
    const CharityImage: React.FC<CharityImageProps> = ({ src, alt, index }) => {
        const imgRef = useRef(null)
    
        // Apply specific adjustments for images 7, 8, 9
        const getSpecialStyles = (idx: number) => {
          // These are the indices for Peter Mac, National Breast Cancer, and Beyond Blue
          if (idx === 6 || idx === 7) {
            return "w-full h-full "
          } else if (idx === 8) {
            return "w-full h-full"
          }
          return "w-full h-full"
        }
        
        return (
            <div className="rounded-xl overflow-hidden shadow-lg w-full mb-4 bg-white">
                <div className="h-64  flex items-center justify-center ">
                    <img
                        ref={imgRef}
                        src={src}
                        alt={alt}
                        className={` object-cover ${getSpecialStyles(index)}`}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#ffcdf4] max-w-full sm:max-w-[90%] mx-auto rounded-lg py-10 mt-6">
            <div className="text-center px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 uppercase text-[#e6022a] text-nowrap">Charities We Support</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {charities.map((charity, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Number and Title */}
                            <div className="flex items-start w-full mb-2">
                                <div className="text-8xl font-extrabold text-white mr-4">
                                    {index + 1}
                                </div>
                                <div className="flex flex-col text-right">
                                    <h3 className="text-[18px] font-bold text-black mb-2">
                                        {charity.title}
                                    </h3>
                                    <p className="text-sm text-[#e6022a]">
                                        {charity.description}
                                    </p>
                                </div>
                            </div>

                            {/* Use custom image component */}
                            <CharityImage 
                                src={charity.img} 
                                alt={`${charity.title} logo`} 
                                index={index}
                            />
                     
                            <div className="w-full flex justify-end">
                              <button className="bg-[#e6022a] text-white font-bold py-2 px-6 rounded-full shadow-lg relative group transition-all duration-300 overflow-hidden h-11 w-[160px]">
                                
                                {/* Default Text */}
                                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                  Donate Now
                                </span>

                                {/* Text + Chevron on Hover */}
                                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                  Donate Now
                                  <ChevronRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                              </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PremiumPartner;