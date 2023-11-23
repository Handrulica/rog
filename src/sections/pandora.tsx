import React from 'react';
import particles from "public/assets/particles.gif";
import nft from "public/assets/pandora/nft.png";
import Separator from "src/components/separator";
import TreasureData from "public/assets/treasures/assets.json";
import useElementSize from "src/hooks/useElementSize";
import symbols from "public/assets/treasures/icons.json";
import { cn } from "src/lib/utils";

const Pandora = () => {
  const [pandoraRef, { width: pandoraWidth }] = useElementSize();
  const [selectedKeySet, setSelectedKeySet] = React.useState<keyof typeof TreasureData>('warrior');
  const [armoryRef, {width}] = useElementSize();

  return (
    <div className="mt-32">
      <div className="sm:bg-[url('public/assets/pandora/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="gradient-two grid sm:grid-cols-2 items-center">
          <div className="sm:mt-32 sm:pl-10 lg:pl-24">
            <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg lg:max-w-md font-bold text-center sm:text-left sm:tracking-wide text-primary-90 px-8">
              pandora’s mystery box
            </h1>
            <p className="heading-2xxs sm:heading-xs md:heading-sm font-bold sm:font-normal text-primary-80 mt-1 text-center sm:text-left sm:mt-2 sm:tracking-wide md:mt-3 px-8 sm:pl-0">
              find the missing link with pandora’s help!
            </p>
            <p className="hidden sm:block text-primary-85 font-bold heading-xs sm:heading-sm lg:heading-md sm:font-bold sm:pl-8 mt-10 lg:tracking-[2px] lg:max-w-lg lg:mt-24">
              a powerful helping hand in your treasure hunt quests!
            </p>
          </div>
          <div className="relative -mt-32">
            <div className="bg-[#b3fbd9] absolute w-[25%] h-[80%] top-[15rem] sm:top-[8rem] left-[40%] blur-[100px]" />
            <img
              src={particles}
              alt="particles"
              className="absolute w-[100%] lg:w-[34rem] lg:h-[36rem] translate-x-48 mt-32 lg:mt-10"
            />
            <img
              src={nft}
              alt="pandora"
              className="w-[13.75rem] h-[17.62rem] lg:w-[24rem] lg:h-[30rem] mx-auto translate-y-[15rem] sm:translate-y-[8rem] relative"
            />
          </div>
        </div>
        <div className="bg-[url('public/assets/pandora/background.png')] sm:bg-none bg-cover bg-center bg-no-repeat">
          <div className="py-24 gradient-two sm:bg-none" />
          <p className="gradient-three text-center text-primary-85 font-bold heading-xs px-16 pt-64 sm:hidden">
            a powerful helping hand in your treasure hunt quests!
          </p>
        </div>
        <div className="flex self-end w-full gradient-one h-[20rem] hidden xl:block" />
      </div>
      <div className="lg:grid xl:grid-cols-3 xl:-mt-48 xl:px-16 px-8">
        <div
          className={cn(
            "double_border m-8 mt-20 pt-5 pb-5 sm:-mt-20 lg:mt-32 xl:mt-[0px] w-fit h-fit mx-auto px-4 sm:pt-1",
            "sm:bg-transparent"
          )}
        >
          <div
            className={cn(
              "absolute flex justify-center text-center top-[-2.2rem] h-fit z-10 -ml-4"
            )}
            style={{ width: `${pandoraWidth}px` }}
          >
            <div className="w-[11.25rem] h-[3.25rem] absolute bg-[url('public/assets/pandora/header.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
              <span className="block text-neutrals-100 font-bold heading-2xxs">
                Armory
              </span>
            </div>
          </div>
          <div className="flex relative justify-center mt-8 z-10">
            <div>
              {Object.keys(symbols).map((key, index) => (
                <button
                  className="mx-2"
                  key={index}
                  onClick={() =>
                    setSelectedKeySet(key as keyof typeof TreasureData)
                  }
                >
                  <img
                    src={symbols[key as keyof typeof symbols]}
                    alt={`treasure_${key}_icon`}
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 md:w-12 sm:h-12",
                      key !== selectedKeySet && "saturate-0"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 w-fit mx-auto pt-4 gap-x-12 gap-y-8 xl:pb-8 px-12">
            {TreasureData[selectedKeySet].items.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedKeySet}_item_${index}`}
                className={cn(
                  "rounded-xs w-[5.625rem] md:w-[7.5rem] h-[7.2rem] md:h-[9.5rem]",
                  image === TreasureData[selectedKeySet].missing && "saturate-0"
                )}
              />
            ))}
          </div>
          <div className="double_border__vertical" ref={armoryRef} />
          <div className="double_border__horizontal" />
        </div>
        <div className="self-center xl:px-[2.75rem]">
          <Separator
            size="small"
            className="mt-12 sm:mt-24 xl:mt-[0px]  mb-3"
          />
          <h1 className="heading-sm sm:heading-md font-bold sm:font-bold text-primary-85 text-center px-8">
            open box
          </h1>
          <p className="text-neutrals-100 text-center body-sm font-light px-12 sm:px-20 lg:px-20 mt-4">
            Pandora will give you the chance to open the mystery box and search
            through all the treasures of the Realms.
          </p>
          <p className="text-neutrals-100 text-center font-bold sm:font-bold heading-2xxs sm:heading-sm px-12 mt-4 sm:mt-8 xl:px-24">
            Pick any Missing Card and complete your Elusive Set!
          </p>
          <p className="hidden sm:block text-neutrals-100 text-center font-bold sm:font-bold heading-2xxs sm:heading-sm px-12 mt-4 xl:px-20 xl:mt-16">
            There is a risk involved, but{" "}
            <span className="text-green-30">the reward</span> is huge!
          </p>
        </div>
        <div className="double_border m-8 mt-20 pt-5  pb-5 sm:mt-32 xl:mt-[0px] sm:w-fit max-w-sm xl:max-w-none mx-10 sm:px-20 mx-auto sm:mx-auto">
          <div
            className={cn(
              "absolute flex justify-center text-center top-[-2.2rem] h-[10rem] z-30 sm:-ml-20"
            )}
            style={{ width: `${width}px` }}
          >
            <div className="w-[13.25rem] h-[3.8rem] absolute bg-[url('public/assets/pandora/header.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
              <span className="block text-neutrals-100 font-bold heading-2xxs">
                Pandora's box
              </span>
            </div>
          </div>
          <div className="mt-8 z-30">
            <img
              src={symbols[selectedKeySet]}
              className="w-8 h-8 lg:w-12 lg:h-12 mx-auto"
              alt="treasure_wizard_icon"
            />
          </div>
          <div className="relative">
            <div className="mt-4 pt-4 relative">
              <div className="flex">
                <img
                  src={TreasureData[selectedKeySet].missing}
                  className="rounded w-[11.25rem] sm:h-[14rem] md:w-[12.5rem] md:h-[16.25rem] sm:h-[15.4rem] md:h-[19.81rem] lg:w-[17.18rem] lg:h-[22.75rem] mx-auto evolved_green"
                  alt="treasure_wizar_orb"
                />
              </div>
            </div>
          </div>
          <span className="block text-neutrals-100 text-center font-bold heading-sm white-shadow mt-12 xl:mt-20 mb-8">
            PICK CARD
          </span>
          <div className="double_border__vertical" ref={pandoraRef} />
          <div className="double_border__horizontal" />
        </div>
      </div>
    </div>
  );
};

export default Pandora;
