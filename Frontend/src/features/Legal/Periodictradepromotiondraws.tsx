import faqBanner from '@/assets/Legal/iStock-155.jpg';
import AllFooterSection from '@/util/AllFooterSection';
import HoverArrowButton from '@/util/HoverButton';
import { useNavigate } from 'react-router-dom';
const Periodictradepromotiondraws = () => {
const navigate = useNavigate()
  const faqs = [
    {
      question: "How do the Wheelz.au draw prizes operate?",
      answer: `Our Trade Promotion features periodic draws, with some offering substantial prizes. All winners will receive notifications within 24 hours. These draws are exclusively for our loyal members. If you haven’t joined yet, you can <a href="/finance" class="text-primary">register here </a> .`
    },
    {
      question: "Do I need to be a Wheelz.au Member to participate in the Periodic Trade Promotion Draws?",
      answer: `Yes, it’s compulsory to become a member for you to participate in these draws. Our platform is exclusively dedicated to Wheelz.au Members to show our appreciation through our ‘Trade Promotion’. To take part in these exciting draws, we encourage you to register as a member without delay. By joining, you not only gain eligibility for these special draws but also unlock a range of exclusive benefits tailored for our valued members. Don’t miss out –  <a href="/finance" class="text-primary">sign up</a> to enhance your automotive experience today!`
    },
    {
      question: "Do I automatically qualify for all the draws?",
      answer: "Yes, with our VIP membership, you receive one entry into every draw we run. All members are automatically included in the draws through our digital member identification system. Occasionally, we may offer additional tickets for sale to enhance your chances of winning, with notifications sent when available. Our system ensures a fair and unbiased selection process by randomly choosing a winner from the pool."
    },
    {
      question: "Is it possible for anyone in Australia to win?",
      answer: "Yes! To participate and win, you must be an Australian resident over 18 years of age. As long as you meet this criteria and provide your bank details, we will transfer the cash prize directly to your account. Best of luck!"
    },
    {
      question: "How can I confirm that I’m entered into a draw?",
      answer: "After purchasing your membership, you’ll automatically be entered into every draw. A welcome email will be sent with your login details for our Wheelz.au Portal. Draw announcements and winner notifications will be sent via email and posted on our website. If you don’t see our emails in your inbox, please check your junk or promotions tab."
    },
    {
      question: "If I win, how will you let me know?",
      answer: "Once you’ve joined as a member, the information you share with us, such as your contact details, serves as a means for us to communicate with you. In the event that you emerge as one of our lucky winners, rest assured that we will reach out to you within 24 hours of the draw."
    },
    {
      question: "How are winners selected in these draws?",
      answer: "Our computer-generated program randomly picks a winner on our website at the designated draw time."
    },
    {
      question: "Are the draws conducted in real-time?",
      answer: "Yes, the draw takes place in real time and winners will be announced on our website at the specified draw time."
    },
    {
      question: "Can I trust the fairness of the draw?",
      answer: "Absolutely, our advanced system ensures fairness by randomly choosing the winner without bias."
    },
    {
      question: "How will I be notified if I win?",
      answer: "Winners will be contacted within 24 hours of the draw using the contact details provided during registration."
    },
    {
      question: "What measures are in place to prevent fraud or manipulation?",
      answer: "Our purpose-built program is designed to prevent fraud, ensuring a secure and transparent drawing process."
    },
    {
      question: "Do I need to do anything special to be included in the draw?",
      answer: "Sign up and become a member today to participate, ensure you have completed the necessary registration or entry requirements before the draw date to be eligible. Please note, it may take up to 72 hours for you to become an active member for our draws."
    },
    {
      question: "How frequently are draws held?",
      answer: "Draws are conducted based on the schedule outlined by the Platform. Check our announcements for upcoming events."
    },
    {
      question: "Is there a limit to the number of times I can enter a draw?",
      answer: "With your VIP membership, you are automatically entered into every draw. Some draws may offer additional entry options for purchase, and you will be informed accordingly."
    },
    {
      question: "Can I opt for a different prize if I win?",
      answer: "No, prizes are fixed amounts and will be paid out as cash directly transferred into your bank account."
    },
    {
      question: "How long do I have to claim my prize if I win?",
      answer: "Winners need to provide their banking details within 5 business days of being contacted. Check the notification for any additional instructions and deadlines."
    },
    {
      question: "Are there age or location restrictions for participation?",
      answer: "Members must be 18 years of age or older and reside in Australia."
    },
    {
      question: "What happens if the winner cannot be contacted within 24 hours?",
      answer: "If initial contact fails, organisers may have a backup plan or a redraw process. Refer to the specific draws rules for contingency measures."
    },
    {
      question: "Is there a way to track the results of past draws?",
      answer: `Results of previous draws are often available on our website and can be viewed directly on the Platforms dedicated  <a href="/finance" class="text-primary">winners page </a> anytime.`
    },
    {
      question: "Can I transfer my prize to someone else if I am unable to accept it?",
      answer: "No, prize transfers are not allowed. We verify your identity and banking details through our digital member identification system. You can have them sign up or transfer the funds once received."
    },
    {
      question: "Are there any hidden costs associated with claiming my prize?",
      answer: "Generally, there are no hidden costs, but you may need to cover any bank charges incurred during the transfer. Always review the terms of each draw for any specific expenses."
    }
  ];

  return (
    <>   <div className="bg-white text-black w-full overflow-hidden">
 
    <div className="relative w-full max-h-[32rem] overflow-hidden">
      <img
        src={faqBanner}
        alt="About Us Banner"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="max-w-full sm:max-w-[80%] mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 ">Understanding Our Periodic Trade Promotion Prize Draws</h1>
      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index}>
           <h3 className="text-[18px] font-bold text-[#666] mb-2 leading-snug">Q: {item.question}</h3>
           <p className="text-sm text-gray-600 mt-1">
  A:{' '}
  <span dangerouslySetInnerHTML={{ __html: item.answer }} />
</p>

          </div>
        ))}
      </div>
    </div>

      <div className="flex justify-center">
         <HoverArrowButton
            label="Home"
            onClick={() => navigate("/")}
            className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-white"
            hoverTextClass="text-white"
          />
          </div>
    </div>
    <AllFooterSection content={[]} mode='compact'/>
    </>
 
  );
};

export default Periodictradepromotiondraws;
