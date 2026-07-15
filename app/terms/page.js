export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-black py-10 px-4 md:px-15 lg:px-15">
        <div className="max-w-5xl mx-auto space-y-3  mt-20">
          <p className="uppercase tracking-widest text-[#B7F10A] font-semibold">
            Legal
          </p>

          <h1 className=" text-xl lg:text-text-2xl lg:text-5xl font-bold text-white">
            Terms & Conditions
          </h1>

          <p className="text-md  lg:text-lg text-gray-400">
            Please read these Terms & Conditions carefully before using the
            FitNex website or any of our fitness services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 md:px-15 lg:px-15">
        <div className="max-w-5xl mx-auto space-y-10 text-gray-700 leading-8">
          {/* Acceptance */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using the FitNex website, purchasing a membership,
              or participating in our fitness programs, you agree to comply with
              these Terms & Conditions. If you do not agree with any part of
              these terms, please do not use our services.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              2. Membership Eligibility
            </h2>

            <p>
              Members must provide accurate registration information and keep
              their account details up to date. You are responsible for
              maintaining the confidentiality of your account credentials.
            </p>
          </div>

          {/* Health */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl font-bold text-black mb-4">
              3. Health & Safety
            </h2>

            <p>
              You acknowledge that participating in physical exercise involves
              certain risks. Before starting any fitness program, you should
              consult a qualified healthcare professional if you have any
              medical concerns.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              4. Membership Fees & Payments
            </h2>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Membership fees must be paid according to your selected plan.
              </li>
              <li>
                Late or failed payments may result in suspension of services.
              </li>
              <li>All fees are subject to applicable taxes where required.</li>
            </ul>
          </div>

          {/* Cancellation */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              5. Cancellation & Refunds
            </h2>

            <p>
              Membership cancellations must follow our cancellation policy.
              Refunds are only issued where required by law or as stated in your
              membership agreement.
            </p>
          </div>

          {/* Conduct */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl font-bold text-black mb-4">
              6. Member Conduct
            </h2>

            <p>Members are expected to:</p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Treat staff and fellow members with respect.</li>
              <li>Use equipment responsibly.</li>
              <li>Follow all gym safety guidelines.</li>
              <li>Wear appropriate workout attire.</li>
              <li>Avoid disruptive or abusive behavior.</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              7. Intellectual Property
            </h2>

            <p>
              All content on the FitNex website, including text, graphics,
              logos, images, videos, and branding, is the property of FitNex and
              may not be copied, reproduced, or distributed without written
              permission.
            </p>
          </div>

          {/* Limitation */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              8. Limitation of Liability
            </h2>

            <p>
              FitNex is not responsible for injuries, damages, or losses arising
              from the use of our facilities or website, except where required
              by applicable law.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              9. Changes to These Terms
            </h2>

            <p>
              We reserve the right to modify these Terms & Conditions at any
              time. Updated versions will be published on this page with the
              revised date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl font-bold text-black mb-4">
              10. Contact Information
            </h2>

            <p>
              If you have any questions about these Terms & Conditions, please
              contact us.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:codeysis.1@gmail.com">info@fitnex.com</a>
              </p>

              <p className="mt-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:+2349045808495"> +234 904 5805 495</a>
              </p>
              <p className="mt-2">
                <strong>Address:</strong> 123 Fitness Street, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
