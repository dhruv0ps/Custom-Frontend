import faqBanner from '@/assets/Legal/iStock-141.jpg';
import AllFooterSection from '@/util/AllFooterSection';
import { useNavigate } from 'react-router-dom';
const faqs = [
  {
    question: 'Where is Wheelz.au based?',
    answer:
      'We’re proudly Australian! Our operations span across the country, headquartered in Melbourne, with dedicated partners strategically located in every state.',
  },
  {
    question: 'Does Wheelz.au have a network across Australia?',
    answer:
      'Yes, we have a robust network, collaborating exclusively with leading, manufacturer-approved dealers and services providers within the automotive industry. This ensures you consistently receive the best market prices. While others may emphasise quantity, we focus on quality partnerships and effective marketing strategies. With our cutting-edge technology, our solutions promise exceptional deals for used vehicles and unveil exclusive pricing for new cars through our licensed partnerships.'
  },
  {
    question: 'Is Wheelz.au safe?',
    answer:
      ' Absolutely! Your information is kept safe and secure. We only share your details with the appropriate service providers and dealers after finding the perfect match for your needs through our sales solution. Years of thorough research and collaboration with hundreds of dealerships and service providers have allowed us to develop a safe, fair, and effective automotive ecosystem and sales negotiation tool.'
  },
  {
    question: 'Is Wheelz.au a legitimate business?',
    answer: `
      We’re a reputable and trusted player in the Australian automotive industry. Our strong partnerships with top brands have firmly positioned us as a household name.
      <div class="mt-4 mb-2 font-semibold">Here’s our company details:</div>
      <div class="mb-1">Company Name – Wheelz Pty Ltd</div>
      <div class="mb-1">ABN – 23 676 986 664</div>
      <div class="mb-1">Headquarters - 470 St Kilda Road, Melbourne VIC 3004</div>
    `
  },
  
  {
    question: 'Why choose Wheelz.au?',
    answer:
      'Our company, created by local industry leaders, is committed to providing Australians with real savings on all things automotive! With our technology, skilled professionals, and dynamic tools, we empower you to make well-informed decisions. Our user-friendly platform ensures a smooth experience, robust search filters, and guarantees genuine discounts. Whether selling your car or buying a new one, we’ve got you covered.'
  },
  {
    question: 'Am I paying for the charity contribution?',
    answer:
      'No, you are not paying for the charity contribution. By choosing us, you create hope through our fundraisers, as we contribute to meaningful charities on behalf of our members and users who utilise our services for buying and selling cars. All you need to do is pick one of our supported charities for us to donate to, creating a ripple effect of positivity. We believe each donation is a stepping stone toward a future filled with hope and opportunity, and we are simply playing our part.'
  },
  {
    question: 'Who buys my car?',
    answer:
      ' Our platform connects you with the best-matched buyers from our network of licensed dealers to help you earn as much as possible. Our software analyses your data, cross-checking it against dealership preferences, real-time market insights, stock requirements, and trended data.'
  },
  {
    question: 'How fast can I sell my car?',
    answer:
      'Once you provide your car’s information, expect calls within hours, sometimes minutes. Our technology starts working the moment you upload your vehicle. Once you accept an offer, the buyer takes care of payment and collection, streamlining the process for a swift sale.'
  },
  {
    question: 'How fast can I buy my new car?',
    answer:
      'While we can’t control manufacturers’ stock availability, we leverage our network to provide stress-free car buying with seamless processes and exceptional deals.'
  },
  {
    question: 'How is Wheelz.au different?',
    answer:
      'We simplify selling, buying, and owning cars by providing exclusive access to substantial discounts across Australia, all without the hassle of haggling. Our partnerships ensure you receive exceptional, stress-free offers. No negotiations necessary – just unparalleled deals! We run periodic Trade Promotion cash draw prizes as part of your membership. Additionally, we empower change through fundraisers, contributing to meaningful causes on your behalf and creating positivity in communities across the country.'
  },
  {
    question: 'How does Wheelz.au compare to private sales?',
    answer:
      'Private selling involves effort and risk. Using our services provides a secure and quick process. Receive genuine offers promptly without dealing with time-wasters, wholesalers, scammers, or strangers.'
  },
  {
    question: 'How is my car’s value estimated?',
    answer:
      'Your car’s value is determined by the information provided, market demand, and condition details. Our technology crunches numbers from our dealer network to connect you with the best buyers.'
  },
  {
    question: 'What are the fees involved in selling or buying my car?',
    answer:
      'WE WORK FOR YOU! Unlike others, WE DON’T CHARGE YOU TO SELL OR BUY YOUR CAR – IT’S 100% FREE! No hidden listing or advertising fees, you are NOT required to be a member, providing clarity and peace of mind.'
  },
  {
    question: 'What about the sales paperwork?',
    answer:
      'Dealerships will provide the essential paperwork once an offer is accepted. For your protection, please proceed only through your portal.'
  },
  {
    question: 'How do I get paid?',
    answer:
      'After accepting an offer, the buyer will arrange payment and collection directly with you, avoiding third-party involvement.'
  },
  {
    question: 'Can I sell my car with finance still owing?',
    answer:
      'Yes, you can sell your car with finance owing, just provide the buyer with a payout letter for a seamless transaction.'
  },
  {
    question: 'Can I trade in my old car with Wheelz.au?',
    answer:
      'Absolutely! We offer a trade-in option to help you seamlessly transition to your new vehicle. Just provide details about your old car during the listing process, and we’ll take care of the rest.'
  },
  {
    question: 'How does Wheelz.au handle vehicle inspections?',
    answer:
      ' At Wheelz.au, we prioritise transparency and safety in every transaction. We offer comprehensive vehicle inspection services through our network of certified professionals. These inspections cover crucial aspects such as mechanical condition, structural integrity, and safety features, ensuring that both buyers and sellers have a clear understanding of the vehicle’s condition. With our thorough inspection process, you can confidently buy or sell a vehicle knowing that it meets the highest standards of quality and reliability.'
  },
  {
    question: 'Can I list multiple vehicles for sale on Wheelz.au?',
    answer:
      ' Of course! Whether you’re selling one car or a fleet of vehicles, our platform can accommodate your needs. Simply list each vehicle separately to ensure accurate and efficient transactions which can be completed by quickly entering in just your registration number.'
  },
  {
    question: 'How does Wheelz.au ensure the quality of listings on its platform?',
    answer:
      'We have rigorous quality control measures in place to ensure that all listings meet our standards. Our team reviews each listing to verify accuracy and completeness before it goes live on our platform. Additionally, we rely on user feedback and reviews to continuously improve the quality of our listings.'
  },
  {
    question: 'Does Wheelz.au offer any warranties or guarantees on vehicle purchases?',
    answer:
      'While we don’t directly offer warranties or guarantees, many of the dealerships in our network may provide their own warranties or guarantees on vehicle purchases. We recommend discussing this with the dealership directly to understand your options.'
  },
  {
    question: 'Can I finance a vehicle purchase through Wheelz.au?',
    answer:
      ' Yes, we work with a network of trusted financial partners who can assist you with <a href="/finance" class="text-primary">financing options</a> for your vehicle purchase. Simply let us know during the purchasing process, and we’ll connect you with the right partners for your needs.'
  },
  {
    question: 'Can I purchase insurance for my vehicle through Wheelz.au?',
    answer:
      'Absolutely! We understand the importance of protecting your investment, which is why we offer convenient insurance options through our trusted insurance partners. Whether you’re looking for comprehensive coverage, third party liability, or additional add ons, we can connect you with the right <a href="/insurance" class="text-primary">insurance solution</a> tailored to your needs. Rest assured that your vehicle will be safeguarded with the coverage it deserves, providing you with peace of mind on the road.'
  },
  {
    question: 'Can I purchase a car after a virtual tour?',
    answer:
      'Yes, absolutely! Our dealership base offers the convenience of completing the entire car-buying process remotely. From negotiating the price to arranging delivery, we’re here to assist you every step of the way. So, after experiencing a <a href="/virtual-tours" class="text-primary">virtual tour</a> from the comfort of your home, you can confidently make your purchase decision with ease.'
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer:
      ' Yes, indeed! You have the flexibility to cancel your membership at any time, hassle-free. Simply provide us with a one-month notice, and your membership will be effectively terminated at the conclusion of the following month. This ensures that you have ample time to enjoy the benefits of your membership until the end of the following billing cycle.'
  },
  {
    question: 'How do the fundraisers work when using your services for selling or buying cars?',
    answer:
      ' It’s simple yet impactful! Every time you use our services to sell or buy a car, we contribute to meaningful fundraisers on your behalf. Your transaction triggers a donation from us to various causes, and you’ll have the opportunity to choose from one of our charities. This creates a powerful ripple effect of positivity throughout communities. So, by engaging with us, you not only benefit from our services but also contribute to making a difference in the lives of others.'
  }
];

