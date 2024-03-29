import Progress from "src/components/progress-bar";
import Genesis from "./genesis";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";
import ImageWithFallback from "src/components/image";

const Inaugural = () => {
  const imageType = useDynamicImageType();

  return (
    <div>
      <div style={{backgroundImage: `url(${getImageUrl("inaugural/background")}.${imageType})`}} className="w-full bg-center bg-cover bg-no-repeat">
        <div className="md:gradient-two">
          <div className="w-full gradient-two text-center">
            <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90 tracking-[0.2rem]">
              Inaugural Treasures
            </h1>
            <p className="heading-2xxs sm:heading-xs md:heading-sm font-bold sm:font-medium text-primary-80 mt-1 text-center sm:mt-2 md:mt-3 px-16">
              The NFTs are available for purchase only in the Realms of Glory
              game pre-launch
            </p>
            <h2 className="heading-sm sm:heading-xs lg:heading-md font-bold sm:font-medium text-accent px-12 mt-5 sm:mt-10 md:mt-[3.5rem] lg:mt-[3.75rem]">
              Utility NFTs Public Sale Coming Soon!
            </h2>
          </div>
          <div className="pb-24 md:pt-[2rem] pb-16 md:pb-24 px-1 sm:px-6 pt-40 md:pt-[4rem] lg:-mt-14">
            <div className="w-full flex justify-around lg:px-16">
              <ImageWithFallback
                src='inaugural/card'
                className="hidden lg:block w-[10.2rem] h-[12.5rem] md:w-[12.6rem] md:h-[16.1rem] lg:w-[16.5rem] lg:h-[19.2rem] mx-5"
              />
              <div className="grid grid-cols-3 w-full md:mt-10 md:px-8 lg:max-w-md lg:mt-20 lg:-ml-10 ">
                <div className="text-center md:space-y-2">
                  <span className="heading-xxs md:heading-xxs font-bold md:font-medium text-accent">
                    PRIVATE ROUND
                  </span>
                  <Progress value={100} />
                </div>
                <div className="text-center md:space-y-2">
                  <span className="heading-xxs md:heading-xxs font-bold md:font-medium text-[#766A58]">
                    WHITELIST
                  </span>
                  <Progress value={0} />
                </div>
                <div className="text-center md:space-y-2">
                  <span className="heading-xxs md:heading-xxs font-bold md:font-medium text-[#766A58]">
                    PUBLIC SALE
                  </span>
                  <Progress value={0} />
                </div>
              </div>
              <ImageWithFallback
                src='nfts/images/hades'
                className="hidden lg:block w-[10.2rem] h-[12.5rem] md:w-[12.6rem] md:h-[16.1rem] lg:w-[14rem] lg:h-[17.6rem] mx-5 rotate-[10deg]"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block mt-32 lg:-mt-48 lg:px-[3%] xl:px-[10%]">
          <Genesis />
        </div>
      </div>
      <div className="block md:hidden">
        <Genesis />
      </div>
    </div>
  );
};

export default Inaugural;
