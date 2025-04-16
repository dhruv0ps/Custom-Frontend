import img1 from "@/assets/FundRaisers/Good-Friday-Appeal-Hospital.webp";
import img2 from "@/assets/FundRaisers/Rectangle-36-3.webp";
import img3 from "@/assets/FundRaisers/Rectangle-41-4.webp";
import img4 from "@/assets/FundRaisers/Rectangle-308.webp";
import img5 from "@/assets/FundRaisers/Rectangle-309.webp";
import img6 from "@/assets/FundRaisers/RSPCA.webp";
import { ChevronRightIcon } from '@radix-ui/react-icons';

const PremiumPartner = () => {
    const charities = [
        {
            number: 1,
            title: "Good Friday Appeal",
            description: "The Good Friday Appeal raises funds for the Royal Children's Hospital in Melbourne, supporting life-saving medical care and research for children.",
            img: img1,
        },
        {
            number: 2,
            title: "Make-A-Wish AUSTRALIA",
            description: "Make-A-Wish Australia grants wishes to children with critical illnesses, bringing joy and hope during tough times.",
            img: img2,
        },
        {
            number: 3,
            title: "Starlight Children's Foundation",
            description: "Starlight brightens the lives of seriously ill children by providing fun, entertainment, and wish granting to lift their spirits.",
            img: img3,
        },
        {
            number: 4,
            title: "FOODBANK",
            description: "Foodbank is Australia's largest food relief organisation, distributing food to those in need and supporting communities during crises.",
            img: img4,
        },
        {
            number: 5,
            title: "Lifeline",
            description: "Lifeline provides 24/7 crisis support and suicide prevention services, offering help to those in emotional distress.",
            img: img5,
        },
        {
            number: 6,
            title: "RSPCA",
            description: "The RSPCA works to prevent animal cruelty, rescue and rehome animals, and promote better welfare standards across Australia.",
            img: img6,
        },
    ];

    return (
        <div className="bg-[#ffcdf4] max-w-full sm:max-w-[90%] mx-auto rounded-lg py-10 mt-6">
            <div className="text-center px-4">
                <h2 className=" text-3xl sm:text-4xl  font-bold mb-12 uppercase text-[#e6022a] text-nowrap">Charities We Support</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {charities.map((charity, index) => (
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
                                    <p className="text-sm text-[#e6022a]">
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
  <button className="bg-[#e6022a]  text-white font-bold py-2 px-6 rounded-full shadow-lg relative group transition-all duration-300 overflow-hidden h-11 w-[160px]">
    
    {/* Default Text */}
    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
      Donate Now
    </span>

    {/* Text + Chevron on Hover */}
    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      Donate Now
      <ChevronRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
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