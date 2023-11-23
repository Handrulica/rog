import React from "react";
import { cn } from "src/lib/utils";
import types from "public/assets/types/types.json";
import rarities from "public/assets/rarities/rarities.json";
import battleDeckData from "public/assets/battledeck/assets.json";
import useElementSize from "src/hooks/useElementSize";

const Placeholder = () => {
  return (
    <div className="w-16 h-20 sm:w-[5.78rem] sm:h-[7.20rem] md:w-[7.56rem] md:h-[9.81rem] bg-cardbg flex items-center justify-center rounded-xs mx-auto">
      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 sm:h-8 bg-[#1A2327] rounded-[50%]" />
    </div>
  );
};

const getInvetoryCards = (start: number, end: number) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(
      <img
        key={i}
        src={battleDeckData.inventory_images[i]}
        className="w-16 h-20 sm:w-[5.78rem] sm:h-[7.20rem] md:w-[7.56rem] md:h-[9.81rem] mx-auto rounded-xs"
        alt={`inventory_card_` + i}
      />
    );
  }
  return arr;
};

const BattleDeck = () => {
  const [selectedRarityKey, setSelectedRarityKey] =
    React.useState<keyof typeof rarities>("common");
  const [selectedTypeKey, setSelectedTypeKey] =
    React.useState<keyof typeof types>("warrior");
  const [inventoryRef, { width }] = useElementSize();
  const [inventroyRefXl, { width: widthXl }] = useElementSize();

  return (
    <div id="battledeck_section" className="w-full">
      <div className="xl:hidden">
        <h1 className="heading-sm sm:heading-md md:heading-lg font-bold sm:font-bold md:font-bold text-center text-primary-90">
          The Battle Deck
        </h1>
        <h2 className="heading-2xxs sm:heading-xs md:heading-md font-bold sm:font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3">
          Forge your path to victory!
        </h2>
        <div className="bg-[url('public/assets/battledeck/background.png')] bg-no-repeat bg-center bg-cover">
          <div className="bg-neutrals-0/20">
            <div className="pb-10 px-[4.4rem] gradient-two text-center">
              <p className="body-xs sm:body-sm md:body-2md text-neutrals-100 mt-4 sm:mt-[1.75rem] md:mt-[2.5rem] max-w-md sm:max-w-lg mx-auto px-12 sm:px-16">
                Wether battling in the Arena or competing in organized
                tournaments, Craft a Winning Battle Deck!
              </p>
            </div>
            <div className="flex justify-center space-x-4 sm:mt-8 md:mt-16 md:mb-2">
              {Object.keys(types).map((key, index) => (
                <button
                  key={`type_${index}`}
                  onClick={() => setSelectedTypeKey(key as keyof typeof types)}
                >
                  <img
                    className="w-8 h-8"
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
            <div>
              <span className="heading-2xxs font-bold text-primary-90 block text-center mt-8">
                {types[selectedTypeKey].plural}
              </span>
              <div className="grid grid-cols-3 gap-y-3 md:gap-y-4 gap-x-3 md:gap-x-4 px-3 md:px-4 py-4 md:py-5 border-solid border-[1px] border-grid rounded w-fit mx-auto">
                {battleDeckData.deck_images[selectedTypeKey][
                  selectedRarityKey
                ].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-[5.625rem] h-[7rem] sm:w-[7.1rem] sm:h-[9.81rem] md:w-[10.5rem] md:h-[13.62rem] rounded-[6%]"
                    alt={`${types[selectedTypeKey].plural}_` + index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block bg-[url('public/assets/battledeck/background.png')] bg-no-repeat bg-center bg-cover">
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
                  <img
                    className={cn(
                      selectedRarityKey === key
                        ? "w-12 h-12"
                        : "w-10 h-10 saturate-0"
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
                  <img
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
                    <img
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
                    <img
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
                    <img
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
                    <img
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
                  <img
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
          <div className="double_border m-8 mt-20 pt-5 pb-5 sm:pt-4 sm:pb-3 sm:w-fit sm:mx-auto hidden xl:block">
            <div
              className={cn(
                "absolute flex justify-center text-center top-[-4.5rem] sm:top-[-5rem] md:top-[-6rem] h-[10rem] z-30"
              )}
              style={{ width: `${widthXl}px` }}
            >
              <div className="w-[7.25rem] h-[5.25rem] sm:w-[8.50rem] sm:h-[6.40rem] md:w-[10rem] md:h-[7.68rem] bg-[url('public/assets/battledeck/header.png')] bg-cover flex text-center items-end pb-3 sm:pb-[1.10rem] md:pb-[1.5rem]">
                <span className="font-heading text-[0.625rem] sm:text-[0.7rem] md:text-[0.8rem] text-primary-20 tracking-[0.01rem] block ml-[1.40rem] sm:ml-[1.70rem] md:ml-[2.1rem]">
                  Battle Deck
                </span>
              </div>
            </div>
            <div className="hidden sm:grid grid-cols-10 gap-x-2 px-2 w-fit">
              {getInvetoryCards(0, 5)}
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </div>
            <div className="absolute text-center h-fit z-30 w-full flex justify-center">
              <div className="bg-[url('public/assets/battledeck/orb.png')] w-16 h-16 lg:w-20 lg:h-20 xl:h-[5.5rem] xl:w-[5.5rem] bg-cover flex items-center justify-center -mt-3 xl:-mt-8 sm:-mt-6">
                <span className="heading-xs lg:heading-md xl:heading-lg font-bold text-primary-100">
                  98
                </span>
              </div>
            </div>
            <div className="double_border__vertical" ref={inventroyRefXl} />
            <div className="double_border__horizontal" />
          </div>
        </div>
      </div>
      <div className="double_border m-8 mt-20 pt-5 pb-5 sm:pt-4 sm:pb-3 sm:w-fit sm:mx-auto xl:hidden">
        <div
          className={cn(
            "absolute flex justify-center text-center top-[-4.5rem] sm:top-[-5rem] md:top-[-6rem] h-[10rem] z-30"
          )}
          style={{ width: `${width}px` }}
        >
          <div className="w-[7.25rem] h-[5.25rem] sm:w-[8.50rem] sm:h-[6.40rem] md:w-[10rem] md:h-[7.68rem] bg-[url('public/assets/battledeck/header.png')] bg-cover flex text-center items-end pb-3 sm:pb-[1.10rem] md:pb-[1.5rem]">
            <span className="font-heading text-[0.625rem] sm:text-[0.7rem] md:text-[0.8rem] text-primary-20 tracking-[0.01rem] block ml-[1.40rem] sm:ml-[1.70rem] md:ml-[2.1rem]">
              Battle Deck
            </span>
          </div>
        </div>
        <div className="sm:hidden grid grid-cols-4 gap-y-2 gap-x-3 px-3 py-2">
          {getInvetoryCards(0, 4)}
          <div className="col-span-2 my-auto">
            <p className="text-primary-90 body-xs text-[8px] tracking-[0.3px] leading-[20px] text-center">
              choose 10 of your best cards and join fast-paced, automatic
              battles based only on deck power!
            </p>
          </div>
          {getInvetoryCards(4, 5)}
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div className="hidden sm:grid grid-cols-5 gap-x-2 px-2 w-fit">
          {getInvetoryCards(0, 2)}
          <Placeholder />
          <Placeholder />
        </div>
        <div className="absolute text-center h-fit z-30 w-full flex justify-center">
          <div className="bg-[url('public/assets/battledeck/orb.png')] w-16 h-16 lg:w-24 lg:h-24 xl:w-[32rem] xl:h-[32rem] bg-cover flex items-center justify-center -mt-3 sm:-mt-6">
            <span className="heading-xs lg:heading-md font-bold text-primary-100">98</span>
          </div>
        </div>
        <div className="double_border__vertical" ref={inventoryRef} />
        <div className="double_border__horizontal" />
      </div>
    </div>
  );
};

export default BattleDeck;
