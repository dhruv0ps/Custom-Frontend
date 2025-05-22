import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Loading } from "@/components/common/Loading";
import { BASE_URL } from "@/config";
import HoverArrowButton from "@/util/HoverButton";
import { VideoApi } from "@/config/apiRoutes/virtualTour";
import { VirtualTourVideo } from "@/config/models/VirtualTourVideo";
import { useRef } from "react";
import gif2 from "@/assets/Wheelz-Australia-Coming-Soon-icon.webp";
const getYoutubeEmbedUrl = (url: string) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    const match = url.match(/(?:youtu\.be\/|embed\/)([\w\-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  } catch {
    return "";
  }
};

const SCROLL_POSITION_KEY = "virtual_tours_scroll_position";
const CURRENT_PAGE_KEY = "virtual_tours_current_page";

const VirtualToursCard = () => {
  const [videoList, setVideoList] = useState<VirtualTourVideo[]>([]);
  const [makesList, setMakesList] = useState<any[]>();

  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = sessionStorage.getItem(CURRENT_PAGE_KEY);
    return storedPage ? parseInt(storedPage) : 1;
  });
  const [loading, setLoading] = useState(false);
  const videosPerPage = 18;
  const isFirstLoad = useRef(true);
  const pageLoaded = useRef(false);


  useEffect(() => {
    if (pageLoaded.current) {
      sessionStorage.setItem(CURRENT_PAGE_KEY, currentPage.toString());
    }
  }, [currentPage]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }


    if (!isFirstLoad.current) return;
    isFirstLoad.current = false;

    fetchData().then(() => {

      pageLoaded.current = true;
      const savedScroll = sessionStorage.getItem(SCROLL_POSITION_KEY);
      if (savedScroll) {
        window.scrollTo({ top: parseInt(savedScroll), behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });


    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        SCROLL_POSITION_KEY,
        window.scrollY.toString()
      );
    };

    const handleScroll = () => {
      if (pageLoaded.current) {
        sessionStorage.setItem(
          SCROLL_POSITION_KEY,
          window.scrollY.toString()
        );
      }
    };

    let timeout: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 200);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {

      const [videosResponse, makesResponse] = await Promise.all([
        VideoApi.getAllVideos(),
        VideoApi.getAllMake()
      ]);

      if (videosResponse?.data) { 
        setVideoList(videosResponse.data);
      }

      if (makesResponse?.data) {
        setMakesList(makesResponse.data);
      }
    } catch (err) {
      console.error("Failed to load data", err);
    } finally {
      setLoading(false);
    }
  };

  const unmatchedMakes: { name: string; image: string }[] = (makesList ?? []).filter(
    (makeItem) => !videoList.some(
      (video) => video.vehicleDetails?.make?.name === makeItem.name
    )
  );


  const totalItems = videoList.length + unmatchedMakes.length;
  const totalPages = Math.ceil(totalItems / videosPerPage);

  const handlePageChange = (newPage: number) => {
    const validPage = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(validPage);

  };

  
  const getCurrentPageItems = () => {
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  let allCards: (VirtualTourVideo | { name: string; image: string })[] = [
    ...videoList,
    ...unmatchedMakes,
  ];

  const pageItems = allCards.slice(startIndex, endIndex);

  return {
    items: pageItems,
    isLastPage: endIndex >= allCards.length,
    remainingSlots: videosPerPage - pageItems.length,
  };
};


  const { items, isLastPage, remainingSlots } = getCurrentPageItems();

  // Pagination controls component
  const PaginationControls = () => (
    <>
      <div className="flex justify-center items-center gap-6">
        <span className="text-white font-medium text-lg">
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div className="flex justify-center items-center gap-2 my-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-white text-[#0c3366] px-4 py-2 rounded"
        >
          <IoIosArrowBack className="w-10 h-10" />
        </button>
        <div className="bg-white px-4 py-1">
          <FaYoutube className="text-[#FF0000] text-5xl" />
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-white text-[#0c3366] px-4 py-2 rounded"
        >
          <IoIosArrowForward className="w-10 h-10" />
        </button>
      </div>
    </>
  );

  const VideoCard = ({ video }: { video: VirtualTourVideo }) => {
    const { videoUrl, vehicleDetails } = video;
    const model = vehicleDetails?.model ?? "";
    const make = vehicleDetails?.make?.name ?? "";
    const videoEmbedUrl = getYoutubeEmbedUrl(videoUrl);

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
      <div className="w-full max-w-[440px] flex flex-col items-center gap-4">
        <div className="w-full rounded-xl overflow-hidden" style={{ boxShadow: "10px 10px 10px 0px #1cbeff" }}>
          <iframe
            src={videoEmbedUrl}
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
  };

  const MakeImageCard = ({ makeItem }: { makeItem: { name: string; image: string } }) => {
    const handleEnquireClick = () => {
      window.location.href = `${BASE_URL}/buy/search?makes=${encodeURIComponent(makeItem.name)}`;
    };

    return (
      <div className="w-full max-w-[440px] flex flex-col items-center gap-4">
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ boxShadow: "10px 10px 10px 0px #1cbeff" }}
        >
          <img
            src={makeItem.image}
            alt={makeItem.name}
            className="w-full h-auto aspect-video object-contain bg-white rounded-xl"
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
  };

  return (
    <div className="w-full bg-[#0c3366] py-16 font-sans">
      <div className="max-w-[95%] sm:max-w-[80%] mx-auto">
        {/* Top Title */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-3xl font-bold text-white">
            <span className="sm:mr-2">This Month's Top</span>
            <br className="block sm:hidden" />
            <span className="inline sm:inline-block">Virtual Tours</span>
          </h3>
        </div>

        <div className="mt-6">
          <PaginationControls />
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <>
 
  {items.map((item, index) => {
    
    if ((item as VirtualTourVideo).videoUrl) {
      return <VideoCard key={`video-${index}`} video={item as VirtualTourVideo} />;
    }

    return <MakeImageCard key={`make-${index}`} makeItem={item as { name: string; image: string }} />;
  })}

  {isLastPage &&
    [...Array(remainingSlots)].map((_, index) => (
      <div key={`coming-soon-${index}`} className="w-full max-w-[440px] flex flex-col items-center gap-4">
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ boxShadow: "10px 10px 10px 0px #1cbeff" }}
        >
          <img
            src={gif2}
            alt="Coming Soon"
            className="w-full h-auto aspect-video object-contain bg-white rounded-xl"
          />
        </div>
        <div className="flex justify-end w-full mt-2">
          <button
            disabled
            className="group relative px-4 py-2 font-semibold text-base rounded-full bg-gray-300 text-gray-600 border border-gray-300 shadow opacity-70 cursor-not-allowed"
          >
            <span className="block">Coming Soon</span>
          </button>
        </div>
      </div>
    ))}
