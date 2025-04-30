import React from 'react'
import Videp1 from"@/assets/Insurance/Insurance.mp4";

import img1 from "@/assets/Insurance/Wheelz-icon-25.webp"
import img2 from "@/assets/Insurance/Wheelz-icon-26.webp"
import img3 from "@/assets/Insurance/Wheelz-icon-27.webp"
import img4 from "@/assets/Insurance/Wheelz-icon-28.webp"
import VideoBanner from '@/util/VideoBanner';
import AllFooterSection from '@/util/AllFooterSection';
import PremiumPartner from '../Finance/Premuimpartners';
import WhyChooseUs from './WhyChooseUs';

const Insurance:React.FC = () => {

    
    const features = [
      {
        icon: img1,   
        title: "Exclusive Quotes",
        desc: "Access special discounts on insurance premiums through our partnerships with various providers, helping you save money.",
      },
      {
        icon: img2,
        title: "Tailored Coverage",
        desc: "Enjoy personalised insurance coverage options that meet your specific needs and preferences, ensuring you have the right level of protection.",
      },
      {
        icon: img3,
        title: "Trusted Providers",
        desc: "Benefit from our partnerships with reputable insurance companies known for their reliability and excellent customer service.",
      },
      {
        icon: img4,
        title: "Hassle-Free Process",
        desc: "Experience a seamless and convenient insurance application process with our user-friendly platform, making it easy to get the coverage you need at competitive rates.",
      },
    ];
    
  return (
    <>
       <VideoBanner
  videoSrc={Videp1}
  heading="Navigate the Aussie roads confidently with our trusted insurance coverage"
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="Access Form"
  secondaryButtonLink="/view-all"
/>

      <div className="bg-[#b1e3ff] py-12 px-4">
        <div className="max-w-full sm:max-w-[80%] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-10">Maximise Protection, Minimise Costs</h1>

          {/* Mobile View - Row layout with icons on left */}
          <div className="sm:hidden space-y-8 mb-12">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <div 
                  className="bg-white p-4 rounded-xl shadow-md flex-shrink-0"
                  style={{ boxShadow: "inset grey 0px 0px 8px 1px" }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[75px] h-[75px] object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1 text-black">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Grid layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                 <div className="bg-white  rounded-xl shadow-md mb-4 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-32 h-32 object-contain"
                  />
                  </div>
                <div>
                  <h3 className="font-bold text-base mb-2 text-black">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-row sm:flex-row items-center justify-between ">
  <div className="bg-white rounded-r-full  pr-4 sm:py-2 sm:pl-6 sm:pr-10 mb-4 sm:mb-0">
    <h2 className="text-xl md:text-3xl font-bold text-black">
      <span className="block sm:inline">Tailored Coverage,</span>
      <span className="block sm:inline text-[#1cbeff]"> EASY PROCESS</span>
    </h2>
  </div>
  <button className="bg-[#1cbeff] hover:bg-[#00b2e3] transition-all px-8 py-3 text-white font-semibold text-base rounded-full shadow-md">
    Access Form
  </button>
</div>

        </div>
        <PremiumPartner />
      </div>
      <WhyChooseUs />
      <AllFooterSection content={[
        `Important: By participating in insurance transactions on our platform, you agree to the terms outlined in our disclaimer. Please note that benefit examples are illustrative and do not guarantee coverage. Results may vary depending on factors such as individual circumstances, specific requirements, and our partnership network capabilities at the time of enquiry.`
      ]}/>
    </>
  )
}

export default Insurance