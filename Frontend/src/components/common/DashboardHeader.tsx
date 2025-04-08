;
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/Become-Member/VIP.png";
import img2 from "@/assets/Become-Member/RegistrationRequest.png";
import img3 from "@/assets/SellYourCar.png";
import img4 from "@/assets/BuyNewCar.png";
import img5 from "@/assets/Dealer Demo/dealerDemo.jpg";
import img6 from "@/assets/MateRates.png";
import img7 from "@/assets/Trade Promotion/tradePromotionHeader.jpg";
import img8 from "@/assets/Virtual Tour/virtualTour.jpg";
import img9 from "@/assets/Finance/finance.jpg";
import img10 from "@/assets/Insurance/Insurance.jpg";
import img11 from "@/assets/Overhauled/overhauled.jpg";
import img12 from "@/assets/Charity/Charity.jpg";
import img13 from "@/assets/Savings/Saving.jpg";
import img14 from "@/assets/Reports1.jpg";
import img15 from "@/assets/FleetManagement.png";
export default function DashboardHeader() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const images = [
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img2,
    img15,
    img13,
    img14,
  ];
  const texts = [
    { heading: "Membership", route: "/become-member/membership" },
    { heading: "Sell Your Car", route: "/sell/rego" },
    { heading: "Buy A New Car", route: "/buy" },
    { heading: "Demo & Pre-owned", route: "/demo-preowned" },
    { heading: "Mates Rates", route: "/mates-rates" },
    { heading: "Trade Promotion Draws", route: "/trade-promotion" },
    { heading: "Virtual Tours", route: "/request-virtual-tour" },
    { heading: "Finance", route: "/finance" },
    { heading: "Insurance", route: "/insurance" },
    { heading: "Overhauled Competition", route: "/overhauled" },
    { heading: "We Support Charities", route: "/charities" },
    {
      heading: "Premium Partners",
      route: "/business-partner/register-partner",
    },
    {
      heading: "Fleet Enquiry",
      route: "/business-partner/fleet-management",
    },
    { heading: "Registered Vehicle Tracker", route: "/savings-tracker" },
    { heading: "Total Activity Report", route: "/my-reports" },
  ];
  const specificTexts = [
    { heading: "sell free, buy smart, win & save big" },
    { heading: "simplify sales, maximise gains" },
    { heading: "unlock exclusive new car deals" },
    { heading: "drive near-new cars for less" },
    { heading: "enjoy member-only savings" },
    { heading: "be in it, to win it!" },
    { heading: "click it, see it, love it, buy it" },
    { heading: "triple check, triple save" },
    { heading: "maximise protection, minimise costs" },
    { heading: "own the next masterpiece" },
    { heading: "shape the future" },
    { heading: "partner, connect, succeed" },
    { heading: "find the best solution" },
    { heading: "track it, save it, enjoy it" },
    { heading: "boost your savings with Jetson!" },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const handleItemClick = (index: number) => {
    const selectedRoute = texts[index]?.route;
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  };
  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 300);
    });
  }, [api]);
  const [displayedText, setDisplayedText] = React.useState({
    heading: specificTexts[0].heading,
  });
  React.useEffect(() => {
    const { heading } = specificTexts[activeIndex];
    setDisplayedText({ heading });
  }, [activeIndex]);
  return (
    <div className="bg-white relative">
      <div className="h-[68%] md:h-[77.8%] bg-primary absolute top-0 left-0 w-full" />
      <div className="container mx-auto px-4 py-4 relative">
        <div className="space-y-1 mb-10 h-[50px] md:h-[75px]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            We empower you to,
          </h2>
          <p
            className={`text-xl md:text-3xl text-white font-semibold transition-all duration-300 ease-in-out ${
              isTransitioning
                ? "opacity-0 transform -translate-y-2"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {displayedText.heading}
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full max-w-3xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} onClick={() => handleItemClick(index)}>
                <Card className="relative overflow-hidden rounded-3xl cursor-pointer">
                  <img
                    src={image}
                    alt={`Carousel Image ${index + 1}`}
                    className="object-cover rounded-lg w-full h-64 md:h-[60vh]"
                  />
                  <div className="absolute bottom-7 left-0 right-0 p-2 bg-white/90 rounded-r-3xl md:w-[50%] w-[80%]">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {texts[index].heading}
                    </h3>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4 p-1 rounded-full">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <CarouselPrevious className="-left-4 top-[45%]" />
          <CarouselNext className="-right-4 top-[45%]" />
        </Carousel>
        <div className="flex justify-center mt-4">
          <Button
            size="sm"
            className="text-white bg-primary hover:bg-primary/90 text-lg font-bold transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/")}
          >
            Return To Website
          </Button>
        </div>
      </div>
    </div>
  );
}
