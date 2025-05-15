import React from 'react';
import { useNavigate } from 'react-router-dom';
import Videp1 from "@/assets/Test-Drives.mp4";
import VirtualToursCard1 from './VirtualToursCard1';
import img5 from "@/assets/Virtual Tour/iStock-1308881074-(2).jpg";
import img6 from "@/assets/Virtual Tour/iStock-1402530734-(2).jpg";
import img7 from "@/assets/Virtual Tour/iStock-1414874178-(3).jpg";
import img1 from "@/assets/Virtual Tour/Wheelz-icon-13.webp"
import img2 from "@/assets/Virtual Tour/Wheelz-icon-14.webp"
import img3 from "@/assets/Virtual Tour/Wheelz-icon-15.webp"
import img4 from "@/assets/Virtual Tour/Wheelz-icon-16.webp"
import img10 from "@/assets/Virtual Tour/virtualTour.jpg"
import { BASE_URL } from '@/config';
import AllFooterSection from '@/util/AllFooterSection';
import VideoBanner from '@/util/VideoBanner';
import HoverArrowButton from '@/util/HoverButton';  
const VirtualTours: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <VideoBanner
        videoSrc={Videp1}
        heading="Vehicle insights for informed choices"
        primaryButtonLabel="Home"
        primaryButtonLink="/"
        secondaryButtonLabel="View All"
        secondaryButtonLink={`${BASE_URL}/request-virtual-tour
`}
      />

      <VirtualToursCard1 />

      {/* How It Works Section - Restructured to match the image layout */}
      <div className="bg-[#1cbeff] py-8 sm:py-16  text-white">
        <div className=" max-w-[95%] sm:max-w-[80%] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 uppercase">How It Works</h2>

          <div className="flex flex-col md:flex-row justify-center gap-10 mb-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="flex items-start text-left gap-6 sm:px-2 mb-3">
                <span className="text-[150px] font-extrabold leading-none text-white">1</span>
                <div className='text-right'>
                  <h4 className="text-sm font-bold mb-2 uppercase text-black">Expert Guidance from Home</h4>
                  <p className="text-sm leading-relaxed text-white">
                    Explore your desired vehicle from our dealer reviews, where knowledgeable sales experts will guide you through key insights, all from the comfort of your home.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-auto">
                <img
                  src={img5} // Replace with actual image path
                  alt="Person taking photos of their car"
                  className="w-full"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="flex items-start text-left gap-6 sm:px-2 mb-3">
                <span className="text-[150px] font-extrabold leading-none text-white">2</span>
                <div className='text-right'>
                  <h4 className="text-sm font-bold mb-2 uppercase text-black sm:text-nowrap">Can't Find Your Desired Vehicle?</h4>
                  <p className="text-sm leading-relaxed text-white">
                    Simply request a virtual tour today, and one of our affiliated dealerships will be happy to assist you with your request.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-auto">
                <img
                  src={img6} // Replace with actual image path
                  alt="Wooden figure with star rating"
                  className="w-full"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="flex items-start text-left gap-6 sm:px-2 mb-3">
                <span className="text-[150px] font-extrabold leading-none text-white">3</span>
                <div className='text-right'>
                  <h4 className="text-sm font-bold mb-2 uppercase text-black sm:text-nowrap">We're Revolutionising Car Buying</h4>
                  <p className="text-sm leading-relaxed text-white">
                    As industry disruptors, we're reshaping the landscape, turning your dream car into a reality, all from the comfort of your home and at an exclusive price!
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-auto">
                <img
                  src={img7} // Replace with actual image path
                  alt="Person smiling while using smartphone"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Additional Section (if needed) */}
       
        </div>
      
          <div className="w-full py-4 sm:py-8">
      <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between  sm:px-0">
        
        {/* Text Block */}
        <div
          className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
          style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
        >
        <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
        Desired Car Missing?
         <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">REQUEST A TOUR!</span>
        </h2>
      </div>
      <div className="flex justify-end flex-shrink-0 ml-2 mr-3 sm:mr-0">
          <HoverArrowButton
            label="Acess Form"
            onClick={() => navigate("/access-form")}
            className="bg-white transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-primary"
            hoverTextClass="text-primary"
          />
        </div>
    </div>
    </div>
          
      </div>
      
      <div className="bg-[#0e3f80] py-12">
        <div className="max-w-[95%] sm:max-w-[80%]  mx-auto text-center">
          <h2 className="text-3xl text-[rgb(28,190,255)] md:text-4xl font-bold sm:mb-2 ">Virtual Tours
          </h2>
          <h4 className='mb-12 text-white sm:text-xl font-semibold'>Explore The Future Of Car Shopping Today</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Feature Card 1 */}
            <div className="flex flex-col items-center text-center">
              <img src={img1} alt="Easy Icon" className="rounded-xl shadow-md mb-4 w-32 h-32 object-contain bg-white" />
              <h3 className="font-bold text-base mb-2 text-[#1cbeff]">Immersive Experience</h3>
              <p className="text-sm text-white font-semibold px-2">

                Dive into a virtual environment that replicates the sensation of being behind the wheel



              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img2} alt="Free Icon" className="rounded-xl shadow-md mb-4 w-32 h-32 object-contain bg-white" />
              <h3 className="font-bold text-base mb-2 text-[#1cbeff]">Convenient Access</h3>
              <p className="text-sm text-white font-semibold px-2">
                Access virtual tours from the comfort of your home, eliminating the need for physical visits to dealerships
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img3} alt="Connection Icon" className="rounded-xl shadow-md mb-4 w-32 h-32 object-contain bg-white" />
              <h3 className="font-bold text-base mb-2 text-[#1cbeff]">Comprehensive Selection</h3>
              <p className="text-sm text-white font-semibold px-2">
                Explore a wide range of vehicles virtually, allowing you to compare and contrast different models effortlessly
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img4} alt="Network Icon" className="rounded-xl shadow-md mb-4 w-32 h-32 object-contain bg-white" />
              <h3 className="font-bold text-base mb-2 text-[#1cbeff]">Expert Guidance</h3>
              <p className="text-sm text-white font-semibold px-2">
                Receive expert guidance and insights during virtual tours to make informed decisions about your next purchase
              </p>
            </div>
          </div>

          {/* Additional Section (if needed) */}
         
          </div>
     
            <div className="w-full py-4 sm:py-8">
      <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between  sm:px-0">
        
        {/* Text Block */}
        <div
          className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
          style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
        >
        <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
        Immersive, Experts,
         <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase"> CONVENIENCE</span>
        </h2>
      </div>
      <div className="flex justify-end flex-shrink-0 ml-2 mr-4 sm:mr-0">
          <HoverArrowButton
            label="View All"
            onClick={() => navigate("/access-form")}
            className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-white"
            hoverTextClass="text-white"
          />
        </div>
    </div>
    </div>
    
        </div>
      

      <div className=" block md:hidden h-full ">
            <div className="w-full overflow-hidden  shadow-md">
              <img
                src={img10}
                alt="Worker with phone"
                className="w-full h-full object-cover scale-x-[-1]"
              />
            </div>
          </div>
          <div className="mt-12 w-full">
          <div className="flex justify-center gap-16 sm:flex-wrap sm:px-4">

          <HoverArrowButton label="Home" onClick={() => navigate("/")} className="bg-gray-300 hover:bg-gray-200 rounded-full shadow-md px-8 py-3"
            textClass="text-black font-semibold"
            hoverTextClass="text-black font-semibold" />

          <HoverArrowButton label="View All" onClick={() => navigate("/")} className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
            textClass="text-[#1cbeff] font-semibold"
            hoverTextClass="text-[#1cbeff] font-semibold" />
        </div>
      </div>
      <AllFooterSection
        content={[
          `<strong>Disclaimer:</strong> The manufacturer car advertisements embedded on this page are publicly available on YouTube. These advertisements provide approved dealerships with the opportunity to showcase their vehicles to our automotive community. This does not constitute an endorsement of any vehicles or brands. All trademarks, service marks, and trade names mentioned in the advertisements are the property of their respective owners. This website is not responsible for the content or accuracy of external links.`,

          `The Virtual Tours and Virtual Test Drives featured on this website are created exclusively for our community. All rights, titles, and ownership of these videos are retained by us and are intended solely for providing insights related to customer vehicle enquiries. These videos do not reflect the views or opinions of this website or its owners.`,

          `The inclusion of these videos is for informational purposes only, providing relevant commentary and/or expert advice. Any trademarks, service marks, or trade names mentioned in these videos are the property of their respective owners.`,

          `This website assumes no responsibility for the content or accuracy of the information provided in these videos.`,

          `The names Virtual Tours and Virtual Test Drives, along with the unique service offerings and all associated content displayed on this website, constitute the exclusive intellectual property of this platform and are protected under Australian intellectual property laws. These protections include, but are not limited to, trademark protections under the Trade Marks Act 1995 (Cth) and copyright protections under the Copyright Act 1968 (Cth). This platform’s business concept, format, and associated services are original and distinct, offering a first-to-market service. We retain all rights, titles, and ownership of the “Virtual Tours” and “Virtual Test Drives” names and formats.`,

          `Any unauthorised use, reproduction, adaptation, or copying of the Virtual Tours and Virtual Test Drives services, whether in part or in whole, by any entity, within a similar field or otherwise, will be considered a violation of our intellectual property rights and may constitute passing off under Australian common law.`,

          `We reserve the right to take all necessary legal action, including initiating proceedings under the Trade Marks Act, the Copyright Act, and for passing off, to protect our exclusive rights to the Virtual Tours and Virtual Test Drives names and service formats within Australia.`
        ]}
      />
    </>
  );
}

export default VirtualTours;