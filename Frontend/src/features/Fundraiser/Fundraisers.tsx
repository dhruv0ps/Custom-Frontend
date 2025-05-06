import React, { useEffect, useRef } from 'react'
import vide from "@/assets/FundRaisers/Fundraisers.mp4"
import { useNavigate } from 'react-router-dom'
import icon1 from "@/assets/FundRaisers/Wheelz-icon-37.webp"
import icon2 from "@/assets/FundRaisers/Wheelz-icon-38.webp"
import icon3 from "@/assets/FundRaisers/Wheelz-icon-39.webp"
import icon4 from "@/assets/FundRaisers/Wheelz-icon-40.webp"
import img from "@/assets/FundRaisers/iStock-870883676-(2).jpg"
import PremiumPartner from './PremuimPartner'
import VideoBanner from '@/util/VideoBanner'
import HoverArrowButton from '@/util/HoverButton'
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
      <VideoBanner
  videoSrc={vide}
  heading="We donate to charities on behalf of all users buying and selling cars"
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="Donate Now"
  secondaryButtonLink="/view-all"
  secondaryButtonBg="bg-[#e6022a]" 
  secondaryButtonText="text-white"
   backgroundColorClass="bg-[#ffcdf4]"
/>

         <div className="bg-[#feedf4] sm:py-12 sm:px-4">
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
                      className="bg-white  rounded-xl shadow-md mb-4 icon-animation flex items-center justify-center"
                      >
                        
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-32 h-32 object-contain"
                          />
                    </div>
                    <h4 className="font-bold  text-sm text-nowrap mb-2 text-black">{item.title}</h4>
                    <p className={`text-sm  leading-relaxed  text-[#666]
                    `}>{item.desc}</p>
                  </div>
                ))}
              </div>
      
           
    
            </div>
            <div className="w-full py-4 sm:py-8">
  <div className="max-w-full sm:max-w-[80%] mx-auto flex items-center justify-between  sm:px-0">
    
    {/* Text Block */}
    <div
      className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
      style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
      Shape The Future -
        <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">
        SUPPORT, EMPOWER, GIVE!
        </span>
      </h2>
    </div>

    {/* Button Block */}
    <div className="flex justify-end flex-shrink-0 ml-2 sm:mr-0 mr-2">
    <HoverArrowButton
  label="Donate Now"
  onClick={() => navigate("/donate")}
  className="bg-[#e6022a] hover:bg-[#e6022a]  text-white transition-all px-4 py-3  sm:px-8 sm:py-3 font-semibold   text-sm sm:text-base rounded-full shadow-md"
  textClass="text-white"
  hoverTextClass="text-white"/>
    </div>

  </div>
</div>

               {/* CTA Section */}
         
            <PremiumPartner/>
          </div>

          <div className="w-full bg-white py-12 px-4">
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
       <div className="flex flex-row items-center justify-center gap-16 mt-4 sm:mt-12">
  {/* Home Button */}
  <HoverArrowButton
    label="Home"
    onClick={() => navigate('/')}
    className="bg-[#d9d9d9] hover:bg-gray-300 border border-[#d9d9d9] py-2 px-6 rounded-full transition-all duration-300 shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)]"
    textClass="text-black text-[18px] font-semibold"
    hoverTextClass="text-black text-[18px] font-semibold"
  />

  {/* Donate Now Button */}
  <HoverArrowButton
    label="Donate Now"
    onClick={() => navigate('/view-all')}
    className="bg-[#e6022a] border border-[#e6022a] py-2 px-[30px] rounded-full transition-all duration-300 shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.3)]"
    textClass="text-white text-[18px] font-semibold"
    hoverTextClass="text-white text-[18px] font-semibold"
  />
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
