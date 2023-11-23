import rarity_common from "public/assets/rarities/common.png";
import warrior_type from "public/assets/types/warrior.png";
import arrows from "public/assets/oracle/arrows.svg";

const cloneImages = (url: string, number: number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(
      <div className="w-16 h-20 sm:w-[5.78rem] sm:h-[7.20rem] md:w-[7.56rem] md:h-[9.81rem] flex items-center justify-center">
        <img
          key={i}
          src={url}
          className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
        />
      </div>
    );
  }
  return arr;
};

const Placeholder = () => {
  return (
    <div className="w-16 h-20 sm:w-[5.78rem] sm:h-[7.20rem] md:w-[7.56rem] md:h-[9.81rem] bg-cardbg flex items-center justify-center rounded-xs">
      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 sm:h-8 bg-[#1A2327] rounded-[50%]" />
    </div>
  );
};

const Orb = () => {
  return (
    <div className="bg-[url('public/assets/battledeck/orb.png')] w-16 h-16 lg:w-20 lg:h-20 xl:h-[5.5rem] xl:w-[5.5rem] bg-cover flex items-center justify-center -mt-3 xl:-mt-8 sm:-mt-6">
      <img
        src={arrows}
        className="w-10 h-[1.375rem] sm:h-[2.4rem] sm:w-[2.4rem] md:w-[3.625rem] md:h-[3.625rem]"
      />
    </div>
  );
};

const Oracle = () => {
  return (
    <div id="oracle_section">
      <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90">
        The Oracle
      </h1>
      <h2 className="heading-2xxs sm:heading-xs md:heading-md font-bold sm:font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3">
        Master the art of card fusion
      </h2>
      <div className="bg-[url('public/assets/oracle/background.png')] bg-no-repeat bg-center bg-cover">
        <div className="px-5 gradient-two pt-12">
          <p className="body-xs sm:body-md md:body-2dm lg:body-lg text-neutrals-100 md:mt-16 text-center">
            Forge Unstoppable Alliances and Combine Rarities for Devastating
            Combos.
          </p>
          <h2 className="heading-2xxs sm:heading-sm md:heading-md lg:heading-2md text-primary font-bold sm:font-bold text-center mt-3 tracking-[0.1rem] sm:tracking-[0.18rem] md:tracking-[0.04rem]">
            Unlock Extra power for your Battle Deck!
          </h2>
          <span className="block heading-xs sm:heading-xs md:heading-sm lg:heading-md text-neutrals-100 font-bold sm:font-bold text-center mt-10 sm:mt-16 md:mt-20">
            Rarity Synergy
          </span>
          <div className="flex w-full justify-around">
            <div className="hidden sm:grid grid-cols-10 gap-x-[1rem] px-4 w-fit">
              {cloneImages(rarity_common, 10)}
            </div>
          </div>
          <div className="mb-24 flex w-full justify-around">
            <div className="double_border m-8 mt-2 pt-5 pb-5 sm:pt-4 sm:pb-3 sm:w-fit sm:mx-auto hidden xl:block">
              <div className="hidden sm:grid grid-cols-10 gap-x-[1rem] px-4 w-fit">
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </div>
              <div className="absolute text-center h-fit -mt-20 z-30 w-full flex justify-center">
                <Orb />
              </div>
              <div className="double_border__vertical" />
              <div className="double_border__horizontal" />
            </div>
          </div>
        </div>
        <div className="pb-20 sm:pb-32 md:pb-48 gradient-three">
          <span className="block heading-xs sm:heading-xs md:heading-sm lg:heading-md text-neutrals-100 font-bold sm:font-bold text-center mt-10">
            Valiant Alliances
          </span>
          <div className="flex w-full justify-around">
            <div className="hidden sm:grid grid-cols-10 gap-x-[1rem] px-4 w-fit">
              {cloneImages(warrior_type, 10)}
            </div>
          </div>
          <div className="mb-24 flex w-full justify-around">
            <div className="double_border m-8 mt-2 pt-5 pb-5 sm:pt-4 sm:pb-3 sm:w-fit sm:mx-auto hidden xl:block">
              <div className="hidden sm:grid grid-cols-10 gap-x-[1rem] px-4 w-fit">
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </div>
              <div className="absolute text-center h-fit -mt-20 z-30 w-full flex justify-center">
                <Orb />
              </div>
              <div className="double_border__vertical" />
              <div className="double_border__horizontal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oracle;
