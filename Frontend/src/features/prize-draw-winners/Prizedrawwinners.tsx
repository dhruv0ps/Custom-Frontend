import React from 'react'
import vide from "@/assets/prize-draw-winners/Winners.mp4"
import HoverArrowButton from '@/util/HoverButton'
import PrizeCard from './PrizeCard'
import WhyChooseUs from '@/util/WhyChooseUs'
import happyUsersImg from "@/assets/prize-draw-winners/iStock1481243237.jpg";
import AllFooterSection from '@/util/AllFooterSection'
import VideoBanner from '@/util/VideoBanner'
import { useNavigate } from 'react-router-dom'
const Prizedrawwinners:React.FC = () => {
   const navigate = useNavigate()
    const featureList = [
        {
          title: "Cash Prizes",
          desc: "Win cash prizes, including substantial amounts.",
        },
        {
          title: "Periodic Draws",
          desc: "Participate in multiple chances to win with our periodic draws throughout the year.",
        },
        {
          title: "Nationwide Winners",
          desc: "Winners are selected from across Australia, giving everyone a chance to win.",
        },
        {
          title: "Fair And Transparent",
          desc: "All draws are conducted transparently to ensure fairness and excitement.",
        },
        {
          title: "Join Today",
          desc: "Sign up now for your chance to win and join our vibrant community.",
        },
      ];
  return (
    <>
   <VideoBanner
  videoSrc={vide}
  heading={
    <>
      Meet our latest trade promotion
      <br className="block sm:hidden" />
      <span className="inline sm:inline-block"> prize draw champions</span>
    </>
  }
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="Sign Me Up"
  secondaryButtonLink="/view-all"
/>

      <div className="bg-primary pb-10">
      <div className=" max-w-[95%] sm:max-w-[80%]  mx-auto  bg-[#0e3f80] rounded-t-[20px] overflow-hidden">
        <div className='py-12 px-4 sm:px-4'>
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mb-12">
          Kudos To Our Victorious Members!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PrizeCard number={1} title="BUCKS BONANZA" drawNumber="118" />
          <PrizeCard number={2} title="YOUR TANK, OUR TREAT" drawNumber="109" />
          <PrizeCard number={3} title="GLOW GOALS" drawNumber="120" />
          <PrizeCard number={4} title="DRIVE, RELAX & SPEND" drawNumber="106" />
          <PrizeCard number={5} title="BILL BUSTERS" drawNumber="221" />
          <PrizeCard number={6} title="COMING SOON" drawNumber="106" />
        </div>
        </div>
        <div className="w-full pb-12 block md:hidden">
    <div className="max-w-full  mx-auto flex flex-row items-center justify-between  sm:px-0">
      
      {/* Text Block */}
      <div className="bg-white rounded-r-full py-1 sm:py-2 pl-2 pr-12 sm:pl-6 sm:pr-18 flex-shrink"
       style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-base sm:text-base  font-bold whitespace-nowrap">
        Periodic Draws,
          <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">
          {""} Fair Chances
          </span>
        </h2>
      </div>
  
      {/* Button */}
      <div className=" sm:w-auto mr-4">
      <HoverArrowButton
  label="Sign Me Up"
  onClick={() => navigate("/access-form")}
  className="bg-white  transition-all  py-3 font-semibold text-base rounded-full shadow-md"
  textClass="text-primary"
  hoverTextClass="text-primary"
/>
      </div>
      
    </div>
  </div>
      </div>
      
    </div> 
     
    <WhyChooseUs
  title={
    <>
      Unlock The Magic Of Our
      <br className="block sm:hidden" />
      <span className="inline sm:inline-block"> Trade Promotion Draws!</span>
    </>
  }
  features={featureList}
  image={happyUsersImg}
/>
    <AllFooterSection content={[
        `<strong>Important</strong>: Our decision on trade promotion draws is final, and no disputes will be entertained. We reserve the right to modify program terms and conditions, including rewards, redemption criteria, and associated policies, to enhance the flexibility and adaptability of our trade promotion. Please note that we reserve the right to change the winner without dispute due to technicalities, or any other legitimate reasons. Rest assured, any changes will be communicated to our valued members in advance, ensuring transparency and providing an opportunity for informed participation in our evolving program.`
    ]}/>
    </>
  )
}

export default Prizedrawwinners
