import img1 from "@/assets/MateRate/soon.webp";

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
    <div className="bg-[#1cbeff] max-w-full sm:max-w-[80%] mx-auto  rounded-lg py-10  mt-6">
      <div className="  text-center text-white px-4 ">
        
        <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase text-black">premium partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {partners.slice(0, 3).map((partner, index) => (
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
              
              
            </div>
          ))}
        </div>

    
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
      <div className="bg-white rounded-r-full py-2  pr-48 mb-4 sm:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
        Triple Check,<span className="text-[#1cbeff]">  TRIPLE SAVE!</span>
        </h2>
      </div>
      <button className="bg-white  transition-all px-8 py-3 text-primary font-semibold text-base rounded-full shadow-md">
        Access Form
      </button>
    </div>
    </div>
  );
};

export default PremiumPartner;