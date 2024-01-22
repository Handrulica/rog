import GenesisCard from "src/components/genesis-card";

const Genesis = () => {
  return (
    <div className="relative w-full text-center md:-mt-32">
      <div className="w-full text-center relative bg-neutrals-0/30 md:bg-neutrals-0/0">
        <h1 className="heading-md font-bold text-neutrals-100 white-shadow">
          Genesis' Legends
        </h1>
        <div className="mt-12 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 w-fit lg:w-full mx-auto gap-x-6 gap-y-8 px-2 sm:gap-x-12 sm:gap-y-10  md:gap-x-12 lg:gap-x-10 md:px-12 lg:px-2">
          <GenesisCard
            nft_chest_url='genesis/cards/bronze'
            price={0.8}
            header="Singular Destiny"
            description="1 Random Nft"
            variant="destiny"
            to="/"
          />
          <GenesisCard
            nft_chest_url='genesis/cards/silver'
            price={0.7}
            header="Trio Triumph"
            description="3 Random Nft's"
            variant="triumph"
            to="/"
          />
          <GenesisCard
            nft_chest_url='genesis/cards/gold'
            price={0.6}
            header="Five Fold Dominion"
            description="5 Random Nft's"
            variant="dominion"
            to="/"
          />
          <GenesisCard
            nft_chest_url='genesis/cards/platinum'
            price={0.5}
            header="The Realms Master"
            description="7 Random Nft's"
            variant="master"
            to="/"
          />
        </div>
        <p className="text-center body-sm lg:body-lg text-neutrals-100 px-2 sm:max-w-lg md:max-w-none mx-auto md:px-20 pt-10 md:gradient-three">
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
