import type React from "react"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

const ReviewCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth / 2
    const atStart = container.scrollLeft <= 0
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1

    if (direction === "left") {
      if (atStart) {
        
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" })
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      }
    }

    if (direction === "right") {
      if (atEnd) {
        
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <div>
    <div className="w-full bg-primary text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-medium mb-2">Testimonials</h3>
        <h2 className="text-4xl font-bold mb-2">Countless Aussies can't be wrong!</h2>
        <p className="text-2xl mb-8">Here's what people have to say...</p>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 text-primary rounded-full p-2 shadow-lg transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide snap-mandatory gap-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviewImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start overflow-hidden w-[320px]"
              >
                <div className="px-1">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Review ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-4 z-10 text-primary rounded-full p-2 shadow-lg transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    <section className="bg-white py-16 px-4 max-w-[80%] mx-auto font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Luckily for you, we service <span className="text-black">Australia wide</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our services are available in all major cities Australia-wide.
            Whether you’re in Melbourne, Sydney, Canberra, Brisbane, Darwin,
            Perth, Adelaide, Hobart, or anywhere in between, we’re here to
            serve you. Discover how we can assist you today.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src={ausMap}
            alt="Australia Map"
            className="w-[320px] md:w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default ReviewCarousel
