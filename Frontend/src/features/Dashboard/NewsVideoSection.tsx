"use client"

import * as React from "react"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"

interface NewsVideoSectionProps {
  videoId: string
  title: string
  source: string
  className?: string
}

export default function NewsVideoSection({
  videoId = "8sD9D4T9D-o",
  title = "Police are hunting two car thieves after an online sale went horribly wrong",
  source = "7 NEWS",
  className,
}: NewsVideoSectionProps) {
  const [_isLoaded, setIsLoaded] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className={cn("w-full bg-gray-200 ", className)}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-end ">
          <h2 className="text-[14px] font-bold uppercase text-primary text-right pb-[10px] leading-[1em] mt-4">
            POLICE HUNT THIEVES AFTER ONLINE PRIVATE SALE | {source}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <AspectRatio.Root ratio={16 / 9}>
            {isPlaying ? (
              <div className="w-full aspect-[16/9] relative overflow-hidden">
                <iframe
                  loading="lazy"
                  title={title}
                  src={`https://www.youtube.com/embed/${videoId}?feature=oembed&autoplay=1`}
                  className="top-0 left-0 w-full h-full block relative z-[1] leading-[0]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  name="fitvid0"
                  onLoad={() => setIsLoaded(true)}
                ></iframe>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/9] bg-black rounded-t-lg overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  {/* YouTube-style play button */}
                  <div className="w-[68px] h-[48px] bg-red-600 opacity-80 hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity">
                    {/* Triangle play symbol */}
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </button>
              </div>
            )}
          </AspectRatio.Root>

          {/* Connected title and source section without any gap */}
          <div className="bg-black text-white px-4 py-3 border-t-0 rounded-b-lg mb-2">
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

