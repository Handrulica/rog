import React from "react";
import { Button } from "src/components/button";
import Loop from "src/components/loop";
import menu from "public/assets/icons/Menu.svg";
import character_1 from "public/assets/landing/character_1.png";
import character_2 from "public/assets/landing/character_2.png";
import character_3 from "public/assets/landing/character_3.png";
import character_4 from "public/assets/landing/character_4.png";
import bnb_coin from "public/assets/landing/bnb_coin.png";
import landingData from "public/assets/landing/assets.json";
import close from "public/assets/icons/close.svg";
import { cn } from "src/lib/utils";
import discord from "public/assets/footer/discord.svg";
import telegram from "public/assets/footer/telegram.svg";
import twitter from "public/assets/footer/twitter.svg";
import useHover from "src/hooks/useHover";
import { scrollTo } from "src/helpers/scrollTo";

function ScrollLock() {
  React.useEffect(() => {
    // Prevent scrolling on the entire page
    document.body.style.overflow = "hidden";

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return null;
}

interface MenuItemProps {
  title: string;
  items?: {
    title: string;
    to: string;
  }[];
  hasChildren?: boolean;
  to?: string;
  closeMenu: () => void;
}

const MenuItem = ({ title, hasChildren, to, items, closeMenu }: MenuItemProps) => {
  const ref = React.useRef(null);
  const isHover = useHover(ref);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleHeaderClick = () => {
    if(hasChildren) {
      setIsOpen(!isOpen);
    }
    else if (to !== undefined) {
      scrollTo(to);
      closeMenu();
    }
  }

  const handleItemClick = (itemLink: string) => {
    scrollTo(itemLink);
    closeMenu();
  }

  return (
    <div ref={ref} className="w-full text-center">
      <h1
        onClick={() =>  handleHeaderClick()}
        className={cn(
          "block text-neutrals-80 font-bold heading-sm uppercase cursor-pointer",
          isHover && "text-primary"
        )}
        
      >
        {isHover && <span className="mr-2">&#x2022;</span>}
        {title}
        {isHover && <span className="ml-2">&#x2022;</span>}
      </h1>
      {isOpen && hasChildren && items && (
        <div className="mt-2">
          {items.map((item, index) => (
            <h2
              onClick={() => handleItemClick(item.to)}
              key={index}
              className="block body-sm text-neutrals-70 cursor-pointer hover:text-primary hover:underline hover:decoration-2 my-2"
            >
              {item.title}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export const Landing = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  console.log(showMenu);
  return (
    <div id="landing_section">
      <div className="bg-[url('public/assets/landing/background.png')] bg-left-top bg-cover bg-no-repeat h-fit">
        <div className="px-4 py-3 flex justify-between lg:justify-end lg:flex-row-reverse text-primary-90 font-bold heading-2xxs lg:heading-xs lg:font-bold items-center lg:px-12 lg:py-10">
          <h1>Realms of Glory</h1>
          <button
            className="lg:mr-5 ml-auto"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={menu} alt="menu" />
          </button>
          {
            <div>
              {showMenu && <ScrollLock />}
              <div
                className={cn(
                  "fixed overflow-hidden z-[9999]  top-[0px] right-[0px] bottom-[0px] w-[100vw] h-[100vh] bg-[url('public/assets/landing/background.png')] bg-right-top bg-cover bg-no-repeat menu",
                  showMenu ? "menu_open" : "menu_close"
                )}
              >
                <div className="bg-neutrals-5/50 h-full">
                  <div className="px-4 py-3 flex flex-row-reverse justify-end lg:justify-end lg:flex-row-reverse text-primary-90 font-bold heading-2xxs lg:heading-xs lg:font-bold items-center lg:px-12 lg:py-10">
                    <h1 className="text-neutrals-100">Realms of Glory</h1>
                    <button
                      className="mr-5"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <img src={close} alt="menu" />
                    </button>
                  </div>
                  <div className="ml-5 text-center w-fit font-normal text-neutrals-100">
                    <div>M</div>
                    <div>E</div>
                    <div>N</div>
                    <div>U</div>
                  </div>
                  <div className="space-y-6">
                    <MenuItem
                      title="Home"
                      to="landing_section"
                      hasChildren={false}
                      closeMenu={() => setShowMenu(false)}
                    />
                    <MenuItem
                      title="Game"
                      items={[
                        { title: "The Battle Deck", to: "battledeck_section" },
                        { title: "Arena", to: "arena_section" },
                        { title: "Treasure Hunt", to: "nfts_section_two" },
                        {
                          title: "Champion's Call Tournament",
                          to: "#tournament_section",
                        },
                        { title: "The Oracle", to: "oracle_section" },
                      ]}
                      hasChildren={true}
                      closeMenu={() => setShowMenu(false)}
                    />
                    <MenuItem
                      title="Cards"
                      items={[
                        { title: "The Battle Pack", to: "battlepack_section" },
                        { title: "Battle Cards", to: "battlecard_section" },
                        {
                          title: "Enchatment Cards",
                          to: "enchantment_section",
                        },
                        { title: "Unique Cards", to: "nfts_section_two" },
                        { title: "NFT Utility Cards", to: "nfts_section_two" },
                      ]}
                      hasChildren={true}
                      closeMenu={() => setShowMenu(false)}
                    />
                    <MenuItem
                      title="FAQ"
                      to="faq_section"
                      hasChildren={false}
                      closeMenu={() => setShowMenu(false)}
                    />
                    <MenuItem
                      title="Roadmap"
                      to="roadmap_section"
                      hasChildren={false}
                      closeMenu={() => setShowMenu(false)}
                    />
                    <MenuItem
                      title="Team"
                      to="team_section"
                      hasChildren={false}
                      closeMenu={() => setShowMenu(false)}
                    />
                  </div>
                  <div className="flex-col mt-10 self-end h-fit w-full pl-5">
                    <a href="" target="_blank" className="block my-3">
                      <img src={discord} alt="discord" />
                    </a>
                    <a href="" target="_blank" className="block my-3">
                      <img src={telegram} alt="discord" />
                    </a>
                    <a href="" target="_blank" className="block my-3">
                      <img src={twitter} alt="discord" />
                    </a>
                    <div className="w-full h-8 border-l-solid border-l-[1px] border-neutrals-80 ml-3" />
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="relative h-[26rem] sm:h-[30rem] md:h-[42.5rem] lg:h-[70rem] xl:h-[57rem] lg:-mt-10">
          <div className="absolute w-full">
            <div className="relative w-[50%]">
              <img
                src={character_3}
                alt="character_3"
                className="absolute h-[15rem] sm:h-[21.5rem] md:h-[28rem] lg:h-[39.3rem] xl:h-[50.6rem]"
              />
              <img
                src={character_2}
                alt="character_2"
                className="absolute h-[15rem] sm:h-[21.5rem] md:h-[28rem] lg:h-[39.3rem] xl:h-[50.6rem] top-16 sm:top-24 md:top-48 lg:top-24"
              />
            </div>
            <div className="relative w-[50%] float-right flex justify-end lg:-ml-10">
              <img
                src={character_4}
                alt="character_3"
                className="absolute h-[18rem] sm:h-[24.5rem] md:h-[32rem] lg:h-[39.3rem] xl:h-[54.6rem] top-3 sm:top-5 md:top-9"
              />
              <img
                src={character_1}
                alt="character_2"
                className="absolute h-[15rem] sm:h-[21.5rem] md:h-[28rem] lg:h-[39.3rem] xl:h-[50.6rem] top-16 sm:top-24 md:top-48 lg:top-20"
              />
            </div>
          </div>
          <div className="w-full pt-10 hidden xl:block absolute bottom-[50%]">
            <h1 className="heading-md sm:heading-lg md:heading-3lg text-primary-85 font-bold sm:font-bold md:font-bold text-center px-8 tracking-[1.9px] leading-[2rem]">
              {" "}
              Collect, battle, <br /> stake and{" "}
              <span className="text-primary-100">earn</span>
            </h1>
            <h2 className="heading-xxs md:heading-2xxs lg:heading-xs text-primary-90 font-bold sm:font-bold text-center flex justify-center mt-4 items-center">
              Instant{" "}
              <img
                className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] lg:w-[32px] lg:h-[32px] mx-1"
                src={bnb_coin}
              />{" "}
              bnb rewards for each victory{" "}
            </h2>
            <div className="flex w-full">
              <Button variant="default" size="default" className="mt-6 mx-auto">
                Buy Nfts
              </Button>
            </div>
          </div>
          <div className="gradient-one w-full pt-16 pb-2 flex flex-col justify-center absolute bottom-[0px]">
            <div className="gradient-one w-full pt-12 xl:hidden">
              <h1 className="heading-md sm:heading-lg md:heading-3lg text-primary-85 font-bold sm:font-bold md:font-bold text-center px-8 tracking-[1.9px] leading-[2rem]">
                {" "}
                Collect, battle, <br /> stake and{" "}
                <span className="text-primary-100">earn</span>
              </h1>
              <h2 className="heading-xxs md:heading-2xxs text-primary-90 font-bold sm:font-bold text-center flex justify-center mt-4 items-center">
                Instant{" "}
                <img
                  className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] lg:w-[32px] lg:h-[32px] mx-1"
                  src={bnb_coin}
                />{" "}
                bnb rewards for each victory{" "}
              </h2>
              <div className="flex w-full pb-16">
                <Button
                  variant="default"
                  size="default"
                  className="mt-6 mx-auto"
                >
                  Buy Nfts
                </Button>
              </div>
            </div>
            <div className="bg-neutrals-0 xl:gradient-one w-full pt-2 xl:pt-10 hidden lg:block">
              <Loop direction="left" speed={30} className="mt-12">
                {landingData.cards.map((image, index) => (
                  <img
                    src={image}
                    key={index}
                    alt="landing_card"
                    className="rounded-[6%] w-[7.5rem] h-[9.68rem] sm:w-[10rem] sm:h-[11.93rem] md:w-[12.5rem] md:h-[16.18rem] lg:w-[11.25rem] lg:h-[14.56rem]"
                  />
                ))}
              </Loop>
            </div>
          </div>
        </div>
      </div>
      <Loop direction="left" speed={8} className="mt-12 md:mt-16 lg:hidden">
        {landingData.cards.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="landing_card"
            className="rounded-[6%] w-[7.5rem] h-[9.68rem] sm:w-[10rem] sm:h-[11.93rem] md:w-[12.5rem] md:h-[16.18rem]"
          />
        ))}
      </Loop>
    </div>
  );
};

export default Landing;
