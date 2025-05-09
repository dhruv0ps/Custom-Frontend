import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/SellCar/iStock-1441960045(2).jpg"
import HoverArrowButton from "@/util/HoverButton"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "@/config"
export default function WhyChooseUs() {
  const naviagte = useNavigate();
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
    <section className="bg-white py-16 sm:px-4 ">
      <div className=" max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
            Why Selling With Us<br className="block sm:hidden" />
            <span className="inline sm:inline-block"> Is Your Smart Choice</span>
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
        <div className="rounded-2xl overflow-hidden shadow-lg sm:h-[27.5rem]">
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
    <HoverArrowButton
      label="Home"
      onClick={() => naviagte("/")}
      className="bg-gray-300 hover:bg-gray-200 rounded-full shadow-md sm:px-8 sm:py-3"
      textClass="text-black font-semibold"
      hoverTextClass="text-black font-semibold"
    />

    <HoverArrowButton
      label="Acess Form"
      onClick={() => (window.location.href = `${BASE_URL}/sell-rego`)}
      className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
      textClass="text-[#1cbeff] font-semibold"
      hoverTextClass="text-[#1cbeff] font-semibold"
    />
  </div>
</div>
    </section>
  )
}
