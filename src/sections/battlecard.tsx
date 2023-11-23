import React from "react";
import BattleCardsData from "public/assets/battlecard/assets.json";
import types from "public/assets/types/types.json";
import rarities from "public/assets/rarities/rarities.json";
import double_headed_arrow from "public/assets/battlecard/double_headed_arrow.svg";
import background_card from "public/assets/battlecard/background_card.png";
import background_desktop from "public/assets/battlecard/background_desktop.png";
import { cn } from "src/lib/utils";

const BattleCard = () => {
  const [selectedRarityKey, setSelectedRarityKey] =
    React.useState<keyof typeof rarities>("divine");
  const [selectedTypeKey, setSelectedTypeKey] =
    React.useState<keyof typeof types>("warrior");

  return (
    <div id="battlecard_section" className="w-full">
      <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90 -ml-20">
        Battle Cards
      </h1>
      <div className="w-full bg-neutrals-0 bg-[url('public/assets/battlecard/background.png')] bg-cover bg-right bg-no-repeat xl:hidden">
        <div className="bg-neutrals-0/10">
          <div className="w-full text-center mb-5 pt-2 gradient-two sm:mt-20 md:mt-24">
            <span className="heading-2xxs sm:heading-xs md:heading-sm text-primary-80 font-bold sm:font-bold block mb-8 px-16">
              Command Warriors, creatures, Heroes, Titans, and Gods!
            </span>
            <span className="heading-2xxs sm:heading-xs md:heading-sm text-primary-80 font-bold sm:font-bold block">
              Discover Common to Divine rarities!
            </span>
          </div>
          <div className="w-full flex justify-around items-center sm:mt-16 md:mt-20 px-4 sm:px-6">
            <div className="w-fit flex flex-col gap-5 items-center">
              {Object.keys(types).map((key, index) => (
                <button
                  key={`type_${index}`}
                  className=""
                  onClick={() => setSelectedTypeKey(key as keyof typeof types)}
                >
                  <img
                    className={cn(
                      selectedTypeKey === key
                        ? "w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem]"
                        : "w-8 h-8 sm:w-[3rem] sm:h-[3rem] md:w-[3.5rem] md:h-[3.5rem]"
                    )}
                    src={
                      selectedTypeKey === key
                        ? types[key as keyof typeof types].selected
                        : types[key as keyof typeof types].default
                    }
                    alt={`type_selector_${index}`}
                  />
                </button>
              ))}
            </div>
            <div className="w-fit mx-8">
              <img
                src={BattleCardsData.images[selectedTypeKey][selectedRarityKey]}
                className="w-[11rem] h-[15rem] sm:w-[17.40rem] sm:h-[22.36rem] md:w-[23.81rem] md:h-[30.75rem] rounded-[6%]"
              />
            </div>
            <div className="w-fit flex flex-col gap-5 items-center">
              {Object.keys(rarities).map((key, index) => (
                <button
                  key={`rarity_${index}`}
                  className=""
                  onClick={() =>
                    setSelectedRarityKey(key as keyof typeof rarities)
                  }
                >
                  <img
                    className={cn(
                      selectedRarityKey === key
                        ? "w-[2.75rem] h-[2.75rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem]"
                        : "w-[2.25rem] h-[2.25rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3.5rem] md:h-[3.5rem] saturate-0"
                    )}
                    src={rarities[key as keyof typeof rarities].image}
                    alt={`rarity_selector_${index}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="text-center spacing-y-2 -mt-4 sm:mt-12 md:mt-20">
            <span className="block text-primary-90 body-md sm:body-2md font-bold sm:font-bold">
              Power
            </span>
            <div className="flex justify-center">
              <div className="w-[3.75rem] h-[3.75rem] sm:w-[4.25rem] h-[4.25rem] md:w-[6.8rem] md:h-[6.8rem] text-center align-middle bg-[url('public/assets/battlecard/orb.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
                <span className="heading-md sm:heading-2md md:heading-lg text-primary-100 font-bold sm:font-bold">
                  {
                    BattleCardsData.powerranges[
                      selectedTypeKey as keyof typeof BattleCardsData.powerranges
                    ].beginning
                  }
                </span>
              </div>
              <img src={double_headed_arrow} className="mx-2 w-8" />
              <div className="w-[3.75rem] h-[3.75rem] sm:w-[4.25rem] h-[4.25rem] md:w-[6.8rem] md:h-[6.8rem] text-center align-middle bg-[url('public/assets/battlecard/orb.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
                <span className="heading-md sm:heading-2md md:heading-lg text-primary-100 font-bold sm:font-bold">
                  {
                    BattleCardsData.powerranges[
                      selectedTypeKey as keyof typeof BattleCardsData.powerranges
                    ].end
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gradient-three sm:mt-20">
            <div className="mt-8 text-center">
              <span className="text-primary-85 heading-xs sm:heading-sm md:heading-md font-bold sm:font-bold">
                {selectedTypeKey}
              </span>
              <img
                className="w-12 h-12 sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem] mx-auto mt-2 mb-4 sm:mb-6 md:mb-8"
                src={types[selectedTypeKey].selected}
              />
              <p className="text-neutrals-100 body-sm whitespace-pre-wrap px-16">
                {types[selectedTypeKey].description}
              </p>
            </div>
            <div className="mt-8 text-center">
              <span className="text-primary-85 heading-xs sm:heading-sm md:heading-md font-bold sm:font-bold">
                {selectedRarityKey} Rarity
              </span>
              <img
                className="w-[3.75rem] h-[3.75rem] w-12 h-12 sm:w-[4rem] sm:h-[4rem] md:w-[4.25rem] md:h-[4.25rem] mx-auto mt-2 mb-4 sm:mb-6 md:mb-8"
                src={rarities[selectedRarityKey].image}
              />
              <p className="text-neutrals-100 body-sm whitespace-pre-wrap px-16">
                {rarities[selectedRarityKey].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutrals-0/40">
        <div className="relative w-full hidden xl:block mt-16 overflow-y-hidden">
          <div className="absolute w-full h-full grid grid-cols-2 blur-[2px] z-0">
            <div>
              <div className="gradient-two h-16 translate-y-16" />
              <img
                src={background_desktop}
                className="w-full"
                alt="background_desktop"
              />
            </div>
            <img
              src={background_card}
              className="h-[36.625rem] translate-x-20 mt-40"
              alt="background_desktop"
            />
          </div>
          <div className="relative grid grid-cols-3 gap-16 px-20 pb-10">
            <div className="mt-16">
              <span className="heading-2md text-primary-80 font-bold block">
                Command Warriors, creatures, Heroes, Titans, and Gods!
              </span>
              <div className="w-fit flex gap-5 items-center mt-6">
                {Object.keys(types).map((key, index) => (
                  <button
                    key={`type_${index}`}
                    className=""
                    onClick={() =>
                      setSelectedTypeKey(key as keyof typeof types)
                    }
                  >
                    <img
                      className={cn(
                        selectedTypeKey === key ? "w-14 h-14" : "w-10 h-10"
                      )}
                      src={
                        selectedTypeKey === key
                          ? types[key as keyof typeof types].selected
                          : types[key as keyof typeof types].default
                      }
                      alt={`type_selector_${index}`}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-16 text-center">
                <span className="text-primary-85 heading-md font-bold">
                  {selectedTypeKey}
                </span>
                <img
                  className="h-[4rem] mx-auto mb-8 mt-2"
                  src={types[selectedTypeKey].selected}
                />
                <p className="text-neutrals-100 body-2md whitespace-pre-wrap max-w-sm mx-auto">
                  {types[selectedTypeKey].description}
                </p>
              </div>
            </div>
            <div className="w-fit">
              <img
                src={BattleCardsData.images[selectedTypeKey][selectedRarityKey]}
                className="h-[36.62rem] rounded-[6%]"
              />
              <div className="text-center spacing-y-2 -mt-4 sm:mt-12 md:mt-20">
                <span className="block text-primary-90 body-md sm:body-2md font-bold sm:font-bold">
                  Power
                </span>
                <div className="flex justify-center">
                  <div className="w-[3.75rem] h-[3.75rem] sm:w-[4.25rem] h-[4.25rem] md:w-[6.8rem] md:h-[6.8rem] text-center align-middle bg-[url('public/assets/battlecard/orb.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
                    <span className="heading-md sm:heading-2md md:heading-lg text-primary-100 font-bold sm:font-bold">
                      {
                        BattleCardsData.powerranges[
                          selectedTypeKey as keyof typeof BattleCardsData.powerranges
                        ].beginning
                      }
                    </span>
                  </div>
                  <img src={double_headed_arrow} className="mx-2 w-8" />
                  <div className="w-[3.75rem] h-[3.75rem] sm:w-[4.25rem] h-[4.25rem] md:w-[6.8rem] md:h-[6.8rem] text-center align-middle bg-[url('public/assets/battlecard/orb.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
                    <span className="heading-md sm:heading-2md md:heading-lg text-primary-100 font-bold sm:font-bold">
                      {
                        BattleCardsData.powerranges[
                          selectedTypeKey as keyof typeof BattleCardsData.powerranges
                        ].end
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <span className="heading-2md text-primary-80 font-bold block">
                Discover Common to Divine rarities!
              </span>
              <div className="w-fit flex gap-5 items-center mt-6">
                {Object.keys(rarities).map((key, index) => (
                  <button
                    key={`rarity_${index}`}
                    className=""
                    onClick={() =>
                      setSelectedRarityKey(key as keyof typeof rarities)
                    }
                  >
                    <img
                      className={cn(
                        selectedRarityKey === key
                          ? "w-14 h-14"
                          : "w-10 h-10 saturate-0"
                      )}
                      src={rarities[key as keyof typeof rarities].image}
                      alt={`rarity_selector_${index}`}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-16 text-center">
                <span className="text-primary-85 heading-md font-bold">
                  {selectedRarityKey} rarirty
                </span>
                <img
                  className="h-[4rem] mx-auto mb-8 mt-2"
                  src={rarities[selectedRarityKey].image}
                />
                <p className="text-neutrals-100 body-2md whitespace-pre-wrap max-w-sm mx-auto">
                  {rarities[selectedRarityKey].description}
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-two">
            <div className="h-16 md:h-64 lg:h-[16rem] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleCard;
