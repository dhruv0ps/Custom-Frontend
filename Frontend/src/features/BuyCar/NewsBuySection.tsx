
import * as React from "react"
import { cn } from "@/lib/utils"

interface NewsVideoSectionProps {
  videoId: string
  title: string
  source: string
  className?: string
}

export default function NewsSection({
  videoId = "Wk_nS9plbkQ",
  title = "The number one scam in Australia costing victims millions every year | A Current Affair",
  source = "A Current Affair",
  className,
}: NewsVideoSectionProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className={cn("w-full bg-gray-200", className)}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-end">
          <h2 className="text-[14px] font-bold uppercase text-primary text-right pb-2 leading-[1em] mt-4">
          car buying scams cost aussies millions - aca 
          </h2>
        </div>

        {/* Video Section */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div className="relative w-full pb-[56.25%] h-0 rounded-t-lg overflow-hidden">
            {isPlaying ? (
              <iframe
              loading="lazy"
              title="The number one scam in Australia | A Current Affair"
              src="https://www.youtube.com/embed/Wk_nS9plbkQ?feature=oembed"
              className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                name="fitvid0"
            />
            ) : (
              <div className="absolute inset-0">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <div className="w-[68px] h-[48px] bg-red-600 opacity-80 hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="bg-black text-white px-4 py-3 rounded-b-lg mb-2">
            <p className="text-[15px] font-bold leading-snug">
              {title} | {source}
            </p>
            <p className="text-sm text-primary italic mt-1">Source: {source}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
