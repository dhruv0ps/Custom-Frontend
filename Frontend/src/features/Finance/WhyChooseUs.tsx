import checkbox from "@/assets/SellCar/Check-Box.png"
import rightImage from "@/assets/Finance/Financial-Service-by-Wheelz-Australia-for-Mobile.webp"
import { Link } from "react-router-dom"
export default function WhyChooseUs() {
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
      <section className="bg-white py-16 px-4">
        <div className="max-w-full sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Features */}
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-8 text-center md:text-left ">
              Unleash Freedom Through Strategic Money Management
            </h2>
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <img
                    src={checkbox}
                    alt="checkmark"
                    className="sm:w-[50px] sm:h-[50px] w-[56px] h-[56px] object-contain shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold sm:text-lg mb-1 text-sm">{feature.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right: Image */}
          <div className="rounded-[20px] overflow-hidden shadow-lg">
          <img
  src={rightImage}
  alt="Strategic Finance Management"
  className="w-full h-auto object-cover"
  loading="lazy"
  decoding="async"
/>
        </div>
      </div>
  
        {/* CTA Buttons */}
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
              className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-md transition-all min-w-[140px] text-center"
            >
            Acess Form
            </Link>
          </div>
        </div>
      </section>
    )
  }
  