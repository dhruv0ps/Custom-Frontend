import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Finance/Finance1.jpg"
import HoverArrowButton from "@/util/HoverButton";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/config";
export default function WhyChooseUs() {
  const navigate = useNavigate()
    const features = [
      {
        title: "Financial Flexibility",
        desc: "Spread costs, easing immediate financial burden and offering budget flexibility",
      },
      {
        title: "Preservation Of Savings",
        desc: "Preserve savings for emergencies or investments, avoiding upfront car cost",
      },
      {
        title: "Access To Better Models",
        desc: "Make higher end models affordable, surpassing outright purchase challenges",
      },
      {
        title: "Tax Deductions",
        desc: "Car loan interest may be tax deductible, consult a tax professional for details",
      },
      {
        title: "Convenient Repayment Plans",
        desc: "Lenders offer varied plans for manageable monthly payments",
      },
    ];
  
    return (
      <section className="bg-white py-16 sm:px-4 ">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left ">
        Unleash Freedom Through Strategic Money Management
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
                   
                    <HoverArrowButton   label="Acess Form" onClick={() => window.location.href = `${BASE_URL}/finance`}  className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
  textClass="text-[#1cbeff] font-semibold"
  hoverTextClass="text-[#1cbeff] font-semibold"/>
                  </div>
                </div>
    </section>
    )
  }
  