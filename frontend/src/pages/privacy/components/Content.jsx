import React from 'react';

function Content() {
  return (
    <div className="w-full max-w-[1010px] h-[80vh] my-[5vh] mx-auto border border-solid border-gray-300 bg-gray-50 rounded-lg overflow-y-scroll">
      <article className="text-black leading-6 p-6">
        <header className="mb-4">
          <h1 className="text-xl font-bold">Our Privacy Obligations</h1>
          <p>
            Freelancer.com ("Freelancer") is governed by the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). The APPs regulate how personal information is handled by Freelancer.com.
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">What is Personal Information?</h2>
          <p>
            'Personal information' means information or an opinion about an identified individual, or an individual who is reasonably identifiable. Freelancer's Privacy Policy applies to personal information collected and/or held by Freelancer.
          </p>
          <p>
            This Privacy Policy also explains how we process 'personal data' about people in the European Union (EU), as required under the General Data Protection Regulation (GDPR). We review this policy regularly and may update it from time to time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">Types of Personal Information We Collect</h2>
          <p>
            We collect personal information to provide our products, services, and customer support. These services are offered through various platforms, including websites, phone apps, email, and telephone.
          </p>
          <ul className="list-disc ml-6">
            <li>Account Details: username, password, profile picture.</li>
            <li>Contact Details: email address, phone number.</li>
            <li>Location Details: physical address, billing address, timezone.</li>
            <li>Identity Details: full name, proof of identity, proof of address.</li>
            <li>Financial Information: credit card details, payment processor details.</li>
            <li>User Generated Content: project descriptions, attachments, user messages.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">How We Collect Personal Information</h2>
          <p>
            We collect personal information directly from users and third-party platforms. This may happen through interactions on our website, apps, online chat systems, or other means.
          </p>
          <p>
            Users may also provide personal information unintentionally through means outside our control, such as social media or forums. In such cases, the governing privacy policy is of the respective platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">How We Use Personal Information</h2>
          <p>We use personal information for purposes such as:</p>
          <ul className="list-disc ml-6">
            <li>Providing requested services or products.</li>
            <li>Facilitating User Contracts and technical support.</li>
            <li>Improving and debugging our platforms.</li>
            <li>Complying with legal obligations and regulations.</li>
            <li>Conducting research and analysis to enhance our services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">Your Rights</h2>
          <p>Users have rights regarding their personal information, including:</p>
          <ul className="list-disc ml-6">
            <li>Accessing and correcting personal information.</li>
            <li>Opting out of direct marketing.</li>
            <li>Requesting erasure or restriction of processing in certain circumstances.</li>
          </ul>
          <p>
            For more details or to exercise these rights, users can contact our Privacy Officer via email or mail.
          </p>
        </section>

        <footer className="mt-6">
          <p>
            For additional information or to file a complaint, please refer to our full Privacy Policy or contact our Privacy Officer at:
          </p>
          <address className="not-italic">
            <strong>Email: </strong> contact.us@becho.com<br />
            <strong>Location</strong> NIT-Surat
          </address>
        </footer>
      </article>
    </div>
  );
}

export default Content;
