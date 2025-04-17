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

const Dashboard = () => {
  return (
    <div >
   



  
<HomeSlider/>
    <TurtleSection/>
    <AllServices/>
    <ServiceCards/>
    <NewsVideoSection
        videoId="8sD9D4T9D-o"
        title="Police are hunting two car thieves after an online sale went horribly wrong"
        source="7 NEWS"
      />
      <BusinessPartnerSection/>
    <ReviewCarousel/>
    <VirtualToursCard/>
    <SupportCharitiesSection/>
    <AboutYouSection/>
    <FleetEnterpriseServices/>
    <FooterSection/>
    </div>
  );
};

export default Dashboard;
