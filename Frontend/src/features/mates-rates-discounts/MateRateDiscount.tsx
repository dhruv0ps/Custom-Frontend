import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import video1 from "@/assets/Mates-Rates.mp4";
import img1 from "@/assets/MateRate/Setting.png"
import img2 from "@/assets/MateRate/Tyer-icon.png"
import img3 from "@/assets/MateRate/Brake-Icon.png"
import img4 from "@/assets/MateRate/Suspension-Icon.png"
import img5 from "@/assets/MateRate/Windscreen-Icon.png"
import img6 from "@/assets/MateRate/Tinting-icon.png"
import img7 from "@/assets/MateRate/Carwash-Icon.png"
import img8 from "@/assets/MateRate/Detailing-Icon.png"
import img9 from "@/assets/MateRate/Bodywork-Icon.png"
import img10 from "@/assets/MateRate/Dent-Repair-Icon.png"
import img11 from "@/assets/MateRate/Battery-Icon.png"
import img12 from "@/assets/MateRate/Exhaust-Icon.png"
import img13 from "@/assets/MateRate/Performance-Icon.png"
import img14 from "@/assets/MateRate/Car-Rent-Icon.png"
import img15 from "@/assets/MateRate/Air-Icon.png"
import img16 from "@/assets/MateRate/Assist-Icon.png"
import img17 from "@/assets/MateRate/Towing-Icon.png"
import img18 from "@/assets/MateRate/Inspection-Icon.png"
import img19 from "@/assets/MateRate/Stores-Icon.png"
import img20 from "@/assets/MateRate/Leasing-Icon.png"
import img21 from "@/assets/MateRate/Fuel-Icon.png"
import img22 from "@/assets/MateRate/Fleet-icon.png"
import img23 from "@/assets/MateRate/Finance-Icon.png"
import img24 from "@/assets/MateRate/Insurance-Icon.png"
import img25 from "@/assets/MateRate/Partnership-Icon.png"
import img26 from "@/assets/MateRate/Fundraiser-Icon.png"
import img27 from "@/assets/MateRate/Winner-Icon.png"
import img28 from "@/assets/MateRate/Membership-icon.png"
import img29 from "@/assets/MateRate/Loyalty-Icon.png"
import img30 from "@/assets/MateRate/Overhauled-Icon.png"
import img31 from "@/assets/MateRate/Sell-car-Icon.png"
import img32 from "@/assets/MateRate/Buy-Car-Icon.png"
import img33 from "@/assets/MateRate/Test-Drive-Icon.png"
import img34 from "@/assets/MateRate/Demo-Used-Car.webp"
import img35 from "@/assets/MateRate/soon.webp"

import img40 from "@/assets/Discount-Offers-at-Wheelz-Australia-for-Mobile-Version.webp"
import PremuimPartner from './PremuimPartner';
import WhyChooseUs from './WhyChooseus';
import AllFooterSection from '@/util/AllFooterSection';
const MateRateDiscount: React.FC = () => {
  const navigate = useNavigate();
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
   
    const timer = setTimeout(() => setAnimateIcons(true), 100);
    return () => clearTimeout(timer);
  }, []);
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
              Mates rates discounts await members
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
                Access Form
              </button>
            </div>
          </div>
        </div>
      </div> 

      <div className='bg-white'>
        <div className=' max-w-full sm:max-w-[80%] mx-auto'>
        <div className="text-center py-10">
  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
    Your Loyalty Deserves More
  </h2>
  <p className="text-gray-600 font-semibold mt-2 text-lg">Here’s Our Diverse Range Of Services</p>
</div>

