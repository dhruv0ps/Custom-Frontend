import  { useRef, useState, useEffect } from "react";
import AboutYouSection from "./AboutYouSection";
import AllServices from "./AllServices";
import BusinessPartnerSection from "./BusinessPartnerSelection";
import FleetEnterpriseServices from "./Fleetenterpriseservices";
import FooterSection from "./FooterSection";
import NewsVideoSection from "./NewsVideoSection";
import ServiceCards from "./ServiceCard";
import SupportCharitiesSection from "./SupportCharitiesSection";
import ReviewCarousel from "./TestimonialCarousel";
import TurtleSection from "./TurtleSection";
import { VirtualToursCard } from "./VirtualToursCard";
import HomeSlider from "./HomoSlider";
import video from "@/assets/Home/3sec.mp4";

const Dashboard = () => {
  const allServicesRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const scrollToAllServices = () => {
    if (!allServicesRef.current) return;
  
    const offsetTop = allServicesRef.current.offsetTop;
  
    window.scrollTo({
      top: offsetTop - 60, 
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md  px-4">
          <div className="relative w-full pb-[56.25%]">
            {" "}
           
            <video autoPlay muted playsInline className="absolute inset-0 w-full h-full object-contain">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HomeSlider scrollToAllServices={scrollToAllServices} />
      <TurtleSection />
      <AllServices />
      <div ref={allServicesRef}>
        <ServiceCards />
      </div>
      <NewsVideoSection
        videoId="8sD9D4T9D-o"
        title="Police are hunting two car thieves after an online sale went horribly wrong"
        source="7 NEWS"
      />
      <BusinessPartnerSection />
      <ReviewCarousel />
      <VirtualToursCard />
      <SupportCharitiesSection />
      <AboutYouSection />
      <FleetEnterpriseServices />
      <FooterSection />
    </div>
  );
};

export default Dashboard;
