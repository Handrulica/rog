import React from "react";
import { cn } from "src/lib/utils";
import types from "public/assets/types/types.json";
import rarities from "public/assets/rarities/rarities.json";
import battleDeckData from "public/assets/battledeck/assets.json";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";
import ImageWithFallback from "src/components/image";

const BattleDeck = () => {
  const [selectedRarityKey, setSelectedRarityKey] =
    React.useState<keyof typeof rarities>("common");
  const [selectedTypeKey, setSelectedTypeKey] =
    React.useState<keyof typeof types>("warrior");

  const imageType = useDynamicImageType();

  return (
    <div id="battledeck_section" className="w-full">
      <div className="xl:hidden">
        <h1 className="heading-sm sm:heading-md md:heading-lg font-bold sm:font-bold md:font-bold text-center text-primary-90">
          The Battle Deck
        </h1>
        <h2 className="heading-2xxs sm:heading-xs md:heading-md font-bold sm:font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3">
          Forge your path to victory!
        </h2>
        <div
          style={{
            backgroundImage: `url(${getImageUrl(
              "../../public/assets/battledeck/background"
            )}.${imageType})`,
          }}
          className="bg-no-repeat bg-center bg-cover"
        >
          <div className="bg-neutrals-0/20">
            <div className="pb-10 px-[4.4rem] gradient-two text-center">
              <p className="body-xs sm:body-sm md:body-2md text-neutrals-100 mt-4 sm:mt-[1.75rem] md:mt-[2.5rem] max-w-md sm:max-w-lg mx-auto  sm:px-16 sm:px-2">
                Wether battling in the Arena or competing in organized
                tournaments, Craft a Winning Battle Deck!
              </p>
            </div>
            <div className="flex justify-center space-x-4 sm:mt-8 md:mt-8 md:mb-2">
              {Object.keys(types).map((key, index) => (
                <button
                  key={`type_${index}`}
                  onClick={() => setSelectedTypeKey(key as keyof typeof types)}
                >
                  <ImageWithFallback
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    src={
                      selectedTypeKey === key
                        ? types[key].selected
                        : types[key as keyof typeof types].default
                    }
                    alt={`type_selector_${index}`}
                  />
                </button>
              ))}
            </div>
            <div className="md:px-16">
              <span className="heading-2xxs font-bold text-primary-90 block text-center mt-8">
                {types[selectedTypeKey].plural}
              </span>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-4 gap-x-3 md:gap-x-4 px-3 md:px-4 py-4 md:py-5 border-solid border-[1px] border-grid rounded w-fit mx-auto">
                {battleDeckData.deck_images[selectedTypeKey][
                  selectedRarityKey
                ].map((image, index) => (
                  <ImageWithFallback
                    key={index}
                    src={image}
                    className="w-[5.625rem] h-[7rem] sm:w-[7.1rem] sm:h-[9.81rem] md:w-[8.5rem] md:h-[11.62rem] rounded-[6%]"
                    alt={`${types[selectedTypeKey].plural}_` + index}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-3 mt-8 ">
              {Object.keys(rarities).map((key, index) => (
                <button
                  key={`rarity_${index}`}
                  className=""
                  onClick={() =>
                    setSelectedRarityKey(key as keyof typeof rarities)
                  }
                >
                  <ImageWithFallback
                    className={cn(
                      selectedRarityKey === key
                        ? "w-12 h-12 md:w-14 md:h-14"
                        : "w-10 h-10 md:w-12 md:h-12"
                    )}
                    src={rarities[key as keyof typeof rarities].image}
                    alt={`rarity_selector_${index}`}
                  />
                </button>
              ))}
            </div>
            <div className="pt-16 md:pt-16 gradient-one px-6 ">
              <ImageWithFallback
                src="battledeck/battledeck_mobile"
                className="max-w-[20rem] mx-auto md:hidden"
              />
              <ImageWithFallback
                src="battledeck/battledeck_desktop"
                className="mx-auto hidden md:block"
              />
            </div>
            <p className="text-primary-90 heading-xs px-2 text-center mt-12 ">
              choose 10 of your best cards and join fast-paced, automatic
              battles based only on deck power!
            </p>
            <div className="pt-20 gradient-one" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${getImageUrl(
            "../../public/assets/battledeck/background"
          )}.${imageType})`,
        }}
        className="hidden xl:block bg-no-repeat bg-center bg-cover"
      >
        <div className="pl-24 pr-10 gradient-two">
          <h1 className="heading-3lg font-bold sm:font-bold md:font-bold text-primary-90">
            The Battle Deck
          </h1>
          <div className="flex justify-between">
            <h2 className="heading-lg text-primary-80 font-bold mt-1 sm:mt-2 md:mt-3 max-w-sm tracking-[3.2px]">
              Forge your path to victory!
            </h2>
            <div className="flex justify-center space-x-3 ">
              {Object.keys(rarities).map((key, index) => (
                <button
                  key={`rarity_${index}`}
                  className=""
                  onClick={() =>
                    setSelectedRarityKey(key as keyof typeof rarities)
                  }
                >
                  <ImageWithFallback
                    className={cn(
                      selectedRarityKey === key ? "w-12 h-12" : "w-10 h-10"
                    )}
                    src={rarities[key as keyof typeof rarities].image}
                    alt={`rarity_selector_${index}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-fit">
              <p className="body-2md text-neutrals-100 mt-5 max-w-lg">
                Wether battling in the Arena or competing in organized
                tournaments, Craft a Winning Battle Deck!
              </p>
              <div className="-ml-8">
                <button
                  key={`type_warrior`}
                  className="block mx-auto mt-16"
                  onClick={() => setSelectedTypeKey("warrior")}
                >
                  <ImageWithFallback
                    className="w-16 h-16 block"
                    src={
                      selectedTypeKey === "warrior"
                        ? types["warrior"].selected
                        : types["warrior"].default
                    }
                    alt={`type_selector_warrior`}
                  />
                </button>
                <div className="flex w-fit gap-2 mx-auto">
                  <button
                    key={`type_god`}
                    className="block mx-auto"
                    onClick={() => setSelectedTypeKey("god")}
                  >
                    <ImageWithFallback
                      className="w-16 h-16 block"
                      src={
                        selectedTypeKey === "god"
                          ? types["god"].selected
                          : types["god"].default
                      }
                      alt={`type_selector_god`}
                    />
                  </button>
                  <span className="heading-sm font-bold text-primary-85 self-end w-[7rem] text-center">
                    {types[selectedTypeKey].plural}
                  </span>
                  <button
                    key={`type_hero`}
                    className="block mx-auto"
                    onClick={() => setSelectedTypeKey("hero")}
                  >
                    <ImageWithFallback
                      className="w-16 h-16 block"
                      src={
                        selectedTypeKey === "hero"
                          ? types["hero"].selected
                          : types["hero"].default
                      }
                      alt={`type_selector_hero`}
                    />
                  </button>
                </div>
                <div className="flex w-fit gap-6 mx-auto mt-8">
                  <button
                    key={`type_titan`}
                    className="block mx-auto"
                    onClick={() => setSelectedTypeKey("titan")}
                  >
                    <ImageWithFallback
                      className="w-16 h-16 block"
                      src={
                        selectedTypeKey === "titan"
                          ? types["titan"].selected
                          : types["titan"].default
                      }
                      alt={`type_selector_titan`}
                    />
                  </button>
                  <button
                    key={`type_beast`}
                    className="block mx-auto"
                    onClick={() => setSelectedTypeKey("creature")}
                  >
                    <ImageWithFallback
                      className="w-16 h-16 block"
                      src={
                        selectedTypeKey === "creature"
                          ? types["creature"].selected
                          : types["creature"].default
                      }
                      alt={`type_selector_creature`}
                    />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-primary-90 heading-sm max-w-xl text-center mt-12 -ml-10">
                  choose 10 of your best cards and join fast-paced, automatic
                  battles based only on deck power!
                </p>
              </div>
            </div>
            <div className="w-fit">
              <div className="grid grid-cols-4 gap-y-4 gap-x-4 px-4 py-4 border-solid border-[1px] border-grid rounded w-fit">
                {battleDeckData.deck_images[selectedTypeKey][
                  selectedRarityKey
                ].map((image, index) => (
                  <ImageWithFallback
                    key={index}
                    src={image}
                    className="w-[10.25rem] rounded-[6%]"
                    alt={`${types[selectedTypeKey].plural}_` + index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 gradient-one">
          <ImageWithFallback src="battledeck/battledeck_desktop" />
        </div>
      </div>
    </div>
  );
};

export default BattleDeck;
