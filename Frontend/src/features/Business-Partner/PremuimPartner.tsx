import benefitImg1 from "@/assets/Parnter/Exclusive.webp";
import benefitImg2 from "@/assets/Parnter/Customers.webp";
import benefitImg3 from "@/assets/Parnter/Edges.webp";
import benefitImg4 from "@/assets/Parnter/Success.webp";
import benefitImg5 from "@/assets/Parnter/Coverage.webp";
import benefitImg6 from "@/assets/Parnter/Structure.webp";

import { ChevronRightIcon } from '@radix-ui/react-icons';

const PremiumPartner = () => {
    const benefits = [
        {
          number: 1,
          title: "Exclusive Opportunities",
          description:
            "Stand out with State specific opportunities, ensuring a steady stream of customers, and thrive in our dynamic community.",
          img: benefitImg1,
        },
        {
          number: 2,
          title: "Qualified Customer Base",
          description:
            "Say goodbye to time wasters! Get connected with real buyers who are not only interested but prepared to take the next step.",
          img: benefitImg2,
        },
        {
          number: 3,
          title: "Gain a Competitive Edge",
          description:
            "Tap into the purchasing habits of Australia’s younger demographic to gain a competitive edge in the market.",
          img: benefitImg3,
        },
        {
          number: 4,
          title: "Boost Automotive Success",
          description:
            "Join Australia’s top automotive ecosystem to boost your business with exclusive leads and skyrocket your success.",
          img: benefitImg4,
        },
        {
          number: 5,
          title: "Greater Coverage",
          description:
            "Connect with our extensive Australian community, broadening your reach and engaging with a diverse audience.",
          img: benefitImg5,
        },
        {
          number: 6,
          title: "Affordable Cost Structure",
          description:
            "Clear, cost-effective, and flexible pricing. Boost visibility, connect with a vibrant community, and unlock strategic growth opportunities.",
          img: benefitImg6,
        },
      ];

    return (
        <div className="bg-[#1cbeff] max-w-full sm:max-w-[90%] mx-auto rounded-lg py-10 mt-6">
            <div className="text-center px-4">
            <h2 className="hidden sm:block text-3xl sm:text-4xl font-bold mb-12 uppercase text-white text-nowrap">
  Let's Drive Success Together
</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((charity, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Number and Title */}
                            <div className="flex items-start w-full mb-2">
                                <div className="text-8xl font-extrabold text-white mr-4">
                                    {index + 1}
                                </div>
                                <div className="flex flex-col text-right">
                                    <h3 className="text-[14px] font-bold text-black mb-2">
                                        {charity.title}
                                    </h3>
                                    <p className="text-sm text-[#FFFF]">
                                        {charity.description}
                                    </p>
                                </div>
                            </div>

                            {/* Charity Logo */}
                            <div className="rounded-xl overflow-hidden shadow-lg w-full mb-4">
                                <img
                                    src={charity.img}
                                    alt={`${charity.title} logo`}
                                    className="w-full h-auto object-contain mx-auto"
                                />
                            </div>

                     
                            <div className="w-full flex justify-end">
  <button className="bg-[white]  text-primary font-semibold py-2 px-4 rounded-full shadow-lg relative group transition-all duration-300 overflow-hidden h-11 w-[144px]">
    
    {/* Default Text */}
    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-100 group-hover:opacity-0">
    Access Form
    </span>

    {/* Text + Chevron on Hover */}
    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-100 opacity-0 group-hover:opacity-100">
      Access Form
      <ChevronRightIcon className="w-4 h-4  transform transition-transform duration-300 group-hover:translate-x-1" />
    </span>

  </button>
</div>

                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default PremiumPartner;