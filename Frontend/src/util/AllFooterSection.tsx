import React from "react";
import { Mail,  Phone, Building2 } from "lucide-react";
import { FaYoutube, FaLocationDot } from "react-icons/fa6";
import facebook from "@/assets/Homepage/Facebook-Icon.png";
import instagram from "@/assets/Homepage/Instagram-Icon.png";
import xIcon from "@/assets/Homepage/Twitter-Icon.png";
import tiktok from "@/assets/Homepage/Tiktok-Icon.png";
import logo from "@/assets/logo.png";

interface FooterContentProps {
  content: string[];
  mode?: "full" | "compact";
}

const AllFooterSection: React.FC<FooterContentProps> = ({ content, mode = "full" }) => {
  const contact = {
    phone: "1300 098 765",
    email: "hello@wheelz.au",
    locations: "Melbourne | Sydney | Brisbane | Perth | Adelaide | Hobart | Darwin | Canberra",
    hq: "HQ: 470 St Kilda Road, Melbourne VIC 3004",
  };

  const services = [
    "Sell Your Car", "Buy A New Car", "Demo & Pre-Owned", "Mates Rates",
    "Trade Promotion", "Prize Draw Winners", "Membership"
  ];

  const legal = [
    { label: "Terms and Conditions", path: "/terms-and-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy-2" },
    { label: "General FAQs", path: "/general-faqs" },
    { label: "Trade Promotion Draws", path: "/periodic-trade-promotion-draws" },
    { label: "Competition Terms", path: "/competition-terms" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" }
  ];

  return (
    <>
    <footer className="bg-white text-[#666] px-6 md:px-12 pb-20 space-y-12">
      <div className="max-w-[97%] sm:max-w-[85%] mx-auto space-y-6 text-sm leading-relaxed">

        {mode !== "compact" && (
          <div className="flex justify-start">
            <img
              src={logo}
              alt="Wheelz Logo"
              loading="lazy"
              className="h-12"
            />
          </div>
        )}

        {content.map((para, i) => (
          <p key={i} className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </div>

      <div className="max-w-full sm:max-w-[85%] mx-auto md:px-2 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20 items-start">
        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>{contact.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>{contact.email}</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaLocationDot className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>{contact.locations}</span>
            </li>
            <li className="flex items-start space-x-3">
              <Building2 className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span className="whitespace-nowrap sm:whitespace-normal">{contact.hq}</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((item, i) => (
              <li className="flex items-center" key={i}>
                <span className="text-primary mr-2">•</span>
                <a href="#" className="hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">Legal</h4>
          <ul className="space-y-2">
            {legal.map(({ label, path }, i) => (
              <li className="flex items-center" key={i}>
                <span className="text-primary mr-2">•</span>
                <a href={path} className="hover:text-primary transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="w-full mt-12">
          <div className="flex justify-center sm:justify-start gap-6 min-w-[280px]">
            <a href="https://www.facebook.com/profile.php?id=61561172871981" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="h-9 w-9 object-contain" />
            </a>
            <a href="https://www.instagram.com/wheelzau" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="h-9 w-9 object-contain" />
            </a>
            <a href="https://x.com/Wheelzau" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className="h-9 w-9 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@wheelzau" target="_blank" rel="noopener noreferrer">
              <img src={tiktok} alt="TikTok" className="h-9 w-9 object-contain" />
            </a>
            <a href="https://youtube.com/@wheelzau?si=rAKYdOxVAyP-GMLB" target="_blank" rel="noopener noreferrer" className="text-red-600">
              <FaYoutube className="h-9 w-9" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      
    </footer>
    <div className="bg-primary text-black text-center text-sm font-semibold py-4">
    © Wheelz Pty Ltd 2025, All Rights Reserved
  </div>
  </>
  );
};

export default AllFooterSection;
