import checkbox from "@/assets/SellCar/Check-Box.png"
import rightimage from "@/assets/Overhauled/Opportunity.webp"
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    const features = [
        {
          title: "Seize The Moment",
          desc: "This is a rare chance to make your dreams a reality – don’t miss it!",
        },
        {
          title: "Transform Your Ride",
          desc: "Overhauled offers the opportunity to see your car undergo a jaw-dropping transformation",
        },
        {
          title: "Showcase Your Story",
          desc: "Share your unique automotive journey and let your car become the star of Overhauled",
        },
        {
          title: "Membership: Your Ticket To Win",
          desc: "Secure your entry by purchasing a membership, it’s your gateway to the chance of a lifetime",
        },
      ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-full sm:max-w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Features */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-center md:text-left text-nowrap">
          Once In A Lifetime Opportunity
          </h2>
          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img
                  src={checkbox}
                  alt="checkmark"
                  className="sm:w-[50px] sm:h-[50px] w-[56px] h-[56px] object-contain shrink-0"
                />
                <div>
                  <h3 className="font-semibold sm:text-lg mb-1 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={rightimage}
            alt="Once in a Lifetime Opportunity"
    title="Lifetime"
    loading="lazy"
    decoding="async"
    className="w-full h-auto object-cover"
    srcSet="
      https://wheelz.au/wp-content/uploads/2024/07/Liftime-480x341.webp 480w,
      https://wheelz.au/wp-content/uploads/2024/07/Liftime-980x696.webp 980w,
      https://wheelz.au/wp-content/uploads/2024/07/Liftime.webp 1140w
    "
    sizes="(max-width: 480px) 100vw, (max-width: 980px) 100vw, 1140px"
  />
        </div>
      </div>

      {/* Bottom Buttons */}
      {/* CTA Buttons */}
           <div className="mt-12 w-full">
             <div className="flex justify-center gap-4 flex-wrap px-4">
               <Link
                 to="/"
                 className="bg-gray-300 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all min-w-[140px] text-center"
               >
                 Home
               </Link>
               <Link
                 to="/sell-your-car/form"
                 className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-md transition-all min-w-[140px] text-center"
               >
               Acess Form
               </Link>
             </div>
           </div>
    </section>
  );
}
