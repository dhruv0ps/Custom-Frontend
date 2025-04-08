import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/SellCar/Sell-Your-Car-by-Wheelz.webp"
import { Link } from "react-router-dom"
export default function WhyChooseUs() {
  const features = [
    {
      title: "Zero Cost, Maximum Returns",
      desc: "Enjoy a completely free service, maximising your sales profits without any hidden fees.",
    },
    {
      title: "Effortless Listing, Swift Results",
      desc: "Our user-friendly platform ensures a fast and easy car selling experience.",
    },
    {
      title: "Broad Dealer Exposure",
      desc: "Our technology seamlessly connects sellers with the right buyers within our diverse network.",
    },
    {
      title: "Efficient Process",
      desc: "Save time with our streamlined approach designed for optimal efficiency.",
    },
    {
      title: "We Build Trust With Ratings",
      desc: "Check buyers credibility with our transparent feedback and rating system.",
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
                      Access Form
                    </Link>
                  </div>
                </div>
    </section>
  )
}
