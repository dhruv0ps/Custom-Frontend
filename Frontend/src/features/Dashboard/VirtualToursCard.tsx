import React, { useEffect, useState } from "react";
import personImage from "@/assets/Home/Virtual-Tours.jpg";
import speedometerIcon from "@/assets/Homepage/Car-Speedometer.gif";
import { ChevronRight } from "lucide-react";
import HoverArrowButton from "@/util/HoverButton";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/config";
import { VideoApi } from "@/config/apiRoutes/virtualTour";
import { VirtualTourVideo } from "@/config/models/VirtualTourVideo";


export const VirtualToursCard: React.FC = () => {
    const navigate = useNavigate()
    const [videoList, setVideoList] = useState<VirtualTourVideo[]>([]);
    
    
    const getYoutubeEmbedUrl = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};
    useEffect( () => {

    fetchData();

    },[])
 const fetchData = async () => {
   
    try {

      const videosResponse = await VideoApi.getAllVideos();

      if (videosResponse?.data) { 
        setVideoList(videosResponse.data);
      }

    
    } catch (err) {
      console.error("Failed to load data", err);
    } finally {
     
    }
  };
    return (
        <div className="w-full bg-[#0c3366] py-16 font-sans">
            <div className="max-w-full sm:max-w-[80%] mx-auto px-4">
                {/* Top Title - visible only on md and up */}
                <div className="hidden md:flex justify-end mb-12">
                    <h2 className="text-4xl font-bold text-primary">Virtual Tours Await</h2>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-start gap-16">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full aspect-[628/419]">
                            <img
                                src={personImage}
                                alt="Virtual Tour Host"
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-xl scale-x-[-1]"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-1/2 text-white flex flex-col items-end">

                        <div className="flex md:hidden items-center justify-between w-full mb-6">

                            <div className="w-24 h-24 ">
                                <img
                                    src={speedometerIcon}
                                    alt="Speedometer Icon"
                                    className="w-full h-full rounded-2xl shadow-lg bg-white "
                                />
                            </div>


                            <h2 className="text-3xl font-bold text-[#00b2ff] text-right">Virtual Tours <br/>Await</h2>
                        </div>


                        {/* Desktop Icon only */}
                        <div className="hidden md:block mb-8">
                            <img
                                src={speedometerIcon}
                                alt="Speedometer Icon"
                                className="w-32 h-32 rounded-2xl shadow-lg bg-white "
                                loading="lazy"
                            />
                        </div>

                        <h3 className=" text-lg sm:text-2xl font-bold mb-6 text-right">
                            Customer Insights For Informed Choices
                        </h3>
                        <p className="text-lg leading-relaxed text-right">
                            Experience the future of car shopping today with our national network
                            of dealerships. Take a virtual tour of your desired vehicle, guided by
                            sales experts who explain your chosen car's features and capabilities.
                            Step into the driver's seat from the comfort of your home and delve
                            into every detail before making your decision.
                        </p>
                    </div>
                </div>

                {/* Bottom Title */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl sm:text-3xl font-bold text-white">
                        This Months Top Virtual Tours
                    </h3>
                </div>



                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                 {videoList.slice(0, 15).map((video, index) => {
  const videoUrl = getYoutubeEmbedUrl(video.videoUrl);
  const model = video.vehicleDetails?.model ?? "";
  const make = video.vehicleDetails?.make?.name ?? "";

  const handleEnquireClick = async () => {
    try {
      const res = await VideoApi.getModelById(make, model);
      if (res?.data && typeof res.data === "string") {
        window.location.href = `${BASE_URL}/buy/car?model=${res.data}`;
        return;
      }
      if (res?.err === "No vehicle found for the given make and model.") {
        window.location.href = `${BASE_URL}/buy/search?makes=${encodeURIComponent(make)}`;
        return;
      }
      console.warn("Unhandled API response:", res);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  return (
    <div key={index} className="w-full max-w-[520px] flex flex-col items-center gap-4">
      <div
        className="w-full rounded-xl overflow-hidden"
        style={{ boxShadow: "10px 10px 10px 0px #1cbeff" }}
      >
        <iframe
          src={`${videoUrl}?modestbranding=1&showinfo=0&rel=0&fs=1`}
          title={`${make} ${model}`}

          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="w-full h-auto aspect-video"
          style={{ border: "none", backgroundColor: "#000" }}
        />
      </div>
     <div className="flex justify-end w-full mt-2">
              <button
                onClick={handleEnquireClick}
                className="group relative px-4 py-2 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
              >
                <span className="block group-hover:opacity-0 transition-opacity duration-200">
                  Enquire Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Enquire Now <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </button>
            </div>
    </div>
  );
})}

                </div>
                <div className="mt-16 flex flex-row sm:flex-row sm:justify-end sm:items-center gap-4 w-full">
                    <h3 className="text-2xl font-bold text-white sm:mr-4 sm:mb-0 text-nowrap">More Reviews</h3>

                    <div className="flex justify-end w-full sm:w-auto">
                    <HoverArrowButton
  label="Tour Now"
  onClick={() => navigate("/virtual-tours")}
  className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all"
  textClass="text-white"
  hoverTextClass="text-white"
/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VirtualToursCard;