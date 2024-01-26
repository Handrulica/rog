import Loop from "src/components/loop";
import bronze_coin from "public/assets/coins/eth/eth_bronze.gif";
import silver_coin from "public/assets/coins/eth/eth_silver.gif";
import gold_coin from "public/assets/coins/eth/eth_gold.gif";
import platinum_coin from "public/assets/coins/eth/eth_platinum.gif";

import ArenaOption from "src/components/arena_option";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";
import useScreenSizeComparison from "src/hooks/useScreenSizeComparasion";

const Arena = () => {
  const imageType = useDynamicImageType();
  const isBelowMd = useScreenSizeComparison("md");
  
  return (
    <div className="w-full overflow-x-hidden" id="arena_section">
      <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90">
        The Arena
      </h1>
      <Loop direction="left" speed={20} className="my-2 sm:mt-6 md:mt-8">
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            Experience-based VRF Battle Pairing
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            Fast, Automatic Outcomes
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            High-Stakes Crypto Duels
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            Exclusive NFT Rewards
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            Rewardable Leaderboard
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            Real-Time Analytics
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
        <div className="flex items-center">
          <p className="heading-2xxs lg:heading-xs text-neutrals-100 flex items-center text-green-30">
            NFT-Powered Deck Building Strategies
          </p>
          <span className="heading-lg block ml-8 text-neutrals-100 ">
            &#x2022;
          </span>
        </div>
      </Loop>
      <div
        style={{
          backgroundImage: isBelowMd
            ? `url("${getImageUrl(
              "arena/background_mobile"
            )}.${imageType}")`
            : `url("${getImageUrl(
              "arena/background_desktop"
            )}.${imageType}")`,
        }}
        className={`bg-top-left sm:bg-left xl:bg-center bg-cover bg-no-repeat h-fit relative`}
      >
        <div className="gradient-two">
          <div className="w-full gradient-two sm:bg-none pb-20 md:pt-20 lg:pb-32">
            <p className="heading-xxs sm:heading-3xxs md:heading-xs xl:heading-sm font-bold sm:font-bold text-primary-80 text-center px-12">
              Experience Lightning-Fast Battle Outcomes in Realms of Glory!
              <br />
              Join Epic Showdowns with Players Across Four Battle Categories
            </p>
            <h2 className="heading-2xxs sm:heading-xs md:heading-md xl:heading-2md sm:tracking-[0.15rem] text-neutrals-100 font-bold sm:font-bold text-center flex items-center justify-center mt-3 sm:mt-4 md:mt-5">
              Win Instant{" "}
              <img
                className="w-[32px] h-[32px] sm:w-[29px] sm:h-[29px] md:w-[32px] md:h-[32px] lg:w-[48px] lg:h-[48px] mx-[0.1rem] md:mx-2"
                src={gold_coin}
              />{" "}
              eth rewards for each victory{" "}
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 md:gap-16 mx-auto gradient-three lg:bg-none lg:pt-10 lg:px-[15%]">
            <ArenaOption
              type="bronze"
              image={bronze_coin}
              first={1}
              second={2}
            />
            <ArenaOption
              type="silver"
              image={silver_coin}
              first={1}
              second={5}
            />
            <ArenaOption type="gold" image={gold_coin} first={1} second={9} />
            <ArenaOption
              type="platinum"
              image={platinum_coin}
              first={1}
              second={15}
            />
          </div>
          <div className="bg-neutrals-0/80 lg:bg-neutrals-0/0 lg:gradient-one ">
            <div className="h-8 md:h-64 lg:h-[10rem] w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
