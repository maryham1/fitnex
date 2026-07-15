export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-black py-10 px-4 md:px-15 lg:px-15 mt-20">
        <div className="max-w-5xl space-y-3">
          <p className="uppercase tracking-widest text-[#B7F10A] font-semibold">
            Legal
          </p>

          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-white">
            Privacy Policy
          </h1>

          <p className="text-md md:text-md lg:text-lg text-gray-400">
            Your privacy matters to us. This Privacy Policy explains how FitNex
            collects, uses, and protects your personal information when you use
            our website and fitness services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 md:px-15 lg:px-15">
        <div className="max-w-5xl mx-auto space-y-12 text-gray-700 leading-8">
          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              1. Information We Collect
            </h2>

            <p>
              We collect information that you provide when creating an account,
              purchasing a membership, booking classes, or contacting us
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information</li>
              <li>Fitness goals and preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              2. How We Use Your Information
            </h2>

            <p>We use your information to:</p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Create and manage your account.</li>
              <li>Process memberships and payments.</li>
              <li>Book fitness classes and personal training sessions.</li>
              <li>Send updates, promotions, and newsletters.</li>
              <li>Improve our services and customer experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              3. Data Security
            </h2>

            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              4. Cookies
            </h2>

            <p>
              Our website uses cookies to improve your browsing experience,
              remember your preferences, and analyze website traffic.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              5. Third-Party Services
            </h2>

            <p>
              We may use trusted third-party providers for payment processing,
              analytics, and communication. These providers only receive the
              information necessary to perform their services.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              6. Your Rights
            </h2>

            <p>You have the right to:</p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Access your personal information.</li>
              <li>Request corrections to inaccurate information.</li>
              <li>Delete your account and personal data.</li>
              <li>Opt out of marketing emails at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              7. Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-md lg:text-2xl  font-bold text-black mb-4">
              8. Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us.
            </p>

            <div className="mt-5 rounded-xl bg-gray-100 p-6">
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
