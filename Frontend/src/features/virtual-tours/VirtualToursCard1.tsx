import React from "react";
import HoverArrowButton from "@/util/HoverButton";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
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
    },{
        title :"BMW",
        url :"https://www.youtube.com/embed/4cKoW8PLHlw?si=4zxmTIlm893QKKi4" 
    }
    ,{
        title :"BMW",
        url :"https://www.youtube.com/embed/qEfjAK4gVhU?si=6lTgwHtUGIDoo1iQ"
    },{
        title:"CUPRA",
        url :"https://www.youtube.com/embed/rfnYB5MMGb4?si=Bm4i0amEANZavasB"
    },{
        title :"BMW",
        url:"https://www.youtube.com/embed/DlTCkZZXx_U?si=yYK8k2MmIITfwOAE"
    },{
        title :"BMW",
        url:"https://www.youtube.com/embed/hwUSJtHwJoQ?si=1U_SiWhPJtqTKtVE"
    },
    {
        title :"BMW",
        url:"https://www.youtube.com/embed/F3z8tI-pKJQ?si=udWvNX3yeDOrMaqO"
    },
    {   title :"Volvo",
        url:"https://www.youtube.com/embed/cQX-QXxwGvA?si=Gdnr-0A8wgMK2yxC"
    }
,{
    title :"Ex-90",
    url:"https://www.youtube.com/embed/1ISzNfOgknY?si=cMJJywZ0oFUlYxVY"
},{
    title:"Peugeot",
    url:"https://www.youtube.com/embed/-_eN53H2PEw?si=fqEH1OcS-MEbKrT4"
},{
    title:"Peugeot",
    url:"https://www.youtube.com/embed/MuUW3eJlJv4?si=ImsuQ7xv8AbhmTKy"
}
,{
    title:"Fiat",
    url:"https://www.youtube.com/embed/eN-EHWsuRKA?si=Q7pYAtJYKby-fVsD"
},{
    title:"Fiat",
    url:"https://www.youtube.com/embed/bAe9KcihiZM?si=vQ3dVvmhyDNag4xa"
},{
    title:"ISUZSU",
    url:"https://www.youtube.com/embed/9rURg5ZV7gk?si=Ql5o4T6KPcuXF4tl"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/f49UNmDbsY0?si=2XbmcS2jGjiUGKQr"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/iPJDW5EaIzE?si=ig7XZCzPHxblQi-z"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/XpFBrqkyK0Y?si=vOk7e-eyrBSoCND8"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/I8MRuTKNA4U?si=0p9thCXi4pECC0HD"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/oO5xfJ3OglE?si=rv02AubhaEs5XN6S"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/d_c759sEYnI?si=qmasaI8MzI9ssqxU"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/o59KEC8WrzM?si=yPPq7_YXmFF721oi"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/A3rhonduZcY?si=wm2WSB21XvDpLbNJ"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/Qkqa3AkLK9E?si=qhfrjCu6CU0sm2Lf"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/61KxOUKyUa8?si=wNn3U5tEedAR8R2i"
},
{
    title:"MG MOTORS",
    url:"https://www.youtube.com/embed/oF9Zw8k9f9I?si=dfIB-_RaeOf5Ka09"
}

];

export const VirtualToursCard1: React.FC = () => {
    const navigate = useNavigate()
    const [visibleCount, setVisibleCount] = useState(21); 

    const showMoreVideos = () => {
        setVisibleCount(videos.length);
    };
    return (
        <div className="w-full bg-[#0c3366] py-16 font-sans">
            <div className="max-w-[95%] sm:max-w-[80%] mx-auto ">
                {/* Top Title */}

                {/* Bottom Title */}
                <div className=" text-center">
                    <h3 className="text-3xl sm:text-3xl font-bold text-white">
                    This Months Top
                    <br className="block sm:hidden" />
                    <span className="inline sm:inline-block"> Virtual Tours</span>
                    </h3>
                </div>

                {/* YouTube Grid - Updated to match the image */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {videos.slice(0, visibleCount).map((video, index) => (
                   
                            <div key={index}
                  className="w-full max-w-[440px] flex flex-col items-center gap-4"
                            >

                            
                            {/* Video Glow Box */}
                            <div className="w-full rounded-xl overflow-hidden "
                                style={{ boxShadow: "10px 10px 10px 0px #1cbeff" }}>
                                <iframe
                                    src={video.url}
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

                            <div className="flex justify-end w-full mt-2 ">
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

                {visibleCount < videos.length && (
          <div className="flex justify-center mt-10">
  <button
    onClick={showMoreVideos}
    className="bg-white text-red-500 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2"
  >
    <FaYoutube className=" text-5xl" />
    Show More
  </button>
</div>
        )}
        
            </div>
            <div className="w-full py-4 sm:py-8 sm:mt-4 mt-12">
      <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between  sm:px-0">
        
        {/* Text Block */}
        <div
          className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
          style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
        >
        <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
        Virtual Tours
         <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase"> ALL FROM HOME</span>
        </h2>
      </div>
      <div className="flex justify-end flex-shrink-0 ml-1 mr-3 sm:mr-0">
          <HoverArrowButton
            label="View All"
            onClick={() => navigate("/access-form")}
            className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-white"
            hoverTextClass="text-white"
          />
        </div>
    </div>
    </div>
            <div className=" justify-end text-end mt-12 max-w-[95%] sm:max-w-[80%] mx-auto ">
                <h3 className="text-xl sm:text-3xl font-bold text-[#21c1ff] mb-4">
                    Expert Guided Car Exploration
                </h3>
                <p className="text-white text-sm md:text-base  text-end leading-relaxed">
                    Experience the future of car shopping today with our national network of dealerships.
                    Take a virtual tour of your desired vehicle, guided by sales experts who explain your
                    chosen car’s features and capabilities. Step into the driver’s seat from the comfort of
                    your home and delve into every detail before making your decision.
                </p>
            </div>


        </div>
    );
};

export default VirtualToursCard1;