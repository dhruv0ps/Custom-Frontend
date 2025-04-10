import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/SellCar/Buy-New-Car-Benefits.webp"
import { Link } from "react-router-dom"
export default function WhyChooseBuy() {
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
    <section className="bg-white py-16 px-4">
      <div className="max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          Benefits Of Buying A Car With Us
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
                      Access Form
                    </Link>
                  </div>
                </div>
    </section>
  )
}
