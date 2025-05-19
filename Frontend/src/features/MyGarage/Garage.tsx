import VideoBanner from '@/util/VideoBanner'
import { useEffect, useRef } from 'react'
import React from 'react'
import { BASE_URL } from '@/config'
import video from "@/assets/Garage/iStock-495350105.mp4"
import icon1 from "@/assets/Garage/15896878.png"
import icon2 from "@/assets/Garage/5602552.png"
import icon3 from "@/assets/Garage/7701571.png"
import HoverArrowButton from '@/util/HoverButton'
import SkeletonLoader from "@/components/common/SkeletonLoader";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge } from "lucide-react";
import { useNavigate } from 'react-router-dom'
import { cn, timeAgo } from "@/lib/utils";

import WhyChooseGarage from './WhyChooseGarage'
import AllFooterSection from '@/util/AllFooterSection'

const Garage: React.FC = () => {
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const navigate = useNavigate();
    const loading = false;
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observe all icon containers
        iconRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            iconRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const features = [
        {
            icon: icon1,
            title: "Effortless Management",
            desc: "Easily manage your car listings, enquiries, and service requests in one place. Listings are automatically updated for accurate records.",
        },
        {
            icon: icon2,
            title: "Real-Time Enquiry Tracking",
            desc: "Receive instant notifications for new vehicle enquiries. Monitor responses and maintain a clear view of customer interactions.",
        },
        {
            icon: icon3,
            title: "Seamless Service Control",
            desc: "Book, manage, and track automotive services with ease. Access service history, upcoming bookings, and exclusive offers.",
        },

    ];
    const mockSellLeads = [
  {
    _id: "1",
    exteriorImages: [
      { url: "https://s3.ap-southeast-2.amazonaws.com/wheelz.au/sell/exteriorPhotos/6dbee3ed-7884-443f-ab24-968875f0a2d3" },
      { url: "https://s3.ap-southeast-2.amazonaws.com/wheelz.au/sell/exteriorPhotos/16755b7f-ffbb-4de4-81ff-b068cc10c1bc" }
    ],
    carDetails: {
      make: "BMW",
      model: "8 Series",
      year: 2023,
      bodyType: "Coupe",
      fuelType: "Petrol",
      driveType: "RWD",
      transmission: "Automatic"
    },
    condition: { odometer: 8500 },
    createdAt: new Date().toISOString()
  },
  {
    _id: "2",
    exteriorImages: [
      { url: "https://s3.ap-southeast-2.amazonaws.com/wheelz.au/sell/exteriorPhotos/16755b7f-ffbb-4de4-81ff-b068cc10c1bc" }
    ],
    carDetails: {
      make: "BMW",
      model: "X4",
      year: 2024,
      bodyType: "SUV",
      fuelType: "Petrol",
      driveType: "AWD",
      transmission: "Automatic"
    },
    condition: { odometer: 12000 },
    createdAt: new Date().toISOString()
  }
];


 const mockBuyLeads = [
  {
    _id: "1",
    make: "BMW",
    model: "IX1",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(), // 12 days ago
    variant: [
      {
        image: "https://s3.ap-southeast-2.amazonaws.com/wheelz.au/media/car/BMW/BMW+IX1+2024.png", // first IX1 image
        bodyType: "Wagon",
        fuelType: "Electric",
      },
    ],
  },
  {
    _id: "2",
    make: "BMW",
    model: "IX1",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(),
    variant: [
      {
        image: "https://s3.ap-southeast-2.amazonaws.com/wheelz.au/media/car/BMW/BMW+IX1+2024.png", // second IX1 image
        bodyType: "Wagon",
        fuelType: "Electric",
      },
    ],
  },
];


    const mockServices = [
        {
            _id: "3",
            type: "Mates Rates",
            service_type: "Tyre Replacement",
            quoteDetails: {
                totalSavings: 207.00,
            },
        },
         {
            _id: "4",
            type: "Mates Rates",
            service_type: "Tyre Replacement",
            quoteDetails: {
                totalSavings: 207.00,
            },
        },
    ];
    return (
        <>
            <VideoBanner
                videoSrc={video}
                heading="Seamless Automotive Management. Stay in Control!"
                primaryButtonLabel="Home"
                primaryButtonLink="/"
                secondaryButtonLabel="Enter"
                secondaryButtonLink={`${BASE_URL}/overhauled
`}
            />

            <div className="bg-[#b7eaff] py-12 ">
                <div className="max-w-[95%] sm:max-w-[80%] mx-auto text-center px-4">
                    {/* Section Headers */}

                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black">
                        How We Adds Value To Your Garage Experience:
                        <br className="block sm:hidden" />
                        <span className="inline sm:inline-block"></span>
                    </h2>
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center rounded-xl overflow-hidden
                
            
                 sm:pt-5 sm:pr-3 sm:pb-11 sm:pl-3
               max-w-[550px] mx-auto relative w-full break-words`}
                            >
                                <div
                                    ref={el => iconRefs.current[index] = el}
                                    className="bg-white p-2  rounded-xl shadow-md mb-4 icon-animation flex items-center justify-center"
                                >

                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-32 h-32 object-contain"
                                    />

                                </div>
                                <h4 className="font-bold  text-sm text-nowrap mb-2 text-black">{item.title}</h4>
                                <p className={`text-sm  leading-relaxed  text-gray-600
              `}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}



                </div>


                <div className="w-full py-4 sm:py-8">
                    <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between  sm:px-0">

                        {/* Text Block */}
                        <div
                            className="bg-white rounded-r-full py-1 sm:py-2 px-4 sm:px-6 flex-shrink"
                            style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
                        >
                            <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap">
                                Complete Control
                                <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase">Simplified Access</span>
                            </h2>
                        </div>
                        <div className="flex justify-end flex-shrink-0 ml-2 mr-4 sm:mr-0">
                            <HoverArrowButton
                                label="Enter"
                                onClick={() => window.location.href = `${BASE_URL}/finance`}
                                className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
                                textClass="text-white"
                                hoverTextClass="text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary'>
            <div className='sm:max-w-[80%] max-w-[95%] mx-auto'>
                <h1 className="text-primary font-bold text-2xl mb-2">My Garage</h1>
                <Tabs defaultValue="listing" className="w-full ">
                    <div className="flex flex-col ">
                        <div className="relative md:p-2">
                            <div
                                className="absolute top-0 left-[-50%] w-[250%] h-full -z-10"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, white 50%, #00B2FF 50%)",
                                }}
                            ></div>

                            <div
                                className="hidden md:block absolute inset-0 -z-10"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, white 50%, #00B2FF 50%)",
                                }}
                            ></div>
                            <TabsList
                                className="grid w-full grid-cols-3 text-black bg-white rounded-lg"
                                style={{
                                    boxShadow: "inset 0 1px 5px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                <TabsTrigger
                                    value="listing"
                                    className="data-[state=active]:text-white data-[state=active]:bg-black "
                                >
                                    Listings
                                </TabsTrigger>
                                <TabsTrigger
                                    value="enquiry"
                                    className="data-[state=active]:text-white data-[state=active]:bg-black"
                                >
                                    Enquiries
                                </TabsTrigger>
                                <TabsTrigger
                                    value="services"
                                    className="data-[state=active]:text-white data-[state=active]:bg-black"
                                >
                                    Services
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="relative p-2">
                            <div className="absolute top-0 left-[-50%] w-[250%] h-full bg-primary -z-10 md:hidden"></div>

                            <div className="hidden md:block absolute left-1/2 top-0 w-[250%] h-full -translate-x-1/2 bg-primary -z-10"></div>

                            <TabsContent value="listing">
                                <div className="p-2">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1 mb-4">
                                            <h2 className="text-lg text-white font-semibold tracking-tight">
                                                Your Listings
                                            </h2>
                                            <p className="text-sm text-white">
                                                Manage and review all your used car listings.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "",
                                            mockSellLeads?.length > 0
                                                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4"
                                                : ""
                                        )}
                                    >
                                        {!loading ? (
                                            mockSellLeads?.length > 0 ? (
                                                mockSellLeads?.map((listing: any) => (
                                                    <Card
                                                        className="w-full mb-4 cursor-pointer bg-white"
                                                        key={listing._id}

                                                    >
                                                        <CardContent className="p-0 flex sm:h-[240px] h-[140px] justify-center items-center overflow-hidden">
                                                            <img
                                                                className="rounded-t-md w-full h-full object-cover"
                                                                src={listing.exteriorImages[0]?.url || ""}
                                                                alt="car"
                                                            />
                                                        </CardContent>
                                                        <CardFooter className="p-2 mt-[2.5%]">
                                                            <div className="flex flex-col items-start text-left text-sm transition-all w-full">
                                                                <div className="flex w-full flex-col mb-4">
                                                                    <div className="flex items-center justify-between">
                                                                        <h2 className="font-semibold text-lg">
                                                                            {listing.carDetails.make}{" "}
                                                                            {listing.carDetails.model}{" "}
                                                                            {listing.carDetails.year}
                                                                        </h2>
                                                                        <h2 className="font-semibold text-lg flex gap-1">
                                                                            <Gauge className="text-primary" />{" "}
                                                                            {listing.condition.odometer} km
                                                                        </h2>
                                                                    </div>
                                                                    <p className="text-xs">
                                                                        {timeAgo(listing.createdAt)}
                                                                    </p>
                                                                </div>
                                                                <div className="text-sm text-muted-foreground flex gap-1 flex-wrap">
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="bg-primary rounded-sm text-white"
                                                                    >
                                                                        {listing.carDetails.bodyType}
                                                                    </Badge>
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="bg-primary rounded-sm text-white"
                                                                    >
                                                                        {listing.carDetails.fuelType}
                                                                    </Badge>
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="bg-primary rounded-sm text-white"
                                                                    >
                                                                        {listing.carDetails.driveType}
                                                                    </Badge>
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="bg-primary rounded-sm text-white"
                                                                    >
                                                                        {listing.carDetails.transmission}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                        </CardFooter>
                                                    </Card>
                                                ))
                                            ) : (
                                                <div className="flex w-full items-center justify-center rounded-lg border border-dashed shadow-sm px-4 py-8">
                                                    <div className="flex flex-col items-center gap-1 text-center">
                                                        <h3 className="text-2xl font-bold tracking-tight">
                                                            Ready to Sell Your Car?
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mb-4 text-white">
                                                            List your car today and connect with potential
                                                            buyers in minutes.
                                                        </p>
                                                        <Button
                                                            className="bg-white text-black hover:text-black hover:bg-white transform hover:scale-105 transition-all duration-300"
                                                            onClick={() => navigate("/sell")}
                                                        >
                                                            Start Selling
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            <SkeletonLoader type="card" length={12} />
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="enquiry">
                                <div className="p-2">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1 mb-4">
                                            <h2 className="text-lg text-white font-semibold tracking-tight">
                                                Your Enquiries
                                            </h2>
                                            <p className="text-sm text-white">
                                                Track and manage your car enquiries.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "",
                                            mockBuyLeads?.length > 0
                                                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4"
                                                : ""
                                        )}
                                    >
                                            {!loading ? (
                                                mockBuyLeads?.length > 0 ? (
                                                    mockBuyLeads?.map((enquiry: any) => (
                                                        <Card
                                                            className="w-full mb-4 cursor-pointer bg-white"
                                                            key={enquiry._id}

                                                        >
                                                            <CardContent className="p-0 flex sm:h-[240px] h-[140px] justify-center items-center overflow-hidden">
                                                                {enquiry?.variant?.length > 0 ? (
                                                                    <div className="relative w-full">
                                                                        <img
                                                                            className="rounded-t-md h-full w-full object-cover"
                                                                            src={
                                                                                enquiry?.variant[0].image ||
                                                                                "/placeholder.svg"
                                                                            }
                                                                            alt="car"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <img
                                                                        className="rounded-t-md h-40 w-full object-cover"
                                                                        src={"/placeholder.svg"}
                                                                        alt="car"
                                                                    />
                                                                )}
                                                            </CardContent>
                                                            <CardFooter className="py-2 px-3">
                                                                <div className="flex flex-col items-start text-left text-sm transition-all w-full">
                                                                    <div className="mb-2">
                                                                        <h2 className="font-semibold text-lg">
                                                                            {enquiry?.make} {enquiry?.model}
                                                                        </h2>
                                                                        <p className="text-xs">
                                                                            {timeAgo(enquiry?.createdAt || new Date())}
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-sm text-muted-foreground flex gap-1 flex-wrap">
                                                                        {enquiry?.variant?.length > 0 && (
                                                                            <div className="relative w-full">
                                                                                <Badge
                                                                                    variant="outline"
                                                                                    className="bg-primary rounded-sm text-white"
                                                                                >
                                                                                    {enquiry?.variant[0].bodyType}
                                                                                </Badge>
                                                                                <Badge
                                                                                    variant="outline"
                                                                                    className="bg-primary rounded-sm text-white"
                                                                                >
                                                                                    {enquiry?.variant[0].fuelType}
                                                                                </Badge>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </CardFooter>
                                                        </Card>
                                                    ))
                                                ) : (
                                                    <div className="flex w-full items-center justify-center rounded-lg border border-dashed shadow-sm px-4 py-8">
                                                        <div className="flex flex-col items-center gap-1 text-center">
                                                            <h3 className="text-2xl font-bold tracking-tight">
                                                                Ready to Buy A New Car?
                                                            </h3>
                                                            <p className="text-sm text-white mb-4">
                                                                Discover your perfect vehicle today and drive away
                                                                with the best deal.
                                                            </p>
                                                            <Button
                                                                className="bg-white text-black hover:text-black hover:bg-white transform hover:scale-105 transition-all duration-300"
                                                                onClick={() => navigate("/buy")}
                                                            >
                                                                Find Your Wheelz
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )
                                            ) : (
                                                <SkeletonLoader type="card" length={12} />
                                            )}
                                        </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="services">
                                <div className="p-2">
                                    <div className="space-y-1 mb-4">
                                        <h2 className="text-lg text-white font-semibold tracking-tight">
                                            Your Services
                                        </h2>
                                        <p className="text-sm text-white">
                                            Track and manage all your requests.
                                        </p>
                                    </div>
                                    <div
                                        className={cn(
                                            "",
                                            mockServices?.length > 0
                                                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4"
                                                : ""
                                        )}
                                    >
                                        {!loading ? (
                                            mockServices?.length > 0 ? (
                                                mockServices?.map((service) => (
                                                    <Card
                                                        key={service._id}
                                                        className="w-full mb-4 cursor-pointer bg-white"
                                                        onClick={() =>
                                                            navigate(
                                                                `/services/${service.type === "Finance"
                                                                    ? "finance"
                                                                    : service.type === "Mates Rates"
                                                                        ? "mate-rates"
                                                                        : service.type === "New Car"
                                                                            ? "buy-lead"
                                                                            : service.type === "Insurance"
                                                                                ? "insurance"
                                                                                : service.type === "Sell"
                                                                                    ? "sell"
                                                                                    : "sell"
                                                                }/${service._id}`
                                                            )
                                                        }
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex justify-between items-center">
                                                                <div>
                                                                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-primary">
                                                                        {service.type === "Finance"
                                                                            ? "Finance"
                                                                            : service.type === "Insurance"
                                                                                ? "Insurance"
                                                                                : service.type === "Mates Rates"
                                                                                    ? "Mates Rates"
                                                                                    : service.type === "Sell"
                                                                                        ? "Sold Car"
                                                                                        : "New Car"}
                                                                    </h3>
                                                                    <p className="text-sm text-gray-500">
                                                                        {service.type === "Mates Rates" &&
                                                                            service.service_type}
                                                                    </p>
                                                                </div>
                                                                <div className="bg-primary text-white p-3 rounded">
                                                                    <p className="text-sm sm:text-base">
                                                                        You Saved
                                                                    </p>
                                                                    <p className="font-bold text-lg sm:text-xl md:text-2xl">
                                                                        {service.type === "Mates Rates" &&
                                                                            service?.quoteDetails?.totalSavings.toFixed(
                                                                                2
                                                                            )}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))
                                            ) : (
                                                <div className="flex w-full items-center justify-center rounded-lg border border-dashed shadow-sm px-4 py-8">
                                                    <div className="flex flex-col items-center gap-1 text-center">
                                                        <h3 className="text-2xl font-bold tracking-tight">
                                                            Ready to Save On A Service?
                                                        </h3>
                                                        <p className="text-sm text-white mb-4">
                                                            Discover great deals and get the best value for your
                                                            needs today!
                                                        </p>
                                                        <Button
                                                            className="bg-white text-black hover:text-black hover:bg-white transform hover:scale-105 transition-all duration-300"
                                                            onClick={() => navigate("/mates-rates")}
                                                        >
                                                            Request A Service
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            <SkeletonLoader type="card" length={4} />
                                        )}
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>
            </div>
<WhyChooseGarage/>
<AllFooterSection
  content={[
    `Important: In our collaboration with dealerships, service providers, and the automotive industry, Wheelz.au reserves the right to modify terms and conditions—including features, policies, exclusive lead opportunities, and associated costs related to our partnerships. Any changes will be communicated promptly, ensuring transparency and a positive experience for both our valued partners and customers.`
  ]}
/>
           
        </>
    )
}

export default Garage
