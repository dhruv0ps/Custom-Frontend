import rightImage from "@/assets/Garage/MyGarageBotton.jpg";
import { useNavigate } from "react-router-dom";
import HoverArrowButton from "@/util/HoverButton";
import { BASE_URL } from "@/config";

export default function WhyChooseGarage() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 sm:px-4">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left text-primary">
           Simplify Your Experience
          </h2>
          <p className="text-[#444] text-sm leading-relaxed">
            From managing listings to tracking enquiries and booking services, everything is designed for ease, accuracy, and control. Experience a smarter way to stay on top of your automotive needs.
          </p>
        </div>

        {/* Right: Image */}
        <div className="h-full flex">
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img
              src={rightImage}
              alt="Sell Your Car by Wheelz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-12 w-full">
        <div className="flex justify-center gap-16 sm:flex-wrap sm:px-4">
          <HoverArrowButton
            label="Home"
            onClick={() => navigate("/")}
            className="bg-gray-300 hover:bg-gray-200 rounded-full shadow-md px-8 py-3"
            textClass="text-black font-semibold"
            hoverTextClass="text-black font-semibold"
          />
          <HoverArrowButton
            label="Enter"
            onClick={() => window.location.href = `${BASE_URL}/my-garage`}
            className="bg-white hover:bg-gray-100 rounded-full shadow-md px-8 py-3"
            textClass="text-[#1cbeff] font-semibold"
            hoverTextClass="text-[#1cbeff] font-semibold"
          />
        </div>
      </div>
    </section>
  );
}
