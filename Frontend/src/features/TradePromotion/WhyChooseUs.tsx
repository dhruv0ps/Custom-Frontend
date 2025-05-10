import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Trade Promotion/iStock-1856863035-(2).jpg"
import HoverArrowButton from "@/util/HoverButton"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "@/config"
export default function WhyChooseUs() {
  const navigate = useNavigate()
  const features = [
    {
      title: "Mates Rates",
      desc: "Simply share your request and we’ll do our best! Members enjoy special pricing on a range of automotive services.",
    },
    {
      title: "Automatic Entries",
      desc: "Earn automatic entries into periodic draws with a chance to win cash prizes.",
    },
    {
      title: "Exclusive Giveaways",
      desc: "Our special Trade Promotion cash prize draws are only available to members.",
    },
    {
      title: "Variable Rewards",
      desc: "Enjoy a range of cash prizes, sometimes substantial, that can help with bills, fund holidays, or even contribute to a new car.",
    },
    {
      title: "No Extra Cost",
      desc: "All these perks come at no additional charge beyond your membership.",
    },
  ]

  return (
    <section className="bg-white py-16 sm:px-4 ">
    <div className="max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Features */}
      <div>
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
      Why Our Membership <span className="text-primary">IS A NO BRAINER</span>  
</h2>

        <ul className="space-y-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img
                src={checkbox}
                alt="checkmark"
                className="sm:w-[50px] sm:h-[50px] w-[56px] h-[56px]  object-contain shrink-0"
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
      <div className="h-full flex">
            <div className="w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={rightImage}
                alt="Worker with phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

      {/* Blue background with buttons */}
              
    </div>
    <div className="mt-12 w-full">
    <div className="flex justify-center gap-16 sm:flex-wrap sm:px-4">
                
                  <HoverArrowButton label="Home" onClick={() => navigate("/")} className="bg-gray-300 hover:bg-gray-200 rounded-full shadow-md px-8 py-3"
textClass="text-black font-semibold"
hoverTextClass="text-black font-semibold"/>
                 
                  <HoverArrowButton   label="Sign Me Up"   onClick={() => window.location.href = `${BASE_URL}/trade-promotion`}  className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
textClass="text-[#1cbeff] font-semibold"
hoverTextClass="text-[#1cbeff] font-semibold"/>
                </div>
              </div>
  </section>
  )
}
