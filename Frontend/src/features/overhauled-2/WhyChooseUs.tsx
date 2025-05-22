import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Overhauled/Overhauled-Competition.jpg"
import { useNavigate } from "react-router-dom";
import HoverArrowButton from "@/util/HoverButton";
import { BASE_URL } from "@/config";
export default function WhyChooseUs() {
  const navigate = useNavigate();
    const features = [
        {
          title: "Seize The Moment",
          desc: "This is a rare chance to make your dreams a reality – don’t miss it!",
        },
        {
          title: "Transform Your Ride",
          desc: "Overhauled offers the opportunity to see your car undergo a jaw-dropping transformation",
        },
        {
          title: "Showcase Your Story",
          desc: "Share your unique automotive journey and let your car become the star of Overhauled",
        },
        {
          title: "Membership: Your Ticket To Win",
          desc: "Secure your entry by purchasing a specific membership, it’s your gateway to the chance of a lifetime",
        },
        {
          title :"Unleash Your Dream Build",
          desc :"This is your moment to turn your dream build into a thrilling reality – act now"
        }
      ];

  return (
    <section className="bg-white py-16 sm:px-4">
    <div className=" max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Features */}
      <div>
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
      Once In A Lifetime Opportunity
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

      <div className="h-full flex">
      <div className="w-full overflow-hidden rounded-xl shadow-md">
        <img
          src={rightImage}
          alt="Sell Your Car by Wheelz"
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
                 
                  <HoverArrowButton   label="Acess Form" onClick={() => window.location.href = `${BASE_URL}/overhauled`}  className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
textClass="text-[#1cbeff] font-semibold"
hoverTextClass="text-[#1cbeff] font-semibold"/>
                </div>
              </div>
  </section>
    
  );
}
