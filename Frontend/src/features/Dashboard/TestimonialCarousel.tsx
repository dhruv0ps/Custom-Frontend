import { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { BiChevronLeft } from "react-icons/bi";

import test1 from "@/assets/Review/Reviews-Sophie.webp";
import test2 from "@/assets/Review/review1.webp";
import test3 from "@/assets/Review/review2.webp";
import test4 from "@/assets/Review/review3.webp";
import test5 from "@/assets/Review/review4.webp";
import test6 from "@/assets/Review/review5.webp";
import test7 from "@/assets/Review/review6.webp";
import test9 from "@/assets/Review/review7.webp";
import test10 from "@/assets/Review/review8.webp";
import test11 from "@/assets/Review/review9.webp";
import test12 from "@/assets/Review/review10.webp";
import test13 from "@/assets/Review/review11.webp";
import test14 from "@/assets/Review/review12.webp";
import test15 from "@/assets/Review/review13.webp";
import ausMap from "@/assets/Homepage/Layer_1.png";

const reviewImages = [
  test1, test2, test3, test4, test5, test6, test7,
  test9, test10, test11, test12, test13, test14, test15,
];

const ReviewCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const imagesPerView = isMobile ? 1 : 4;
  const extendedReviewImages = [
    ...reviewImages.slice(-imagesPerView),
    ...reviewImages,
    ...reviewImages.slice(0, imagesPerView),
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const total = extendedReviewImages.length;
      const singleImageWidth = container.scrollWidth / total;
      container.scrollLeft = singleImageWidth * imagesPerView;
      setCurrentIndex(imagesPerView);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => scroll("right"), 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex, isMobile]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const total = extendedReviewImages.length;
    const singleImageWidth = container.scrollWidth / total;

    const resetScroll = () => {
      if (currentIndex >= total - imagesPerView) {
        container.scrollLeft = singleImageWidth * imagesPerView;
        setCurrentIndex(imagesPerView);
      } else if (currentIndex < imagesPerView) {
        container.scrollLeft = singleImageWidth * (total - imagesPerView * 2);
        setCurrentIndex(total - imagesPerView * 2);
      }
    };

    const timeout = setTimeout(resetScroll, 400);
    return () => clearTimeout(timeout);
  }, [currentIndex, isMobile]);

  const scroll = (direction:any) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const total = extendedReviewImages.length;
    const singleImageWidth = container.scrollWidth / total;
    const scrollAmount = singleImageWidth;

    let newIndex = currentIndex;
    if (direction === "left") {
      newIndex--;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      newIndex++;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div>
      <div className="w-full bg-primary text-white py-10 px-4">
        <div className="max-w-full sm:max-w-[80%] mx-auto">
          <h3 className="text-xl font-medium mb-2">Testimonials</h3>
          <h2 className="text-[21px] sm:text-4xl font-bold mb-2 whitespace-nowrap">Countless Aussies can't be wrong!</h2>
          <p className="text-xl mb-8">Here's what people have to say...</p>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-transpernt text-white rounded-full p-2 shadow-lg transition-all"
              aria-label="Scroll left"
            >
              <BiChevronLeft className="h-[40px] w-[40px] inline-block" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-hidden pb-6 snap-mandatory snap-x w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {extendedReviewImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 snap-start md:w-1/4 w-full px-2">
                  <div className="flex justify-center items-center">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Review ${index + 1}`}
                      className="max-w-full max-h-[400px] object-contain mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-transpernt text-white p-2 rounded-[40px] shadow-lg transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-[40px] w-[40px] inline-block" />
            </button>
          </div>
        </div>
      </div>

      <section className="bg-white py-8 px-4 sm:max-w-[80%] mx-auto font-poppins">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:text-nowrap">
              Luckily for you, we service Australia wide
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our services are available in all major cities Australia-wide. Whether you're in Melbourne, Sydney,
              Canberra, Brisbane, Darwin, Perth, Adelaide, Hobart, or anywhere in between, we're here to serve you.
              Discover how we can assist you&nbsp;today.
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={ausMap || "/placeholder.svg"}
              alt="Australia Map"
              className="w-[320px] md:w-[400px] h-[280px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewCarousel;