<div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-16">
  {[
  { name: "Mechanic", img: img1 },
  { name: "Tyres", img: img2 },
  { name: "Brakes", img: img3 },
  { name: "Suspension", img: img4 },
  { name: "Windscreens", img: img5 },
  { name: "Tinting", img: img6 },
  { name: "Carwash", img: img7 },
  { name: "Detailing", img: img8 },
  { name: "Bodywork", img: img9 },
  { name: "Dent Repairs", img: img10 },
  { name: "Batteries", img: img11 },
  { name: "Exhausts", img: img12 },
  { name: "Performance", img: img13 },
  { name: "Car Rentals", img: img14 },
  { name: "Air Conditioning", img: img15 },
  { name: "Roadside Assist", img: img16 },
  { name: "Towing", img: img17 },
  { name: "Car Inspections", img: img18 },
  { name: "Retail Stores", img: img19 },
  { name: "Car Leasing", img: img20 },
  { name: "Fuel Offers", img: img21 },
  { name: "Fleet", img: img22 },
  { name: "Finance", img: img23 },
  { name: "Insurance", img: img24 },
  { name: "Partnerships", img: img25 },
  { name: "Fundraisers", img: img26 },
  { name: "Prize Winners", img: img27 },
  { name: "Membership", img: img28 },
  { name: "Trade Promotion", img: img29 },
  { name: "Overhauled", img: img30 },
  { name: "Sell Your Car", img: img31 },
  { name: "Buy A New Car", img: img32 },
  { name: "Virtual Tours", img: img33 },
  { name: "Demo & Used", img: img34 },
  { name: "Coming Soon", img: img35 },
  { name: "Coming Soon", img: img35 },
]
.map((item, index) => (
    <div key={index} className="flex flex-col items-center gap-3">
      <div className="w-[110px] h-[110px] bg-white  shadow-md flex items-center justify-center rounded-[20px] overflow-hidden p-[5px]"
       style={{ boxShadow: "inset 0px 0px 18px 0px rgba(0,0,0,0.3)" }}>
       <img
  src={item.img}
  alt={item.name}
  className={`w-[243px] object-contain ${animateIcons ? 'animate-fadeTop' : ''}`}
/>

      </div>
      <p className="text-sm mt-4 font-semibold text-black text-center">{item.name}</p>
    </div>
  ))}
</div>

            
        </div>
        
      <div className="max-w-full sm:max-w-[80%] mx-auto  px-4 flex flex-row   sm:flex-row items-center justify-between">
      <div className="bg-gray-300 rounded-r-full rounded-l-none py-2 pl-6 pr-6 sm:pr-72 mb-4 sm:mb-0 w-full sm:w-auto">

          <h2 className="text-xl md:text-3xl font-bold text-center sm:text-left">
            <div className='flex flex-col  sm:flex-row '>
              <span className="text-black">Service Not Listed?</span>
            </div>
          </h2>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition w-full sm:w-auto"
        >
          Let us Know
        </button>
      </div>
  
      </div>
      <div className="block sm:hidden px-4 pb-6 bg-[#0E3F7B] ">
       
        <h2 className="text-white text-center text-3xl font-extrabold uppercase mb-3 mt-4 py-6">Unlock Your Saving</h2>
  <div className="bg-[#ff3d00] text-white p-4 rounded-xl shadow">
    <h3 className="font-bold text-lg uppercase text-end mb-2">MATES RATES</h3>
    <p className="text-sm mb-4 text-end">
      Members automatically qualify for exclusive discounts from our partners,
      with great deals and special savings available year round.
    </p>
    <img
      src={img40}
      alt="Discounts"
      className="w-full object-contain rounded"
    />
  </div>

</div>
      <PremuimPartner/>
      <WhyChooseUs/>
      <AllFooterSection content={[
`Important: In our commitment to providing reliable, discounted, and quality services, please note that the platform reserves the right to modify terms, including any third-party services and associated policies. We may introduce or alter services and will promptly communicate any changes to our members. Whilst we facilitate a transparent customer rating system on services, please be aware that we are not responsible for any third-party service or offer undertaken through our platform.`
      ]}/>
    </>
  );
};

export default MateRateDiscount;
