import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/MateRate/BillBusters.jpg"
import HoverArrowButton from "@/util/HoverButton"
import { useNavigate } from "react-router-dom"
export default function WhyChooseUs() {
  const navigate = useNavigate()
  const features = [
    {
      title: "Maximise Savings With Trusted Partners",
      desc: "Leverage substantial yearly savings, thanks to the support of our trusted automotive partners and ecosystem",
    },
    {
      title: "Streamlined Solutions For Your Car Needs",
      desc: "Our platform is designed to effortlessly navigate and streamline your car related needs, eliminating headaches",
    },
    {
      title: "Instant Access To Expert Insights",
      desc: "Join our community and instantly tap into a network of connections, transforming you into an informed auto expert",
    },
    {
      title: "Bid Farewell To Full Price Payments",
      desc: "Say goodbye to paying full price, tackle car matters with confidence and simplicity, never paying full price again",
    },
    {
      title: "Revolutionise Your Automotive Experience",
      desc: "Transform your approach to all things automotive with the most intelligent platform for exploring the world of cars",
    },
  ]

  return (
    <section className="bg-white py-16 sm:px-4 ">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
          Mates Rates Discounts Await
          </h2>
          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img
                  src={checkbox}
                  alt="checkmark"
                  className="w-[50px] h-[50px] object-contain shrink-0"
                />
                <div>
                <h3 className="font-semibold sm:text-base mb-1 text-sm sm:text-nowrap">{feature.title}</h3>
                <p className="text-[#666] text-[0.8rem]">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg sm:h-[31rem]">
          <img
            src={rightImage}
            alt="Sell Your Car by Wheelz"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blue background with buttons */}
                
      </div>
      <div className="mt-12 w-full">
      <div className="flex justify-center gap-16 sm:flex-wrap sm:px-4">
                  
                    <HoverArrowButton label="Home" onClick={() => navigate("/")} className="bg-gray-300 hover:bg-gray-200 rounded-full shadow-md px-8 py-3"
  textClass="text-black font-semibold"
  hoverTextClass="text-black font-semibold"/>
                   
                    <HoverArrowButton   label="Acess Form" onClick={() => navigate("/")}  className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
  textClass="text-[#1cbeff] font-semibold"
  hoverTextClass="text-[#1cbeff] font-semibold"/>
                  </div>
                </div>
    </section>
  )
}
