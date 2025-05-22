import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Membership/Membership-Maximise-by-Wheelz.webp"
import { BASE_URL } from "@/config";
import HoverArrowButton from "@/util/HoverButton";
import { useNavigate } from "react-router-dom";
export default function WhyChooseUs() {
  const naviagte = useNavigate()
    const features = [
        {
          title: "Sell Your Car Effortlessly & Cost-Free",
          desc: "Don’t miss out on the opportunity to sell your car with zero fees and zero hassle. Our experts handle everything, from listing to closing the deal, so you can relax and enjoy the ride.",
        },
        {
          title: "Secure The Best Deals On Any Car",
          desc: "Join now to access exclusive discounts on all cars through our network. Why pay more when you can leverage our buying power to save big on your next vehicle?",
        },
        {
          title: "Take Advantage Of ‘Mates Rates Services’",
          desc: "As a member, you’ll enjoy special pricing on a diverse range of automotive services. This is your chance to save on all things automotive.",
        },
        {
          title: "Trade Promotion Draws",
          desc: "When we run Trade Promotion activities you will automatically earn entry into every draw, giving you multiple chances to win exciting prizes just by being a valued member of our community.",
        },
        {
          title: "Drive Rewards. Share the Thrill",
          desc: "Help Jetson Wheelz take over the automotive world. Invite your crew, earn rewards, and boost your savings. The more members in our ecosystem, the better the benefits for everyone!",
        },
      ];
      

  return (
    <section className="bg-white py-16 sm:px-4 ">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
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
                  
                    <HoverArrowButton label="Home" onClick={() => naviagte("/")} className="bg-gray-300 hover:bg-gray-200 rounded-full shadow-md px-8 py-3"
  textClass="text-black font-semibold"
  hoverTextClass="text-black font-semibold"/>
                   
                    <HoverArrowButton   label="Sign Me Up"onClick={() => (window.location.href = `${BASE_URL}/become-member/membership`)}  className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
  textClass="text-[#1cbeff] font-semibold"
  hoverTextClass="text-[#1cbeff] font-semibold"/>
                  </div>
                </div>
    </section>
  )
}
