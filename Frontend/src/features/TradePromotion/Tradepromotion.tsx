import React from 'react'
import video1 from "@/assets/Loyalty-Program.mp4"
import { useNavigate } from 'react-router-dom';
import img1 from "@/assets/Trade Promotion/iStock1270040021-(1).jpg";
import img2 from "@/assets/Trade Promotion/iStock-1442562842-(1).jpg";
import img3 from "@/assets/Trade Promotion/iStock.jpg";
import TradePromotionGrid from './TradePromotionGrid';
import WhyChooseUs from './WhyChooseUs';
import AllFooterSection from '@/util/AllFooterSection';
import VideoBanner from '@/util/VideoBanner';
const Tradepromotion: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
     <VideoBanner
  videoSrc={video1}
  heading="Free cash prize draws for loyal members"
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="View All"
  secondaryButtonLink="/view-all"
/>
      <div className="bg-[#d9d9d9] px-4 py-12">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          Trade Promotion Draws At No Cost
        </h2>

        {/* Layout */}
        <div className="max-w-full sm:max-w-full md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Images */}
          <div className="flex flex-col gap-6">
            <img
              src={img1}
              alt="Excited users"
              className="rounded-xl object-cover w-full h-full shadow-md"
            />
            <img
              src={img2}
              alt="Join Wheelz"
              className="rounded-xl object-cover w-full h-full shadow-md"
            />
          </div>

          {/* Center Description Box */}
          <div className="bg-white rounded-xl p-8 text-center shadow-md flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-[#1cbeff] mb-4">
              Your Membership Just Got Better
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Join our VIP automotive community and unlock a world of exclusive benefits!
              As a valued member, you'll automatically be entered into our periodic Trade
              Promotion cash prize draws, giving you the chance to win exciting rewards at
              no extra cost.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Along with your entry into these thrilling draws, you'll also enjoy fantastic
              Mates Rates prices on automotive services from our trusted partners, ensuring
              you get great value every time.
            </p>
            <p className="text-gray-700 text-sm">
              Whether you're looking to fund a holiday, cover some bills, or even contribute
              towards a new car, our promotions offer you the chance to win big while enjoying
              excellent services at unbeatable prices.
            </p>
            <p className="text-sm text-gray-800 mt-4 font-bold">
              Sign up today and you could be the next lucky winner!
            </p>
          </div>

          {/* Right Image */}
          <div className="h-full flex">
            <div className="w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={img3}
                alt="Worker with phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>




        <div className="max-w-full sm:max-w-[80%] mx-auto mt-6 flex flex-row sm:flex-row items-center justify-between">
  <div className="bg-white rounded-r-full py-2 pl-2  sm:pl-6 pr-8 mb-4 sm:mb-0">
    <h2 className="text-base md:text-3xl font-bold text-black ">  
            <div className='flex flex-col  sm:flex-row '>
              <span className="text-black">Join, Save &</span>
            <span className="text-primary ml-1">WIN!</span></div>
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
