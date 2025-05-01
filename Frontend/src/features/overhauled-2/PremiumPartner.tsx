
import img1 from "@/assets/Overhauled/iStock-1870018492-(1).jpg";
import img2 from "@/assets/Overhauled/iStock-1870772344-(1).jpg"
import img3 from "@/assets/Overhauled/iStock-1991131874-(1).jpg"
import HoverArrowButton from '@/util/HoverButton'
import { useNavigate } from 'react-router-dom'

const PremiumPartner = () => {
  const navigate = useNavigate()
  const partners = [
    {
      title: "Get In To Win",
      description:
        "Get your overhauled membership for a chance to be the next star, don’t miss out & secure your spot today",
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
      
      <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase text-black">3 Simple Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
      {partners.slice(0, 3).map((partner, index) => (
         <div key={index} className="flex flex-col justify-between h-full items-start gap-4 text-left">
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

  
   <div className="w-full py-4 sm:py-8">
    <div className="max-w-full  mx-auto flex flex-row items-center justify-between  sm:px-0">
      
      {/* Text Block */}
      <div className="bg-white rounded-r-full py-1 sm:py-2 pl-2 pr-4 sm:pl-6 sm:pr-18 flex-shrink">
        <h2 className="text-base sm:text-base md:text-3xl font-bold whitespace-nowrap">
        Join, Share, Win,
          <span className="block sm:inline text-primary text-xl sm:text-3xl sm:ml-2">
          {""} OVERHAULED AWAITS
          </span>
        </h2>
      </div>
  
      {/* Button */}
      <div className="w-full sm:w-auto px-4 sm:px-0">
      <HoverArrowButton
  label="Access Form"
  onClick={() => navigate("/access-form")}
  className="bg-white mr-6 transition-all px-2 sm:px-8 py-3 text-primary font-semibold text-base rounded-full shadow-md"
  textClass="text-primary"
  hoverTextClass="text-primary"
/>
      </div>
      
    </div>
  </div>
  </div>
  );
};

export default PremiumPartner;