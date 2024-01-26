import React from "react";
import Modal from "react-modal";
import treasureData from "public/assets/treasures/assets.json";
import types from "public/assets/types/types.json";
import { cn } from "src/lib/utils";
import arrow_left from "public/assets/shrine/arrow_left.svg";
import arrow_right from "public/assets/shrine/arrow_right.svg";
import { Button } from "src/components/button";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";
import ImageWithFallback from "src/components/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    height: "fit-content",
    borderRadius: "1.3rem",
    padding: 0,
    border: 0,
    background: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Treasure = () => {
  const imageType = useDynamicImageType();

  const [selectedSetKey, setSelectedSetKey] =
    React.useState<keyof typeof types>("warrior");
  const [selectedSetIndex, setSelectedSetIndex] = React.useState<number>(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleNext() {
    if (selectedSetIndex + 1 < treasureData[selectedSetKey].items.length) {
      setSelectedSetIndex(selectedSetIndex + 1);
    } else {
      setSelectedSetIndex(0);
    }
  }

  function handlePrevious() {
    if (selectedSetIndex - 1 > -1) {
      setSelectedSetIndex(selectedSetIndex - 1);
    } else {
      setSelectedSetIndex(treasureData[selectedSetKey].items.length - 1);
    }
  }

  return (
    <React.Fragment>
      <div
        id="treasure_section"
        style={{
          backgroundImage: `url(${getImageUrl(
            "treasure/background"
          )}.${imageType})`,
        }}
        className="bg-left bg-no-repeat bg-cover"
      >
        <div className="xl:gradient-two xl:hidden">
          <div className="gradient-two">
            <h1 className="heading-sm sm:heading-md md:heading-lg font-bold sm:font-bold md:font-bold text-center text-primary-90">
              The Treasure Hunt
            </h1>
            <h2 className="heading-2xxs sm:heading-xs md:heading-sm font-bold sm:font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3">
              Discover unique cards
            </h2>
            <p className="body-xs sm:body-xs md:body-2md text-neutrals-100 text-center px-8 sm:px-16 md:px-12 pb-10 mt-12 sm:mt-12 md:mt-16 max-w-md sm:max-w-xl mx-auto">
              Outside the Arena, the hunt is on for Treasured Sets — rare
              collections promising even greater crypto riches. These sets,
              representing each faction, are the most coveted treasures in the
              Realm.
            </p>
          </div>
          <div className="grid grid-cols-2 w-fit mx-auto gap-10 mt-8">
            <div>
              <ImageWithFallback
                src="treasure/presentation_back"
                className="w-[8rem] h-[9.5rem] md:w-[15.47rem] md:h-[19rem]"
              />
            </div>
            <div>
              <ImageWithFallback
                src="treasures/hero/armor"
                className="w-[6.8rem] h-[8.7rem] rotate-12 md:w-[13rem] md:h-[17rem] mt-2 md:mt-4 ml-2"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="heading-2xxs md:heading-3xxs sm:max-w-sm mx-auto font-bold sm:font-bold text-center text-primary-85 px-12 mt-10 sm:mt-20 md:mt-32 pb-10 sm:pb-12 md:pb-16">
              Assemble Alliance Sets and exchange them for Exclusive NFTs and
              Massive Crypto Prizes!
            </p>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="gradient-two">
            <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90">
              The Treasure Hunt
            </h1>
            <h2 className="heading-2xxs sm:heading-xs md:heading-sm lg:heading-md font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3 px-8">
              {" "}
              Discover unique cards
            </h2>
            <div className="flex justify-center items-center">
              <div>
                <ImageWithFallback
                  src="treasure/presentation_back"
                  className="w-[7.5rem] h-[9.5rem] md:w-[15.47rem] md:h-[19rem]"
                />
              </div>
              <p className="body-2md text-neutrals-100 text-center px-12 pb-10 mt-16 max-w-[53%]">
                Outside the Arena, the hunt is on for Treasured Sets — rare
                collections promising even greater crypto riches. These sets,
                representing each faction, are the most coveted treasures in the
                Realm.
              </p>
              <div className="rotate-12 pl-8">
                <ImageWithFallback
                  src="treasures/hero/armor"
                  className="w-[7.5rem] h-[9.5rem] md:w-[13.7rem] md:h-[18rem]"
                />
              </div>
            </div>
            <h2 className="heading-2xxs sm:heading-xs md:heading-sm lg:heading-md font-bold text-primary-80 text-center -mt-10 px-8 max-w-[45rem] mx-auto">
              Assemble Alliance Sets and exchange them for Exclusive NFTs and
              Massive Crypto Prizes!
            </h2>
          </div>
        </div>
        <div className="lg:flex justify-center ">
          <div>
            <div className="flex lg:flex-col items-center justify-center space-x-4 lg:space-x-[0px] lg:space-y-10 lg:mt-24 lg:mr-4">
              {Object.keys(types).map((key, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSetKey(key as keyof typeof types)}
                >
                  <ImageWithFallback
                    src={
                      selectedSetKey === key
                        ? types[key as keyof typeof types].selected
                        : types[key as keyof typeof types].default
                    }
                    alt={"rarity_" + index}
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
                      key !== selectedSetKey && "saturate-0"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 sm:mt-8 md:mt-12 w-fit mx-auto lg:mx-[0px] ">
            <div className="flex border-solid border-[1px] border-b-[0px] border-brown rounded-t w-fit">
              <div className="border-r-solid border-r-[1px] border-brown">
                <span className="heading-3xxs font-bold text-primary px-4 py-2">
                  {selectedSetKey}
                </span>
              </div>
              <div>
                <span className="heading-3xxs font-bold text-[#eeddac7f] px-4 py-2">
                  {" "}
                  6 / 6
                </span>
              </div>
            </div>
            <div className="border-solid border-[1px] border-brown rounded rounded-tl-none py-4 px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-fit mx-auto">
              {treasureData[selectedSetKey].items.map((item, index) => (
                <ImageWithFallback
                  key={index}
                  src={item}
                  alt={"item_set" + index}
                  className={cn(
                    "w-[6.25rem] h-32 sm:w-[6.8rem] sm:h-[8.87rem] md:w-[7.5rem] md:h-[9.75rem] lg:w-[10rem] lg:h-[13.31rem] rounded-xs sm:rounded cursor-pointer"
                  )}
                  onClick={openModal}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-24 sm:h-32 md:h-40 gradient-one" />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex items-center justify-center gap-[2rem]">
          <img
            src={arrow_left}
            alt="hephaestus_1"
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 cursor-pointer mb-16"
            onClick={handlePrevious}
          />
          <div className="flex flex-col">
            <ImageWithFallback
              src={treasureData[selectedSetKey].items[selectedSetIndex]}
              alt="modal_item"
              className={cn(
                "w-[13.5rem] h-[17.25rem] sm:w-[19rem] sm:h-[24.25rem] md:w-[25rem] md:h-[32.25rem] lg:w-[25rem] lg:h-[32.25rem] lg:w-[25rem] lg:h-[32.25rem] rounded-xs sm:rounded"
              )}
            />
            <Button
              variant="secondary"
              size="default-secondary"
              className="mx-auto mt-4 sm:mt-6"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
          <img
            src={arrow_right}
            alt="hephaestus_2"
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 cursor-pointer mb-16"
            onClick={handleNext}
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Treasure;
