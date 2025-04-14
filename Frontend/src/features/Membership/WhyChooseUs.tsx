import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Membership/Membership-Maximise-by-Wheelz.webp"
import { Link } from "react-router-dom"
export default function WhyChooseUs() {
    const features = [
        {
          title: "Sell Your Car Effortlessly & Cost-Free",
          desc: "Don’t miss out on the opportunity to sell your car with zero fees and zero hassle. Our experts handle everything, from listing to closing the deal, so you can relax and enjoy the ride.",
        },
        {
          title: "Secure The Best Deals On New, Demo & Pre-Owned Cars",
          desc: "Join now to access exclusive discounts on all cars through our network. Why pay more when you can leverage our buying power to save big on your next vehicle?",
        },
        {
          title: "Take Advantage Of ‘Mates Rates’",
          desc: "As a member, you’ll enjoy special pricing on a diverse range of automotive services. This is your chance to save on all things automotive.",
        },
        {
          title: "Trade Promotion",
          desc: "When we run Trade Promotion activities you will automatically earn entry into every draw, giving you multiple chances to win exciting prizes just by being a valued member of our community.",
        },
        {
          title: "Experience Virtual Tours",
          desc: "Be among the first to explore new vehicles with our virtual tours, guided by car experts who provide insights tailored to your preferences. Make informed decisions without leaving your home.",
        },
      ];
      

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-full sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-center md:text-left text-nowrap">
          Maximise Your Membership Benefits!
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
                  <h3 className="font-semibold sm:text-lg mb-1 text-sm">{feature.title}</h3>
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
