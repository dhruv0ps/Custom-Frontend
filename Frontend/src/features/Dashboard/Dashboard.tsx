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
import { VirtualToursCard } from "./VirtualToursCard";
import HomeSlider from "./HomoSlider";
import { useLoadingContext } from "../../layout/Home";
import video from "@/assets/Home/3sec.mp4";
import { Button } from "@/components/ui/button";
import turtleVideo from "@/assets/Homepage/iStock-464391536.mp4";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/config";

const Dashboard = () => {
  const allServicesRef = useRef<HTMLDivElement>(null);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [showVideo, setShowVideo] = useState(true);

  const scrollToAllServices = () => {
    if (!allServicesRef.current) return;

    const targetPosition = allServicesRef.current.offsetTop - 60;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const position = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, position);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <>
      {/* VIDEO LOADER ANIMATION */}
      <div className=" bg-white border border-white">      <AnimatePresence>
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
      </div>

      {/* MAIN DASHBOARD */}
      {!isLoading && (
        <div className="bg-white">
          <HomeSlider scrollToAllServices={scrollToAllServices} />
     <div className="bg-white border border-white m-0 p-0 bg-opacity-100" style={{backgroundColor: '#ffffff !important'}}>

            <div className="relative bg-black  w-full   p-0 " >
              <div className=" overflow-visible mb-12 min-h-[125px] py-8  mt-36 md:py-12 lg:mt-32 max-w-full sm:max-w-[80%] mx-auto bg-opacity-100 " style={{backgroundColor: '#ffffff !important'}}>
                <div className="absolute -top-32 lg:-top-24 left-1/2 md:left-12 lg:left-24 transform -translate-x-1/2 md:translate-x-0 z-20 lg:mt-0 ">
                  <div className="bg-white border border-white rounded-3xl p-4 mt-6 w-[400px] sm:w-[320px] md:w-[380px] lg:w-[400px] lg:ml-16 lg:shadow-2xl">
                    <h3 className="hidden md:block text-primary text-xl md:text-2xl font-bold text-end mb-2">
                      Yep, that's me!
                    </h3>
                    <div className="w-full h-[200px] sm:h-[160px] md:h-[180px] lg:h-[200px] ">
                      <video
                        src={turtleVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-contain md:object-cover  w-full "

                      />
                    </div>

                  </div>
                  <h3 className="block md:hidden text-primary text-2xl font-bold text-center mt-3">
                    Yep, that's me!
                  </h3>
                </div>

                {/* Black Section Content */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-4 px-4 mt-32 md:mt-0">
                  <p className="text-white text-center mt-6 sm:mt-0 md:text-right text-base md:text-xl font-semibold mb-4 md:mb-0">
                    You're probably wondering how I ended up in this situation...
                  </p>
                  <Button onClick={() => (window.location.href = `${BASE_URL}/ambassador`)} className="group relative bg-primary hover:bg-sky-500 text-white font-semibold rounded-full px-4 md:px-6 py-2 shadow transition-all flex items-center justify-center overflow-hidden">
                    {/* Default Text */}
                    <span className="transition-opacity duration-200 group-hover:opacity-0">
                      Learn More
                    </span>

                    {/* Hover State with Arrow */}
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      Learn More
                      <ChevronRight className=" h-5 w-5" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
