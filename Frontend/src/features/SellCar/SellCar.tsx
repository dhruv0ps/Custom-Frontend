
import Videp1 from "@/assets/Sell-Car-Services.mp4"
import img1 from "@/assets/SellCar/Wheelz-icon-1.webp"
import img2 from "@/assets/SellCar/Wheelz-icon-2.webp"
import img3 from "@/assets/SellCar/Wheelz-icon-3.webp"
import img4 from "@/assets/SellCar/Wheelz-icon-4.webp"
import img5 from "@/assets/SellCar/iStock-1659992720(1).jpg"
import img6 from "@/assets/SellCar/iStock-1598042841(3).jpg"
import img7 from "@/assets/SellCar/iStock1490441147.jpg"
import NewsSection from "./NewsSection"
import WhyChooseUs from "./WhyChooseUs"

import HoverArrowButton from "@/util/HoverButton"
import { useNavigate } from "react-router-dom"
import AllFooterSection from "@/util/AllFooterSection"
export default function SellCar() {
  const navigate = useNavigate()
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

        {/* Overlay for slight dimming */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Foreground content */}
        <div className="relative z-20 flex flex-col justify-end h-full">
          {/* White strip with heading */}
          <div className="relative z-20 flex flex-col justify-end h-full">
            <div className="bg-white text-center py-4 px-4">
              <h1 className="text-base md:text-2xl  font-bold text-black">
                Sell smarter, earn more, it’s that simple!
              </h1>
            </div>
          </div>

          <div className="bg-primary py-4 px-2 sm:py-8 w-full">
            <div className="flex justify-center gap-4 flex-wrap px-4">
              <HoverArrowButton
                label="Home"
                onClick={() => navigate("/")}
                className="bg-gray-300 text-black font-semibold px-8 py-3 rounded-full shadow-md transition-all"
                textClass="text-black"
                hoverTextClass="text-black"
              />

              <HoverArrowButton
                label="Access Form"
                onClick={() => navigate("/")}
                className="bg-white text-[#1cbeff] hover:bg-opacity-90 font-semibold px-6 py-3 rounded-full shadow-md"
                textClass="text-[#1cbeff]"
                hoverTextClass="text-[#1cbeff]"
              />
            </div>
          </div>
        </div>


      </div>
      <div className="bg-[#b7eaff] py-12">
        <div className="max-w-full sm:max-w-[80%]  mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">We Work For You</h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Feature Card 1 */}
            <div className="flex flex-col items-center text-center">
              <img src={img1} alt="Easy Icon" className="rounded-xl shadow-md mb-4 w-[130px] sm:w-[107px] sm:h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Innovative Selling Solution</h3>
              <p className="text-sm text-gray-700">
                Unlock the future of hassle-free sales with our cutting edge technology.
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img2} alt="Free Icon" className="rounded-xl shadow-md mb-4 w-[130px] sm:w-[107px] sm:h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Cost-Free Listing Efficiency</h3>
              <p className="text-sm text-gray-700 px-2">
                List your car without spending a dollar and maximise your selling potential effortlessly.
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img3} alt="Connection Icon" className="rounded-xl shadow-md mb-4 w-[130px] sm:w-[107px] sm:h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Effortless Connection</h3>
              <p className="text-sm text-gray-700 px-2">
                We seamlessly connect you with the right dealerships from our national network, making selling as simple as a few clicks.
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img4} alt="Network Icon" className="rounded-xl shadow-md mb-4 w-[130px] sm:w-[107px] sm:h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Trustworthy Dealership Network</h3>
              <p className="text-sm text-gray-700 px-2">
                Rely on our manufacturer-approved dealers for transparency and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="w-full py-8">
            <div className="max-w-full sm:max-w-7xl mx-auto sm:px-4 flex flex-row sm:flex-row items-center justify-between">
              <div className="bg-white rounded-r-full py-2 pl-2 pr-10 sm:pl-6 sm:pr-32 mb-4 sm:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Simplify Sales,
                  <br className="block sm:hidden" />
                  <span className="text-primary sm:ml-2">MAXIMISE GAINS</span>
                </h2>
              </div>
              <HoverArrowButton
                label="Sell Now"

                onClick={() => navigate("/")}
             className="px-6 py-3 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
                textClass="text-primary"
                hoverTextClass="text-primary"
              />



            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1cbeff] py-16 sm:px-4">
        <div className=" max-w-[97%] sm:max-w-[80%] mx-auto text-center text-white">
          <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase">3 Simple Steps</h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Step 1 */}
            <div className="flex items-start text-left gap-4 px-2">
              <div className="text-[100px] md:text-[120px] font-extrabold leading-none text-white pl-2 sm:pl-0">1</div>
              <div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-black uppercase pl-2 sm:pl-0">Tell us about your car</h4>
                <p className="text-sm leading-relaxed text-white pl-2 sm:pl-0">
                  Enter your vehicle's details to access our user-friendly interface, which will guide you through a simple
                  step-by-step process.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start text-left gap-4 px-2">
              <div className="text-[100px] md:text-[120px] font-extrabold leading-none text-white">2</div>
              <div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-black uppercase">Get paired with your perfect match</h4>
                <p className="text-sm leading-relaxed text-white">
                  Our platform swiftly analyses your car details, connecting you with the right dealer from our extensive
                  network of buyers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start text-left gap-4 px-2">
              <div className="text-[100px] md:text-[120px] font-extrabold leading-none text-white">3</div>
              <div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-black uppercase">You receive fast payment</h4>
                <p className="text-sm leading-relaxed text-white">
                  Quick, hassle-free transaction! Agree to an offer, and the dealer will promptly pay you and arrange for your
                  car's collection at your convenience.
                </p>
              </div>
            </div>
          </div>



          {/* Step Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img5}
                alt="Person taking photos of their car"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img6}
                alt="Wooden figure with star rating"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img7}
                alt="Person smiling while using smartphone"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        
        </div>
        <div className="w-full py-8">
            <div className=" max-w-full sm:max-w-7xl sm:px-12 mx-auto  flex flex-row sm:flex-row items-center justify-between">
              
              <div className="bg-white rounded-r-full py-2 pl-2 pr-10 sm:pl-6 sm:pr-32 mb-4 sm:mb-0">
                <h2 className="text-base md:text-3xl font-bold whitespace-nowrap">
                Free Service, Fast Match,
                  <br className="block sm:hidden" />
                  <span className="text-primary sm:ml-2 text-3xl">INSTANT PAY</span>
                </h2>
              </div>
              <HoverArrowButton
  label="Sell Now"
  onClick={() => navigate("/")}
  className="sm:px-6 py-3 font-semibold text-base rounded-full sha bg-white text-primary border border-primary mr-2 sm:mr-0"
  textClass="text-primary"
  hoverTextClass="text-primary"
/>

            </div>
          </div>
      </div>
      <NewsSection
        videoId="TMAlw9_LvYQ"
        title="Student scammed out of almost $30,000 after online marketplace car scam"
        source="9 News Australia"
      />
      <WhyChooseUs />

      <AllFooterSection content={[
        ` Important: The platform retains the right to adjust terms and conditions, encompassing features and policies in the selling process. While our technology connects customers with optimal dealerships to enhance sales profits, it's important to note that the decision to sell rests solely with the customer. Final sale amounts are mutually agreed upon with the buyer, and we play no role in the seller's decision making. Any modifications will be promptly communicated, ensuring transparency and a smooth experience for our valued sellers.`,
        `<strong>Disclaimer:</strong> The video content embedded on this page is sourced from 9 News Australia and is publicly available on YouTube. The views, opinions, and statements expressed in the video are those of the original news organisation and do not necessarily reflect the views or opinions of this website or its owners. The inclusion of this video is solely for informational purposes and to provide relevant news coverage to our audience. We advise viewers to visit the original source for full context and further information. Any trademarks, service marks, or trade names mentioned in the video are the property of their respective owners.`
      ]} />
    </>
  )
}
