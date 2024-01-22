import React from "react";
import arrow_left from "public/assets/shrine/arrow_left.svg";
import arrow_right from "public/assets/shrine/arrow_right.svg";
import double_headed_arrow from "public/assets/battlecard/double_headed_arrow.svg";
import particles from "public/assets/components/particles.gif";
import types from "public/assets/types/types.json";
import rarities from "public/assets/rarities/rarities.json";
import BattleCardsData from "public/assets/battlecard/assets.json";
import assets from "public/assets/shrine/assets.json";
import { cn } from "src/lib/utils";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";
import ImageWithFallback from "./image";

const shrineTypes = ["creature", "titan", "god"];
const shrineIndexes = [2, 3, 4];

interface SectionProps {
  selectedShrineTypeIndex: number;
  aboveXl: boolean;
  setSelectedShrineTypeIndex: (index: number) => void;
}

const Section = ({
  aboveXl,
  selectedShrineTypeIndex,
  setSelectedShrineTypeIndex,
}: SectionProps) => {
  const imageType = useDynamicImageType();

  return (
    <div
      className={cn(
        "sm:pt-12",
        aboveXl === true ? "hidden xl:block" : "xl:hidden gradient-three"
      )}
    >
      <div>
        <p className="heading-2xxs lg:heading-sm font-bold text-primary-80 text-center">
          Daily Card Generation
        </p>
        <p className="heading-sm lg:heading-md font-bold text-neutrals-100 mt-2 sm:mt-1 text-center">
          {" "}
          1 x GOD CARD / 24 H
        </p>
      </div>
      <div className="flex space-x-3 w-fit mx-auto mt-5 ">
        <button onClick={() => setSelectedShrineTypeIndex(0)}>
          <ImageWithFallback
            src={
              selectedShrineTypeIndex === 0
                ? types.creature.selected
                : types.creature.default
            }
            alt="creature_icon"
            className={cn(
              selectedShrineTypeIndex === 0
                ? "w-10 h-10 lg:w-16 lg:h-16"
                : "w-8 h-8 lg:w-12 lg:h-12"
            )}
          />
        </button>
        <button onClick={() => setSelectedShrineTypeIndex(1)}>
          <ImageWithFallback
            src={
              selectedShrineTypeIndex === 1
                ? types.titan.selected
                : types.titan.default
            }
            alt="titan_icon"
            className={cn(
              selectedShrineTypeIndex === 1
                ? "w-10 h-10 lg:w-16 lg:h-16"
                : "w-8 h-8 lg:w-12 lg:h-12"
            )}
          />
        </button>
        <button onClick={() => setSelectedShrineTypeIndex(2)}>
          <ImageWithFallback
            src={
              selectedShrineTypeIndex === 2
                ? types.god.selected
                : types.god.default
            }
            alt="god_icon"
            className={cn(
              selectedShrineTypeIndex === 2
                ? "w-10 h-10 lg:w-16 lg:h-16"
                : "w-8 h-8 lg:w-12 lg:h-12"
            )}
          />
        </button>
      </div>
      <span className="block text-center heading-2xxs lg:font-sm xl:heading-sm font-bold text-primary-80 my-8 sm:mt-16 sm:mb-4 xl:mt-8">
        DROP ODDS
      </span>
      <div className="grid grid-cols-6 w-fit mx-auto">
        {Object.entries(rarities).map((rarity, index) => (
          <div key={index} className="text-center">
            <ImageWithFallback
              src={rarity[1].image}
              alt={rarity[0] + "_icon"}
              className="w-12 h-12 mx-2"
            />
            {/* <span className='text-neutrals-100 heading-3xxs text-center'>{rarity[1].drop_chance} %</span> */}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 w-fit mx-auto">
        <div className="w-32 h-[1px] border-solid border-[1px] border-primary" />
        <span className="block text-primary-90 heading-2xxs font-bold text-center mx-4">
          TBA
        </span>
        <div className="w-32 h-[1px] border-solid border-[1px] border-primary" />
      </div>
      <div className="text-center spacing-y-2 mt-8">
        <span className="block text-primary-90 heading-2xxs font-bold">
          Power
        </span>
        <div className="flex justify-center">
          <div style={{backgroundImage: `url(${getImageUrl("../../public/assets/battlecard/orb")}.${imageType})`}} className="w-[3.75rem] h-[3.75rem] text-center align-middle bg-contain bg-center bg-no-repeat flex items-center justify-center">
            <span className="heading-md text-primary-100 font-bold">
              {
                BattleCardsData.powerranges[
                  shrineTypes[
                    selectedShrineTypeIndex
                  ] as keyof typeof BattleCardsData.powerranges
                ].beginning
              }
            </span>
          </div>
          <img src={double_headed_arrow} className="mx-2 w-8" />
          <div style={{backgroundImage: `url(${getImageUrl("../../public/assets/battlecard/orb")}.${imageType})`}} className="w-[3.75rem] h-[3.75rem] text-center align-middle bg-contain bg-center bg-no-repeat flex items-center justify-center">
            <span className="heading-md text-primary-100 font-bold">
              {
                BattleCardsData.powerranges[
                  shrineTypes[
                    selectedShrineTypeIndex
                  ] as keyof typeof BattleCardsData.powerranges
                ].end
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shrine = () => {
  const imageType = useDynamicImageType();
  const [selectedShrineTypeIndex, setSelectedShrineTypeIndex] =
    React.useState(0);
  const [isFirstNftSelected, setIsFirstNftSelected] = React.useState(true);

  const getNextShrineTypeIndex = (stepsToSkip: number) => {
    if (selectedShrineTypeIndex + stepsToSkip >= shrineTypes.length) return 0;
    if (selectedShrineTypeIndex + stepsToSkip < 0)
      return shrineTypes.length - 1;
    return selectedShrineTypeIndex + stepsToSkip;
  };

  const skipShrineTypes = (stepsToSkip: number) => {
    const step = getNextShrineTypeIndex(stepsToSkip);
    setSelectedShrineTypeIndex(step);
  };

  return (
    <div style={{backgroundImage: `url(${getImageUrl("../../public/assets/shrine/background")}.${imageType})`}} className="w-full bg-left bg-cover bg-no-repeat">
      <div className="gradient-two xl:pb-32">
        <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90 px-8">
          The Shrine
        </h1>
        <p className="heading-2xxs sm:heading-xs md:heading-sm font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3 px-8 lg:mb-16 xl:mb-32">
          DAILY CARD GENERATION WITH THE POWERFUL ONE’S BLESSING!
        </p>
        <span className="block sm:hidden heading-lg font-bold text-primary-90 mt-10 px-8">
          {Object.values(types)[
            shrineIndexes[selectedShrineTypeIndex]
          ].plural.toUpperCase()}
        </span>
        <div className="w-full sm:bg-none bg-center bg-cover bg-no-repeat sm:pl-10">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gradient-two sm:bg-none sm:items-center">
            <div className="w-full px-8 sm:pl-8 sm:pr-4 mt-2 sm:mt-20">
              <span className="hidden sm:block heading-lg md:heading-2lg lg:heading-3lg 2xl:heading-2xl font-bold text-primary-90 mt-10">
                {Object.values(types)[
                  shrineIndexes[selectedShrineTypeIndex]
                ].plural.toUpperCase()}
              </span>
              <p className="heading-xxs lg:heading-sm font-bold text-primary-85 sm:mt-2 max-w-md">
                Harness Extreme Power with Selected Greek Gods, Titans, and
                Mythical creatures.
              </p>
              <p className="body-xs sm:body-sm text-neutrals-100 mt-8">
                Enter The Shrine and Pick Up a Powerful Card Every Day!
              </p>
              <div className="flex items-center mt-5 space-x-2">
                <ImageWithFallback
                  src={
                    assets[
                      shrineTypes[
                        selectedShrineTypeIndex
                      ] as keyof typeof assets
                    ].card_1
                  }
                  alt="card_1"
                  onClick={() => setIsFirstNftSelected(true)}
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 lg:h-[3.8rem] lg:w-[4rem] xl:h-[4.6rem] xl:w-[4.8rem] cursor-pointer",
                    isFirstNftSelected
                      ? "shrine_card_border_selected"
                      : "shrine_card_border"
                  )}
                />
                <ImageWithFallback
                  src={
                    assets[
                      shrineTypes[
                        selectedShrineTypeIndex
                      ] as keyof typeof assets
                    ].card_2
                  }
                  alt="card_2"
                  onClick={() => setIsFirstNftSelected(false)}
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 lg:h-[3.8rem] lg:w-[4rem] xl:h-[4.6rem] xl:w-[4.8rem] cursor-pointer",
                    !isFirstNftSelected
                      ? "shrine_card_border_selected"
                      : "shrine_card_border"
                  )}
                />
              </div>
              <div className="flex z-40 items-center mt-8 space-x-3 xl:mt-40">
                <button onClick={() => skipShrineTypes(-1)}>
                  <img
                    src={arrow_left}
                    alt="hephaestus_1"
                    className="w-8 h-8 cursor-pointer"
                  />
                </button>
                <button onClick={() => skipShrineTypes(1)}>
                  <img
                    src={arrow_right}
                    onClick={() => skipShrineTypes(1)}
                    alt="hephaestus_2"
                    className="w-8 h-8 cursor-pointer"
                  />
                </button>
                <p className="heading-2xxs font-bold text-primary-90">
                  NEXT:{" "}
                  {Object.values(types)[
                    shrineIndexes[getNextShrineTypeIndex(1)]
                  ].plural.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="relative mt-12 md:-mt-12">
              <div className="bg-primary-30 absolute w-[50%] h-[100%] top-24 left-[25%] blur-[100px]" />
              <img
                src={particles}
                alt="particles"
                className="absolute w-[100%] h-[20rem] sm:w-[16rem] sm:h-[22rem] sm:translate-x-[2rem] sm:translate-y-[4rem] md:translate-x-[5.5rem] lg:w-[30rem] lg:h-[25rem] lg:translate-x-[2rem] xl:w-[45rem] xl:h-[42rem] 2xl:w-[40rem] xl:-translate-x-[0rem] xl:translate-y-[2rem] 2xl:translate-x-[0rem]"
              />
              {isFirstNftSelected ? (
                <ImageWithFallback
                  src={
                    assets[
                      shrineTypes[
                        selectedShrineTypeIndex
                      ] as keyof typeof assets
                    ].nft_1
                  }
                  alt="shrine_nft"
                  className="w-[13.75rem] h-[17.62rem] lg:w-[17rem] lg:h-[22.38rem] xl:w-[26.68rem] xl:h-[35rem] mx-auto md:translate-y-24 relative"
                />
              ) : (
                <ImageWithFallback
                  src={
                    assets[
                      shrineTypes[
                        selectedShrineTypeIndex
                      ] as keyof typeof assets
                    ].nft_2
                  }
                  alt="shrine_nft"
                  className="w-[13.75rem] h-[17.62rem] lg:w-[17rem] lg:h-[22.38rem] xl:w-[26.68rem] xl:h-[35rem] mx-auto md:translate-y-24 relative"
                />
              )}
            </div>
            <Section
              setSelectedShrineTypeIndex={setSelectedShrineTypeIndex}
              selectedShrineTypeIndex={selectedShrineTypeIndex}
              aboveXl={true}
            />
          </div>
          <div className="xl:hidden w-full h-16 gradient-three" />
        </div>
      </div>
      <div className="hidden xl:block w-full h-16 gradient-three" />
      <Section
        setSelectedShrineTypeIndex={setSelectedShrineTypeIndex}
        selectedShrineTypeIndex={selectedShrineTypeIndex}
        aboveXl={false}
      />
    </div>
  );
};

export default Shrine;
