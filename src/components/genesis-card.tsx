import React from "react";
import { cn } from "src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { GenesisCard as GenesisCardType } from "src/types/nfts";
import { Button } from "./button";
import ImageWithFallback from "./image";

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
        triumph: "border-neutrals-80 bg-neutrals-50/[0.15]",
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
    { className, variant, header, description, nft_chest_url, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(genesisCardVariants({ variant, className }))}
        {...props}
      >
        <div className="w-full">
          <ImageWithFallback
            src={nft_chest_url}
            alt={`coin_${variant}`}
            className="w-full h-full"
          />
        </div>
        <div className={cn(genesisCardDetailsVariants({ variant }))}>
          <span className="heading-2xxs lg:heading-sm font-bold text-primary-100 block">
            {header}
          </span>
          <span className="heading-xxs lg:heading-xs font-bold md:font-medium text-primary-100 block">
            {description}
          </span>
        </div>
        <div className="flex w-fit justify-center items-center my-4">
          <ImageWithFallback
            src='coins/eth/gold_eth'
            alt="binance coin"
            className="w-[1.75rem] h-[1.75rem] md:w-[1.25rem] md:h-[1.25rem] lg:h-[1.75rem] lg:w-[1.75rem] lg:mt-2 mr-4"
          />
          <span className="heading-3xxs md:heading-3XXS lg:heading-xs xl:heading-sm font-bold md:tracking-widest text-primary-100 mt-1 lg:mt-3">
            {" "}
            TBA{" "}
          </span>
        </div>
        <Button
          variant="secondary"
          size="default-secondary"
          disabled
          className="mx-4 md:mx-6 lg:h-[2.8rem] lg:w-[10rem] 2xl:h-[4.3rem] 2xl:w-[14rem]"
        >
          Buy Nft
        </Button>
      </div>
    );
  }
);

export default GenesisCard;
