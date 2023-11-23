import Loop from "src/components/loop";
import bnb_coin from "public/assets/landing/bnb_coin.png";
import bronze_coin from "public/assets/arena/bronze_coin.png";
import silver_coin from "public/assets/arena/silver_coin.png";
import gold_coin from "public/assets/arena/gold_coin.png";
import platinum_coin from "public/assets/arena/platinum_coin.png";
import ArenaOption from "src/components/arena_option";

const Arena = () => {
  return (
    <div className="w-full overflow-x-hidden" id="arena_section">
      <h1 className="heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90">
        The Arena
      </h1>
      <Loop direction="left" speed={20} className="my-2 sm:mt-6 md:mt-8">
        <p className="heading-2xxs lg:heading-xs text-neutrals-100">
          Automatic, fast paced battles based on deck-power // Instant crypto
          rewards // ChainLink VRF battle pairing // Blockchain results
          transparency //
        </p>
      </Loop>
      <div className="bg-[url('public/assets/arena/background_mobile.png')] lg:bg-[url('public/assets/arena/background_desktop.png')] bg-top-left sm:bg-left xl:bg-center bg-cover bg-no-repeat h-fit relative sm:mt-10 md:mt-20">
        <div className="gradient-two">
          <div className="w-full gradient-two sm:bg-none pb-20 md:pt-20 lg:pb-32">
            <p className="heading-xxs sm:heading-3xxs md:heading-xs xl:heading-sm font-bold sm:font-bold text-primary-80 text-center px-12">
              Experience Lightning-Fast Battle Outcomes in Realms of Glory!
              <br />
              Join Epic Showdowns with Players Across Four Battle Categories
            </p>
            <h2 className="heading-2xxs sm:heading-xs md:heading-md xl:heading-2md sm:tracking-[0.15rem] text-neutrals-100 font-bold sm:font-bold text-center flex items-center justify-center mt-3 sm:mt-4 md:mt-5">
              Win Instant{" "}
              <img
                className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] lg:w-[32px] lg:h-[32px] mx-1"
                src={bnb_coin}
              />{" "}
              bnb rewards for each victory{" "}
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-16 mx-auto gradient-three lg:bg-none lg:pt-10 lg:px-[15%]">
            <ArenaOption
              type="bronze"
              image={bronze_coin}
              first={1}
              second={2}
            />
            <ArenaOption
              type="silver"
              image={silver_coin}
              first={1}
              second={5}
            />
            <ArenaOption type="gold" image={gold_coin} first={1} second={9} />
            <ArenaOption
              type="platinum"
              image={platinum_coin}
              first={1}
              second={15}
            />
          </div>
        </div>
        <div className="bg-neutrals-0/80 lg:bg-neutrals-0/0 gradient-one ">
          <div className="h-16 md:h-64 lg:h-[10rem] w-full " />
        </div>
      </div>
    </div>
  );
};

export default Arena;
