import { Link } from "react-router-dom"
import Videp1 from "@/assets/Sell-Car-Services.mp4"
import img1 from "@/assets/SellCar/Wheelz-icon-1.webp"
import img2 from "@/assets/SellCar/Wheelz-icon-2.webp"
import img3 from "@/assets/SellCar/Wheelz-icon-3.webp"
import img4 from "@/assets/SellCar/Wheelz-icon-4.webp"
import img5 from "@/assets/SellCar/Tell-us-car.webp"
import img6 from "@/assets/SellCar/Perfact-match.webp"
import img7 from "@/assets/SellCar/Fast-Payment.webp"
import NewsSection from "./NewsSection"
import WhyChooseUs from "./WhyChooseUs"
import SellFooterSection from "./SellFooterSection"
import { ChevronRight } from "lucide-react"
export default function SellCar() {
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
          <div className="bg-white text-center py-4 px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
              Sell smarter, earn more, it’s that simple!
            </h1>
          </div>

          <div className="bg-primary py-4 px-2 sm:py-8 w-full">
                        <div className="flex justify-center gap-4 flex-wrap px-4">
                            <Link
                                to="/"
                                className="bg-gray-300 text-black font-semibold px-8 py-3 rounded-full shadow-md  transition-all min-w-[140px] text-center"
                            >
                                <span>Home</span>
                                <span className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-2 transition-all duration-300">
                                    &gt;
                                </span>
                            </Link>
                            <Link
                                to="/sell-your-car/form"
                                className="group bg-white text-[#1cbeff] hover:bg-opacity-90 transition-all font-semibold px-6 py-3 rounded-full shadow-md inline-flex items-center gap-1"
                            >
                                <span>Access Form</span>
                                <span className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-2 transition-all duration-300">
                                    &gt;
                                </span>
                            </Link>
                        </div>
                    </div>
        </div>


      </div>
      <div className="bg-[#b7eaff] py-12">
        <div className="max-w-[80%]  mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">We Work For You</h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Feature Card 1 */}
            <div className="flex flex-col items-center text-center">
              <img src={img1} alt="Easy Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Innovative Selling Solution</h3>
              <p className="text-sm text-gray-700">
                Unlock the future of hassle-free sales with our cutting edge technology.
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img2} alt="Free Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Cost-Free Listing Efficiency</h3>
              <p className="text-sm text-gray-700 px-2">
                List your car without spending a dollar and maximise your selling potential effortlessly.
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img3} alt="Connection Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Effortless Connection</h3>
              <p className="text-sm text-gray-700 px-2">
                We seamlessly connect you with the right dealerships from our national network, making selling as simple as a few clicks.
              </p>
            </div>


            <div className="flex flex-col items-center text-center">
              <img src={img4} alt="Network Icon" className="rounded-xl shadow-md mb-4 w-[107px] h-[107px] object-contain" />
              <h3 className="font-bold text-sm mb-2">Trustworthy Dealership Network</h3>
              <p className="text-sm text-gray-700 px-2">
                Rely on our manufacturer-approved dealers for transparency and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="w-full py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="bg-white rounded-r-full py-2 pl-6 pr-32 mb-4 sm:mb-0">
                <h2 className="text-xl md:text-3xl font-bold">
                  Simplify Sales, <span className="text-primary">MAXIMISE GAINS</span>
                </h2>
              </div>
              <Link
                to="/buy-car/form"
                className="group relative px-6 py-3 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
              >

                <span className="block group-hover:opacity-0 transition-opacity duration-200">
                  Sell Now
                </span>


                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Buy Now <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>



            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1cbeff] py-16 px-4">
        <div className="max-w-[80%] mx-auto text-center text-white">
          <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase">3 Simple Steps</h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Step 1 */}
            <div className="flex items-start text-left gap-4 px-2">
              <div className="text-[100px] md:text-[120px] font-extrabold leading-none text-white">1</div>
              <div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-black uppercase">Tell us about your car</h4>
                <p className="text-sm leading-relaxed text-white">
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
                <h4 className="text-base md:text-lg font-bold mb-2 text-black  uppercase">You receive fast payment</h4>
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

          <div className="w-full py-8">
                        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                            <div className="bg-white rounded-r-full py-2 pl-6 pr-32 mb-4 sm:mb-0">
                                <h2 className="text-xl md:text-3xl font-bold">
                                    <span className="text-black">Free Service, Fast Match,  </span>
                                    <span className="text-primary">INSTANT PAY</span>
                                </h2>
                            </div>
                            <Link
                                to="/buy-car/form"
                                className="group relative px-6 py-3 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
                            >

                                <span className="block group-hover:opacity-0 transition-opacity duration-200">
                                  Sell Now
                                </span>


                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  Sell Now <ChevronRight className="ml-1 h-4 w-4" />
                                </span>
                            </Link>

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
      <SellFooterSection />
    </>
  )
}
