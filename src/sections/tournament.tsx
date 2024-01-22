import down_left from "public/assets/tournament/lines/down_left.svg";
import down_right from "public/assets/tournament/lines/down_right.svg";
import down_left_second from "public/assets/tournament/lines/down_left_second.svg";
import down_right_second from "public/assets/tournament/lines/down_right_second.svg";
import down_right_medium from "public/assets/tournament/lines/down_right_medium.svg";
import down_right_medium_second from "public/assets/tournament/lines/down_right_second_medium.svg";
import down_right_medium_third from "public/assets/tournament/lines/down_right_third_medium.svg";
import down_left_medium from "public/assets/tournament/lines/down_left_medium.svg";
import down_left_medium_second from "public/assets/tournament/lines/down_left_second_medium.svg";
import down_left_medium_third from "public/assets/tournament/lines/down_left_third_medium.svg";
import straight from "public/assets/tournament/lines/straight.svg";
import straight_medium from "public/assets/tournament/lines/straight_medium.svg";
import left_first_down from "public/assets/tournament/lines/left_first_down.svg";
import left_first_up from "public/assets/tournament/lines/left_first_up.svg";
import left_second_down from "public/assets/tournament/lines/left_second_down.svg";
import left_second_up from "public/assets/tournament/lines/left_second_up.svg";
import left_third from "public/assets/tournament/lines/left_third.svg";
import eth_gold from "public/assets/coins/eth/eth_gold.gif";
import { cn } from "src/lib/utils";
import useScreenSize from "src/hooks/useScreenSize";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";

