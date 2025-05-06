import React from 'react'
import Videp1 from"@/assets/Finance/Finance.mp4";
import img1 from "@/assets/Finance/Wheelz-icon-21.webp"
import img2 from "@/assets/Finance/Wheelz-icon-22.webp"
import img3 from "@/assets/Finance/Wheelz-icon-23.webp"
import img4 from "@/assets/Finance/Wheelz-icon-24.webp"
import PremiumPartner from './Premuimpartners';
import WhyChooseUs from './WhyChooseUs';
import AllFooterSection from '@/util/AllFooterSection';
import VideoBanner from '@/util/VideoBanner';
import HoverArrowButton from '@/util/HoverButton';
import { useNavigate } from 'react-router-dom';
const Finance:React.FC = () => {
  const navigate = useNavigate()
   
  return (
    <>
       <VideoBanner
  videoSrc={Videp1}
  heading="Every client's finance win… sparks an in-house celebration"
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="Access Form"
  secondaryButtonLink="/view-all"
/>

      <div className="bg-[#b1e3ff] py-12 px-4">
  <div className="max-w-[80%] mx-auto text-center">
    <h1 className="text-4xl font-bold text-black mb-10">Car Affordability Simplified</h1>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      {[
        {
          icon: img1,
          title: "Competitive Quotes",
          desc: "Access and compare competitive interest rates and finance options through our network of trusted partners, ensuring you get the best deal available.",
        },
        {
          icon: img2,
          title: "Personalised Solutions",
          desc: "Receive personalised finance solutions tailored to your individual financial situation and goals, providing flexibility and peace of mind.",
        },
        {
          icon: img3,
          title: "Streamlined Process",
          desc: "Enjoy a streamlined and efficient finance application process, with support from our dedicated partners to guide you through every step.",
        },
        {
          icon: img4,
          title: "Expert Advice",
          desc: "Benefit from expert advice and guidance from our finance partners, helping you make informed decisions about your financial future.",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
         <div className="bg-white  rounded-xl shadow-md mb-4 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-32 h-32 object-contain"
                  />
                  </div>
          <h3 className="font-bold text-base mb-2 text-black">{item.title}</h3>
          <p className="text-sm text-gray-800 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

 
  
  </div>
  <div className="w-full py-4 sm:py-8">
      <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between  sm:px-0">
        
        {/* Text Block */}
        <div
          className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
          style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
        >
        <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
        Tailored Finance,
         <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase"> TRUSTED GUIDANCE</span>
        </h2>
      </div>
      <div className="flex justify-end flex-shrink-0 ml-2 mr-4 sm:mr-0">
          <HoverArrowButton
            label="Access Form"
            onClick={() => navigate("/access-form")}
            className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-white"
            hoverTextClass="text-white"
          />
        </div>
    </div>
    </div>
  <PremiumPartner/>
</div>
<WhyChooseUs/>
<AllFooterSection content={[
    `Important: It’s vital to emphasise that while finance offers many advantages, maintaining responsible and ethical financial practices is crucial for long-term sustainability and positive outcomes. These benefits listed above are merely examples and are subject to individual financial circumstances and policy arrangements. For personalised guidance, it’s advisable to seek professional financial advice tailored to your specific situation, ensuring informed decision-making.`
]}/>
    </>
  )
}

export default Finance
