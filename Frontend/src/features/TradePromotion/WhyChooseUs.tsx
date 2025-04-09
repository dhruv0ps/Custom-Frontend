import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Trade-Promotion-by-Wheelz-Australia.webp"
import { Link } from "react-router-dom"
export default function WhyChooseUs() {
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
    <section className="bg-white py-16 px-4">
      <div className="max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
            Why Selling With Us Is Your Smart Choice
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
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={rightImage}
            alt="Sell Your Car by Wheelz"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blue background with buttons */}
                
      </div>
      <div className="mt-12 w-full">
                  <div className="flex justify-center gap-4 flex-wrap px-4">
                  <Link
                      to="/"
                      className="bg-gray-300 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all min-w-[140px] text-center"
                    >
                      Home
                    </Link>
                    <Link
                      to="/sell-your-car/form"
                      className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-md  transition-all min-w-[140px] text-center"
                    >
                      Sign Me Up
                    </Link>
                  </div>
                </div>
    </section>
  )
}
