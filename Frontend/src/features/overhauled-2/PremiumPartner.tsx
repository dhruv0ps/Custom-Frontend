
import img1 from "@/assets/Overhauled/To-Win.webp";
import img2 from "@/assets/Overhauled/Tale.webp"
import img3 from "@/assets/Overhauled/Awaits.webp"
import { ChevronRightIcon } from '@radix-ui/react-icons';

const PremiumPartner = () => {
  const partners = [
    {
      title: "Get In To Win",
      description:
        "Get your overhauled membership for a chance to be the next star, don’t miss out and secure your spot today",
      img: img1,
    },
    {
      title: "Tell Your Tale",
      description:
        "Briefly share your automotive journey and the special story behind your wheelz",
      img: img2,
    },
    {
      title: "Your Dream Build Awaits",
      description:
        "This is your chance to finally see your automotive vision come to life",
      img: img3,
    },
    {
      title: "COMING SOON",
      description:
        "Exciting new partners joining our platform soon, bringing even more opportunities to save and enjoy exclusive deals.",
      img: img1,
    },
    {
      title: "COMING SOON",
      description:
        "Exciting new partners joining our platform soon, bringing even more opportunities to save and enjoy exclusive deals.",
      img: img1,
    },
    {
      title: "COMING SOON",
      description:
        "Exciting new partners joining our platform soon, bringing even more opportunities to save and enjoy exclusive deals.",
      img: img1,
    },
    {
      title: "COMING SOON",
      description:
        "Exciting new partners joining our platform soon, bringing even more opportunities to save and enjoy exclusive deals.",
      img: img1,
    },
    {
      title: "COMING SOON",
      description:
        "Exciting new partners joining our platform soon, bringing even more opportunities to save and enjoy exclusive deals.",
      img: img1,
    },
    {
      title: "COMING SOON",
      description:
        "Exciting new partners joining our platform soon, bringing even more opportunities to save and enjoy exclusive deals.",
      img: img1,
    },
  ];

  return (
    
    <div className="bg-[#1cbeff] max-w-full sm:max-w-[80%] mx-auto  rounded-lg py-10  mt-6">
    <div className="  text-center text-white px-4 ">
      
      <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase text-black"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
      {partners.slice(0, 3).map((partner, index) => (
          <div key={index} className="flex flex-col items-start gap-4 text-left ">
            {/* Number + Content */}
            <div className="flex items-start gap-4">
              <div className="text-[100px] md:text-[100px] font-extrabold leading-none text-white min-w-[100px] md:min-w-[100px] text-left">
                {index + 1}
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-black  text-end">
                  {partner.title}
                </h4>
                <p className="text-sm leading-relaxed text-white w-full overflow-hidden text-right">
                  {partner.description}
                </p>
              </div>
            </div>

 
            <div className="rounded-xl overflow-hidden shadow-lg bg-white  w-full ">
              <img
                src={partner.img}
                alt={`Partner ${index + 1}`}
                className="w-full h-auto object-contain  mx-auto"
              />
            </div>
            
            
          </div>
        ))}
      </div>

  
    </div>

    <div className="w-full flex flex-col sm:flex-row items-center justify-between">
    <div className="bg-white rounded-r-full py-2  pr-48 mb-4 sm:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
      Join, Share, Win, <span className="text-[#1cbeff]"> OVERHAULED AWAITS</span>
      </h2>
    </div>
    <div className="w-full flex justify-end mt-2 ml-4">
    <button
  className="bg-white text-[#1cbeff] font-semibold py-2 px-4 border border-[#1cbeff] rounded-full group hover:bg-gray-50 transition-all duration-300 text-nowrap shadow-[0px_2px_10px_0px_rgba(0,0,0,0.3)] mr-2"
>
  <span className="flex items-center justify-center w-32 relative transition-all duration-300 group-hover:justify-start">
    <span className="transition-all duration-300">Access Form</span>
    <ChevronRightIcon className="absolute right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
  </span>
</button>
              </div>
  </div>
  </div>
  );
};

export default PremiumPartner;