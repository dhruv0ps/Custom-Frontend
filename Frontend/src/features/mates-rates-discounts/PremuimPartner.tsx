import logo from "@/assets/Wheelz-Australia-White-and-Black-Color-scaled.webp";
import img1 from "@/assets/MateRate/soon.webp";
import { ChevronRightIcon } from '@radix-ui/react-icons';

const PremiumPartner = () => {
  const partners = [
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
    <div className="bg-[#1cbeff] py-16 px-4 mt-6">
      <div className=" max-w-full sm:max-w-[80%] mx-auto text-center text-white">
        <div className="flex justify-center items-center mb-6">
          <img
            src={logo}
            alt="Wheelz Australia Logo"
            loading="lazy"
            className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain"
          />
        </div>
        <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase text-black">premium partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-start gap-4 text-left px-2">
              {/* Number + Content */}
              <div className="flex items-start gap-4">
                <div className="text-[100px] md:text-[120px] font-extrabold leading-none text-white min-w-[100px] md:min-w-[100px] text-left">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 text-black uppercase text-end">
                    {partner.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white w-full overflow-hidden text-right">
                    {partner.description}
                  </p>
                </div>
              </div>

   
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-3 w-full mt-2">
                <img
                  src={partner.img}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-auto object-contain max-h-[160px] mx-auto"
                />
              </div>
              
              <div className="w-full flex justify-end mt-2">
                <button
                  className="bg-white text-[#1cbeff] font-semibold py-2 px-4 border border-[#1cbeff] rounded-full group hover:bg-gray-50 transition-all duration-300 text-nowrap"
                >
                  <span className="flex items-center justify-center w-32 relative transition-all duration-300 group-hover:justify-start">
                    <span className="transition-all duration-300">Access Form</span>
                    <ChevronRightIcon className="absolute right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
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