import Progress from "src/components/progress-bar";
import card from "public/assets/inaugural/card.png";
import Genesis from "./genesis";

const Inaugural = () => {
  return (
    <div>
      <div className="w-full bg-[url('public/assets/inaugural/background.png')] bg-center bg-cover bg-no-repeat">
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
              Public Sale Limited Edition NFTs Now Live!
            </h2>
          </div>
          <div className="pt-40 md:pt-[2rem] pb-16 md:pb-0 px-6 lg:-mt-14">
            <div className="w-full flex justify-around lg:px-16">
              <img
                src={card}
                className="hidden md:block w-[10.2rem] h-[12.5rem] md:w-[12.6rem] md:h-[16.1rem] lg:w-[17rem] lg:h-[19.2rem] mx-5"
              />
              <div className="grid grid-cols-3 w-full md:mt-10 md:px-8 lg:max-w-md lg:mt-20 ">
                <div className="text-center md:space-y-2">
                  <span className="heading-2xxs md:heading-xxs font-bold md:font-medium text-accent">
                    PHASE 1
                  </span>
                  <Progress value={100} />
                </div>
                <div className="text-center md:space-y-2">
                  <span className="heading-2xxs md:heading-xxs font-bold md:font-medium text-[#766A58]">
                    PHASE 2
                  </span>
                  <Progress value={0} />
                </div>
                <div className="text-center md:space-y-2">
                  <span className="heading-2xxs md:heading-xxs font-bold md:font-medium text-[#766A58]">
                    PHASE 3
                  </span>
                  <Progress value={0} />
                </div>
              </div>
              <img
                src={card}
                className="hidden md:block w-[10.2rem] h-[12.5rem] md:w-[12.6rem] md:h-[16.1rem] lg:w-[17rem] lg:h-[19.2rem] scale-x-[-1] mx-5"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:-mt-48 lg:px-[10%]">
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
