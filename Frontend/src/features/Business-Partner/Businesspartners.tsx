import React from 'react'
import vide from "@/assets/Parnter/Partners.mp4"
import { useNavigate } from 'react-router-dom'
import { useRef,useEffect } from 'react'
import img1 from "@/assets/Parnter/Wheelz-icon-41.webp"
import img2 from "@/assets/Parnter/Wheelz-icon-42.webp"
import img3 from "@/assets/Parnter/Wheelz-icon-43.webp"
import img4 from "@/assets/Parnter/Wheelz-icon-44.webp"
import PremiumPartner from './PremuimPartner'
import img66 from "@/assets/Parnter/Car.jpg"
import AllFooterSection from '@/util/AllFooterSection'
import VideoBanner from '@/util/VideoBanner'
import { BASE_URL } from '@/config'
import HoverArrowButton from '@/util/HoverButton'
const Businesspartners:React.FC = () => {
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
          icon: img1, 
          title: "Boost Your Brand",
          desc: `Leverage our platform to elevate your brand’s visibility, showcase your expertise, and establish authority in the industry, resulting in increased sales profits.`,
        },
        {
          icon: img2,
          title: "Exclusive Partnership Opportunities",
          desc: `Take advantage of our current exclusive opportunities for diverse business partnerships. We warmly invite you to collaborate with us.`,
        },
        {
          icon: img3,
          title: "Tap Into Our Diverse Ecosystem",
          desc: `Gain access to our ecosystem, connecting you with a diverse audience of passionate auto enthusiasts.`,
        },
        {
          icon: img4,
          title: "Invest In Success",
          desc: `Joining our automotive community isn’t just about investing in a platform; it’s about enhancing the future success of your business.`,
        },
      ];
      
  return (
    <>
    <VideoBanner
  videoSrc={vide}
  heading={
    <>
      Drive your business forward
      <br className="block sm:hidden" />
      <span className="inline sm:inline-block"> with the force of our strategic alliance</span>
    </>
  }
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="Access Form"
  secondaryButtonLink={`${BASE_URL}/business-partner/register-partner
 `}
/>

      <div className="bg-[#b7eaff] py-12">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto text-center px-4">
        {/* Section Headers */}
       
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black">
    Where Vision Meets Opportunity: Let’s Partner Up
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
              <p className={`text-sm  leading-relaxed  text-gray-600
              `}>{item.desc}</p>
            </div>
          ))}
        </div>

      
      

      </div>
     
      <div className="w-full py-4 sm:py-8 block md:hidden">
  <div className="w-full flex items-center justify-between ">
    
    {/* Text Block */}
    <div
      className="bg-white rounded-r-full py-1 pr-12 px-4 flex-shrink"
      style={{ boxShadow: "inset -6px 0 10px rgba(0, 0, 0, 0.1)" }}
    >
      <h2 className="text-sm font-bold whitespace-nowrap">
      Partner,Connect,
        <span className="block text-primary text-base uppercase">
        Succeed!
        </span>
      </h2>
    </div>

    {/* Button */}
    <div className="flex-shrink-0 ml-2 mr-4">
      <HoverArrowButton
     label="Sell Now"
     onClick={() => window.location.href = (`${BASE_URL}/business-partner/register-partner`)}
     className="px-6 py-3  font-semibold text-base rounded-full transition bg-primary text-white border border-primary shadow-lg hover:scale-105 overflow-hidden"
     textClass="text-white"
     hoverTextClass="text-white"
      />
    </div>

  </div>
</div>

      <PremiumPartner/>
    </div>
    <div className="w-full bg-white py-14 px-4 md:px-6">
  <div className="max-w-full sm:max-w-[85%] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* LEFT: Text Content */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1cbeff] mb-6 text-center md:text-left uppercase">
          Partnering With Us
        </h2>
        <p className="text-[#555] leading-relaxed text-base">
          By joining forces with our esteemed network, businesses gain access to a vast ecosystem designed to enhance visibility, drive growth, and foster meaningful connections.
          Our platform offers a range of tailored solutions to suit diverse needs, from lead generation and marketing to streamlined sales processes and customer engagement.
          With our innovative approach and extensive reach, partnering with us promises to elevate your brand presence, expand your market reach, and unlock new avenues for success in the ever-evolving automotive landscape.
        </p>
      </div>

      {/* RIGHT: Image */}
      <div className="w-full h-full flex justify-center">
  <img
    src={img66}
    alt="Automotive parts in vehicle shape"
    className="object-contain w-full h-[115%]"
    loading="lazy"
  />
</div>

    </div>

    {/* Buttons */}
    <div className="flex flex-row sm:flex-row items-center justify-center gap-16 mt-10">
  <HoverArrowButton
    label="Home"
    onClick={() => navigate("/")}
    className="text-black bg-[#d9d9d9] hover:bg-gray-300 border border-[#d9d9d9] text-[18px] font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
    textClass="text-black"
    hoverTextClass="text-black"
  />

  <HoverArrowButton
    label="Access Form"
   onClick={() => window.location.href = (`${BASE_URL}/business-partner/register-partner`)}
    className="text-white bg-[#1cbeff] hover:bg-[#00b2e3] border border-[#1cbeff] text-[18px] font-semibold py-2 px-8 rounded-full transition-all duration-300 shadow-md"
    textClass="text-white"
    hoverTextClass="text-white"
  />
</div>

  </div>
</div>
<AllFooterSection content={[
  `<strong>Important</strong>: In our collaboration with dealerships, service providers and automotive industry, the platform reserves the right to modify terms and conditions, including features, policies, exclusive lead opportunities, and associated costs related to our partnership. Any changes will be promptly communicated, ensuring transparency and a continued positive experience for both our valued partners and customers.`
]}
/>
    </>
  )
}

export default Businesspartners
