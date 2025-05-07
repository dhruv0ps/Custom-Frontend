import React from "react";
import banner from "@/assets/Legal/iStock-16.jpg";
import AllFooterSection from "@/util/AllFooterSection";

const ContactUs: React.FC = () => {
  return (
    <>
    <div className="bg-white text-black w-full overflow-hidden">
       
        <div className="relative w-full h-64 md:h-80 lg:h-[32rem]">
         <img 
            src={banner} 
            alt="Contact Banner" 
            className="w-full h-full object-cover object-top" 
            style={{ objectPosition: "center 60%" }} 
          />
      
        </div>

      
      
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-12 mb-24 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
            Contact Us
          </h1>
        
        <h3 className="text-xl sm:text-2xl font-bold mb-4">WE WOULD LOVE TO HEAR FROM YOU!</h3>
        <p className="mb-8 text-[#666]">
          Our Aussie-based support team is here to help you. Whether you have a general enquiry,
          need assistance with our services, or want to learn more about our trade promotions,
          we’re ready to assist.
        </p>

        {/* FAQs */}
        <div className="mb-10">
          <h4 className="font-bold text-lg mb-1">GENERAL FAQS</h4>
          <p className="mb-1">Have a question?</p>
          <p>Find answers to commonly <a className="text-sky-500 underline">asked questions</a></p>

          <h4 className="font-bold text-lg mt-6 mb-1">UNDERSTANDING OUR TRADE PROMOTION DRAWS</h4>
          <p className="mb-1">Have a question?</p>
          <p>Find answers to commonly <a className="text-sky-500 underline">asked questions</a></p>

          <h4 className="font-bold text-lg mt-6 mb-1">COMPETITION TERMS: WHEELZ TRADE PROMOTION</h4>
          <p>Want to learn more about your state regulations?</p>
          <p>Find all the <a className="text-sky-500 underline">information per state</a></p>
        </div>

        {/* Email */}
        <div className="mb-10">
          <h4 className="font-bold text-lg mb-1">EMAIL US ANYTIME 24/7</h4>
          <p><a className="text-sky-500 underline">Get in touch.</a> Our team will respond to your enquiries in a timely manner.</p>
        </div>

        {/* Phone & Locations */}
        <div className="mb-10">
          <h4 className="font-bold text-lg mb-1">PHONE</h4>
          <p className="mb-4">Call us: <strong>1300 098 765</strong></p>

          <h4 className="font-bold text-lg mb-1">BUSINESS HOURS</h4>
          <p className="mb-4">Monday to Friday, 9am to 5pm AEST</p>

          <h4 className="font-bold text-lg mb-1">LOCATIONS</h4>
          <p><span className="text-sky-500 font-semibold">Headquarters:</span> </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li className="mb-2">470 St Kilda Road, Melbourne VIC 3004</li></ul>
          <span className="text-sky-500 font-semibold ">All Major Cities:</span>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Melbourne</li>
            <li>Sydney</li>
            <li>Brisbane</li>
            <li>Perth</li>
            <li>Adelaide</li>
            <li>Hobart</li>
            <li>Darwin</li>
            <li>Canberra</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-10">
          <h4 className="font-bold text-lg mb-1">SOCIAL MEDIA</h4>
          <p className="mb-2">Connect with us on social media for updates, promotions, and support:</p>
          <ul className="list-disc ml-6 text-sky-500">
          <li><a href="https://www.facebook.com/profile.php?id=61561172871981" target="_blank" rel="noopener noreferrer">Facebook</a></li>
  <li><a href="https://www.instagram.com/wheelzau" target="_blank" rel="noopener noreferrer">Instagram</a></li>
  <li><a href="https://x.com/Wheelzau" target="_blank" rel="noopener noreferrer">X</a></li>
  <li><a href="https://www.tiktok.com/@wheelzau" target="_blank" rel="noopener noreferrer">TikTok</a></li>
  <li><a href="https://youtube.com/@wheelzau?si=rAKYdOxVAyP-GMLB" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          
          </ul>
        </div>

        {/* Feedback */}
        <div className="mb-20">
          <h4 className="font-bold text-lg mb-1">FEEDBACK AND SUGGESTIONS</h4>
          <p className="mb-2">Your feedback matters!</p>
          <p className="mb-2">
            We continuously strive to improve our services. If you have any suggestions or feedback,
            please share them with us through our <a className="text-sky-500 underline">feedback form</a>.
          </p>
          <p>
            At Wheelz.au, we are dedicated to providing exceptional service and support to ensure your
            automotive experience is seamless and enjoyable. Reach out to us today, and let us help you
            accelerate your savings and satisfaction.
          </p>
        </div>
      </div>
    </div>
<AllFooterSection content={[

]} mode="compact"/>
    </>
  );
};

export default ContactUs;
