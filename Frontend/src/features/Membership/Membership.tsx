import React from 'react'
import Videp1 from "@/assets/Membership/Car-Membership.mp4"
import { useNavigate } from 'react-router-dom'
import MembershipBenefits from './MemberShipBenfits';
import MembershipPricing from './MonthlyMembership';
import VipSavingsPage from './VipSaving';
import WhyChooseUs from './WhyChooseUs';
import AllFooterSection from '@/util/AllFooterSection';
const Membership:React.FC = () => {

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
            Tiffany slashed her expenses by $11,000
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
                Sign Me Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <MembershipBenefits/>
      <MembershipPricing/>
      <VipSavingsPage/>
      <WhyChooseUs/>
      <AllFooterSection content={
        [
            `Important Notice: *Due to the Privacy Act of 1988, the names, addresses, and savings of members presented here are for illustrative purposes only and reflect hypothetical spending habits.`,
            `Actual savings may vary significantly based on individual circumstances, spending patterns, and membership usage. Savings are contingent upon personalised financial behaviors and member choices.`
        ]
      }/>
    </>
  )
}

export default Membership
