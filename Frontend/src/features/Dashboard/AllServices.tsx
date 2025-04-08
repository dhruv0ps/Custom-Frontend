import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import gif1 from "@/assets/Homepage/Hand-Keys.gif";
import gif2 from "@/assets/Homepage/Big-Win.gif";
import gif3 from "@/assets/Homepage/Best-Price.gif";
import gif4 from "@/assets/Homepage/Piggy-Bank.gif";
import gif5 from "@/assets/Homepage/Refuel.gif";

const AutomotiveSavings = () => {
  const services = [
    {
      title: "Seamless & Free Car Trading Service",
      description: "Effortlessly buy and sell cars through our nationwide dealership network at no cost.",
      image: gif1,
    },
    {
      title: "Exciting Trade Promotion",
      description: "Win cash prizes with every draw, including our Bucks Bonanza, Fuel Rewards, Glow Goals, and more!",
      image: gif2,
    },
    {
      title: "Mates Rates Discounts",
      description: "We've secured great deals on all things automotive for our loyal members.",
      image: gif3,
    },
    {
      title: "Daily Automotive Savings",
      description: "Australians are cutting costs every day on their auto needs with our trusted partners. Don't miss out!",
      image: gif4,
    },
    {
      title: "Exclusive Fuel Offers",
      description: "Members enjoy exclusive fuel discounts, ensuring savings throughout the year.",
      image: gif5,
      badge: "Coming Soon...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:py-12 md:mt-2 md:max-w-[80%]">
      <div className="text-center mb-6 md:mb-16">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold">Accelerate Your Savings With Us</h2>
        <p className="text-primary text-sm md:text-xl mt-1 md:mt-2">Join Australia's #1 Automotive Ecosystem Today!</p>
      </div>
      
      {/* Mobile layout (vertical) */}
      <div className="md:hidden flex flex-col space-y-6 px-1 gap-x-6">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-start gap-3"
    >
      <Card className="w-24 h-24 flex-shrink-0 flex items-center justify-center p-3 rounded-xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <img 
          src={service.image} 
          alt={service.title} 
          loading="lazy" 
          decoding="async"
          className="w-[72px] h-[72px] object-contain"
        />
      </Card>

      <div className="flex flex-col justify-start text-left max-w-[70%]">
        <h5 className="font-semibold text-sm text-gray-900 mb-1 leading-tight tracking-normal">
          {service.title}
        </h5>
        <p className="text-xs text-gray-600 leading-relaxed">
          {service.description}
        </p>
        {service.badge && (
          <p className="text-primary mt-1 text-xs font-medium">{service.badge}</p>
        )}
      </div>
    </motion.div>
  ))}
</div>

      
      
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <Card className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
              <img 
                src={service.image} 
                alt={service.title} 
                loading="lazy" 
                decoding="async"
                className="w-full h-full object-contain"
              />
            </Card>
            
            <h5 className="font-semibold text-[14px] sm:text-[15px] text-gray-900 text-center mt-4 mb-2 leading-snug tracking-tight">
              {service.title}
            </h5>
            
            <p className="text-sm text-gray-600 text-center leading-relaxed max-w-[220px]">
              {service.description}
            </p>
            
            {service.badge && (
              <p className="text-primary mt-2 text-sm font-medium">{service.badge}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutomotiveSavings;