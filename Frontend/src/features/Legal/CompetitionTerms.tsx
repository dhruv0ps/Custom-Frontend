import React, { useState } from "react";

  
  type StateCode = 'VIC' | 'NSW' | 'QLD' | 'WA' | 'TAS' | 'ACT' | 'NT' | 'SA';
const CompetitionTerms:React.FC = () => {
    const [activeState, setActiveState] = useState<StateCode>("VIC");

  const states = [
    { value: "VIC", label: "Victoria" },
    { value: "NSW", label: "New South Wales" },
    { value: "QLD", label: "Queensland" },
    { value: "WA", label: "Western Australia" },
    { value: "TAS", label: "Tasmania" },
    { value: "ACT", label: "Australian Capital Territory" },
    { value: "NT", label: "Northern Territory" },
    { value: "SA", label: "South Australia" },
  ];

  const renderStateSection = (state: StateCode) => {
    const stateInfo = {
      VIC: {
        fullName: "VICTORIA",
        prizeLimit: "Victorian regulations",
      },
      NSW: {
        fullName: "NEW SOUTH WALES",
        prizeLimit: "New South Wales regulations, ensuring no individual prize exceeds $10,000",
      },
      QLD: {
        fullName: "QUEENSLAND",
        prizeLimit: "Queensland regulations",
      },
      WA: {
        fullName: "WESTERN AUSTRALIA",
        prizeLimit: "Western Australia regulations",
      },
      TAS: {
        fullName: "TASMANIA",
        prizeLimit: "Tasmanian regulations",
      },
      ACT: {
        fullName: "AUSTRALIAN CAPITAL TERRITORY",
        prizeLimit: "ACT regulations, ensuring no individual prize exceeds $3,000",
      },
      NT: {
        fullName: "NORTHERN TERRITORY",
        prizeLimit: "Northern Territory regulations, ensuring no individual prize exceeds $5,000",
      },
      SA: {
        fullName: "SOUTH AUSTRALIA",
        prizeLimit: "South Australian regulations, ensuring no individual prize exceeds $5,000",
      },
    };

    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-2">{stateInfo[state].fullName}</h2>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Trade Promotion for {state}: Membership Giveaway
        </h3>

        <div className="space-y-4 text-sm text-gray-700">
          <p className="font-bold">Introduction</p>
          <p>
            Welcome to our Wheelz Trade Promotion Membership Giveaway! This exciting promotion offers fantastic cash prizes to our valued members. All prizes comply with {stateInfo[state].prizeLimit}, ensuring transparency and fairness.
          </p>

          <p className="font-bold">Membership Entry Structure</p>
          <p>
            All eligible members will automatically receive 1 entry per draw based on the VIP membership.
          </p>

          <p className="font-bold">Prizes and Promotions</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Bucks Bonanza: Winners will receive cash prizes. The specific amounts will be determined and shared prior to each draw.</li>
            <li>Your Tank, Our Treat: Winners will receive cash prizes. The specific amounts will be determined and shared prior to each draw.</li>
            <li>Glow Goals: Winners will receive cash prizes. The specific amounts will be determined and shared prior to each draw.</li>
            <li>Drive, Relax, Spend: Winners will receive cash prizes. The specific amounts will be determined and shared prior to each draw.</li>
            <li className="font-semibold">Bill Busters:</li>
          </ul>
          <p>
            To be eligible for the draw, members must first upload and share a current bill in their name. Accepted bill types include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Electricity Bill</li>
            <li>Car Insurance Bill</li>
            <li>Loan Repayment Statement (e.g., personal loans, home loans)</li>
            <li>Buy Now, Pay Later (BNPL) Statement (e.g., Afterpay, Zip Pay)</li>
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
            <li>A recent issue date (within the last 60 days)</li>
          </ul>
          <p>Once the bill is uploaded and verified, members will be automatically entered into the draw. Winners will be randomly selected by our computer-generated program, and the cash prize will match the value of the uploaded bill, deposited directly into the winner's bank account.</p>

          <p className="font-bold">Terms and Conditions</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Eligibility: Open to all active members of Wheelz Pty Ltd who are residents of {stateInfo[state].fullName.charAt(0) + stateInfo[state].fullName.slice(1).toLowerCase()} and over 18 years of age.</li>
            <li>Entry: VIP membership provides 1 entry per draw. No additional purchase is necessary beyond the membership fee.</li>
            <li>Promotion Period: The promotion runs for as long as we deem appropriate. The Platform reserves the right to change or terminate the promotion at any time.</li>
            <li>Prize Draws: Draws will occur periodically throughout the promotion period. Specific prize amounts will be determined and shared prior to each draw.</li>
            <li>Notification and Prize Claim: Winners will be notified via email or phone within 1-5 business days. Prizes must be claimed within 5 business days of notification. Unclaimed prizes will be redrawn.</li>
            <li>Privacy: Personal information collected will be handled in accordance with Wheelz Pty Ltd privacy policy.</li>
            <li>Limitation of Liability: Wheelz Pty Ltd is not responsible for any technical issues or errors during the entry process or the prize draw.</li>
            <li>General Conditions: Wheelz Pty Ltd reserves the right to modify, suspend, or terminate the promotion if necessary.</li>
            <li>Compliance: This promotion complies with the relevant regulations of {stateInfo[state].fullName.charAt(0) + stateInfo[state].fullName.slice(1).toLowerCase()}.</li>
          </ul>

          <p className="font-bold">Privacy Policy</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Data Collection: We collect personal information such as names, email addresses, and phone numbers for administering this promotion.</li>
            <li>Use of Information: Information will be used to contact winners and for promotion administration. We do not share personal information with third parties without consent, except as required by law.</li>
            <li>Data Security: We employ appropriate security measures to protect personal information from unauthorised access, disclosure, alteration, or destruction.</li>
          </ul>

          <p className="font-bold">How to Participate</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Become a member of Wheelz Pty Ltd by signing up for our VIP membership.</li>
            <li>Maintain an active membership status throughout the promotion period.</li>
            <li>Automatically receive 1 entry per draw based on your VIP membership.</li>
            <li>Stay tuned for draw announcements and check your email for notifications if you win!</li>
          </ul>
        </div>
      </section>
    );
  };

  return (
    <div className="max-w-[80%] mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Competition Terms:<br />Wheelz Trade Promotion</h1>
      <p className="text-primary font-semibold text-sm mb-8 text-center">Last Updated: January 2025</p>
      
      <div className="mb-8">
        <label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Your State/Territory:
        </label>
        <select
          id="state-select"
          value={activeState}
          onChange={(e) => setActiveState(e.target.value as StateCode)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      </div>

      {/* Render the section for the selected state */}
      {renderStateSection(activeState)}

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p className="text-sm text-gray-700">
          For any enquiries or further information, please contact us via our email address at: <a href="mailto:hello@wheelz.au" className="text-blue-600 hover:underline">hello@wheelz.au</a>
        </p>
      </div>
    </div>
  );
};

export default CompetitionTerms;