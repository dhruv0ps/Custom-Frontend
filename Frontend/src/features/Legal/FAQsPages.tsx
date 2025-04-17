import faqBanner from '@/assets/Legal/General-FAQs-by-Wheelz-scaled.webp';
import AllFooterSection from '@/util/AllFooterSection';

const faqs = [
  {
    question: 'Where is Wheelz.au based?',
    answer:
      'We’re proudly Australian! Our operations span across the country, headquartered in Melbourne, with dedicated partners strategically located in every state.',
  },
  {
    question: 'Does Wheelz.au have a network across Australia?',
    answer:
      'Yes, we have a robust network, collaborating exclusively with leading, manufacturer-approved dealers and service providers within the automotive industry. This ensures you consistently receive the best market prices...'
  },
  {
    question: 'Is Wheelz.au safe?',
    answer:
      'Absolutely! Your information is kept safe and secure. We only share your details with the appropriate service providers and dealers after finding the perfect match for your needs through our sales solution...'
  },
  {
    question: 'Is Wheelz.au a legitimate business?',
    answer:
      `We’re a reputable and trusted player in the Australian automotive industry. Our strong partnerships with top brands have firmly positioned us as a household name.\nHere’s our company details:\nCompany Name – Wheelz Pty Ltd\nABN – 23 676 986 664\nHeadquarters: 470 St Kilda Road, Melbourne VIC 3004`
  },
  {
    question: 'Why choose Wheelz.au?',
    answer:
      'Our company, created by local industry leaders, is committed to providing Australians with real savings on all things automotive! With our technology, skilled professionals, and dynamic tools, we empower you to make well-informed decisions...'
  },
  {
    question: 'Am I paying for the charity contribution?',
    answer:
      'No, you are not paying for the charity contribution. By choosing us, you create hope through our fundraisers, as we contribute to meaningful charities on behalf of our members and users who utilise our services...'
  },
  {
    question: 'Who buys my car?',
    answer:
      'Our platform connects you with the best-matched buyers from our network of licensed dealers to help you earn as much as possible. Our software analyses your data...'
  },
  {
    question: 'How fast can I sell my car?',
    answer:
      'Once you provide your car’s information, expect calls within hours, sometimes minutes. Our technology starts working the moment you upload your vehicle...'
  },
  {
    question: 'How fast can I buy my new car?',
    answer:
      'While we can’t control manufacturers’ stock availability, we leverage our network to provide stress-free car buying with seamless processes and exceptional deals.'
  },
  {
    question: 'How is Wheelz.au different?',
    answer:
      'We simplify selling, buying, and owning cars by providing exclusive access to substantial discounts across Australia, all without the hassle of haggling...'
  },
  {
    question: 'How does Wheelz.au compare to private sales?',
    answer:
      'Private selling involves effort and risk. Using our services provides a secure and quick process. Receive genuine offers promptly without dealing with time-wasters, wholesalers, scammers, or strangers.'
  },
  {
    question: 'How is my car’s value estimated?',
    answer:
      'Your car’s value is determined by the information provided, market demand, and condition details. Our technology crunches numbers from our dealer network...'
  },
  {
    question: 'What are the fees involved in selling or buying my car?',
    answer:
      'WE WORK FOR YOU! Unlike others, WE DON’T CHARGE YOU TO SELL OR BUY YOUR CAR – IT’S 100% FREE! No hidden listing or advertising fees...'
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
      'Absolutely! We offer a trade-in option to help you seamlessly transition to your new vehicle. Just provide details about your old car during the listing process...'
  },
  {
    question: 'How does Wheelz.au handle vehicle inspections?',
    answer:
      'At Wheelz.au, we prioritise transparency and safety in every transaction. We offer comprehensive vehicle inspection services through our network of certified professionals...'
  },
  {
    question: 'Can I list multiple vehicles for sale on Wheelz.au?',
    answer:
      'Of course! Whether you’re selling one car or a fleet of vehicles, our platform can accommodate your needs...'
  },
  {
    question: 'How does Wheelz.au ensure the quality of listings on its platform?',
    answer:
      'We have rigorous quality control measures in place to ensure that all listings meet our standards. Our team reviews each listing...'
  },
  {
    question: 'Does Wheelz.au offer any warranties or guarantees on vehicle purchases?',
    answer:
      'While we don’t directly offer warranties or guarantees, many of the dealerships in our network may provide their own warranties...'
  },
  {
    question: 'Can I finance a vehicle purchase through Wheelz.au?',
    answer:
      'Yes, we work with a network of trusted financial partners who can assist you with financing options for your vehicle purchase.'
  },
  {
    question: 'Can I purchase insurance for my vehicle through Wheelz.au?',
    answer:
      'Absolutely! We offer convenient insurance options through our trusted insurance partners. Whether you’re looking for comprehensive coverage...'
  },
  {
    question: 'Can I purchase a car after a virtual tour?',
    answer:
      'Yes, absolutely! Our dealership base offers the convenience of completing the entire car-buying process remotely...'
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer:
      'Yes, indeed! You have the flexibility to cancel your membership at any time, hassle-free. Simply provide us with a one-month notice...'
  },
  {
    question: 'How do the fundraisers work when using your services for selling or buying cars?',
    answer:
      'It’s simple yet impactful! Every time you use our services to sell or buy a car, we contribute to meaningful fundraisers on your behalf...'
  }
];

export default function FAQsPage() {
  return (
    <>
    <div className="max-w-full mx-auto">
      <div className="relative w-full h-[400px]">
        <img src={faqBanner} alt="FAQs Banner" className="w-full h-full object-cover" />
      </div>

      <div className="sm:max-w-[80%] max-w-full mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">General FAQs</h1>
        <h2 className="font-semibold text-lg text-[#666] mb-2">
          Have a question?</h2> <p className="text-[#666] text-sm leading-relaxed"> Find answers to commonly asked questions below. If your query persists, feel free to contact us.</p>
        
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h2 className="font-semibold text-lg text-[#666] mb-2">Q: {faq.question}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">A: {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <AllFooterSection content={[``]} mode='compact'/>
    </>
  );
}
