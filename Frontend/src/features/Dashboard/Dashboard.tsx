import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { useLoadingContext } from "../../layout/Home";
import video from "@/assets/Home/3sec.mp4";
const Dashboard = () => {
  const allServicesRef = useRef<HTMLDivElement>(null);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [showVideo, setShowVideo] = useState(true);

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
      setShowVideo(false);
      setIsLoading(false);
    }, 3000); // duration of video

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <>
      {/* VIDEO LOADER ANIMATION */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full max-w-md px-4">
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                >
                  <source
                    src={video}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN DASHBOARD */}
      {!isLoading && (
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
      )}
    </>
  );
};

export default Dashboard;
