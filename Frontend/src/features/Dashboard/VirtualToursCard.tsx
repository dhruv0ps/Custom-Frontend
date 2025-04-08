import React from "react";
import personImage from "@/assets/Homepage/Virtual-Tours-by-Wheelz.webp";
import speedometerIcon from "@/assets/Homepage/Car-Speedometer.gif";
import { ChevronRight } from "lucide-react";

const videos = [
    {
        title: "Porsche 911 GT3",
        url: "https://www.youtube.com/embed/DZAdVY9kKbc",
    },
    {
        title: "Mercedes G-Class",
        url: "https://www.youtube.com/embed/Wcv8GwzfPXc",
    },
    {
        title: "Mazda BT-50",
        url: "https://www.youtube.com/embed/Fef7uEfqlT4?si=lk25Ywvr5_07oGJ4",
    },
    {
        title: "Kia Tasman",
        url: "https://www.youtube.com/embed/AzSWmOGaGcY?si=CIeZYyOa62uDgwmR",
    },
    {
        title: "Toyota Prado",
        url: "https://www.youtube.com/embed/1E02tAWTrAY?si=uLceMfWs4BYntkt5",
    },
    {
        title: "Polestar 4",
        url: "https://www.youtube.com/embed/0n8W-GtfHYw?si=wtbo1tpfEvX7uSCJ",
    },
    {
        title :"ferrari F80",
        url:"https://www.youtube.com/embed/tYSo0LsHhvo?si=Jbic4u_fL7K8zDad"
    },
    {
        title :"Lam",
        url:"https://www.youtube.com/embed/sitXeGjm4Mc?si=qwqEfVGW2sW03PaO" 
    },
    {   title:"BMW",
        url :"https://www.youtube.com/embed/o6WgDKvurnw?si=coPsQnlws9ESRGRZ"
    },
    {
title:"BMW",
        url :"https://www.youtube.com/embed/TRrxlWzoySA?si=800S5lz4c-A9JFsH" 
    },
    {
        title:"BMW",
        url :"https://www.youtube.com/embed/dWct0ruIBAE?si=_55dzW8-lSXh7qA3"  
    }
    ,{
        title:"BMW",
        url :"https://www.youtube.com/embed/Y3iXrBWNNRA?si=oLIdqCjhP5qldtqm"    
    },{
        title:"BMW",
        url:"https://www.youtube.com/embed/Y-VGQp_Hmg0?si=-pMg_si8tpP4hn52"
    },{
        title:"BMW",
        url:"https://www.youtube.com/embed/96ZEreEExuU?si=VnVbvJl2g1qIWMd3"
    },{
         title:"BMW",
        url:"https://www.youtube.com/embed/TxgZVlwOpnM?si=C-buDv1lHXHOZxuU" 
    }

];

export const VirtualToursCard: React.FC = () => {
    return (
        <div className="w-full bg-[#0c3366] py-16 font-sans">
            <div className="max-w-[80%] mx-auto px-4">
                {/* Top Title */}
                <div className="flex justify-end mb-12">
                    <h2 className="text-4xl font-bold text-cyan-400">Virtual Tours Await</h2>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-start gap-16">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={personImage}
                            alt="Virtual Tour Host"
                            className="rounded-2xl shadow-xl w-full h-auto"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-1/2 text-white flex flex-col items-end">
                        <div className="mb-8">
                            <img
                                src={speedometerIcon}
                                alt="Speedometer Icon"
                                className="w-32 h-32 rounded-2xl shadow-lg bg-white p-4"
                                loading="lazy"
                            />
                        </div>

                        <h3 className="text-2xl font-bold mb-6 text-right">
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
                    <h3 className="text-3xl font-bold text-white">
                        This Months Top Virtual Tours
                    </h3>
                </div>

                {/* YouTube Grid - Updated to match the image */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[440px] flex flex-col items-center gap-4"
                        >
                            {/* Video Glow Box */}
                            <div className="w-full rounded-xl overflow-hidden shadow-[0_0_20px_#00b2ff,0_10px_30px_rgba(0,178,255,0.4),0_0_15px_#00b2ff]">
  <iframe
    src={video.url}
    title={video.title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    loading="lazy"
    className="w-full h-52"
  />
</div>

<div className="flex justify-end w-full ">
                            <button className="group relative px-4 py-2 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden">
                                <span className="block group-hover:opacity-0 transition-opacity duration-200">
                                    Enquire Now
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Enquire Now <ChevronRight className="ml-1 h-4 w-4" />
                                </span>
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
{/* More Reviews & View All Button */}
<div className="mt-16 flex justify-end items-center gap-8">
  <h3 className="text-2xl font-bold text-white">More Reviews</h3>
  <button className="bg-[#21c1ff] text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all">
    View All
  </button>
</div>

            </div>
        </div>
    );
};

export default VirtualToursCard;