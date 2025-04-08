import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

interface PrizeCarouselItemProps {
  draw: {
    _id: string;
    bucketName: string;
    image: string;
    scheduledDate: string;
    prizeDescription: string;
    drawID: string;
  };
  onViewResults: () => void;
  onUploadBill: () => void;
}

export function PrizeCarouselItem({ draw }: PrizeCarouselItemProps) {
  const navigate = useNavigate();

  function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const formattedDate = (date: string | Date) => {
    const parsedDate = new Date(date);
    const day = format(parsedDate, "d");
    const dayWithSuffix = `${day}${getOrdinalSuffix(Number(day))}`;
    return `${format(parsedDate, "EEEE")}, ${dayWithSuffix} ${format(
      parsedDate,
      "MMMM yyyy"
    )}`;
  };

  return (
    <CarouselItem key={draw._id} className="pl-4 pr-4">
      <Card className="relative overflow-hidden shadow-lg rounded-3xl">
        {/* Header */}
        <div className="bg-gray-400 text-white p-3">
          <h2 className="font-bold text-xl">{draw.bucketName.toUpperCase()}</h2>
        </div>

        {/* Image - Click to Navigate */}
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/trade-promotion")}
        >
          <div
            className="md:h-96 h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${draw.image})`,
            }}
          ></div>

          <div className="absolute bottom-[25px] left-0 right-0 p-2 bg-white/90 rounded-r-3xl md:w-[50%] w-[80%]">
            <h3 className="text-3xl md:text-3xl font-bold text-primary">
              {draw.prizeDescription !== "Share to Win!"
                ? `WIN ${draw.prizeDescription}`
                : draw.prizeDescription}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 bg-gray-400">
          <p className="font-medium text-white text-sm text-center">
            DRAW #{draw.drawID} {formattedDate(draw.scheduledDate)}
          </p>
        </div>
      </Card>
    </CarouselItem>
  );
}
