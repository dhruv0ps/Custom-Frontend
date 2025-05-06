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
        Trade Promotion for {state.value}: Membership Giveaway
      </h3>
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
        <ul className="list-disc list-inside space-y-1">
          <li>Bucks Bonanza: Winners will receive cash prizes.</li>
          <li>Your Tank, Our Treat: Winners will receive cash prizes.</li>
          <li>Glow Goals: Winners will receive cash prizes.</li>
          <li>Drive, Relax, Spend: Winners will receive cash prizes.</li>
          <li className="font-semibold">Bill Busters:</li>
        </ul>
        <p>To be eligible for the draw, members must upload a current bill:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
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
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>The member's name</li>
          <li>The amount due</li>
          <li>A recent issue date (within 60 days)</li>
        </ul>
        <p>Verified bills enter the draw; winners get bill value as a cash prize.</p>

        <p className="font-bold">Terms and Conditions</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
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
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Data collected: name, email, phone, etc.</li>
          <li>Usage: Only for draw-related purposes.</li>
          <li>Security: Measures in place to protect info.</li>
        </ul>

        <p className="font-bold">How to Participate</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Become a Wheelz VIP member.</li>
          <li>Keep membership active.</li>
          <li>Each VIP gets 1 entry per draw.</li>
          <li>Watch for draw notifications via email.</li>
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
        <h1 className="text-3xl font-bold text-center mb-4">Competition Terms:<br />Wheelz Trade Promotion</h1>
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
