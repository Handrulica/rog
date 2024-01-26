import React from "react";

const Copyright: React.FC = () => {
  return (
    <div>
      <div className="bg-[url('public/assets/informations/background.png')] bg-no-repeat bg-center bg-cover w-full pt-16 md:pt-32 pb-10 md:pb-20 text-center">
        <h1 className="text-neutrals-100 font-heading heading-md md:heading-lg font-extrabold pb-8">
          Copyright Notice
        </h1>
      </div>
      <div className="bg-neutrals-100 w-full pb-8 px-4 md:px-32 py-8 h-screen">
        <p>Copyright @2023 Realms of Glory. All rights reserved.</p>
        <br />
        <p>
          The materials, content, and designs, including but not limited to
          text, graphics, logos, images, and audiovisual elements, displayed or
          used in Realms of Glory are protected by copyright and other
          intellectual property laws. Any unauthorized use, reproduction, or
          distribution of these materials may violate copyright laws and result
          in severe civil and criminal penalties.
        </p>
        <br />
        <p>
          Realms of Glory, including its name, logo, and associated icons, is a
          registered trademark of Realms of Glory. Unauthorized use or
          reproduction of these trademarks is strictly prohibited.
        </p>
        <br />
        <p>
          The copyright notice and trademark notice must be included in any
          copies or reproductions of Realms of Glory, including its materials
          and content, created or used without explicit permission from Realms
          of Glory.
        </p>
        <br />
        For inquiries regarding permissions, licensing, or potential copyright
        and trademark infringement issues, please contact us at{" "}
        <a href="mailto:contact@realmsofglory.io" className="underline">
          contact@realmsofglory.io
        </a>
        <br />
        Thank you for respecting our intellectual property rights.
      </div>
    </div>
  );
};

export default Copyright;
