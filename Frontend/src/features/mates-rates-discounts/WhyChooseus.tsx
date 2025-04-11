import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/MateRate/Cash.webp"
import { Link } from "react-router-dom"
export default function WhyChooseUs() {
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
    <section className="bg-white py-16 px-4">
      <div className="max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
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
