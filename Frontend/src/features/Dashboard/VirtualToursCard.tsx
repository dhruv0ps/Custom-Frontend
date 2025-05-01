import React, { useState } from "react";
import personImage from "@/assets/Home/Virtual-Tours.jpg";
import speedometerIcon from "@/assets/Homepage/Car-Speedometer.gif";
import { ChevronRight } from "lucide-react";
import HoverArrowButton from "@/util/HoverButton";
import { useNavigate } from "react-router-dom";
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
        title: "ferrari F80",
        url: "https://www.youtube.com/embed/tYSo0LsHhvo?si=Jbic4u_fL7K8zDad"
    },
    {
        title: "Lam",
        url: "https://www.youtube.com/embed/sitXeGjm4Mc?si=qwqEfVGW2sW03PaO"
    },
    {
        title: "BMW",
        url: "https://www.youtube.com/embed/o6WgDKvurnw?si=coPsQnlws9ESRGRZ"
    },
    {
        title: "BMW",
        url: "https://www.youtube.com/embed/TRrxlWzoySA?si=800S5lz4c-A9JFsH"
    },
    {
        title: "BMW",
        url: "https://www.youtube.com/embed/dWct0ruIBAE?si=_55dzW8-lSXh7qA3"
    }
    , {
        title: "BMW",
        url: "https://www.youtube.com/embed/Y3iXrBWNNRA?si=oLIdqCjhP5qldtqm"
    }, {
        title: "BMW",
        url: "https://www.youtube.com/embed/Y-VGQp_Hmg0?si=-pMg_si8tpP4hn52"
    }, {
        title: "BMW",
        url: "https://www.youtube.com/embed/96ZEreEExuU?si=VnVbvJl2g1qIWMd3"
    }, {
        title: "BMW",
        url: "https://www.youtube.com/embed/TxgZVlwOpnM?si=C-buDv1lHXHOZxuU"
    }

];

export const VirtualToursCard: React.FC = () => {
const navigate = useNavigate()
    const HoverButton = () => {
        const [hovered, setHovered] = useState(false);

        return (
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <button
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        position: "relative",
                        padding: "0.5rem 1rem",
                        fontWeight: 600,
                        borderRadius: "9999px",
                        transition: "transform 0.3s ease",
                        backgroundColor: "#fff",
                        color: "#00b2ff",
                        border: "1px solid #007bff",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                    }}
                >
                    {/* Static Text */}
                    <span
                        style={{
                            opacity: hovered ? 0 : 1,
                            transition: "opacity 0.2s ease",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        Enquire Now
                    </span>

                    {/* Hover Text */}
                    <span
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: hovered ? 1 : 0,
                            transition: "opacity 0.2s ease",
                            zIndex: 3,
                        }}
                    >
                        Enquire Now <ChevronRight style={{ marginLeft: "0.25rem", width: 16, height: 16 }} />
                    </span>
                </button>
            </div>
        );
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
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[520px] flex flex-col items-center gap-4"
                        >
                            <div
                                className="w-full rounded-xl overflow-hidden"
                                style={{
                                    boxShadow: "10px 10px 10px 0px #1cbeff"
                                }}
                            >
                                <iframe
                                    src={`${video.url}?modestbranding=1&showinfo=0&rel=0&fs=1`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-auto aspect-video"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#000"
                                    }}
                                />
                            </div>

                            <HoverButton />
                        </div>
                    ))}
                </div>
                <div className="mt-16 flex flex-row sm:flex-row sm:justify-end sm:items-center gap-4 w-full">
                    <h3 className="text-2xl font-bold text-white sm:mr-4 sm:mb-0 text-nowrap">More Reviews</h3>

                    <div className="flex justify-end w-full sm:w-auto">
                    <HoverArrowButton
  label="View All"
  onClick={() => navigate("/view-all")}
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