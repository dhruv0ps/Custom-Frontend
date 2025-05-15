
import  { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Loading } from "@/components/common/Loading";
import { BASE_URL } from "@/config";
import HoverArrowButton from "@/util/HoverButton";
import { VideoApi } from "@/config/apiRoutes/virtualTour";
import { VirtualTourVideo } from "@/config/models/VirtualTourVideo";

// Convert YouTube URLs to embed format
const getYoutubeEmbedUrl = (url:string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const VirtualToursCard = () => {
  const [videoList, setVideoList] = useState<VirtualTourVideo[]>([]);
  const [makesList, setMakesList] = useState<any[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const videosPerPage = 18;

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Combined function to fetch all required data
  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch videos and makes in parallel
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

  // Calculate total pages based on items to display (videos + unmatched makes)
  const totalItems = videoList.length + unmatchedMakes.length;
  const totalPages = Math.ceil(totalItems / videosPerPage);

  // Get current page's items (videos first, then unmatched makes)
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    
    // If start index is beyond video list length, we only need unmatched makes
    if (startIndex >= videoList.length) {
      const unmatchedStartIndex = startIndex - videoList.length;
      const unmatchedEndIndex = endIndex - videoList.length;
      return {
        videos: [],
        makes: unmatchedMakes.slice(unmatchedStartIndex, unmatchedEndIndex)
      };
    }
    
    // If end index is beyond video list length, we need both videos and some unmatched makes
    if (endIndex > videoList.length) {
      const unmatchedCount = endIndex - videoList.length;
      return {
        videos: videoList.slice(startIndex, videoList.length),
        makes: unmatchedMakes.slice(0, unmatchedCount)
      };
    }
    
    // Otherwise, we only need videos for this page
    return {
      videos: videoList.slice(startIndex, endIndex),
      makes: []
    };
  };

  const { videos, makes } = getCurrentPageItems();

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
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-white text-[#0c3366] px-4 py-2 rounded"
        >
          <IoIosArrowBack className="w-10 h-10" />
        </button>
        <div className="bg-white px-4 py-1">
          <FaYoutube className="text-[#FF0000] text-5xl" />
        </div>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
          <a
            href={`https://wheelzau.vercel.app/request-virtual-tour?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-4 py-2 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
          >
            <span className="block group-hover:opacity-0 transition-opacity duration-200">
              Enquire Now
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Enquire Now <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    );
  };

 const MakeImageCard = ({ makeItem }: { makeItem: { name: string; image: string } }) => (
    <div className="w-full max-w-[440px] flex flex-col items-center gap-4">
      <div className="w-full rounded-xl overflow-hidden" style={{ boxShadow: "10px 10px 10px 0px #1cbeff" }}>
        <img
          src={makeItem.image}
          alt={makeItem.name}
          className="w-full h-auto aspect-video object-contain bg-white rounded-xl"
        />
      </div>
      <div className="flex justify-end w-full mt-2">
        <a
          href={`https://wheelzau.vercel.app/request-virtual-tour?make=${encodeURIComponent(makeItem.name)}&model=`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-4 py-2 font-semibold text-base rounded-full transition bg-white text-primary border border-primary shadow hover:scale-105 overflow-hidden"
        >
          <span className="block group-hover:opacity-0 transition-opacity duration-200">
            Enquire Now
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Enquire Now <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  );

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
            {/* Render video cards first */}
            {videos.map((video, index) => (
              <VideoCard key={`video-${index}`} video={video} />
            ))}
            
            {/* Then render image cards for makes without videos */}
            {makes.map((makeItem, index) => (
              <MakeImageCard key={`make-${index}`} makeItem={makeItem} />
            ))}
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
              <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase"> ALL FROM HOME</span>
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