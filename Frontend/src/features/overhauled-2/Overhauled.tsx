import React, { useEffect, useRef } from 'react'
import vide from "@/assets/Overhauled/Overhauled.mp4"
import { useNavigate } from 'react-router-dom'
import icon1 from "@/assets/Overhauled/Wheelz-icon-33.webp"
import icon2 from "@/assets/Overhauled/Wheelz-icon-34.webp"
import icon3 from "@/assets/Overhauled/Wheelz-icon-35.webp"
import icon4 from "@/assets/Overhauled/Wheelz-icon-36.webp"
import PremiumPartner from '../overhauled-2/PremiumPartner'

import AllFooterSection from '@/util/AllFooterSection'
import WhyChooseUs from './WhyChooseUs'

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
    opacity: 0;
  }
  
  .icon-animation.animated {
    opacity: 1;
    animation: fadeTop 1s cubic-bezier(.77,0,.175,1) 1;
  }
`;

const Overhauled: React.FC = () => {
    const navigate = useNavigate();
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
      // Observer for animation when elements come into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      // Observe all icon containers
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
            title: "Spotlight On Transformation",
            desc: "Get ready for your moment in the spotlight! Will you be our next lucky winner to transform your car into a masterpiece?",
          },
          {
            icon: icon2,
            title: "Beyond Cars",
            desc: "Overhauled is not just about cars, it’s about the stories behind them",
          },
          {
            icon: icon3,
            title: "From Wheelz To Masterpiece",
            desc: "Your car is more than just a set of wheelz, it’s a canvas waiting to be transformed into a work of art",
          },
          {
            icon: icon4,
            title: "Jaw-Dropping Makeover",
            desc: "We are on the lookout for the next lucky overhauled Member whose car will undergo a jaw-dropping transformation. It could be you!",
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
            <h1 className="text-base md:text-2xl lg:text-3xl font-bold text-black text-nowrap">
            Is your car next in line to be OVERHAULED
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
      <div className="bg-[#b7eaff] py-12 px-4">
      <div className="max-w-[97%] sm:max-w-[80%] mx-auto text-center">
        {/* Section Headers */}
       
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black">
    Get Ready For The Ride Of A Lifetime
  </h2>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center rounded-xl overflow-hidden
                
            
                 sm:pt-5 sm:pr-3 sm:pb-11 sm:pl-3
               max-w-[550px] mx-auto relative w-full break-words`}
            >
              <div 
                ref={el => iconRefs.current[index] = el}
                className="bg-white p-4 rounded-xl shadow-md mb-4 icon-animation"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                className="w-[96px] h-[96px] sm:w-[75px] sm:h-[75px] object-contain"
                 loading='lazy'
                  decoding="async"
                  sizes="(max-width: 450px) 100vw, 450px"
                />
              </div>
              <h4 className="font-bold  text-sm text-nowrap mb-2 text-black">{item.title}</h4>
              <p className={`text-sm  leading-relaxed  text-gray-600
              `}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <div className="bg-white rounded-r-full py-2 pl-6 pr-10 mb-4 sm:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
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
        `Important: “Overhauled,” our exclusive competition, is reserved for members only. The platform retains the right to modify terms, conditions, features, or cancel any competition if the required interest or entries are not met. In case of cancellation, a full refund will be provided. Any changes or cancellations will be promptly communicated to ensure transparency and a smooth experience for our valued members. Additionally, please note that video content is simulated and not real. We prioritise safety and would never endorse reckless behavior on any Australian local road.`
    ]}/>
    </>
  )
}

export default Overhauled