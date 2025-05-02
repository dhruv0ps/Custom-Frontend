import React from 'react'
import vide from "@/assets/prize-draw-winners/Winners.mp4"

import PrizeCard from './PrizeCard'
import WhyChooseUs from '@/util/WhyChooseUs'
import happyUsersImg from "@/assets/prize-draw-winners/iStock1481243237.jpg";
import AllFooterSection from '@/util/AllFooterSection'
import VideoBanner from '@/util/VideoBanner'
const Prizedrawwinners:React.FC = () => {
   
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
          desc: "Winners are selected from across Australia, giving everyone a fair shot.",
        },
        {
          title: "Fair and Transparent",
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
  heading="Meet our latest trade promotion prize draw champions"
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="Sign Me Up"
  secondaryButtonLink="/view-all"
/>

      <div className="bg-primary">
      <div className=" max-w-full sm:max-w-[80%]  mx-auto py-12 px-4 sm:px-4 bg-[#0e3f80] rounded-t-[20px] overflow-hidden">
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
    </div>
    <WhyChooseUs
      title="Unlock The Magic Of Our Trade Promotion!"
      features={featureList}
      image={happyUsersImg}
    />
    <AllFooterSection content={[
        `Important: Our decision on trade promotion draws is final, and no disputes will be entertained. We reserve the right to modify program terms and conditions, including rewards, redemption criteria, and associated policies, to enhance the flexibility and adaptability of our trade promotion. Please note that we reserve the right to change the winner without dispute due to technicalities, or any other legitimate reasons. Rest assured, any changes will be communicated to our valued members in advance, ensuring transparency and providing an opportunity for informed participation in our evolving program.`
    ]}/>
    </>
  )
}

export default Prizedrawwinners
