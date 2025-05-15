import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img1 from "@/assets/Wheelz-Australia-White-and-Blue-Color-300x66.webp";
import Video1 from "@/assets/Pre-Owned-Wheelz-Australia.mp4";
import gif2 from "@/assets/Wheelz-Australia-Coming-Soon-icon.webp";
import img2 from "@/assets/Demo & Pre-Owned/Certified.jpg";
import VideoBanner from "@/util/VideoBanner";
import AllFooterSection from "@/util/AllFooterSection";
import HoverArrowButton from "@/util/HoverButton";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/config";
import CarCardMobile from "./CarCardMobile";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
export default function DemoPreCar() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const carsPerPage = 30;

  
  const cars = Array.from({ length: 150 }, (_,) => null);

  const paginatedCars = cars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  const HoverButton = () => {
    const [hovered, setHovered] = useState(false);
    return (
      <div className="flex justify-end w-full">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative bg-primary text-white px-3 py-1 mb-2 mx-2 rounded-full hover:px-4 shadow-md hover:shadow-lg transition-all overflow-hidden"
        >
          <span className={`transition-opacity duration-200 ${hovered ? "opacity-0" : "opacity-100"} relative z-10`}>
            Enquire Now
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"} z-10`}>
            Enquire Now <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    );
  };
  const PaginationControls = () => (
    <>
    <div className="flex justify-center items-center gap-6 ">  <span className="text-white font-medium text-lg">
      Page {currentPage} of {totalPages}
    </span>  </div>
    <div className="flex justify-center items-center gap-6 my-6">
    
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="bg-white text-primary px-4 py-2 rounded disabled:opacity-50"
    >
      <IoIosArrowBack className="w-10 h-10" />
    </button>
   
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="bg-white text-primary px-4 py-2 rounded disabled:opacity-50"
    >
         <IoIosArrowForward className="w-10 h-10" />
    </button>
  </div></>
);

  return (
    <>
      <VideoBanner
        videoSrc={Video1}
        heading="Tested, trusted and can be yours today!"
        primaryButtonLabel="Home"
        primaryButtonLink="/"
        secondaryButtonLabel="View All"
        secondaryButtonLink={`${BASE_URL}/demo-preowned`}
        mode="demo"
      />

      <div className="bg-[#0e2a5f] w-full">
        <div className="py-12 sm:px-4 max-w-[95%] w-full md:max-w-[80%] mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <img src={img1} alt="Wheelz Logo" className="w-[220px] mb-2" />
            <h2 className="text-white text-xl sm:text-4xl sm:mt-2 font-bold">Demonstrator & Pre-Owned</h2>
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <h2 className="text-[#18c3ff] text-3xl sm:text-4xl font-bold text-center">
              This Month's Top Deals
            </h2>
          </div>
<PaginationControls />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedCars.map((_, index) => (
              <div key={index}>
                <div className="hidden md:block">
                  <div className="bg-white rounded-2xl p-2 flex flex-col items-center border-[12px] border-primary shadow-md">
                    <img src={gif2} className="w-full max-w-[320px] h-auto object-contain mx-auto" loading="lazy" />
                    <HoverButton />
                  </div>
                </div>
                <div className="block md:hidden">
                  <CarCardMobile />
                </div>
              </div>
            ))}
          </div>
         <div className="mt-4">
         <PaginationControls/>
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
        `<strong>Important</strong>: All information regarding demonstrator and pre-owned vehicles is provided directly by the dealership...`
      ]} />
    </>
  );
}
