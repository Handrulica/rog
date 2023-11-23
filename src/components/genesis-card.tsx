import React from "react";
import { cn } from "src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { GenesisCard as GenesisCardType } from "src/types/nfts";
import binance_coin from 'public/assets/binance_coin.png';
import { Button } from "./button";

export const genesisCardVariants = cva(
  "pb-3 lg:pb-4 border border-solid border-primary-100 rounded shadow-xs flex flex-col justify-center items-center w-full",
  {
    variants: {
      variant: {
        destiny: "border-grid shadow-destiny",
        triumph: "border-neutrals-60 shadow-triumph",
        dominion: "border-primary-55 shadow-dominion",
        master: "border-neutrals-70 shadow-master",
      },
    },
    defaultVariants: {
      variant: "destiny",
    },
  }
);

const genesisCardDetailsVariants = cva(
  "border border-solid text-center py-4 w-full",
  {
    variants: {
      variant: {
        destiny: "border-grid bg-grid/20",
        triumph: "border-neutrals bg-neutrals-50/[0.15]",
        dominion: "border-primary-55 bg-primary-55/[0.15]",
        master: "border-neutrals-70 bg-primary-100/[0.25]",
      },
    },
    defaultVariants: {
      variant: "destiny",
    },
  }
);

export interface GenesisCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof genesisCardVariants>,
    Omit<GenesisCardType, "variant"> {
  nft_chest_url: string;
}

const GenesisCard = React.forwardRef<HTMLDivElement, GenesisCardProps>(
  (
    { className, variant, price, header, description, nft_chest_url, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(genesisCardVariants({ variant, className }))}
        {...props}
      >
        <div className="w-full">
          <img
            src={nft_chest_url}
            alt="binance coin"
            className="w-full h-full lg:mt-1"
          />
        </div>
        <div className={cn(genesisCardDetailsVariants({ variant }))}>
          <span className="heading-3xxs lg:heading-md font-bold md:font-medium text-primary-100 block">
            {header}
          </span>
          <span className="heading-xxs lg:heading-xs font-bold md:font-medium text-primary-100 block">
            {description}
          </span>
        </div>
        <div className="flex w-fit justify-center items-center my-4">
          <img
            src={binance_coin}
            alt="binance coin"
            className="w-5 h-5 md:w-[2.37rem] md:h-[2.37rem] lg:h-10 lg:w-10 lg:mt-2 mr-2"
          />
          <span className="heading-2xxs md:heading-3XXS lg:heading-md font-bold md:tracking-widest text-primary-100 mt-1 lg:mt-3">
            {" "}
            {price} BNB / NFT{" "}
          </span>
        </div>
        <Button
          variant="secondary"
          size="default-secondary"
          className="mx-4 md:mx-6 lg:h-[4.8rem] lg:w-[16rem]"
        >
          Buy Nft
        </Button>
      </div>
    );
  }
);

export default GenesisCard;
