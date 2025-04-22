import { useRef, useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { BiChevronLeft } from "react-icons/bi"

// Import statements for your images would remain the same
import test1 from "@/assets/Review/Reviews-Sophie.webp"
import test2 from "@/assets/Review/review1.webp"
import test3 from "@/assets/Review/review2.webp"
import test4 from "@/assets/Review/review3.webp"
import test5 from "@/assets/Review/review4.webp"
import test6 from "@/assets/Review/review5.webp"
import test7 from "@/assets/Review/review6.webp"
import test8 from "@/assets/Review/review7.webp"
import test9 from "@/assets/Review/review7.webp"
import test10 from "@/assets/Review/review8.webp"
import test11 from "@/assets/Review/review9.webp"
import test12 from "@/assets/Review/review10.webp"
import test13 from "@/assets/Review/review11.webp"
import test14 from "@/assets/Review/review12.webp"
import test15 from "@/assets/Review/review13.webp"
import ausMap from "@/assets/Homepage/Layer_1.png"

const reviewImages = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
  test13,
  test14,
  test15,
]

const ReviewCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile and determine images per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (isMobile && !isPaused) {
      const interval = setInterval(() => {
        scroll("right")
      }, 3000) // Auto-scroll every 3 seconds on mobile

      return () => clearInterval(interval)
    }
  }, [isPaused, isMobile, currentIndex])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const imagesPerView = isMobile ? 1 : 4
    const scrollAmount = container.clientWidth

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }

    // Update current index for auto-scroll tracking
    setTimeout(() => {
      if (container) {
        const newIndex = Math.round(container.scrollLeft / (container.clientWidth / imagesPerView))
        setCurrentIndex(newIndex)
      }
    }, 300)
  }

  // Handle user interaction
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div>
      <div className="w-full bg-primary text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-medium mb-2">Testimonials</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Countless Aussies can't be wrong!</h2>
          <p className="text-2xl mb-8">Here's what people have to say...</p>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-transpernt text-white rounded-full p-2 shadow-lg transition-all"
              aria-label="Scroll left"
            >
              <BiChevronLeft className="h-[40px] w-[40px] skew-x-0 inline-block" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-hidden pb-6 snap-mandatory snap-x w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {reviewImages.map((image, index) => (
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
  className="absolute right-[-20px]  top-1/2 -translate-y-1/2 z-20 bg-transpernt text-white p-2 rounded-[40px] shadow-lg transition-all"
  aria-label="Scroll right"
>
  <ChevronRight className="h-[40px] w-[40px] skew-x-0 inline-block" />
</button>
          </div>
        </div>
      </div>

      <section className="bg-white py-8 px-4 max-w-[80%] mx-auto font-poppins">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:text-nowrap">
              Luckily for you, we service Australia wide
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our services are available in all major cities Australia-wide. Whether you're in Melbourne, Sydney,
              Canberra, Brisbane, Darwin, Perth, Adelaide, Hobart, or anywhere in between, we're here to serve you.
              Discover how we can assist you today.
            </p>
          </div>

          {/* Right Image */}
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
  )
}

export default ReviewCarousel
