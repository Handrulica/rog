import GenesisCard from "src/components/genesis-card";
import card from "public/assets/genesis/card.png";
import bronze from "public/assets/genesis/cards/bronze.png";
import silver from "public/assets/genesis/cards/silver.png";
import gold from "public/assets/genesis/cards/gold.png";
import platinum from "public/assets/genesis/cards/platinum.png";

const Genesis = () => {
  return (
    <div className="relative w-full text-center md:-mt-32">
      <div className="md:hidden absolute w-full h-full pt-12 overflow-hidden blur-[2px]">
        <img
          src={card}
          className="w-[12rem] h-[17rem] rotate-[210deg] ml-auto translate-x-10"
          alt="card_background"
        />
        <img
          src={card}
          className="w-[12rem] h-[17rem] -translate-x-10"
          alt="card_background"
        />
        <img
          src={card}
          className="w-[12rem] h-[17rem] rotate-[210deg] ml-auto translate-x-10"
          alt="card_background"
        />
      </div>
      <div className="w-full text-center relative bg-neutrals-0/30 md:bg-neutrals-0/0">
        <h1 className="heading-md font-bold text-neutrals-100 white-shadow">
          Genesis' Legends
        </h1>
        <span className="heading-sm font-bold text-neutrals-100 mt-2 white-shadow">
          0 / 500
        </span>
        <div className="mt-12 lg:mt-32 grid grid-cols-2 md:grid-cols-4 w-fit lg:w-full mx-auto gap-x-6 gap-y-8 px-2 lg:gap-x-10 lg:px-8">
          <GenesisCard
            nft_chest_url={bronze}
            price={0.8}
            header="Singular Destiny"
            description="1 Random Nft"
            variant="destiny"
            to="/"
          />
          <GenesisCard
            nft_chest_url={silver}
            price={0.7}
            header="Trio Triumph"
            description="3 Random Nft's"
            variant="triumph"
            to="/"
          />
          <GenesisCard
            nft_chest_url={gold}
            price={0.6}
            header="FIVE FOLD DOMINION"
            description="5 Random Nft's"
            variant="dominion"
            to="/"
          />
          <GenesisCard
            nft_chest_url={platinum}
            price={0.5}
            header="THE REALMS MASTER"
            description="7 Random Nft's"
            variant="master"
            to="/"
          />
        </div>
        <p className="text-center body-sm lg:body-lg text-neutrals-100 px-12 sm:max-w-lg md:max-w-none mx-auto md:px-20 pt-20 md:gradient-three">
          Each NFT possesses unique abilities and attributes, elevating your
          gameplay to unparalleled heights.
          <br /> The battle for supremacy awaits, and only those equipped with
          the mightiest NFTs will conquer the Realms of Glory!
        </p>
      </div>
    </div>
  );
};

export default Genesis;
