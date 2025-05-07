interface NewsVideoSectionProps {
  videoId: string
  title: string
  source: string
  className?: string
}

export default function NewsSection({
  videoId = "TMAlw9_LvYQ",
  title = "Student scammed out of almost $30,000 after online marketplace car scam",
  source = "9 NEWS AUS",
  className,
}: NewsVideoSectionProps) {
  
  return (
    <div className={`bg-gray-200 ${className || ""}`}>
    <div className="max-w-[92%] sm:max-w-4xl mx-auto pb-8">
      <div className="flex items-end justify-end">
        <h2 className="text-[14px] font-bold uppercase text-primary text-right pb-[10px] leading-[1em] mt-4">
        STUDENT SCAMMED ONLINE
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&rel=0&fs=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="w-full h-auto aspect-video"
          style={{
            border: "none",
            backgroundColor: "#000",
          }}
        />
        
        <div className="bg-black text-white px-4 py-3 border-t-0 rounded-b-lg">
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
