import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
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
import Typed from "react-typed"


import { Button } from "@/components/ui/button"
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
  
export default function HomeSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false }, 

    [Autoplay({ delay: 5000 })]
  )
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full">
    {/* Blue section - wider and more prominent */}
    <div className="bg-primary py-12 md:py-20 z-10 relative mb-6 px-6 md:px-12 lg:px-24 w-full">
      <div className="text-left text-white max-w-full sm:max-w-[80%]  mx-auto md:ml-12 sm:mb-16 py-2 ">
      <h2 className="text-[25px] font-bold leading-tight text-black">
  We empower you to,
</h2>

<p
  className={`text-[19px] font-semibold text-white transition-all duration-300 ease-in-out ${
    isTransitioning ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
  }`}
>
  <Typed
    strings={[
      "make informed decisions",
      "sell your car fast, free and easy",
      "buy a new car hassle-free",
      "get the best offer",
      "unlock loyalty benefits",
      "simplify car affordability",
      "join for perks",
      "benefit from our national network",
      "relish in discounts",
      "save on services",
      "unlock exclusive new vehicle deals",
      "earn rewards",
      "sell smarter, earn more!",
      "cut your automotive expenses",
      "win big with member only deals",
      "unlock exclusive VIP discounts",
      "unleash the power of savings",
      "explore the future of car shopping",
      "bring your dream build to life",
      "aid worthy causes",
    ]}
    typeSpeed={100}
    backSpeed={50}
    backDelay={500}
    loop
    showCursor
    onTypingResumed={() => setIsTransitioning(false)}
    onTypingPaused={() => setIsTransitioning(true)}
  />
</p>


      </div>
    </div>

    {/* Carousel section - centered and responsive */}
    <div className="-mt-36 relative z-20 w-full px-4">
      <div className="max-w-full sm:max-w-[80%] mx-auto  overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_calc(33.333%-16px)] min-w-0 mx-2 bg-white rounded-3xl overflow-hidden shadow-lg relative"
            >
              <img 
                src={slide || "/placeholder.svg"} 
                alt={`Slide ${index+1}`}
                className="object-cover h-64 w-full" 
              />
              <div className="absolute bottom-7 left-0 right-0 p-2 bg-white/90 rounded-r-3xl md:w-[50%] w-[80%]">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {texts[index].heading}
                    </h3>
                  </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === selectedIndex ? "bg-sky-500" : "bg-gray-300"}`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Button section */}
    <div className="flex justify-center mt-12 ">
      <Button
        // onClick={() => navigate("/services")}
        className="bg-primary text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary transition duration-300 w-40 md:w-48 h-12"
      >
        See All Services
      </Button>
    </div>

  
</div>
  )
}