const Tournament = () => {
  const screenSize = useScreenSize();
  const imageType = useDynamicImageType();

  const LineWrapper = ({
    src,
    className,
  }: {
    src: string;
    className?: string;
  }) => {
    return (
      <img src={src} className={cn("w-[2rem] h-[3.3rem] pb-3", className)} />
    );
  };

  const Container = ({ className }: { className?: string }) => {
    return (
      <div
        className={cn(
          "bg-[#910000]/20 border-solid border-[1px] border-primary-30 rounded-[4px] w-[5rem] sm:w-[6rem] h-[1.75rem] self-end",
          className
        )}
      />
    );
  };

  const Side = () => {
    if (screenSize === "xs") {
      return (
        <div>
          <div className="flex space-x-2 justify-center">
            <div className="flex justify-center">
              <Container />
            </div>
            <div className="flex justify-center">
              <Container />
            </div>
            <div className="flex justify-center">
              <Container />
            </div>
            <div className="flex justify-center">
              <Container />
            </div>
          </div>
          <div className="flex justify-center space-x-4 sm: mt-1">
            <div className="flex justify-center">
              <LineWrapper src={down_right} />
              <Container className="w-[6rem]" />
              <LineWrapper src={down_left} />
            </div>
            <div className="flex justify-center">
              <LineWrapper src={down_right} />
              <Container className="w-[6rem]" />
              <LineWrapper src={down_left} />
            </div>
          </div>
          <div className="flex justify-center mt-1">
            <div className="flex justify-center space-x-2">
              <LineWrapper src={down_right_second} />
              <Container className="w-[6.5rem]" />
              <LineWrapper src={down_left_second} />
            </div>
          </div>
          <div className="flex justify-center mt-1">
            <img src={straight} className="w-[0.25rem]" />
          </div>
        </div>
      );
    } else if (["sm", "md", "lg"].includes(screenSize)) {
      return (
        <div>
          <div className="flex space-x-4 justify-center">
            <div className="flex justify-center">
              <LineWrapper src={down_right_medium} />
              <Container className="mx-1" />
              <LineWrapper src={down_left_medium} />
            </div>
            <div className="flex justify-center">
              <LineWrapper src={down_right_medium} />
              <Container className="mx-1" />
              <LineWrapper src={down_left_medium} />
            </div>
            <div className="flex justify-center">
              <LineWrapper src={down_right_medium} />
              <Container className="mx-1" />
              <LineWrapper src={down_left_medium} />
            </div>
            <div className="flex justify-center">
              <LineWrapper src={down_right_medium} />
              <Container className="mx-1" />
              <LineWrapper src={down_left_medium} />
            </div>
          </div>
          <div className="flex justify-center space-x-4 sm:mt-1 gap-[9rem]">
            <div className="flex justify-center">
              <LineWrapper
                src={down_right_medium_second}
                className="w-[3rem] h-[4.5rem]"
              />
              <Container className="w-[6rem] mx-1" />
              <LineWrapper
                src={down_left_medium_second}
                className="w-[3rem] h-[4.5rem]"
              />
            </div>
            <div className="flex justify-center">
              <LineWrapper
                src={down_right_medium_second}
                className="w-[3rem] h-[4.5rem]"
              />
              <Container className="w-[6rem] mx-1" />
              <LineWrapper
                src={down_left_medium_second}
                className="w-[3rem] h-[4.5rem]"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center space-x-2 gap-3">
              <LineWrapper
                src={down_right_medium_third}
                className="w-[6.5rem] h-[5.5rem]"
              />
              <Container className="sm:w-[7.5rem] self-center mt-8" />
              <LineWrapper
                src={down_left_medium_third}
                className="w-[6.5rem] h-[5.5rem]"
              />
            </div>
          </div>
          <div className="flex justify-center mt-1">
            <img src={straight_medium} className="w-[2rem] h-[2rem]" />
          </div>
        </div>
      );
    } else if (["xl", "2xl"].includes(screenSize)) {
      return (
        <div>
          <div className="flex items-center">
            <div className="flex flex-col space-y-16">
              <div>
                <div className="flex items-center">
                  <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center mt-8" />
                  <LineWrapper
                    src={left_first_down}
                    className="w-[10rem] translate-y-10 -translate-x-2"
                  />
                </div>
                <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center mt-8 ml-[14rem] -translate-y-3" />
                <div className="flex items-center -translate-y-[1.8rem]">
                  <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center mt-8" />
                  <LineWrapper
                    src={left_first_up}
                    className="w-[10rem] translate-y-2 -translate-x-2"
                  />
                </div>
              </div>
              <div className="-translate-y-2">
                <div className="flex items-center">
                  <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center mt-8" />
                  <LineWrapper
                    src={left_first_down}
                    className="w-[10rem] translate-y-10 -translate-x-2"
                  />
                </div>
                <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center mt-8 ml-[14rem] -translate-y-3" />
                <div className="flex items-center -translate-y-[1.8rem]">
                  <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center mt-8" />
                  <LineWrapper
                    src={left_first_up}
                    className="w-[10rem] translate-y-2 -translate-x-2"
                  />
                </div>
              </div>
            </div>
            <div className="-translate-x-4">
              <LineWrapper
                src={left_second_down}
                className="w-[10rem] h-[8rem] translate-y-2"
              />
              <Container className="sm:w-[11.25rem] sm:h-[2.8rem] self-center ml-10 " />
              <LineWrapper
                src={left_second_up}
                className="w-[10rem] h-[8rem] translate-y-1"
              />
            </div>
            <div className="-translate-x-8 translate-y-12">
              <LineWrapper src={left_third} className="w-[6.5rem] h-[6.5rem]" />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div id="tournament_section">
      <h1 className="heading-sm sm:heading-md md:heading-lg xl:heading-2lg xl:heading-3lg font-bold text-center sm:tracking-[0.2rem] text-primary-90 px-8">
        the champion’s call tournament
      </h1>
      <p className="text-primary-80 font-bold text-center heading-xxs xl:heading-xs xl:heading-sm px-8 mt-2">
        the weekly tournaments bring immense rewards! conquer the masses
      </p>
      <div style={{backgroundImage: `url(${getImageUrl("tournament/background")}.${imageType})`}} className="bg-no-repeat bg-center bg-cover">
        <div className="bg-neutrals-0/30">
          <div className="pt-12 px-4 gradient-two">
            <p className="text-neutrals-100 text-center body-sm sm:text-[14px] xl:text-[20px] px-3 xl:leading-8">
              Join weekly tournaments of up to 256 players and become Champion
              of the Realms.
              <br />
              Win Colossal Crypto Rewards and Exclusive NFTs as the Revered
              Legend!
            </p>
            <div className="xl:flex xl:items-center xl:justify-center overflow-x-hidden">
              <div className="mt-16 flex-shrink-0 xl:translate-x-[3rem] -translate-y-4">
                <Side />
              </div>
              <div className="mb-3 flex-shrink-0">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={eth_gold}
                    alt="binance_coin"
                    className="w-[4.85rem] h-[5.10rem] sm:w-[5.85rem] sm:h-[6.10rem] md:w-[5.85rem] md:h-[6.10rem] md:w-[6.85rem] md:h-[7.10rem] lg:w-[6.85rem] lg:h-[7.10rem] xl:w-[7.85rem] xl:h-[8.10rem] md:mb-2"
                  />
                  <span className="text-neutrals-100 font-bold heading-sm xl:heading-2md text-center">
                    10 ETH
                  </span>
                </div>
                <div className="mt-2 sm:mt-6 rounded-xs 0 border-solid border-[1px] border-primary-30 w-fit mx-auto py-1 px-3">
                  <span className="block text-neutrals-100 font-bold heading-2xxs xl:heading-sm text-center">
                    Champion of the realms
                  </span>
                </div>
              </div>
              <div className="hidden xl:block scale-x-[-1] flex-shrink-0 translate-y-3 -translate-x-[3rem]">
                <Side />
              </div>
            </div>
          </div>
          <div className="gradient-one w-full lg:h-[1rem] xl:h-[10rem]" />
          <div className="gradient-two rotate-[180deg] px-4 xl:hidden">
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
