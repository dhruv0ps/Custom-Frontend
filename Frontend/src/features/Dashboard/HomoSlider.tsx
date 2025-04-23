import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import img1 from "@/assets/Become-Member/VIP.png";
import img2 from "@/assets/Become-Member/RegistrationRequest.png";
import img3 from "@/assets/Sell-Your-car.jpg";
import img4 from "@/assets/Home/BuyANewCar.jpg";
import img5 from "@/assets/Dealer Demo/dealerDemo.jpg";
import img6 from "@/assets/Home/MatesRates.jpg";
import img7 from "@/assets/Home/TradePromotionDraws.jpg";
import img8 from "@/assets/Home/Virtual-Tours.jpg";
import img9 from "@/assets/Home/Finance-page.jpg";
import img10 from "@/assets/Home/Insurance-image.jpg";
import img11 from "@/assets/Home/OverhauledCompetition.jpg";
import img12 from "@/assets/Home/Charities-img.jpg";
import img13 from "@/assets/Savings/Saving.jpg";
import img14 from "@/assets/Home/TotalActivityTracker.jpg";
import img15 from "@/assets/Home/FleetEnquiries.jpg";
import Typed from "react-typed"

interface HomeSliderProps {
  scrollToAllServices: () => void;
}
import { ChevronDown } from "lucide-react";
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
  { heading: "Demo & Pre-owned Cars", route: "/demo-preowned" },
  { heading: "Mates Rates Discounts", route: "/mates-rates" },
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
    heading: "Fleet Enquiries",
    route: "/business-partner/fleet-management",
  },
  { heading: "Registered Vehicle Tracker", route: "/savings-tracker" },
  { heading: "Total Activity Report", route: "/my-reports" },
];

export default function HomeSlider({ scrollToAllServices }: HomeSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
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
      <div className="bg-primary  pt-16 pb-36 md:py-20 z-10 relative mb-6 px-6 md:px-12 lg:px-24 w-full">
      <div className="block md:hidden  text-left mb-20">
  <h2 className="text-[22px] font-bold leading-tight text-black">
    We empower you to,
  </h2>
  <p className="text-[17px] font-semibold text-white mt-1">
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
    />
  </p>
</div>
<div className="hidden md:block text-white max-w-full sm:max-w-[80%] sm:px-4 mx-auto md:ml-16 sm:mb-16">
  <h2 className="text-[25px] font-bold leading-tight text-black sm:mb-2 ">
    We empower you to,
  </h2>

  <p
    className={`text-[19px] font-semibold text-white  transition-all duration-300 ease-in-out ${
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
      <div className=" mt-[-14.3rem] sm:-mt-36 relative z-20 w-full px-4 ">
        <div className="max-w-full sm:max-w-[80%] mx-auto  overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((slide:any, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_calc(33.333%-12px)] min-w-0 mx-2 bg-white rounded-3xl overflow-hidden shadow-lg relative"
              >
                <img
                  src={slide || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                 className="object-cover h-64 w-full rounded-3xl border-none outline-none"  
                />
                <div className="absolute bottom-7 left-0 right-0 p-2 bg-white/90 rounded-r-3xl md:w-[90%] w-[80%]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-nowrap">
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
      <button
      onClick={scrollToAllServices}
      className="bg-primary text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition duration-300 w-40 md:w-48 h-12 flex items-center justify-center group"
    >
      <span className="whitespace-nowrap">See All Services</span>
      <ChevronDown className=" h-5 w-5 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
    </button>      </div>


    </div>
  )
}
