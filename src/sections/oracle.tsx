import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";
import ImageWithFallback from "src/components/image";

const Oracle = () => {
  const imageType = useDynamicImageType();
  return (
    <div id="oracle_section">
      <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90">
        The Oracle
      </h1>
      <h2 className="heading-2xxs sm:heading-xs md:heading-md font-bold sm:font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3">
        Master the art of card fusion
      </h2>
      <div style={{backgroundImage: `url(${getImageUrl("oracle/background")}.${imageType})`}} className="bg-no-repeat bg-center bg-cover">
        <div className="px-5 gradient-two pt-12">
          <p className="body-sm sm:body-md md:body-2dm lg:body-lg text-neutrals-100 md:mt-16 text-center">
            Forge Unstoppable Alliances and Combine Rarities for Devastating
            Combos.
          </p>
          <h2 className="heading-2xxs sm:heading-sm md:heading-md lg:heading-2md text-primary font-bold sm:font-bold text-center mt-3 tracking-[0.1rem] sm:tracking-[0.18rem] md:tracking-[0.04rem]">
            Unlock Extra power for your Battle Deck!
          </h2>
          <span className="block heading-xs sm:heading-xs md:heading-sm lg:heading-md text-neutrals-100 font-bold sm:font-bold text-center mt-10 sm:mt-16 md:mt-20 mb-3 sm:mb-[0rem] sm:translate-y-16">
            Uncommon hero alliance
          </span>
          <ImageWithFallback src='oracle/oracle_1' className="hidden sm:block"/>
          <ImageWithFallback src='oracle/oracle_mobile_1' className="block sm:hidden max-w-[320px] mx-auto" />
        </div>
        <div className="pb-20 sm:pb-32 md:pb-24 lg:pb-16 gradient-three">
          <span className="block heading-xs sm:heading-xs md:heading-sm lg:heading-md text-neutrals-100 font-bold sm:font-bold text-center mt-16 md:mt-24 mb-3 sm:mb-[0rem] sm:translate-y-16">
            Legendary creature & divine god synergy
          </span>
          <ImageWithFallback src='oracle/oracle_2' className="hidden sm:block"/>
          <ImageWithFallback src='oracle/oracle_mobile_2' className="block sm:hidden max-w-[320px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Oracle;
