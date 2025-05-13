import gif1 from "@/assets/Homepage/Relaxed.gif"
import gif2 from "@/assets/Homepage/Wink.gif"
import gif3 from "@/assets/Homepage/Dealer-Demo.gif"
import gif4 from "@/assets/Homepage/Vip.gif"
import gif5 from "@/assets/Homepage/Voucher.gif"
import gif6 from "@/assets/Homepage/Video-Conference.gif"
import gif7 from "@/assets/Homepage/Lock.gif"
import gif8 from "@/assets/Homepage/Credit.gif"
import gif9 from "@/assets/Homepage/Car-Crash.gif"
import gif10 from "@/assets/Homepage/Business-Network.gif"
import gif11 from "@/assets/Homepage/Counter.gif"
import gif12 from "@/assets/Homepage/Car-Washing.gif"
import gif13 from "@/assets/Homepage/Business-Partners.gif"
import gif14 from "@/assets/Homepage/Winners.gif"
import gif15 from "@/assets/Homepage/Teddy-Bear.gif"
import gif16 from "@/assets/Homepage/megaphone.gif"
import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState,useEffect } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
type Service = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  bg: string;
  route: string;
  counterGif?: string;
};
const services = [
  {
    title: "Sell Your Car",
    description: "Sell Smarter, Earn More! It’s Fast, Free & Easy",
    image: gif1,
    buttonText: "Sell Now",
    bg: "#002b63",
    route: "/sell-your-car",
  },
  {
    title: "Buy A New Car",
    description: "Great Deals Via Manufacturer Approved Dealerships",
    image: gif2,
    buttonText: "Buy Now",
    bg: "#004281",
    route: "/buy-your-car",
  },
  {
    title: "Demo & Pre-Owned Cars",
    description: "Best Of Both Worlds, Quality And Savings In One Location",
    image: gif3,
    buttonText: "Shop Now",
    bg: "#0156a7",
    route: "/demo-pre-owned",
  },
  {
    title: "Trade Promotion Draws",
    description: "VIP Members Only: Free Draws. Real Cash Prizes. Your Chance To Win Starts Now.",
    image: gif4,
    buttonText: "Enter Now",
    bg: "#027cb2",
    route: "/trade-promotion",
  },
  {
    title: "Membership",
    description: "Cut Automotive Costs & Keep More Money In Your Pocket",
    image: gif5,
    buttonText: "Join Now",
    bg: "#3c9cd6", 
    counterGif: gif11,
    route: "/membership",
  },
  {
    title: "Virtual Tours",
    description: "Explore The Future Of Car Shopping From Home",
    image: gif6,
    buttonText: "Tour Now",
    bg: "#5ccbf5",
    route: "/virtual-tours",
  },
  {
    title: "Mates Rates Discounts",
    description: "Lock In Your Special Price Today",
    image: gif7,
    buttonText: "Get Deals",
    bg: "#86d1fc",
    route: "/mates-rates-discounts",
  },
  {
    title: "Finance",
    description: "Car Affordability Simplified",
    image: gif8,
    buttonText: "Apply Now",
    bg: "#b1e3ff",
    route: "/finance",
  },
  {
    title: "Insurance",
    description: "Maximise Your Protection\nMinimise The Costs",
    image: gif9,
    buttonText: "Get Quote",
    bg: "#b1e3ff",
    route: "/insurance",
  },
  {
    title: "Fleet",
    description: "Dynamic Strategic\nPartners At Your Fingertips",
    image: gif10,
    buttonText: "Learn More",
    bg: "rgba(177,227,255,0.63)",
    route: "/fleet",
  },
  {
    title: "Overhauled Competition",
    description: "Bring Your Dream Car Build To Life",
    image: gif12, 
    buttonText: "Enter Now",
    bg: "rgba(204, 237, 255, 0.5)",
    route: "/overhauled",
  },
  {
    title: "Business Partnership",
    description: "We’re Seeking Automotive Businesses To Partner With Us And Grow Together",
    image: gif13,
    buttonText: "Partner Up",
    bg: "rgba(229, 246, 255, 0.5)",
    route: "/business-partners",
  },
  {
    title: "Prize Draw Winners",
    description: "Kudos To Our Victorious Members",
    image: gif14,
    buttonText: "Apply Now",
    bg: "rgba(242, 250, 255, 0.5)",
    route: "/prize-draw-winners",
  },
  {
    title: "We Support Charities",
    description: "Your Participation Will Aid Worthy Causes For A Lasting Impact",
    image: gif15,
    buttonText: "Learn More",
    bg: "#feedf4",
    route: "/fundraisers",
  },
  {
    title: "Made You Look",
    description: "Rent This Space And Boost Your Business Visibility!",
    image: gif16,
    buttonText: "Enquire Now",
    bg: "#ebecec",
    route: "/",
  },
  
]
export default function ServiceCards() {
  const navigate = useNavigate();
  const HoverButton = ({ service, index }: { service: any; index: number }) => {
    const [hovered, setHovered] = useState(false);
   
    
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    const handleMouseEnter = () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setHovered(true);
    };
    
    const handleMouseLeave = () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = setTimeout(() => {
        setHovered(false);
      }, 50);
    };
    
    
    useEffect(() => {
      return () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      };
    }, []);
  
    const isRed = index === 13;
    
    return (
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          position: "relative",
          padding: "0.375rem 1.25rem",
          fontWeight: 600,
          fontSize: "0.875rem",
          borderRadius: "9999px",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          color: isRed ? "#ef4444" : "#00b2ff",
          border: `1px solid ${isRed ? "#ef4444" : "#00b2ff"}`,
          boxShadow: `0 4px 12px ${
            isRed ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 178, 255, 0.3)"
          }`,
        }}
      >
       
        <span
          style={{
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.3s ease",
            position: "relative",
            zIndex: 2,
            display: "block",
          }}
        >
          {service.buttonText}
        </span>
  
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            zIndex: 3,
          }}
        >
          {service.buttonText}
          <ChevronRight style={{ marginLeft: "0.25rem", width: 16, height: 16 }} />
        </span>
      </button>
    );
  };
  return (
    <div className="container max-w-full sm:max-w-[80%] mx-auto px-4 py-8">
      <h2 className="font-bold text-[#1cbeff] text-center text-2xl md:text-3xl mb-6 ">Our Service Breakdown</h2>
   <div className="block lg:hidden space-y-4">
{services.map((service: Service, index: number) => (
    <Card
      key={index}
      onClick={() => navigate(service.route)}
      className={`rounded-2xl flex items-center px-4 py-4 shadow-lg overflow-hidden space-x-4 ${
        index < 5 ? "text-white" : "text-black"
      }`}
      style={{ backgroundColor: service.bg }}
    >
      
      <div className="flex-shrink-0 w-24 h-24 bg-white shadow-md rounded-lg flex items-center justify-center mr-4">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Content on the right */}
      <div className="flex flex-col flex-grow justify-end">
        <h3 className="text-base font-bold mb-1 text-right">{service.title}</h3>
        <p className="text-sm mb-2  text-right">{service.description.replace('\n', ' ')}</p>

        {service.counterGif && (
  <div className="mb-2 flex justify-end">
    <img
      src={service.counterGif}
      alt="Counter"
      loading="lazy"
      decoding="async"
      className="h-8 object-contain ml-auto"
    />
  </div>
)}
        <div className="flex justify-end">        <button
          className={`mt-1 w-fit px-6 py-1.5 font-semibold text-xs rounded-full 
            bg-white text-primary hover:bg-gray-100 transition-transform hover:scale-105 `}
        >
          {service.buttonText}
        </button>
        </div>

      </div>
    </Card>
  ))}
