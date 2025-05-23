import React, { useState } from "react";
import banner from "@/assets/Legal/iStock-121.jpg";
import AllFooterSection from "@/util/AllFooterSection";

const CompetitionTerms: React.FC = () => {
  const states = [
    { 
      value: "VIC", label: "Victoria", fullName: "VICTORIA",
      prizeLimit: "Victorian regulations",
      prizes: ["Bucks Bonanza VIC: Cash reward only for VIC", "Bill Crusher VIC: VIC-specific bills covered"],
      privacy: ["Data handled per VIC law", "No third-party sharing without VIC resident consent"],
      howToParticipate: ["Signup using VIC form", "Only VIC residents above 18"]
    },
    { 
      value: "NSW", label: "New South Wales", fullName: "NEW SOUTH WALES",
      prizeLimit: "New South Wales regulations, ensuring no individual prize exceeds $10,000",
      prizes: ["Glow Goals NSW Edition", "Fuel Filler: NSW cars only"],
      privacy: ["NSW privacy act compliance", "Data used only for NSW draw processing"],
      howToParticipate: ["NSW members only", "Follow NSW-specific entry process"]
    },
    { value: "QLD", label: "Queensland", fullName: "QUEENSLAND", prizeLimit: "Queensland regulations" },
    { value: "WA", label: "Western Australia", fullName: "WESTERN AUSTRALIA", prizeLimit: "Western Australia regulations" },
    { value: "TAS", label: "Tasmania", fullName: "TASMANIA", prizeLimit: "Tasmanian regulations" },
    { value: "ACT", label: "Australian Capital Territory", fullName: "AUSTRALIAN CAPITAL TERRITORY", prizeLimit: "ACT regulations, ensuring no individual prize exceeds $3,000" },
    { value: "NT", label: "Northern Territory", fullName: "NORTHERN TERRITORY", prizeLimit: "Northern Territory regulations, ensuring no individual prize exceeds $5,000" },
    { value: "SA", label: "South Australia", fullName: "SOUTH AUSTRALIA", prizeLimit: "South Australian regulations, ensuring no individual prize exceeds $5,000" }
  ];

  const [selectedState, setSelectedState] = useState(states[0]); // Default: VIC

  const renderStateSection = (state: any) => (
    <section key={state.value} className="mb-16">
      <h2 className="text-2xl font-bold text-black mb-2">{state.fullName}</h2>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Trade Promotion for {state.value}: 
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-2 ">
  <li className="text-base">Membership Prize Draws</li>
</ul>
      <div className="space-y-4 text-sm text-gray-700">
        <p className="font-bold">Introduction</p>
        <p>
          Welcome to our Wheelz Trade Promotion Membership Giveaway! This exciting promotion offers fantastic cash prizes to our valued members. All prizes comply with {state.prizeLimit}, ensuring transparency and fairness.
        </p>
        <p className="font-bold">Membership Entry Structure</p>
        <p>
          All eligible members will automatically receive 1 entry per draw based on the VIP membership.
        </p>
        <p className="font-bold">Prizes and Promotions</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Bucks Bonanza: Winners will receive cash prizes.</li>
          <li>Your Tank, Our Treat: Winners will receive cash prizes.</li>
          <li>Glow Goals: Winners will receive cash prizes.</li>
          <li>Drive, Relax, Spend: Winners will receive cash prizes.</li>
         
        </ul>
        <p className="font-bold">Bill Busters:</p>
        <p>To be eligible for the draw, members must upload a current bill:</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Electricity Bill</li>
          <li>Car Insurance Bill</li>
          <li>Loan Repayment Statement</li>
          <li>Buy Now, Pay Later (BNPL) Statement</li>
          <li>Internet or Broadband Bill</li>
          <li>Mobile Phone Bill</li>
          <li>Vehicle Registration Payment Notice</li>
          <li>Gas Bill</li>
          <li>Home Insurance Bill</li>
          <li>Streaming Service or Subscription Bill</li>
        </ul>
        <p>The uploaded bill must clearly display:</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>The member's name</li>
          <li>The amount due</li>
          <li>A recent issue date (within 60 days)</li>
        </ul>
        <p>Verified bills enter the draw; winners get bill value as a cash prize.</p>

        <p className="font-bold">Terms and Conditions</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Eligibility: Residents of {state.label}, 18+.</li>
          <li>Entry: 1 per VIP member, no additional purchase.</li>
          <li>Promotion Period: Flexible; subject to change.</li>
          <li>Draws: Periodic. Prize values shared beforehand.</li>
          <li>Notification: Within 1–5 days. Claim in 5 days or redrawn.</li>
          <li>Privacy: Data handled per Wheelz Pty Ltd policy.</li>
          <li>Liability: Not liable for technical entry issues.</li>
          <li>General: Wheelz may change/suspend the promotion.</li>
          <li>Compliance: Follows {state.label} regulations.</li>
        </ul>

        <p className="font-bold">Privacy Policy</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Data collected: name, email, phone, etc.</li>
          <li>Usage: Only for draw-related purposes.</li>
          <li>Security: Measures in place to protect info.</li>
        </ul>

        <p className="font-bold">How to Participate</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Become a Wheelz VIP member.</li>
          <li>Keep membership active.</li>
          <li>Each VIP gets 1 entry per draw.</li>
          <li>Watch for draw notifications via email.</li>
        </ul>

       <h3 className="text-lg font-semibold text-gray-700 mb-2">Ambassador Programme </h3>


       <h4 className="text-lg font-semibold ">Terms & Conditions</h4>
       <p className="font-bold">Eligibility</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Open to residents of Australia aged 18 years or older.</li>
          <li>Participants must have a valid and active Ambassador Programme account in good standing.</li>
          <li>Employees, contractors, and affiliates of The Platform and their immediate family members are not eligible for tiered cash rewards.</li>
        </ul>
        
          <p className="font-bold">How the Programme Works</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Participants receive rewards by referring new users to The Platform using their unique referral link or code. </li>
          <li>	A referred user must:
<li>Be new to the platform (not previously registered),</li>
 <li>Sign up via the referral link or by entering the code during registration,</li>
  <li>Complete verification and any necessary payment,</li>
   <li> Remain active for the required time period as per the relevant reward tier.</li>

</li>
       
        </ul>

        <p className="font-bold">Referral Tiers & Rewards</p>
        <ul className="list-disc list-inside sm:ml-4 space-y-1">
          <li>Tier 1: Spark Starter - 10 Friends - $100 Cash Bonus (Guaranteed^), 1 Month Free Membership</li>
          <li>Tier 2: Growth Champ - 25 Friends - $250 Cash Bonus (Guaranteed^), Entry into Growth Draw*, 6 Months Free</li>
          <li>Tier 3: VIP Influencer - 50 Friends - $500 Cash Bonus (Guaranteed^), Entry into VIP Prize Draw*, 9 Months Free</li>
          <li>Tier 4: Power Ambassador - 100+ Friends - $1000 Cash Bonus (Guaranteed^), $100 Monthly Commission~, 12 Months Free</li>
          <li>^Guaranteed cash bonuses are awarded only once the referral threshold is reached and all referred users have successfully registered, verified, completed payments, and remained active for six (6) consecutive calendar months.</li>
          <li>*Prize Draws are conducted periodically; eligible participants will be notified via the website or member portal. Winners are selected at random from qualified entries.</li>
          <li>~Monthly commission is paid only when the participant maintains 100 active, verified, and engaged referrals per calendar month, as shown in their Ambassador Programme dashboard.</li>
        </ul>

        <p className="font-bold">Referral Tracking & Visibility</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>Participants can track their referrals, rewards, and status via the Ambassador dashboard within the The Platform member portal.</li>
  <li>The Platform is not responsible for any referral tracking issues due to incorrect links, user error, or technical malfunction.</li>
</ul>

<p className="font-bold">Reward Distribution</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>Cash bonuses are paid via direct deposit or through approved third-party payment services.</li>
  <li>Membership extensions are automatically applied to user accounts.</li>
  <li>Rewards are subject to verification, eligibility, and approval by The Platform.</li>
</ul>

<p className="font-bold">Fraud & Disqualification</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>The Platform reserves the right to investigate and disqualify participants for suspected:
    <ul className="list-disc list-inside sm:ml-4 mt-1 space-y-1">
      <li>Fake or duplicate accounts</li>
      <li>Use of bots or automation tools</li>
      <li>Misuse of the referral system</li>
      <li>Violation of Australian laws or The Platform policies</li>
    </ul>
  </li>
  <li>All pending rewards may be forfeited if fraud or manipulation is suspected.</li>
</ul>

<p className="font-bold">Modifications & Termination</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>The Platform reserves the right to change, suspend, or discontinue the Referral Programme or its Terms at any time, for any reason, and without prior notice.</li>
  <li>Updates will be made available through official The Platform communication channels including the website and email.</li>
</ul>

<p className="font-bold">Taxes</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>Participants are solely responsible for reporting and paying any applicable taxes on rewards received.</li>
  <li>The Platform does not provide tax advice and recommends consulting a licenced tax professional.</li>
</ul>

<p className="font-bold">Limitation of Liability</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>The Platform shall not be liable for any indirect, incidental, or consequential damages arising from participation in the Programme.</li>
  <li>Rewards are provided "as is" and without any warranties, express or implied.</li>
</ul>

<p className="font-bold">Governing Law</p>
<ul className="list-disc list-inside sm:ml-4 space-y-1 mb-6">
  <li>These Terms & Conditions are governed by the laws of Australia.</li>
  <li>Any disputes or claims related to this Programme will be subject to the jurisdiction of the courts of Australia, in accordance with federal consumer and business protection laws.</li>
</ul>
      </div>
    </section>
  );

  return (
    <div className="bg-white text-black w-full overflow-hidden">
      <div className="relative w-full max-h-[32rem] overflow-hidden">
        <img src={banner} alt="Banner" className="w-full h-full object-cover object-top" />
      </div>

      <div className="max-w-full sm:max-w-[80%] mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">Competition Terms:<br />Wheelz Trade Promotion & Ambassador Programme</h1>
        <p className="text-primary font-semibold text-sm mb-8 text-center">Last Updated: January 2025</p>

      
        <div className="mb-8 flex justify-center">
  <select
    className="border border- text-black  focus:outline-none  p-2 rounded-md text-sm font-medium shadow-sm transition-all duration-150"
    value={selectedState.value}
    onChange={(e) => {
      const selected = states.find(s => s.value === e.target.value);
      if (selected) setSelectedState(selected);
    }}
  >
    {states.map((state) => (
      <option key={state.value} value={state.value} className="text-black">
        {state.label}
      </option>
    ))}
  </select>
</div>


        {/* Render selected state section */}
        {renderStateSection(selectedState)}

        <div className="mt-8 ">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-sm text-gray-700">
            For enquiries, email us: <a href="mailto:hello@wheelz.au" className="text-primary hover:underline">hello@wheelz.au</a>
          </p>
        </div>
      </div>

      <AllFooterSection content={[""]} />
    </div>
  );
};

export default CompetitionTerms;
