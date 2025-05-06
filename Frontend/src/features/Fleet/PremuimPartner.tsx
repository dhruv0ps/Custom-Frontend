import img1 from "@/assets/Fleet/Fleet-Enquiries.jpg";
import img2 from "@/assets/Fleet/iStock-540532872-(2).jpg";
import img3 from "@/assets/Fleet/iStock-540532122-(1).jpg";
import HoverArrowButton from "@/util/HoverButton";
import { useNavigate } from "react-router-dom";

const PremiumPartner = () => {
  const navigate = useNavigate();
  const partners = [
    {
      title: "Fleet Vehicle Request Form",
      description:
        "Sumbit your business details using our straightforward application preocess",
      img: img1,
    },
    {
      title: "Share Specifics",
      description:
        "Provide your specifics for a tailored experience",
      img: img2,
    },
    {
      title: "Expert Assistance",
      description:
        "Sit back and relax while our team handles your enquiry",
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
    <div className="bg-[#1cbeff] max-w-[95%] sm:max-w-[80%] mx-auto rounded-lg py-10 mt-6 ">
      <div className="text-center text-white px-4">
        <h2 className="text-4xl md:text-3xl font-bold mb-12 uppercase text-white">3 Simple Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {partners.slice(0, 3).map((partner, index) => (
            <div key={index} className="flex flex-col items-start gap-4 text-left">
              {/* Number + Content */}
              <div className="flex items-start gap-4">
                <div className="text-[100px] md:text-[100px] font-extrabold leading-none text-white min-w-[100px] md:min-w-[100px] text-left">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 text-black text-end">
                    {partner.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white w-full overflow-hidden text-right">
                    {partner.description}
                  </p>
                </div>
              </div>

              {/* Fixed image container with consistent height */}
              <div className="rounded-xl overflow-hidden shadow-lg w-full h-56 flex items-center justify-center bg-white">
                <img
                  src={partner.img}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-4 sm:py-8">
  <div className="w-full flex items-center justify-between  ">
    
    {/* Text Block */}
    <div
      className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
      style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
        Share Details,
        <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">
          GET EXPERT HELP
        </span>
      </h2>
    </div>

    {/* Button Block */}
    <div className="flex justify-end flex-shrink-0  mr-4">
      <HoverArrowButton
        label="Access Form"
        onClick={() => navigate("/access-form")}
        className="bg-white transition-all px-4 sm:px-8 py-3 text-primary font-semibold text-sm sm:text-base rounded-full shadow-md"
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