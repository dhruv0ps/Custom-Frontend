import React from 'react'
import video1 from "@/assets/Loyalty-Program.mp4"
import { useNavigate } from 'react-router-dom';
import img1 from "@/assets/Trade-Promotion-at-Wheelz.webp";
import img2 from "@/assets/Join-Wheelz.webp";
import img3 from "@/assets/Haapy-Customer-at-Wheelz-Australia.webp";
import TradePromotionGrid from './TradePromotionGrid';
import WhyChooseUs from './WhyChooseUs';
import AllFooterSection from '@/util/AllFooterSection';
const Tradepromotion: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay for slight dimming */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        <div className="relative z-20 flex flex-col justify-end h-full">
          <div className="bg-white text-center py-4 px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
              Free cash prize draws for loyal members


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
      <div className="bg-[#d9d9d9] px-4 py-12">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          Trade Promotion Draws At No Cost
        </h2>

        {/* Layout */}
        <div className="max-w-full sm:max-w-full md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Images */}
          <div className="flex flex-col gap-6">
            <img
              src={img1}
              alt="Excited users"
              className="rounded-xl object-cover w-full shadow-md"
            />
            <img
              src={img2}
              alt="Join Wheelz"
              className="rounded-xl object-cover w-full shadow-md"
            />
          </div>

          {/* Center Description Box */}
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold text-[#1cbeff] mb-4">
              Your Membership Just Got Better
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Join our VIP automotive community and unlock a world of exclusive benefits!
              As a valued member, you’ll automatically be entered into our periodic Trade
              Promotion cash prize draws, giving you the chance to win exciting rewards at
              no extra cost.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Along with your entry into these thrilling draws, you’ll also enjoy fantastic
              Mates Rates prices on automotive services from our trusted partners, ensuring
              you get great value every time.
            </p>
            <p className="text-gray-700 text-sm">
              Whether you’re looking to fund a holiday, cover some bills, or even contribute
              towards a new car, our promotions offer you the chance to win big while enjoying
              excellent services at unbeatable prices.
            </p>
            <p className="text-sm text-gray-800 mt-4 font-medium">
              Sign up today and you could be the next lucky winner!
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={img3}
              alt="Worker with phone"
              className="rounded-xl object-cover w-full shadow-md"
            />
          </div>
        </div>




        <div className="max-w-[80%] mx-auto py-8 mt-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-row   sm:flex-row items-center justify-between">
        <div className="bg-white rounded-full  sm:rounded-r-full  py-2 pl-6  pr-6 sm:pr-72 mb-4 sm:mb-0 w-full sm:w-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center sm:text-left">
            <div className='flex flex-col  sm:flex-row '>
              <span className="text-black">Join, Save &</span>
            <span className="text-primary"> WIN!</span></div>
          </h2>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition w-full sm:w-auto"
        >
          Sign Me Up
        </button>
      </div>
    </div>

      </div>
      <TradePromotionGrid />
      <WhyChooseUs />
      <AllFooterSection
  content={[
    `<strong>Important:</strong> The platform reserves the right to modify program terms and conditions, including rewards, redemption criteria, and associated policies, to ensure flexibility and adaptability. Any changes will be communicated to members in advance, maintaining transparency and enabling informed participation in the evolving program.`,

    `Our trade promotion entries cannot be transferred or exchanged for any alternatives.`,

    `All prizes awarded in the Trade Promotion comply fully with state regulations, ensuring that no individual prize exceeds the legal limits. For detailed information on prize limitations in your state, please refer to the <strong>Competition Terms</strong>.`,
  ]}
/>
    </>
  );
}

export default Tradepromotion;
