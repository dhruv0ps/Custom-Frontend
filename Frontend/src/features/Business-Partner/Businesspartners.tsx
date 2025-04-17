import React from 'react'
import vide from "@/assets/Parnter/Partners.mp4"
import { useNavigate } from 'react-router-dom'
import { useRef,useEffect } from 'react'
import img1 from "@/assets/Parnter/Wheelz-icon-41.webp"
import img2 from "@/assets/Parnter/Wheelz-icon-42.webp"
import img3 from "@/assets/Parnter/Wheelz-icon-43.webp"
import img4 from "@/assets/Parnter/Wheelz-icon-44.webp"
import PremiumPartner from './PremuimPartner'
import img66 from "@/assets/Parnter/Business-Partner-Service-by-Wheelz-Australia.webp"
import AllFooterSection from '@/util/AllFooterSection'
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
          Drive your business forward with the force of our strategic alliance
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
                Acess Form
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
          className="object-contain w-full max-w-[600px] h-auto"
          loading="lazy"
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-row sm:flex-row items-center justify-center gap-6 mt-10">
      <button
        onClick={() => navigate("/")}
        className="text-black bg-[#d9d9d9] hover:bg-gray-300 border border-[#d9d9d9] text-[18px] font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
      >
        Home
      </button>

      <button
        onClick={() => navigate("/view-all")}
        className="text-white bg-[#1cbeff] hover:bg-[#00b2e3] border border-[#1cbeff] text-[18px] font-semibold py-2 px-8 rounded-full transition-all duration-300 shadow-md"
      >
        Access Form
      </button>
    </div>
  </div>
</div>
<AllFooterSection content={[
  `Important: In our collaboration with dealerships, service providers and automotive industry, the platform reserves the right to modify terms and conditions, including features, policies, exclusive lead opportunities, and associated costs related to our partnership. Any changes will be promptly communicated, ensuring transparency and a continued positive experience for both our valued partners and customers.`
]}
/>
    </>
  )
}

export default Businesspartners
