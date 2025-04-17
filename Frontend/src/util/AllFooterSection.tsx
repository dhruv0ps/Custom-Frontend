import React from "react";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
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
    hq: "HQ: 470 St Kilda Road, Melbourne VIC 3004"
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
    { label: "Competition Terms", path: "/" }, // if exists
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" }
  ];

  const copyright = "© Wheelz Pty Ltd 2025, All Rights Reserved";

  return (
    <footer className="bg-white text-gray-700 mt-6">
      <div className="max-w-[80%] mx-auto">
        {mode !== "compact" && (
          <img
            src={logo}
            alt="Wheelz Australia Black and Blue Color"
            title="Wheelz Australia Black and Blue Color"
            loading="lazy"
            decoding="async"
            className="w-[237px] h-[52.1px] object-contain mb-6"
          />
        )}

        <div className="mb-8 space-y-4 mt-2">
          {content.map((para, i) => (
            <p key={i} className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: para }}></p>
          ))}
        </div>

        <div className="grid grid-cols-1  md:grid-cols-4 gap-8 px-8 mb-4">
          <div>
            <h4 className="text-lg font-semibold text-[#00b2ff] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#00b2ff]  mt-1 flex-shrink-0" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>{contact.locations}</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>{contact.hq}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#00b2ff] mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item, i) => (
                <li className="flex items-center" key={i}>
                  <span className="text-[#00b2ff] mr-2">•</span>
                  <a href="#" className="hover:text-[#00b2ff] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#00b2ff] mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item, i) => (
                <li className="flex items-center" key={i}>
                  <span className="text-[#00b2ff] mr-2">•</span>
                  <a href={item.path} className="hover:text-[#00b2ff] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 mt-12">
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="#" aria-label="X">
              <img src={xIcon} alt="X" className="h-8 w-8" />
            </a>
            <a href="#" aria-label="TikTok">
              <img src={tiktok} alt="TikTok" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-primary text-black text-center text-sm font-semibold py-4">
        {copyright}
      </div>
    </footer>
  );
};

export default AllFooterSection;
