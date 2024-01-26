import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <div className="bg-[url('public/assets/informations/background.png')] bg-no-repeat bg-center bg-cover w-full pt-16 md:pt-32 pb-10 md:pb-20 text-center">
        <h1 className="text-neutrals-100 font-heading heading-md md:heading-lg font-extrabold pb-8">
          Privacy Policy
        </h1>
      </div>
      <div className="bg-neutrals-100 w-full md:grid md:grid-cols-9 pb-8">
        <div className="col-span-3 pl-16 pt-14 hidden md:block">
          <h3 className="heading-md font-bold mb-5">Table of Contents</h3>
          <div className="flex flex-col gap-y-4">
            <a className="heading-sm font-medium">Information we collect</a>
            <a className="heading-sm font-medium">
              How we use your information
            </a>
            <a className="heading-sm font-medium">How we share your information</a>
            <a className="heading-sm font-medium">Data Security</a>
            <a className="heading-sm font-medium">Children’s Privacy</a>
            <a className="heading-sm font-medium">Changes to our Privacy policy</a>
            <a className="heading-sm font-medium">Contact us</a>
          </div>
        </div>
        <div className="col-span-6 pt-14 px-4 md:pr-16 md:pl-16 md:pl-1 body-sm">
          <h2 className="heading-md mb-2">Notices</h2>
          <p>
            This Privacy Policy describes how Realms of Glory ("we," "our" or
            "us") collects, uses, and discloses your Personal Information when
            you use our website and play our game. By accessing or using Realms
            of Glory, you acknowledge that you have read, understood, and agree
            to be bound by this Privacy Policy.
          </p>
          <h2 className="heading-md mb-4 mt-8 font-bold">1. Information we collect</h2>
          <h3 className="heading-sm mt-6 mb-2">1.1 Personal Information</h3>
          <p>
            We collect Personal Information that you voluntarily provide to us
            when you use our website or play our game. This may include:
          </p>
          <ul className="pl-1">
            <li className="my-1">- Your full name</li>
            <li className="my-1">- Email address</li>
            <li className="my-1">- Gender</li>
            <li className="my-1">- IP address</li>
            <li className="my-1">- Device Information</li>
          </ul>
          <h3 className="heading-sm mt-6 mb-2">1.1 Non-Personal Information</h3>
          <p>
            We also collect Non-Personal Information that does not directly
            identify you. This includes:
          </p>
          <ul className="pl-1">
            <li className="my-1">- Anonymous data</li>
            <li className="my-1">- Aggregated data</li>
          </ul>
          <h2 className="heading-md mb-4 mt-8 font-bold">
            2. How we use your information
          </h2>
          <h3 className="heading-sm mt-6 mb-2">2.1 Personal information</h3>
          <p>We use your Personal Information for the following purposes:</p>
          <ul className="pl-1">
            <li className="my-1">- To personalize your experience</li>
            <li className="my-1">- To provide and improve our services</li>
            <li className="my-1">- To communicate with you</li>
            <li className="my-1">- To provide customer support</li>
          </ul>
          <h3 className="heading-sm mt-6 mb-2">2.2 Non-Personal information</h3>
          <p>
            We may use Non-Personal Information for various purposes, including:
          </p>
          <ul className="pl-1">
            <li className="my-1">
              - Analyzing game performance and statistics
            </li>
            <li className="my-1">- Improving our game and services</li>
            <li className="my-1">- Conducting research and analysis</li>
          </ul>
          <h2 className="heading-md mb-4 mt-8 font-bold">
            3. How we share your information
          </h2>
          <h3 className="heading-sm mt-6 mb-2">
            3.1 Third-Party Service Providers
          </h3>
          <p>
            We may share your Personal Information with third-party service
            providers that help us in providing our services, such as payment
            processors and analytics providers. We ensure that these third
            parties maintain the confidentiality and security of your Personal
            Information.
          </p>
          <h3 className="heading-sm mt-6 mb-2">3.2 Legal Requirements</h3>
          <p>
            We may disclose your Personal Information if required to do so by
            law or if we believe that such action is necessary to:
          </p>
          <ul className="pl-1">
            <li className="my-1">- Comply with a legal obligation</li>
            <li className="my-1">
              - Protect and defend our rights or property
            </li>
            <li className="my-1">
              - Prevent or investigate possible wrongdoing
            </li>
          </ul>
          <h2 className="heading-md mb-4 mt-8 font-bold">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your Personal
            Information from unauthorized access, disclosure, alteration, and
            destruction. However, please be aware that no method of transmission
            over the internet or electronic storage is completely secure.
          </p>
          <h2 className="heading-md mb-4 mt-8 font-bold">5. Children’s Privacy</h2>
          <p>
            Realms of Glory is not intended for children under the age of 13. We
            do not knowingly collect Personal Information from children under
            the age of 13. If you believe that we have collected Personal
            Information from a child under the age of 13, please contact us
            immediately.
          </p>
          <h2 className="heading-md mb-4 mt-8 font-bold">
            6. Changes to this Privacy policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time in our sole
            discretion. The updated version will be posted on our website. Your
            continued use of Realms of Glory after any changes to this Privacy
            Policy constitutes your acceptance of the updated policy.
          </p>
          <h2 className="heading-md mb-2 mt-8 font-bold">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at{" "}
            <a className="underline" href="mailto: contact@realmsofglory.io">
              contact@realmsofglory.io
            </a>{" "}
            <br /> Thank you for using Realms of Glory! We hope you enjoy the
            exciting card battle game experience we have created for you,
            including the use and trading of Non-Fungible Tokens (NFTs).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