export default function FAQsPage() {
  const navigate = useNavigate()
  return (
    <>
    <div className="bg-white text-black w-full overflow-hidden">
 
 <div className="relative w-full sm:max-h-[32rem] overflow-hidden">
   <img
     src={faqBanner}
     alt="About Us Banner"
     className="w-full h-full object-cover object-top"
   />
 </div>

      <div className="sm:max-w-[80%] max-w-full mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">General FAQs</h1>
        <h2 className="font-semibold text-lg text-[#666] mb-2 ">
          Have a question?</h2> <p className="text-[#666] text-sm leading-relaxed">
        Find answers to commonly asked questions below. If your query persists,&nbsp;
        <span
          onClick={() => navigate("/contact-us")}
          className="text-primary font-medium hover:underline cursor-pointer"
        >
          contact us
        </span>.
      </p>
        
        <div className="space-y-8 sm:mt-8 mt-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h2 className="font-semibold text-lg text-[#666] mb-2">Q: {faq.question}</h2>
              <p
  className="text-gray-600 text-sm leading-relaxed"
  dangerouslySetInnerHTML={{ __html: faq.answer }}
/>
            </div>
          ))}
        </div>
      </div>
    </div>
    <AllFooterSection content={[``]} mode='compact'/>
    </>
  );
}
