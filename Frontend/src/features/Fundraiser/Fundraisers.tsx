import React, { useEffect, useRef } from 'react'
import vide from "@/assets/FundRaisers/Fundraisers.mp4"
import { useNavigate } from 'react-router-dom'
import icon1 from "@/assets/FundRaisers/Wheelz-icon-37.webp"
import icon2 from "@/assets/FundRaisers/Wheelz-icon-38.webp"
import icon3 from "@/assets/FundRaisers/Wheelz-icon-39.webp"
import icon4 from "@/assets/FundRaisers/Wheelz-icon-40.webp"
import img from "@/assets/FundRaisers/Fundraiser-Service-by-Wheelz-Australia.webp"
import PremiumPartner from './PremuimPartner'
// import { ChevronRightIcon } from '@radix-ui/react-icons'
import AllFooterSection from '@/util/AllFooterSection'
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
const Fundraisers:React.FC = () => {

    const features = [
        {
            icon: icon1,
            title: "Paving The Way For A Brighter Future",
            desc: "Every effort contributes to shaping a future filled with optimism and opportunity.",
          },
          {
            icon: icon2,
            title: "Constructing A Better World Together",
            desc: "Your support contributes to creating a better world for people, families, pets, animals, and communities alike.",
          },
          {
            icon: icon3,
            title: "Empowering You To Create Change",
            desc: "Choose from our list of supported charities, and we’ll make a donation on your behalf when you use our buying and selling services.",
          },
          {
            icon: icon4,
            title: "Giving With Confidence",
            desc: "Rest assured that 100% of the funds you give go directly to your chosen charity.",
          },
    ]
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
            <h1 className="text-base md:text-2xl  font-bold text-black">
            We donate to charities on behalf of all users buying and selling cars
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="bg-[#ffcdf4] py-4 px-2 sm:py-8 w-full">
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-8 py-2 rounded-full"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/view-all")}
                className="bg-[#e6022a] hover:bg-[#e6022a] text-white font-medium px-8 py-2 rounded-full"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div> 

         <div className="bg-[#feedf4] py-12 px-4">
            <div className="max-w-[97%] sm:max-w-[80%] mx-auto text-center">
              {/* Section Headers */}
             
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#1cbeff]">
              Sparking Possibilities One Donation At A Time
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
                    <p className={`text-sm  leading-relaxed  text-[#666]
                    `}>{item.desc}</p>
                  </div>
                ))}
              </div>
      
              {/* CTA Section */}
              <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                <div className="bg-white rounded-r-full py-2 pl-6 pr-10 mb-4 sm:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-black">
                  Shape The Future <span className="text-[#1cbeff]"> SUPPORT, EMPOWER, GIVE!</span>
                  </h2>
                </div>
                <button className="bg-[#e6022a] hover:bg-[#e6022a] text-white transition-all px-8 py-3  font-semibold text-base rounded-full shadow-md">
                  Donate Now
                </button>
              </div>
    
            </div>
            <PremiumPartner/>
          </div>

          <div className="w-full bg-white py-12 px-4 md:px-6">
      <div className="max-w-full sm:max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-black sm:text-primary mb-6 text-center sm:text-left">
  THANKS FOR CHOOSING US
</h2>
            <p className="text-[#666] leading-relaxed">
              You&apos;re entrusting us with the power to make a difference on your behalf. The decision to choose our
              services becomes a heartfelt partnership, a shared commitment to spread warmth and hope to those who need
              it most. As we channel your generosity into charitable actions, it&apos;s not just about the funds,
              it&apos;s about the collective impact of many hearts coming together. Through us, your kindness becomes a
              ripple effect, touching lives, and creating a tapestry of compassion that extends far beyond the act of
              giving. Thank you for allowing us to be the bridge that connects your generosity to the countless hearts
              waiting to be touched by your kindness.
            </p>
          </div>

         
          <div className="order-2 md:order-2 relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src={img}
                alt="Puppy and kitten"
              
                className="object-cover"
                
              />
              
            </div>
          </div>
        </div>

       {/* Button Row */}
       <div className="flex flex-row items-center justify-center gap-12 mt-4 sm:mt-12">
            <button
              onClick={() => navigate('/')}
             className="text-black bg-[#d9d9d9] hover:bg-gray-300 border border-[#d9d9d9] text-[18px] font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)]"
            >
              Home
            </button>
            <button
  onClick={() => navigate('/view-all')}
  className="relative inline-block text-white bg-[#e6022a] border border-[#e6022a] text-[18px] font-semibold py-2 px-[30px] rounded-full shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)] transition-all duration-300 group overflow-hidden"
>

  
    Donate Now

  
 
</button>
          </div>
    </div>
    </div>
    <AllFooterSection content={[
        `Important: In our commitment to supporting fundraisers and charities, please be aware that the platform reserves the right to modify terms and conditions, including donation mechanisms, associated policies, and the option to change supported charities. It’s important to highlight that 100% of donations raised through our platform go directly to the designated charity. Any updates will be communicated promptly, ensuring transparency and empowering our community to actively participate in our evolving mission.`
    ]}/>
    </>
  )
}

export default Fundraisers
