
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
import VideoBanner from "@/util/VideoBanner"
export default function SellCar() {
  const navigate = useNavigate()
  return (
    <>

   
      <VideoBanner videoSrc={Videp1}
            heading="Sell smarter, earn more, it’s that simple!
"
            primaryButtonLabel="Home"
            primaryButtonLink="/"
            secondaryButtonLabel="Access Form"
            secondaryButtonLink="/"/>
      <div className="bg-[#b7eaff] py-12  sm:px-0">
  <div className="max-w-[97%] sm:max-w-[80%] mx-auto text-center px-10">
    <h2 className="text-3xl md:text-3xl font-bold mb-12">We Work For You</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
  {[
    {
      icon: img1,
      title: "Innovative Selling Solution",
      desc: "Unlock the future of hassle-free sales with our cutting edge technology.",
    },
    {
      icon: img2,
      title: "Cost-Free Listing Efficiency",
      desc: "List your car without spending a dollar and maximise your selling potential easily.",
    },
    {
      icon: img3,
      title: "Effortless Connection",
      desc: "We seamlessly connect you with the right dealerships from our national network, making selling as simple as a few clicks.",
    },
    {
      icon: img4,
      title: "Trustworthy Dealership Network",
      desc: "Rely on our manufacturer approved dealers for transparency and customer satisfaction.",
    },
  ].map((item, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <div className="bg-white rounded-xl shadow-md mb-4  flex items-center justify-center overflow-hidden">
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






    {/* CTA Section (unchanged) */}
   
    {/* <div className="max-w-full sm:max-w-[80%] mx-auto mt-6 flex flex-row sm:flex-row items-center justify-between">
  <div className="bg-white rounded-r-full py-2 pl-2 sm:ml-6 sm:pl-6 pr-8 mb-4 sm:mb-0">
    <h2 className="text-base md:text-3xl font-bold text-black ">
      <span className="block sm:inline whitespace-nowrap">
      Simplify Sales,
         
      </span>
      <span className="block sm:inline text-2xl py-2 sm:text-[#1cbeff] sm:text-3xl text-[#1cbeff] sm:ml-2">
      MAXIMISE GAINS
      </span>
    </h2>
  </div><HoverArrowButton
          label="Sell Now"
          onClick={() => navigate("/")}
          className="px-6 py-3 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
          textClass="text-primary"
          hoverTextClass="text-primary"
        />
   
            </div> */}
  </div>
  <div className="w-full py-8">
  <div className="max-w-full sm:max-w-7xl mx-auto sm:px-4 flex flex-row items-center justify-between">
    <div
      className="bg-white rounded-r-full py-2 pl-6 pr-6 sm:pl-6 sm:pr-18 mb-4 sm:mb-0"
      style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      <h2 className="text-2xl md:text-3xl font-bold ml-2">
      <span className=""> Simplify Sales,</span> 
        <br className="block sm:hidden" />
        <span className="block sm:inline text-primary text-xl    sm:text-3xl sm:ml-2">MAXIMISE GAINS</span>
      </h2>
    </div>

    <div className="flex items-center justify-center mb-3 mr-4 sm:mb-3 sm:mr-4">
      <HoverArrowButton
        label="Sell Now"
        onClick={() => navigate("/")}
        className="px-6 py-3  font-semibold text-base rounded-full transition bg-primary text-white border border-primary shadow-lg hover:scale-105 overflow-hidden"
        textClass="text-white"
        hoverTextClass="text-white"
      />
    </div>
  </div>
</div>

</div>


      <div className="bg-[#1cbeff] py-16 sm:px-4">
        <div className="max-w-[97%] sm:max-w-[80%] mx-auto text-center text-white">
          <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase">3 Simple Steps</h2>

          {/* Mobile: Steps as vertical layout */}
          <div className="block md:hidden mb-12 mx-4">
            {/* Step 1 */}
            <div className="flex items-start text-left gap-4 px-2 mb-8">
              <div className="text-[100px] font-extrabold leading-none text-white pl-2">1</div>
              <div className="text-right">
                <h4 className="text-base font-bold mb-2 text-black uppercase pl-2">Tell us about your car</h4>
                <p className="text-sm leading-relaxed text-white pl-2">
                  Enter your vehicle's details to access our user friendly interface, which will guide you through a simple
                  step-by-step process.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg ">
                <img
                  src={img5}
                  alt="Person taking photos of their car"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start text-left gap-4 px-2 mb-8">
              <div className="text-[100px] font-extrabold leading-none text-white">2</div>
              <div className="text-right">
                <h4 className="text-base font-bold mb-2 text-black uppercase">Get paired with your perfect match</h4>
                <p className="text-sm leading-relaxed text-white">
                  Our platform swiftly analyses your car details, connecting you with the right dealer from our extensive
                  network of buyers.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg ">
                <img
                  src={img6}
                  alt="Wooden figure with star rating"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start text-left gap-4 px-2 mb-8">
              <div className="text-[100px] font-extrabold leading-none text-white">3</div>
              <div className="text-right" >
                <h4 className="text-base font-bold mb-2 text-black uppercase">You receive fast payment</h4>
                <p className="text-sm leading-relaxed text-white">
                  Quick, hassle-free transaction! Agree to an offer, and the dealer will promptly pay you and arrange for your
                  car's collection at your convenience.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg ">
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

          {/* Desktop: Steps layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-10 mb-12">
            {/* Step 1 */}
            <div className="flex items-start text-left gap-4">
              <div className="text-[120px] font-extrabold leading-none text-white">1</div>
              <div className="text-right">
                <h4 className="text-lg font-bold mb-2 text-black uppercase">Tell us about your car</h4>
                <p className="text-sm leading-relaxed text-white">
                  Enter your vehicle's details to access our user friendly interface, which will guide you through a simple
                  step-by-step process.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start text-left gap-4">
              <div className="text-[120px] font-extrabold leading-none text-white">2</div>
              <div className="text-right">
                <h4 className="text-lg font-bold mb-2 text-black uppercase">Get paired with your perfect match</h4>
                <p className="text-sm leading-relaxed text-white">
                  Our platform swiftly analyses your car details, connecting you with the right dealer from our extensive
                  network of&nbsp;buyers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start text-left gap-4">
              <div className="text-[120px] font-extrabold leading-none text-white">3</div>
              <div className="text-right">
                <h4 className="text-lg font-bold mb-2 text-black uppercase">You receive fast payment</h4>
                <p className="text-sm leading-relaxed text-white">
                  Quick, hassle-free transaction! Agree to an offer, and the dealer will promptly pay you and arrange for your
                  car's collection at your convenience.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Step Images */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
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

        <div className="w-full py-4 sm:py-8">
  <div className="max-w-full sm:max-w-[80%] mx-auto flex flex-row items-center justify-between  sm:px-0">
    
    {/* Text Block */}
    <div className="bg-white rounded-r-full py-1 sm:py-2 pl-6 pr-4 sm:pl-6 sm:pr-18 flex-shrink">
      <h2 className="text-base sm:text-base md:text-3xl font-bold whitespace-nowrap">
        Free Service, Fast Match,
        <span className="block sm:inline text-primary text-3xl sm:text-3xl sm:ml-2">
          INSTANT PAY
        </span>
      </h2>
    </div>

    {/* Button */}
    <div className="flex items-center justify-center mr-4  ">
      <HoverArrowButton
        label="Sell Now"
        onClick={() => navigate("/")}
        className="px-6 py-3  font-semibold text-base rounded-full transition bg-white  border border-primary shadow-lg hover:scale-105 overflow-hidden"
        textClass="text-primary"
        hoverTextClass="text-primary"
      />
    </div>
    
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
