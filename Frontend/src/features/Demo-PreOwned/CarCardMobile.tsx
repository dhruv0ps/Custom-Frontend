import gif2 from "@/assets/Wheelz-Australia-Coming-Soon-icon.webp";

export default function CarCardMobile({ car }: { car: any }) {
    if (!car) {
        return (
            <div className="bg-white rounded-2xl p-2 flex flex-col items-center border-[12px] border-primary shadow-md">
                <h2>
                    <img src={gif2} className="w-full max-w-[320px] h-auto object-contain mx-auto" loading="lazy" />
                </h2>
                <button className="bg-primary text-white px-3 py-1 mb-2 mx-2 rounded-full shadow-md hover:shadow-lg transition ml-auto">
                    Enquire Now
                </button>
            </div>
        );
    }

    return (
        <div className="w-full bg-white rounded-2xl p-4 border-[12px] border-primary shadow-md">
         
            <div className="relative mb-4">
                <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-auto object-cover rounded-md"
                />
            </div>

            
            <div className="flex flex-row justify-between items-center mb-4">
                
                <span className="text-[#1cbeff] text-lg font-normal">{car.price}</span>

                
                <div className="flex justify-center">
                    <img
                        src={car.brandLogo || "/placeholder.svg"}
                        alt={car.brand}
                        className="w-10 h-10 object-contain mb-1" 
                    />
                </div>
            </div>

      
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mb-4">
                {car.specs.map((spec: string, idx: number) => (
                    <li key={idx}>{spec}</li>
                ))}
            </ul>

      
            <div className="text-end">
                <button className="bg-[#1cbeff] text-white px-6 py-2 mt-2 rounded-full shadow-md hover:shadow-lg transition">
                    Enquire Now
                </button>
            </div>
        </div>
    );
}