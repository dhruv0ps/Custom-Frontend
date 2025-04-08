import React from "react";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import facebook from "@/assets/Homepage/Facebook-Icon.png";
import instagram from "@/assets/Homepage/Instagram-Icon.png";
import xIcon from "@/assets/Homepage/Twitter-Icon.png";
import tiktok from "@/assets/Homepage/Tiktok-Icon.png";
import logo from "@/assets/logo.png";

const SellFooterSection: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 ">
      
      <div className="max-w-[80%] mx-auto ">
        <img
          src={logo}
          alt="Wheelz Australia Black and Blue Color"
          title="Wheelz Australia Black and Blue Color"
          loading="lazy"
          decoding="async"
          className="w-[237px] h-[52.1px] object-contain mb-6"
        />

        <div className="mb-8 ">
          <p className="text-sm mb-4">
            Important: The platform retains the right to adjust terms and conditions, encompassing features and policies in the selling process. While our technology connects customers with optimal dealerships to enhance sales profits, it's important to note that the decision to sell rests solely with the customer. Final sale amounts are mutually agreed upon with the buyer, and we play no role in the seller's decision making. Any modifications will be promptly communicated, ensuring transparency and a smooth experience for our valued sellers.
          </p>

         

          <div className="text-sm mt-2">
            <strong className="block mb-2">Disclaimer:</strong> The video content embedded on this page is sourced from 9 News Australia and is publicly available on YouTube. The views, opinions, and statements expressed in the video are those of the original news organisation and do not necessarily reflect the views or opinions of this website or its owners. The inclusion of this video is solely for informational purposes and to provide relevant news coverage to our audience. We advise viewers to visit the original source for full context and further information. Any trademarks, service marks, or trade names mentioned in the video are the property of their respective owners.
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 mb-4">
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-[#00b2ff] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>1300 098 765</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>hello@wheelz.au</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>Melbourne | Sydney | Brisbane | Perth | Adelaide | Hobart | Darwin | Canberra</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="h-4 w-4 text-[#00b2ff] mt-1 flex-shrink-0" />
                <span>HQ: 470 St Kilda Road, Melbourne VIC 3004</span>
              </li>
            </ul>
            
            {/* Social Icons */}
            
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-[#00b2ff] mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Sell Your Car",
                "Buy A New Car",
                "Demo & Pre-Owned",
                "Mates Rates",
                "Trade Promotion",
                "Prize Draw Winners",
                "Membership"
              ].map((item, i) => (
                <li className="flex items-center" key={i}>
                  <span className="text-[#00b2ff] mr-2">•</span>
                  <a href="#" className="hover:text-[#00b2ff] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-semibold text-[#00b2ff] mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                "Terms and Conditions",
                "Privacy Policy",
                "General FAQs",
                "Trade Promotion Draws",
                "Competition Terms",
                "About Us",
                "Contact Us",
              ].map((item, i) => (
                <li className="flex items-center" key={i}>
                  <span className="text-[#00b2ff] mr-2">•</span>
                  <a href="#" className="hover:text-[#00b2ff] transition-colors">{item}</a>
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

      {/* Copyright Bar */}
      <div className="bg-primary text-black text-center text-sm font-semibold py-4">
        © Wheelz Pty Ltd 2025, All Rights Reserved
      </div>
    </footer>
  );
};

export default SellFooterSection;