import { useNavigate } from "react-router-dom";
import CarCardMobile from "./CarCardMobile";
import img1 from "@/assets/Wheelz-Australia-White-and-Blue-Color-300x66.webp";
import { useState } from "react";
import Video1 from "@/assets/Pre-Owned-Wheelz-Australia.mp4";
import gif2 from "@/assets/Wheelz-Australia-Coming-Soon-icon.webp"

import img2 from "@/assets/Demo & Pre-Owned/Certified.jpg"
import img11 from "@/assets/Mazda-Car.webp"
import img12 from "@/assets/Mazda-Car-DJ-Series.png"
import img13 from "@/assets/Ford-Car.webp"
import img14 from "@/assets/Land-Rover-Car.webp"
import img15 from "@/assets/KIA-Car.webp"
import img16 from "@/assets/BMW-Car.webp"
import VideoBanner from "@/util/VideoBanner";
import logo1 from "@/assets/Mazda-Car-Logo.webp"
import logo2 from "@/assets/Ford-Car-Logo.webp"
import logo3 from "@/assets/Land-Rover-Car-Logo.webp"
import logo4 from "@/assets/KIA-Car-Logo.webp"
import logo5 from "@/assets/BMW-Car-Logo.webp"
import AllFooterSection from "@/util/AllFooterSection";
import HoverArrowButton from "@/util/HoverButton";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/config";
export default function DemoPreCar() {
  const navigate = useNavigate();
 
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
  const HoverButton = () => {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div className="flex justify-end w-full">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative bg-primary text-white px-3 py-1 mb-2 mx-2 rounded-full  hover:px-4 shadow-md hover:shadow-lg transition-all overflow-hidden"
        >
          {/* Static Text */}
          <span
            className={`transition-opacity duration-200 ${hovered ? "opacity-0" : "opacity-100"} relative z-10`}
          >
            Enquire Now
          </span>
  
          {/* Hover Text + Icon */}
          <span
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200  ${
              hovered ? "opacity-100" : "opacity-0"
            } z-10`}
          >
            Enquire Now <ChevronRight className=" w-4 h-4" />
          </span>
        </button>
      </div>
    );
  };
  
  
  return (
    <>
      {/* Video Banner Section */}

  <VideoBanner
  videoSrc={Video1}
  heading="Tested, trusted and can be yours today!"
  primaryButtonLabel="Home"
  primaryButtonLink="/"
  secondaryButtonLabel="View All"
secondaryButtonLink={`${BASE_URL}/demo-preowned`}
  mode="demo" 
/>

      
      


      {/* Top Deals Section */}
      <div className="bg-[#0e2a5f] w-full">
      <div className="py-12 sm:px-4 max-w-[95%] w-full md:max-w-[80%] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <img src={img1} alt="Wheelz Logo" className="w-[220px] mb-2" />
            <h2 className="text-white  text-xl sm:text-4xl sm:mt-2 font-bold">Demonstrator & Pre-Owned</h2>
          </div>

          {/* Heading with Stars */}
          <div className="flex items-center justify-center gap-4 mb-10">
     
            <h2 className="text-[#18c3ff] text-3xl sm:text-4xl font-bold text-center">
              This Month's Top Deals 
            </h2>
            
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
              
                <HoverButton/>
         
        </div>
      </div>
    </div>
  );
})}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-lg md:py-12 mt-4">

  <div className="text-white space-y-4 order-1 md:order-2">
  <h2 className="text-2xl md:text-[1.4em] font-semibold md:font-bold ">
  Certified Confidence,
  <br className="block md:hidden" />
  <span className="inline md:inline-block"> Dealer-Backed Assurance</span>
</h2>

    <p>Every Demo and Pre-Owned vehicle on our platform is offered exclusively by licensed dealerships, so you can drive away with complete peace of mind.</p>
    <p>Each car has been carefully inspected, professionally tested, and meets the quality standards you’d expect from trusted, regulated sellers.</p>
    <p>Whether you’re after near new performance or dependable value, you’re not just getting a great deal, you’re making a smart, safe, and secure choice.</p>
    <p>Explore with confidence, knowing every listing is backed by credibility and care.</p>
  </div>

  {/* Image Second */}
  <img 
    src={img2} 
    alt="Certified Confidence" 
    className="rounded-lg w-full h-auto object-cover order-2 md:order-1" 
  />
</div>

        </div>
      </div>

      <div className="mt-12 w-full">
      <div className="flex justify-center gap-16 sm:flex-wrap sm:px-4">
  <HoverArrowButton
    label="Home"
    onClick={() => navigate("/")}
    className="border border-[#d9d9d9] bg-[#d9d9d9] px-6 py-2 rounded-full transition hover:opacity-90"
    textClass="text-black text-[18px] font-medium"
    hoverTextClass="text-black text-[18px] font-medium"
  />

  {/* View All Button */}
  <HoverArrowButton
    label="View All"
   onClick={() => window.location.href = `${BASE_URL}/demo-preowned`}
    className="border border-[#1cbeff] bg-[#1cbeff] px-6 py-2 rounded-full transition hover:opacity-90"
    textClass="text-white text-[18px] font-medium"
    hoverTextClass="text-white text-[18px] font-medium"
  />
  </div>
</div>

<AllFooterSection content={[
  `<strong>Important</strong>: All information regarding demonstrator and pre-owned vehicles is provided directly by the dealership. We do not take responsibility for the accuracy, completeness, or reliability of this information. Deals for demonstrator and pre-owned vehicles are solely between the Buyer and the Seller, with no involvement from us in the negotiation, execution, or outcome of these deals.`
]}/>
    </>
  );
}