</div>

    
    {/* Desktop view - grid layout */}
    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {services.map((service, index) => (
        <Card
          key={index}
          onClick={() => navigate(service.route)}
          className={`rounded-2xl flex flex-col text-center px-6 py-8 shadow-lg min-h-[350px] ${
            index < 5 ? "text-white" : "text-black"
          }`}
          style={{ backgroundColor: service.bg }}
        >
          <div className="flex flex-col items-center flex-grow">
          <div className="w-24 h-24 mb-4 bg-white shadow-xl rounded-lg flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="w-20 h-20 object-contain "
              />
            </div>
        
            <h3 className="uppercase text-sm font-bold tracking-wider mb-2">
              {service.title}
            </h3>
        
            <p className="text-sm whitespace-pre-line mb-2">{service.description}</p>
        
            {service.counterGif && (
              <div className="my-4">
                <img
                  src={service.counterGif}
                  alt="Counter"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-10 object-contain mx-auto"
                />
              </div>
            )}
        
            
            <div className="flex-grow" />
          </div>
        
          {/* <button
            className={`w-full group relative px-5 py-1.5 font-semibold text-sm rounded-full transition 
            bg-white overflow-hidden
            ${
              index === 13
                ? "text-red-500 border-red-500 shadow-[0_4px_12px_rgba(239,68,68,0.3)]"
                : "text-primary border-primary shadow-[0_4px_12px_rgba(0,178,255,0.3)]"
            } hover:scale-105`}
          >
            <span className="block group-hover:opacity-0 transition-opacity duration-200">{service.buttonText}</span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {service.buttonText} <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </button> */}
           <HoverButton service={service} index={index} />
        </Card>
      ))}
    </div>
  </div>
)
}