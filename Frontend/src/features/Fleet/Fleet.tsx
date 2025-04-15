import React, { useEffect, useRef } from 'react'
import vide from "@/assets/Fleet/Fleet.mp4"
import { useNavigate } from 'react-router-dom'
import icon1 from "@/assets/Fleet/Wheelz-icon-29.webp"
import icon2 from "@/assets/Fleet/Wheelz-icon-31.webp"
import icon3 from "@/assets/Fleet/Wheelz-icon-30.webp"
import icon4 from "@/assets/Fleet/Wheelz-icon-32.webp"
import PremiumPartner from './PremuimPartner'
import WhyChooseUs from './WhyChooseUs'
import AllFooterSection from '@/util/AllFooterSection'

// Add CSS for animations
const animationStyles = `
  @keyframes fadeTop {
    0% {
      opacity: 0;
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .icon-animation {
    opacity: 1;
  }
  
  .icon-animation.animated {
    opacity: 1;
    animation: fadeTop 1s cubic-bezier(.77,0,.175,1) 1;
  }
`;

const Fleet: React.FC = () => {
    const navigate = useNavigate();
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
        // For small screens, immediately add animation class
        const isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint
        
        if (isMobile) {
          iconRefs.current.forEach(ref => {
            if (ref) ref.classList.add('animated');
          });
          return; // Skip observer setup for mobile
        }
        
        // Rest of your existing IntersectionObserver code for desktop
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        iconRefs.current.forEach(ref => {
          if (ref) observer.observe(ref);
        });
        
        return () => {
          iconRefs.current.forEach(ref => {
            if (ref) observer.unobserve(ref);
          });
        };
      }, []);
    const features = [
        {
          icon: icon1,
          title: "Fleet Acquisition",
          desc: "Simplify the process of acquiring new vehicles for your fleet through our extensive network of trusted dealerships.",
          light: true,
        },
        {
          icon: icon2,
          title: "Tailored Deals For Cost Savings",
          desc: "Access exclusive deals and discounts tailored to your fleet's needs, maximising cost savings.",
          light: true,
        },
        {
          icon: icon3,
          title: "Effortless Fleet Vehicle Sales",
          desc: "Streamline the process of selling your fleet vehicles through our platform, connecting you with interested buyers.",
          light: false,
        },
        {
          icon: icon4,
          title: "Quick and Hassle-Free Sales",
          desc: "Access a wide network of potential buyers, ensuring a quick and hassle-free sale of your fleet vehicles.",
          light: false,
        },
      ];
      
  return (
    <>
      <style>{animationStyles}</style>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={vide}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay for slight dimming */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        <div className="relative z-20 flex flex-col justify-end h-full">
          <div className="bg-white text-center py-4 px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
            Streamline fleet management with our comprehensive service suite
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="bg-primary py-4 px-2 sm:py-8 w-full">
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-8 py-2 rounded-full"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/view-all")}
                className="bg-white hover:bg-gray-100 text-[#1cbeff] font-medium px-8 py-2 rounded-full"
              >
                Access Form
              </button>
            </div>
          </div>
        </div>
      </div> 
      <div className="bg-[#b1e3ff] py-12 px-4">
      <div className="max-w-[80%] mx-auto text-center">
        <div className="hidden sm:grid sm:grid-cols-2 gap-10 mb-6">
          <h1 className="text-4xl font-bold text-black">Optimise Your Fleet Operations</h1>
          <h1 className="text-4xl font-bold text-[#1cbeff]">Efficient Fleet Disposal</h1>
        </div>

       {/* Mobile View - First two cards */}
<div className="sm:hidden mb-6">
  <h1 className="text-4xl font-bold text-black mb-6">Optimise Your Fleet Operations</h1>

  <div className="grid grid-cols-1 gap-10 mb-10">
    {features.slice(0, 2).map((item, index) => (
      <div
        key={index}
        className={`flex flex-col items-center text-center rounded-xl overflow-hidden ${
          item.light ? "bg-[rgba(30,191,255,0.24)]" : "bg-[#1cbeff]"
        } ${item.light ? "pt-5 pr-3 pb-11 pl-3" : "p-5"} max-w-[550px] mx-auto relative w-full break-words`}
      >
        <div
          ref={(el) => (iconRefs.current[index] = el)}
          className="bg-white p-4 rounded-xl shadow-md mb-4 icon-animation"
        >
          <img
            src={item.icon || "/placeholder.svg"}
            alt={item.title}
            className="w-[75px] h-[75px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h4 className="font-bold text-sm mb-2 text-black">{item.title}</h4>
        <p className={`text-sm text-gray-800 leading-relaxed ${item.light ? "text-black" : "text-white"}`}>
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  <h1 className="text-4xl font-bold text-[#1cbeff] mb-6">Efficient Fleet Disposal</h1>

  {/* Last two cards on mobile */}
  <div className="grid grid-cols-1 gap-10 mb-10">
    {features.slice(2, 4).map((item, index) => (
      <div
        key={index + 2}
        className={`flex flex-col items-center text-center rounded-xl overflow-hidden ${
          item.light ? "bg-[rgba(30,191,255,0.24)]" : "bg-[#1cbeff]"
        } ${item.light ? "pt-5 pr-3 pb-11 pl-3" : "p-5"} max-w-[550px] mx-auto relative w-full break-words`}
      >
        <div
          ref={(el) => (iconRefs.current[index + 2] = el)}
          className="bg-white p-4 rounded-xl shadow-md mb-4 icon-animation"
        >
          <img
            src={item.icon || "/placeholder.svg"}
            alt={item.title}
            className="w-[75px] h-[75px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h4 className="font-bold text-sm mb-2 text-black">{item.title}</h4>
        <p className={`text-sm text-gray-800 leading-relaxed ${item.light ? "text-black" : "text-white"}`}>
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* Desktop View - All four cards in a grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center rounded-xl overflow-hidden ${
                item.light ? "bg-[rgba(30,191,255,0.24)]" : "bg-[#1cbeff]"
              } ${item.light ? "pt-5 pr-3 pb-11 pl-3" : "p-5"} max-w-[550px] mx-auto relative w-full break-words`}
            >
              <div
                ref={(el) => (iconRefs.current[index] = el)}
                className="bg-white p-4 rounded-xl shadow-md mb-4 icon-animation"
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  className="w-[75px] h-[75px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="font-bold text-sm mb-2 text-black">{item.title}</h4>
              <p className={`text-sm text-gray-800 leading-relaxed ${item.light ? "text-black" : "text-white"}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <div className="bg-white rounded-r-full py-2 pl-6 pr-10 mb-4 sm:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black ">
              Simplified, Tailored,<span className="text-[#1cbeff]"> HASSLE-FREE!</span>
            </h2>
          </div>
          <button className="bg-[#1cbeff] hover:bg-[#00b2e3] transition-all px-8 py-3 text-white font-semibold text-base rounded-full shadow-md">
            Access Form
          </button>
        </div>

      </div>
      <PremiumPartner/>
    </div>
   
    <WhyChooseUs/>
    <AllFooterSection content={[
        `Important: By participating in fleet transactions on our platform, you agree to the terms outlined in our disclaimer. Please note that benefit examples are illustrative and do not guarantee a sale or purchase of fleet vehicles. Results may vary depending on factors such as fleet vehicle quality, specific requirements, and our partnership network capabilities at the time of enquiry.`
    ]}/>
    </>
  )
}

export default Fleet