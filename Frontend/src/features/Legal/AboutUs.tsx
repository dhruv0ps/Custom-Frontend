import React from "react";
import banner from "@/assets/Legal/About-Us-by-Wheelz-scaled.webp";
import AllFooterSection from "@/util/AllFooterSection";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black w-full overflow-hidden">
        {/* Banner */}
        <div className="relative w-full h-[200px] sm:h-[400px] md:h-[500px]">
          <img
            src={banner}
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-12 mb-24 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
            About Us
          </h1>

          <p>
            Welcome to Australia’s premier automotive ecosystem, where we are redefining the way you experience all things automotive.
          </p>

          <p>
            At the heart of our platform lies a commitment to revolutionising your car related needs, offering unparalleled convenience and substantial savings.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">OUR VISION</h2>
          <p>
            Our mission is to provide a seamless and comprehensive automotive experience for our members.
          </p>
          <p>
            We empower you to effortlessly buy and sell cars through our nationwide dealership network, completely free of charge.
          </p>
          <p>
            Our platform is designed to streamline your automotive needs, ensuring you never have to pay full price again.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">WHAT WE OFFER</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Seamless Car Trading</h3>
              <p>Effortlessly buy and sell cars with the help of our trusted dealership network. Enjoy a hassle-free experience from start to finish.</p>
            </div>

            <div>
              <h3 className="font-semibold">Exciting Periodic Trade Promotion</h3>
              <p>Members participate in our exciting cash prize draws, including Bucks Bonanza, Fuel Rewards, Glow Goals, and more. As a VIP member, you gain exclusive access to these fantastic promotions with multiple opportunities to win!</p>
            </div>

            <div>
              <h3 className="font-semibold">Mates Rates Discounts</h3>
              <p>Our members save daily on all their automotive needs, leveraging exclusive deals and discounts from our trusted partners.</p>
            </div>

            <div>
              <h3 className="font-semibold">Exclusive Fuel Offers</h3>
              <p>Enjoy significant savings on fuel with exclusive member discounts. Every fill up is an opportunity to save more.</p>
            </div>

            <div>
              <h3 className="font-semibold">Virtual Tours</h3>
              <p>Experience the future of car shopping with our innovative virtual tours from our dealership experts. Explore your desired vehicle’s features and capabilities from the comfort of your home.</p>
            </div>

            <div>
              <h3 className="font-semibold">Finance and Insurance</h3>
              <p>Simplify car affordability and maximise protection with our finance and insurance services at mates rates.</p>
            </div>

            <div>
              <h3 className="font-semibold">Fleet Services</h3>
              <p>Access dynamic strategic partnerships tailored to your business needs. Revolutionise your fleet management with our expert solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold">Overhauled</h3>
              <p>Bring your dream car build to life with our exciting and exclusive member only prize draw. Enter to win and share your unique automotive story.</p>
            </div>

            <div>
              <h3 className="font-semibold">Business Partnerships</h3>
              <p>Collaborate with us to connect with more customers and secure your position in our automotive community. Unlock exclusive partnership opportunities and boost your sales results.</p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold">WHY CHOOSE US?</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Comprehensive Services</h3>
              <p>From buying and selling cars to accessing exclusive discounts and participating in trade promotions, our ecosystem offers a one-stop solution for all your automotive needs.</p>
            </div>

            <div>
              <h3 className="font-semibold">Nationwide Coverage</h3>
              <p>Our services are available in all major cities across Australia, ensuring you can benefit from our offerings no matter where you are.</p>
            </div>

            <div>
              <h3 className="font-semibold">Member Benefits</h3>
              <p>As a member, enjoy exclusive access to partner discounts, trade promotion prize draws, and more. Save time and money with our user-friendly platform.</p>
            </div>

            <div>
              <h3 className="font-semibold">Community Impact</h3>
              <p>We believe in giving back. Through our fundraisers, we contribute to supported charities on behalf of all our customers utilising our services for buying and selling cars, creating a ripple effect of positive change.</p>
              <p>Join us today and become part of Australia’s #1 automotive ecosystem.</p>
              <p>Embrace a smarter, more efficient way to manage your car needs, and discover the power of collective savings with our trusted partners.</p>
              <p>Welcome to the future of automotive excellence.</p>
            </div>
          </div>
        </div>
      </div>

      <AllFooterSection content={[]} mode="compact" />
    </>
  );
};

export default AboutUs;
