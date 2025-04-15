import React from 'react'
import Videp1 from"@/assets/Finance/Finance.mp4";
import { useNavigate } from 'react-router-dom';
import img1 from "@/assets/Finance/Wheelz-icon-21.webp"
import img2 from "@/assets/Finance/Wheelz-icon-22.webp"
import img3 from "@/assets/Finance/Wheelz-icon-23.webp"
import img4 from "@/assets/Finance/Wheelz-icon-24.webp"
import PremiumPartner from './Premuimpartners';
import WhyChooseUs from './WhyChooseUs';
import AllFooterSection from '@/util/AllFooterSection';
const Finance:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
       <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={Videp1}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Foreground content */}
        <div className="relative z-20 flex flex-col justify-end h-full">
          {/* White strip with heading */}
          <div className="bg-white text-center py-2 sm:py-4 px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
            Every clients finance win… sparks an in-house celebration
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
          <div className="bg-white p-4 rounded-xl shadow-md mb-4">
            <img
              src={item.icon}
              alt={item.title}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <h3 className="font-bold text-base mb-2 text-black">{item.title}</h3>
          <p className="text-sm text-gray-800 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="w-full flex flex-col sm:flex-row items-center justify-between">
      <div className="bg-white rounded-r-full py-2 pl-6 pr-10 mb-4 sm:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
          Tailored Finance,<span className="text-[#1cbeff]"> TRUSTED GUIDANCE</span>
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
    `Important: It’s vital to emphasise that while finance offers many advantages, maintaining responsible and ethical financial practices is crucial for long-term sustainability and positive outcomes. These benefits listed above are merely examples and are subject to individual financial circumstances and policy arrangements. For personalised guidance, it’s advisable to seek professional financial advice tailored to your specific situation, ensuring informed decision-making.`
]}/>
    </>
  )
}

export default Finance
