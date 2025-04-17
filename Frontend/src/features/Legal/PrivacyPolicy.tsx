
import banner from "@/assets/Legal/Privacy-Policy-by-Wheelz-scaled.webp";
import AllFooterSection from "@/util/AllFooterSection";

const terms = [
 
  {
    title: "1. Information We Collect",
    content: [
      "1.1 Personal Information",
      "We collect a broad range of personal information to enhance and personalise your experience with our services.",
      "User Data: This includes your name, email address, phone number, and other contact details you provide during account creation.",
      "Vehicle Information: Details about your vehicle(s) such as make, model, year, VIN, maintenance history, and warranty information.",
      "Location Data: GPS and other location-based data when you use our mobile applications or connected services to provide real-time traffic updates, location-based services, and assistance in emergency situations.",
      "Usage Information: We gather data related to your interactions with our services, including log files, performance metrics, error reports, and other analytics.",

      "1.2 Payment Information",
      "For seamless transactions within our services, we collect payment information, including credit card details, billing address, and transaction history. Rest assured, all payment data is handled securely and complies with industry standards.",

      "1.3 Cookies and Similar Technologies",
      "We utilise cookies and similar technologies to understand your preferences, enhance user experience, analyse usage patterns, and deliver targeted content."
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "2.1 Service Provision",
      "Your information is primarily used to provide and improve our automotive ecosystem services. This includes maintenance scheduling, vehicle diagnostics, and delivering relevant notifications.",

      "2.2 Communication",
      "We may contact you for service-related updates, communications, and promotional offers. You have the option to opt-out of promotional communications at any time.",

      "2.3 Personalisation",
      "We use your data to personalise your experience. This involves recommending relevant services, tailoring content based on your preferences, and optimising user interfaces.",

      "2.4 Analytics and Research",
      "User data is analysed to enhance our services, conduct research, and improve the overall performance of our automotive ecosystem. This includes studying usage patterns, identifying areas for improvement, and implementing updates."
    ]
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "3.1 Third-Party Service Providers",
      "In delivering our services, we may share your information with carefully selected third-party service providers. These providers assist in payment processing, data storage, and other essential functions. All third-party relationships are governed by contractual agreements ensuring the protection of your data.",

      "3.2 Legal Compliance",
      "We may disclose your information in response to valid legal requests or to comply with applicable laws, regulations, or government requests.",

      "3.3 Business Transfers",
      "In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of the transaction. We commit to notifying you promptly of any change in ownership or control."
    ]
  },
  {
    title: "4. Security Measures",
    content: [
      "We take the security of your personal information seriously. To protect against unauthorised access, disclosure, alteration, and destruction, we employ industry-standard security measures. This includes robust encryption, access controls, regular security audits, and continuous monitoring."
    ]
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information for the duration necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law."
    ]
  },
  {
    title: "6. Your Rights and Choices",
    content: [
      "You have the right to access, correct, or delete your personal information. Additionally, you can manage your communication preferences and opt-out of certain data processing activities. To exercise your rights, please contact us at hello@wheelz.au."
    ]
  },
  {
    title: "7. Changes to this Privacy Policy",
    content: [
      "We reserve the right to update this Privacy Policy to reflect changes in our practices or for legal reasons. We will notify you of any material changes through our website, email, or other communication channels."
    ]
  },
  {
    title: "8. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our dedicated privacy team at hello@wheelz.au."
    ]
  }
];

export default function PrivacyPolicy() {
    return (
        <>
      <div className="max-w-full mx-auto">
        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px]">
          <img src={banner} alt="Privacy Policy Banner" className="w-full h-full object-cover" />
        </div>
  
        <div className="sm:max-w-[80%] max-w-full mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
          <h4 className="text-primary font-semibold">Last Updated: January 2025</h4>
          <p className="text-[#666] font-light text-sm mb-6 leading-relaxed">Thank you for choosing Wheelz.au as your automotive ecosystem service provider. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in connection with our services. Please read this document carefully to understand our practices regarding your data and how we will treat it.</p>
  
          <section className="space-y-10">
            {terms.map((term, idx) => (
              <div key={idx} className="text-left">
                <h2 className="text-[18px] font-bold text-[#666] mb-2 leading-snug">{term.title}</h2>
                {term.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-[#666] font-light text-sm mb-2 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </section>
        </div>
      </div>

      <AllFooterSection content={[
        ``
      ]} mode="compact"/>
      </>
    );
  }
  