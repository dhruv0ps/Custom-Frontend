import React from "react";

import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import facebook from "@/assets/Homepage/Facebook-Icon.png";
import instagram from "@/assets/Homepage/Instagram-Icon.png";
import xIcon from "@/assets/Homepage/Twitter-Icon.png";
import tiktok from "@/assets/Homepage/Tiktok-Icon.png";
import logo from "@/assets/logo.png";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-12 py-16 space-y-12">
      {/* Disclaimer / Info Block */}
      <div className="max-w-[80%] mx-auto space-y-6 text-sm leading-relaxed">
      <img
 src={logo}
  alt="Wheelz Australia Black and Blue Color"
  title="Wheelz Australia Black and Blue Color"
  loading="lazy"
  decoding="async"
 className="w-[237px] h-[52.1px] object-contain"
/>


        <p>
          As pioneers within the automotive ecosystem, we are actively reshaping the industry
          landscape. Embracing our role as industry disruptors, we are introducing innovative
          solutions that redefine standards, offering you enhanced benefits and elevated services
          within the automotive realm. Committed to pushing the boundaries of what’s possible, we
          remain dedicated to providing you with the latest advancements. Your continued
          participation in this transformative journey is truly appreciated.
        </p>

        <p>
          <strong>Disclaimer:</strong> The video content embedded on this page is sourced from 7
          News and is publicly available on YouTube. The views, opinions, and statements expressed
          in the video are those of the original news organisation and do not necessarily reflect
          the views or opinions of this website or its owners. The inclusion of this video is for
          informational purposes only, providing relevant news coverage. We encourage viewers to
          visit the original source for full context and further information. Any trademarks,
          service marks, or trade names mentioned in the video are the property of their respective
          owners. This website is not responsible for the content or accuracy of external links.
        </p>

        <p>
          The manufacturer car advertisements embedded on this page are publicly available on
          YouTube. These advertisements provide approved dealerships with the opportunity to
          showcase their vehicles to our automotive community. This does not constitute an
          endorsement of any vehicles or brands. All trademarks, service marks, and trade names
          mentioned in the advertisements are the property of their respective owners. This website
          is not responsible for the content or accuracy of external links.
        </p>

        <p>
          The Virtual Tours featured on this website are created exclusively for our community. All
          rights, titles, and ownership of these videos are retained by us and are intended solely
          for providing insights related to customer vehicle enquiries. These videos do not reflect
          the views or opinions of this website or its owners.
        </p>

        <p>
          The inclusion of these videos is for informational purposes only, providing relevant
          commentary and/or expert advice. Any trademarks, service marks, or trade names mentioned
          in these videos are the property of their respective owners.
        </p>

        <p>
          This website assumes no responsibility for the content or accuracy of the information
          provided in these videos.
        </p>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

<div className="max-w-[80%] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20 items-start">
  {/* Contact */}
  <div>
    <h4 className="text-lg font-semibold text-primary mb-4">Contact Us</h4>
    <ul className="space-y-2">
      <li className="flex items-start gap-2">
        <Phone className="h-4 w-4 text-primary mt-1" />
        1300 098 765
      </li>
      <li className="flex items-start gap-2">
        <Mail className="h-4 w-4 text-primary mt-1" />
        hello@wheelz.au
      </li>
      <li className="flex items-start gap-2">
        <MapPin className="h-4 w-4 text-primary mt-1" />
        <span>Melbourne | Sydney | Brisbane | Perth | Adelaide | Hobart | Darwin | Canberra</span>
      </li>
      <li className="flex items-start gap-2">
        <Building2 className="h-4 w-4 text-primary mt-1" />
        <span>HQ: 470 St Kilda Road, Melbourne VIC 3004</span>
      </li>
    </ul>
  </div>

  {/* Services */}
  <div>
    <h4 className="text-lg font-semibold text-primary mb-4">Services</h4>
    <ul className="space-y-2">
      <li className="flex items-center">
        <span className="text-primary mr-2">•</span>
        Sell Your Car
      </li>
      <li className="flex items-center">
        <span className="text-primary mr-2">•</span>
        Buy A New Car
      </li>
      <li className="flex items-center">
        <span className="text-primary mr-2">•</span>
        Demo & Pre–Owned
      </li>
      <li className="flex items-center">
        <span className="text-primary mr-2">•</span>
        Mates Rates
      </li>
      <li className="flex items-center">
        <span className="text-primary mr-2">•</span>
        Trade Promotion
      </li>
      <li className="flex items-center">
        <span className="text-primary mr-2">•</span>
        Prize Draw Winners
      </li>
      <li className="flex items-center">
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
        "Terms and Conditions",
        "Privacy Policy",
        "General FAQs",
        "Trade Promotion Draws",
        "Competition Terms",
        "About Us",
        "Contact Us",
      ].map((item, i) => (
        <li className="flex items-center" key={i}>
          <span className="text-primary mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Social Icons aligned at bottom */}
  
</div>
<div className="flex gap-4 mt-12 md:items-end">
    <a href="#"><img src={facebook} alt="Facebook" className="h-10 w-10" /></a>
    <a href="#"><img src={instagram} alt="Instagram" className="h-10 w-10" /></a>
    <a href="#"><img src={xIcon} alt="X" className="h-10 w-10" /></a>
    <a href="#"><img src={tiktok} alt="TikTok" className="h-10 w-10" /></a>
  </div>
</div>

<div className="border-t border-gray-200"></div>

{/* Footer Bottom */}
<div className="bg-primary text-white text-center text-sm font-semibold py-4">
  © Wheelz Pty Ltd 2025, All Rights Reserved
</div>
    </footer>
  );
};

export default FooterSection;