</>


          </div>
        )}

        <PaginationControls />
      </div>

      {/* Bottom section */}
      <div className="w-full py-4 sm:py-8 sm:mt-4 mt-12">
        <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between sm:px-0">
          {/* Text Block */}
          <div
            className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
            style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
          >
            <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
              Virtual Tours
              <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-1 uppercase">ALL FROM HOME</span>
            </h2>
          </div>
          <div className="flex justify-end flex-shrink-0 ml-1 mr-3 sm:mr-0">
            <HoverArrowButton
              label="View All"
              onClick={() => window.location.href = `${BASE_URL}/request-virtual-tour`}
              className="bg-primary transition-all px-4 sm:px-8 py-3 font-semibold text-sm sm:text-base rounded-full shadow-md"
              textClass="text-white"
              hoverTextClass="text-white"
            />
          </div>
        </div>
      </div>

      {/* Bottom description */}
      <div className="justify-end text-end mt-12 max-w-[95%] sm:max-w-[80%] mx-auto">
        <h3 className="text-xl sm:text-3xl font-bold text-[#21c1ff] mb-4">
          Expert Guided Car Exploration
        </h3>
        <p className="text-white text-sm md:text-base text-end leading-relaxed">
          Experience the future of car shopping today with our national network of dealerships.
          Take a virtual tour of your desired vehicle, guided by sales experts who explain your
          chosen car's features and capabilities. Step into the driver's seat from the comfort of
          your home and delve into every detail before making your decision.
        </p>
      </div>
    </div>
  );
};

export default VirtualToursCard;