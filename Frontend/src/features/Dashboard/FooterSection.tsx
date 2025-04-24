import React from "react";
import facebook from "@/assets/Homepage/Facebook-Icon.png";
import instagram from "@/assets/Homepage/Instagram-Icon.png";
import xIcon from "@/assets/Homepage/Twitter-Icon.png";
import tiktok from "@/assets/Homepage/Tiktok-Icon.png";
import logo from "@/assets/logo.png";
import { BsBuildingFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const FooterSection: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
    <footer className="bg-white text-[#666] px-6 md:px-12 py-16 space-y-12">
      
      <div className=" max-w-[97%] sm:max-w-[85%] mx-auto space-y-6 text-sm leading-relaxed">
      <div className="flex justify-start">
    <img
      src={logo}
      alt="Wheelz Australia Black and Blue Color"
      title="Wheelz Australia Black and Blue Color"
      loading="lazy"
      decoding="async"
      className="h-12 "
    />
  </div>


        <p>
        As pioneers in the automotive industry, we are committed to transforming the space with innovative solutions and enhanced services. Your support enables us to continue pushing boundaries, providing greater value to our community, and ensuring even more significant savings for you through Australia’s first and leading automotive ecosystem.

        </p>

        <p>
          <strong>Disclaimer:</strong> The video content embedded on this page is sourced from 7 News and is publicly available on YouTube. The views, opinions, and statements expressed in the video are those of the original news organisation and do not necessarily reflect the views or opinions of this website or its owners. This video is provided for informational purposes only, offering relevant news coverage. Viewers are encouraged to visit the original source for full context and additional details.

        </p>

        <p>
        Car advertisements displayed on this page are publicly available on YouTube and allow approved dealerships to showcase their vehicles to our automotive community. These advertisements do not constitute an endorsement of any vehicle or brand.

        </p>

        <p>
        The Virtual Tours featured on this site are exclusively created for our community. All rights and ownership of these videos are retained by us and are intended solely to provide insights for customer vehicle enquiries. These videos do not represent the views or opinions of this website or its owners.

        </p>

        <p>
        All trademarks, service marks, and trade names mentioned are the property of their respective owners. This website is not responsible for the content or accuracy of external links.
        </p>

        
      </div>

      <div className=" mb-12"></div>

      <div className=" max-w-full sm:max-w-[85%] mx-auto  md:px-2 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20 items-start">
  {/* Contact */}
  <div>
    <h4 className="text-lg font-semibold text-primary mb-4">Contact Us</h4>
    <ul className="space-y-2 ">
  
  <li className="flex items-center space-x-3">
    <IoIosCall className="h-5 w-5 text-primary shrink-0" />
    <span className="whitespace-nowrap">1300 098 765</span>
  </li>

  {/* Email */}
  <li className="flex items-center space-x-3">
    <IoMdMail className="h-5 w-5 text-primary shrink-0" />
    <span className="whitespace-nowrap">hello@wheelz.au</span>
  </li>

  {/* City List */}
  <li className="flex items-start space-x-3">
    <FaLocationDot className="h-5 w-5 text-primary mt-1 shrink-0" />
    <span>
      Melbourne | Sydney | Brisbane | Perth | Adelaide | Hobart | Darwin | Canberra
    </span>
  </li>

  {/* HQ Address */}
  <li className="flex items-start space-x-3">
    <BsBuildingFill className="h-5 w-5 text-primary mt-1 shrink-0" />
    <span className=" whitespace-nowrap sm:whitespace-normal ">HQ: 470 St Kilda Road, Melbourne VIC 3004</span>
  </li>
</ul>

  </div>

  {/* Services */}
  <div>
  <h4 className="text-lg font-semibold text-primary mb-4">Services</h4>
  <ul className="space-y-2">
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/sell-your-car")}
    >
      <span className="text-primary mr-2">•</span>
      Sell Your Car
    </li>
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/buy-your-car")}
    >
      <span className="text-primary mr-2">•</span>
      Buy A New Car
    </li>
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/demo-pre-owned")}
    >
      <span className="text-primary mr-2">•</span>
      Demo & Pre–Owned
    </li>
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/mates-rates-discounts")}
    >
      <span className="text-primary mr-2">•</span>
      Mates Rates
    </li>
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/trade-promotion")}
    >
      <span className="text-primary mr-2">•</span>
      Trade Promotion
    </li>
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/prize-draw-winners")}
    >
      <span className="text-primary mr-2">•</span>
      Prize Draw Winners
    </li>
    <li
      className="flex items-center cursor-pointer  hover:text-primary"
      onClick={() => navigate("/membership")}
    >
      <span className="text-primary mr-2">•</span>
      Membership
    </li>
  </ul>
</div>


  {/* Legal Column */}
  <div className="flex flex-col justify-between h-full">
  <div>
    <h4 className="text-lg font-semibold text-primary mb-4">Legal</h4>
    <ul className="space-y-2">
    {[
    { label: "Terms and Conditions", route: "/terms-and-conditions" },
    { label: "Privacy Policy", route: "/privacy-policy-2" },
    { label: "General FAQs", route: "/general-faqs" },
    { label: "Trade Promotion Draws", route: "/periodic-trade-promotion-draws" },
    { label: "Competition Terms", route: "/competition-terms" },
    { label: "About Us", route: "/about-us" },
    { label: "Contact Us", route: "/contact-us" },
  ].map(({ label, route }, i) => (
        <li className="flex items-center" key={i}>
          <span className="text-primary mr-2">•</span>
          <a href={route} className="hover:text-primary transition-colors">{label}</a>
        </li>
      ))}
    </ul>
  </div>
</div>
<div className="w-full mt-12 ">
  <div className="flex justify-center sm:justify-start gap-6 min-w-[280px]">
  <a
    href="https://www.facebook.com/profile.php?id=61561172871981"
    target="_blank"
    rel="noopener noreferrer"
  >
      <img src={facebook} alt="Facebook" className="h-9 w-9 object-contain" />
    </a>
    <a
    href="https://www.instagram.com/wheelzau"
    target="_blank"
    rel="noopener noreferrer"
  >
      <img src={instagram} alt="Instagram" className="h-9 w-9 object-contain" />
    </a>
    <a
    href="https://x.com/Wheelzau"
    target="_blank"
    rel="noopener noreferrer"
  >
      <img src={xIcon} alt="X" className="h98 w-9 object-contain" />
    </a>
    <a
    href="https://www.tiktok.com/@wheelzau"
    target="_blank"
    rel="noopener noreferrer"
  >
      <img src={tiktok} alt="TikTok" className="h-9 w-9 object-contain" />
    </a>
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600"
    >
      <FaYoutube className="h-9 w-9" />
    </a>
  </div>
</div>


</div>



{/* Footer Bottom */}

    </footer>
    <div className="bg-primary text-black text-center text-sm font-semibold py-4">
  © Wheelz Pty Ltd 2025, All Rights Reserved
</div>
    </>
  );
};

export default FooterSection;
