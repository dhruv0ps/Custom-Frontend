import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCardMobile from "./CarCardMobile";
import img1 from "@/assets/Wheelz-Australia-White-and-Blue-Color-300x66.webp";
import gif1 from "@/assets/Stars.webp";
import Video1 from "@/assets/Pre-Owned-Wheelz-Australia.mp4";
import gif2 from "@/assets/Wheelz-Australia-Coming-Soon-icon.webp"
import gif3 from "@/assets/Stars-icon.webp"

import img11 from "@/assets/Mazda-Car.webp"
import img12 from "@/assets/Mazda-Car-DJ-Series.png"
import img13 from "@/assets/Ford-Car.webp"
import img14 from "@/assets/Land-Rover-Car.webp"
import img15 from "@/assets/KIA-Car.webp"
import img16 from "@/assets/BMW-Car.webp"

import logo1 from "@/assets/Mazda-Car-Logo.webp"
import logo2 from "@/assets/Ford-Car-Logo.webp"
import logo3 from "@/assets/Land-Rover-Car-Logo.webp"
import logo4 from "@/assets/KIA-Car-Logo.webp"
import logo5 from "@/assets/BMW-Car-Logo.webp"
import AllFooterSection from "@/util/AllFooterSection";
export default function DemoPreCar() {
  const navigate = useNavigate();
  const [state, setState] = useState("");

  const handleStateChange = (e: any) => {
    setState(e.target.value);
  };
  const cars = [
    {
      image: img11,
      name: "2023 Mazda CX-8 D35 Asaki KG Series Auto i-ACTIV AWD",
      price: "$45,764 Drive Away",
      brandLogo: logo1,
      brand: "mazda",
      specs: [
        "SUV",
        "Automatic",
        "4cyl 2.2L T Diesel",
        "5,670 km",
        "Build Date: June 2023",
      ],
    },
    {
      image: img12,
      name: "2024 Mazda 2 G15 Pure DJ Series Auto",
      price: "$28,838 Drive Away",
      brandLogo: logo1,
      brand: "mazda",
      specs: [
        "HATCH",
        "Automatic",
        "4cyl 1.5L Petrol",
        "4,220 km",
        "Build Date: March 2024",
      ],
    },
    {
      image: img13,
      name: "2023 Ford Everest Platinum Auto 4WD MY23.5",
      price: "$86,790 Drive Away",
      brandLogo: logo2,
      brand: "ford",
      specs: [
        "SUV",
        "Automatic",
        "6cyl 3.0L T Diesel",
        "13,956 km",
        "Build Date: February 2024",
      ],
    },
    {
      image: img14,
      name: "2024 Land Rover Defender 110 P400 S Auto AWD MY24",
      price: "$126,990 Drive Away",
      brandLogo: logo3,
      brand: "land-rover",
      specs: [
        "SUV",
        "Automatic",
        "6cyl 3.0L T Diesel",
        "1,358 km",
        "Build Date: October 2024",
      ],
    },
    {
      image: img15,
      name: "2023 Kia Sportage S Auto FWD MY24",
      price: "$35,990 Drive Away",
      brandLogo: logo4,
      brand: "kia",
      specs: [
        "SUV",
        "Automatic",
        "4cyl 2.0L Petrol",
        "4,458 km",
        "Build Date: September 2023",
      ],
    },
    {
      image: img16,
      name: "2024 BMW iX2 xDrive30 M Sport U10 Auto AWD",
      price: "$92,500 Drive Away",
      brandLogo: logo5,
      brand: "bmw",
      specs: [
        "SUV",
        "Automatic",
        "4cyl 2.0L T Petrol",
        "1,595 km",
        "Build Date: January 2024",
      ],
    }
  ];
  
  
  return (
    <>
      {/* Video Banner Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={Video1}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute bottom-0 left-0 right-0 bg-white py-4 z-20">
          <h1 className="text-center text-2xl font-bold">
            Tested, trusted and can be yours today!
          </h1>
        </div>
      </div>

      {/* State Dropdown + Nav */}
      <div className="bg-[#1cbeff] py-8 px-4 flex flex-col items-center relative z-20">
        <div className="mb-6 w-full max-w-xs">
          <select
            className="w-full py-3 px-4 bg-white rounded-md text-black appearance-none cursor-pointer shadow"
            value={state}
            onChange={handleStateChange}
          >
            <option value="" disabled>
              State
            </option>
            <option value="nsw">New South Wales</option>
            <option value="vic">Victoria</option>
            <option value="qld">Queensland</option>
            <option value="wa">Western Australia</option>
            <option value="sa">South Australia</option>
            <option value="tas">Tasmania</option>
            <option value="act">Australian Capital Territory</option>
            <option value="nt">Northern Territory</option>
          </select>
        </div>

        <div className="flex gap-4">
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

      {/* Top Deals Section */}
      <div className="bg-[#0e2a5f] w-full">
      <div className="py-12 px-4 w-full md:max-w-[80%] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <img src={img1} alt="Wheelz Logo" className="w-[220px] mb-2" />
            <h2 className="text-white text-xl font-bold">Demonstrator & Pre-Owned</h2>
          </div>

          {/* Heading with Stars */}
          <div className="flex items-center justify-center gap-4 mb-10">
          <img 
  src={gif1} 
  alt="stars" 
  title="Stars" 
  className="w-[40px] sm:w-[48px] md:w-[64px] lg:w-[80px] xl:w-[100px] transition duration-300" 
  loading="lazy" 
/>
            <h2 className="text-[#18c3ff] text-2xl font-semibold text-center">
              This Month's Top Deals
            </h2>
            <img 
  src={gif3} 
  alt="stars" 
  title="Stars" 
  className="w-[40px] sm:w-[48px] md:w-[64px] lg:w-[80px] xl:w-[100px] transition duration-300" 
  loading="lazy" 
/>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {Array.from({ length: 30 }, (_, index) => {
  const car = cars[index] || null;

  return (
    <div key={index}>

      <div className="block md:hidden">
        <CarCardMobile car={car} />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-white rounded-2xl p-2 flex flex-col items-center border-[12px] border-primary  shadow-md">
        <h2>
                <img src={gif2}  className="w-full max-w-[320px] h-auto object-contain  mx-auto" 
                loading="lazy" />
                </h2>

              

               
                {/* CTA Button */}
                <button className="bg-primary text-white px-3 py-1 mb-2 mx-2 rounded-full shadow-md hover:shadow-lg transition ml-auto">
                  Enquire Now
                </button>
         
        </div>
      </div>
    </div>
  );
})}

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
    className="text-white border border-[#1cbeff] bg-[#1cbeff] px-6 py-2 rounded-full text-[18px] font-medium transition hover:opacity-90"
  >
    View All
  </button>
</div>
<AllFooterSection content={[
  `Important: All information regarding demonstrator and pre-owned vehicles is provided directly by the dealership. We do not take responsibility for the accuracy, completeness, or reliability of this information. Deals for demonstrator and pre-owned vehicles are solely between the Buyer and the Seller, with no involvement from us in the negotiation, execution, or outcome of these deals.`
]}/>
    </>
  );
}
