import discord from "public/assets/footer/discord.svg";
import telegram from "public/assets/footer/telegram.svg";
import twitter from "public/assets/footer/twitter.svg";

const Footer = () => {
  return (
    <div className="px-4 sm:px-16 py-12 sm:mt-32 lg:mt-48">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 sm:gap-x-24">
        <div className="flex flex-col space-y-4">
          <h2 className="text-primary-90 font-bold heading-2xxs">Game</h2>
          <a href="#battledeck_section" className="text-primary-95 font-bold heading-xxs">
            The Battle Deck
          </a>
          <a href="#arena_section" className="text-primary-95 font-bold heading-xxs">The Arena</a>
          <a href="#nfts_section_two" className="text-primary-95 font-bold heading-xxs">Treasure Hunt</a>
          <a href="#tournament_section" className="text-primary-95 font-bold heading-xxs">
            Tournament
          </a>
          <a href="#oracle_section" className="text-primary-95 font-bold heading-xxs">The Oracle</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-primary-90 font-bold heading-2xxs">Cards</h2>
          <a href="#battlepack_section" className="text-primary-95 font-bold heading-xxs">
            The Battle Pack
          </a>
          <a href="#battlecard_section" className="text-primary-95 font-bold heading-xxs">Battle Cards</a>
          <a href="#enchantment_section" className="text-primary-95 font-bold heading-xxs">
            Enchantment Cards
          </a>
          <a href="#nfts_section_two" className="text-primary-95 font-bold heading-xxs">Unique Cards</a>
          <a href="#nfts_section" className="text-primary-95 font-bold heading-xxs">Nft Cards</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-primary-90 font-bold heading-2xxs">Company</h2>
          <a href="#roadmap_section" className="text-primary-95 font-bold heading-xxs">Roadmap</a>
          <a href="#team_section" className="text-primary-95 font-bold heading-xxs">Team</a>
          <a href="#faq_section" className="text-primary-95 font-bold heading-xxs">Faq</a>
          <a href="https://medium.com/@contact_29520" target="_blank" className="text-primary-95 font-bold heading-xxs">Press</a>
          <a href="mailto:contact@realmsofglory.io" className="text-primary-95 font-bold heading-xxs">Contact</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-primary-90 font-bold heading-2xxs">Legal</h2>
          <a className="text-primary-95 font-bold heading-xxs">
            Terms and Conditions
          </a>
          <a className="text-primary-95 font-bold heading-xxs">
            Privacy Policy
          </a>
          <a className="text-primary-95 font-bold heading-xxs">
            Copyright Notice
          </a>
        </div>
      </div>
      <div className="border-t-solid border-t-[1px] border-t-neutrals-40 mt-24 pt-8 sm:flex sm:flex-row-reverse items-center justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-fit items-center">
          <a href="mailto:contact@realmsofglory.io" className="text-neutrals-100 font-bold heading-xxs mt-5 sm:mt-[0px] block lg:mr-8">
            contact@realmsofglory.io
          </a>
          <div className="flex gap-5">
            <a href="https://discord.gg/KWnQWDxRYG" target="_blank">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://t.me/realmsofglory" target="_blank">
              <img src={telegram} alt="discord" />
            </a>
            <a href="https://twitter.com/realmsofglory_" target="_blank">
              <img src={twitter} alt="discord" />
            </a>
          </div>
        </div>
        <p className="text-neutrals-100 font-bold heading-xxs mt-5 sm:mt-[0px] block">
          © {new Date().getFullYear()} Realms of Glory. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
