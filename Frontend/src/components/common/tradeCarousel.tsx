;

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { PrizeCarouselItem } from "./tradePromo";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface Draw {
  _id: string;
  bucketName: string;
  image: string;
  scheduledDate: string;
  prizeDescription: string;
  drawID: string;
}

interface TradePromotionCarouselProps {
  draws: Draw[];
  onViewResults: () => void;
  onUploadBill: () => void;
}

export function TradePromotionCarousel({
  draws,
  onViewResults,
  onUploadBill,
}: TradePromotionCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  const navigate = useNavigate();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
  }, [api]);

  if (draws.length === 0) return null;

  const isBillBustersActive =
    draws[activeIndex]?.bucketName.toLowerCase() === "bill busters";

  return (
    <div className="w-full mb-4">
      <h1 className="text-gray-500 font-bold text-2xl mb-2">
        Trade Promotion Draws
      </h1>
      <div className="relative ">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4 -mr-4">
            {draws.map((draw) => (
              <PrizeCarouselItem
                key={draw._id}
                draw={draw}
                onViewResults={onViewResults}
                onUploadBill={onUploadBill}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-[50%] transform hover:scale-105 transition-all duration-300" />
          <CarouselNext className="right-2 top-[50%] transform hover:scale-105 transition-all duration-300" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-4 p-1 rounded-full">
          {draws.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-gray-500" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button
            onClick={() => navigate("/trade-promotion")}
            size="sm"
            className="text-white text-lg font-bold bg-gray-400 hover:text-white hover:bg-primary w-48 transform hover:scale-105 transition-all duration-300"
          >
            View Past Results

          </Button>
          {isBillBustersActive && (
            <Button
              onClick={onUploadBill}
              size="sm"
              className="text-white bg-black/90 text-lg font-bold w-52 hover:bg-primary transform hover:scale-105 transition-all duration-300"
            >
              Upload Your Bill
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
