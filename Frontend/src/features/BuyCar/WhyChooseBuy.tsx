import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Buy Car/4-Buy-car.jpg"
import HoverArrowButton from "@/util/HoverButton"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "@/config"
export default function WhyChooseBuy() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Manufacturer Approved Partnerships",
      desc: "Unlock great deals with our trusted automotive network",
    },
    {
      title: "Language Barriers, Are Not An Issue",
      desc: "Effortlessly overcome language barriers as we can facilitate the deal for you if required",
    },
    {
      title: "Direct Purchase From Trusted Dealers",
      desc: "Streamline your buying experience by directly purchasing from reliable dealers",
    },
    {
      title: "Transparency With No Hidden Costs",

      desc: "Experience clear transactions, no hidden costs, just straightforward deals without the fees",
    },
    {
      title: "Explore The Future Of Car Buying",
      desc: "Innovation and customer-centric processes redefining the industry",
    },
  ]

  return (
    <section className="bg-white py-16 ">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-2xl md:text-2xl font-bold mb-8 text-center md:text-left">
          Benefits Of Buying  With Us
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
                  <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
                  <p className="text-[#666] text-[0.8rem]">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-[28rem]">
          <img
            src={rightImage}
            alt="Sell Your Car by Wheelz"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blue background with buttons */}
                
      </div>
      <div className="mt-12 w-full">
                  <div className="flex justify-center gap-16 flex-wrap px-4">
                   
                    <HoverArrowButton
                     label="Home"
                     onClick={() => navigate("/")}
                     className="bg-gray-300 text-black font-semibold px-8 py-3 rounded-full shadow-md transition-all"
                     textClass="text-black"
                     hoverTextClass="text-black bg-gray-200"                 
                    />
                   <HoverArrowButton
            label="Buy Now"
          onClick={() => window.location.href = (`${BASE_URL}/buy`)}
            className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-md transition-all min-w-[140px]"
            textClass="text-primary"
            hoverTextClass="text-primary bg-gray-100"
          />
                  </div>
                </div>
    </section>
  )
}
