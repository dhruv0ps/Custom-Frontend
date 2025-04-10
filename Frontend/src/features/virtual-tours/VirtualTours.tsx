import React from 'react';
import { useNavigate } from 'react-router-dom';
import Videp1 from "@/assets/Test-Drives.mp4";
import VirtualToursCard1 from './VirtualToursCard1';
import img5 from "@/assets/Virtual Tour/Guidance.webp";
import img6 from "@/assets/Virtual Tour/Desired.webp";
import img7 from "@/assets/Virtual Tour/Buying.webp";
import img1 from "@/assets/Virtual Tour/Wheelz-icon-13.webp"
import img2 from "@/assets/Virtual Tour/Wheelz-icon-14.webp"
import img3 from "@/assets/Virtual Tour/Wheelz-icon-15.webp"
import img4 from "@/assets/Virtual Tour/Wheelz-icon-16.webp"
import { ChevronRight } from 'lucide-react';
import AllFooterSection from '@/util/AllFooterSection';


const VirtualTours: React.FC = () => {
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
              We'll ensure you buy your car for less
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
                View All
              </button>
            </div>
          </div>
        </div>
      </div>

      <VirtualToursCard1 />

      {/* How It Works Section - Restructured to match the image layout */}
      <div className="bg-[#1cbeff] py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 uppercase">How It Works</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 mb-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="flex items-start text-left gap-6 px-2 mb-3">
              <span className="text-[150px] font-extrabold leading-none text-white">1</span>
              <div>
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
            <div className="flex items-start text-left gap-6 px-2 mb-3">
              <span className="text-[150px] font-extrabold leading-none text-white">2</span>
              <div>
                <h4 className="text-sm font-bold mb-2 uppercase text-black">Can't Find Your Desired Vehicle?</h4>
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
            <div className="flex items-start text-left gap-6 px-2 mb-3">
              <span className="text-[150px] font-extrabold leading-none text-white">3</span>
              <div>
                <h4 className="text-sm font-bold mb-2 uppercase text-black">We're Revolutionising Car Buying</h4>
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
        <div className="w-full py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-white rounded-r-full py-2 pl-6 pr-32 mb-4 sm:mb-0">
              <h2 className="text-3xl font-bold">
                <span className="text-black">Desired Car Missing?</span>
                <span className="text-primary">REQUEST A TOUR!</span>
              </h2>
            </div>
            <button className="group relative px-6 py-3 font-semibold text-base rounded-full bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden transition">
              <span className="block group-hover:opacity-0 transition-opacity duration-200">Access Form</span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Access Form <span className="ml-1"><ChevronRight/></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#0e3f80] py-12">
                <div className="max-w-[80%]  mx-auto text-center">
                    <h2 className="text-2xl text-[#1cbeff] md:text-3xl font-bold mb-12">Putting You First</h2>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {/* Feature Card 1 */}
                        <div className="flex flex-col items-center text-center">
                            <img src={img1} alt="Easy Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain bg-white" />
                            <h3 className="font-bold text-sm mb-2 text-[#1cbeff]">Immersive Experience</h3>
                            <p className="text-sm text-white font-semibold px-2">

                            Dive into a virtual environment that replicates the sensation of being behind the wheel



                            </p>
                        </div>


                        <div className="flex flex-col items-center text-center">
                            <img src={img2} alt="Free Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain bg-white" />
                            <h3 className="font-bold text-sm mb-2 text-[#1cbeff]">Convenient Access</h3>
                            <p className="text-sm text-white font-semibold px-2">
                            Access virtual tours from the comfort of your home, eliminating the need for physical visits to dealerships
                            </p>
                        </div>


                        <div className="flex flex-col items-center text-center">
                            <img src={img3} alt="Connection Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain bg-white" />
                            <h3 className="font-bold text-sm mb-2 text-[#1cbeff]">Comprehensive Selection</h3>
                            <p className="text-sm text-gray-700 px-2">
                            Explore a wide range of vehicles virtually, allowing you to compare and contrast different models effortlessly
                            </p>
                        </div>


                        <div className="flex flex-col items-center text-center">
                            <img src={img4} alt="Network Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain bg-white" />
                            <h3 className="font-bold text-sm mb-2 text-[#1cbeff]">Expert Guidance</h3>
                            <p className="text-sm text-gray-700 px-2">
                            Receive expert guidance and insights during virtual tours to make informed decisions about your next purchase
                            </p>
                        </div>
                    </div>

   {/* Additional Section (if needed) */}
   <div className="w-full py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-white rounded-r-full py-2 pl-6 pr-32 mb-4 sm:mb-0">
              <h2 className="text-3xl font-bold">
                <span className="text-black">Immersive, Experts,</span>
                <span className="text-primary">CONVENIENCE</span>
              </h2>
            </div>
            <button className="group relative px-6 py-3 font-semibold text-base rounded-full bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden transition">
              <span className="block group-hover:opacity-0 transition-opacity duration-200">View All</span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              View All <span className="ml-1"><ChevronRight/></span>
              </span>
            </button>
          </div>
        </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
  {/* Home Button */}
  <button
    onClick={() => navigate("/")}
    className="text-black border border-[#d9d9d9] bg-[#d9d9d9] px-6 py-2 rounded-full text-[18px] font-medium transition hover:opacity-90"
  >
    Home
  </button>

  {/* View All Button */}
  <button
    onClick={() => navigate("/view-all")}
    className="text-primary border bg-white px-6 py-2 rounded-full shadow-2xl text-[18px] font-medium transition hover:opacity-90"
  >
    View All
  </button>
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