import React from 'react';
import { cn } from 'src/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { NftCard as NftCardType } from 'src/types/nfts';
import test from 'public/assets/nft_cards_background/shrine_background.png';
import doubleArrow from 'public/assets/icons/double_arrow.svg';
import useHover from 'src/hooks/useHover';
import { NftsState, useNftsContext } from 'src/providers/nfts';

const nftCardVariants = cva(
  'w-full rounded-xs border h-[14rem] md:h-[20rem] bg-cover border-primary-20 hover:border-primary nft_card relative bg-center',
  {
    variants: {
      variant: {
        shrine: "bg-[url('public/assets/nft_cards_background/shrine_background.png')]",
        hermes: "bg-[url('public/assets/nft_cards_background/hermes_background.png')]",
        hephaestus: "bg-[url('public/assets/nft_cards_background/hephaestus_background.png')]",
        pandora: "bg-[url('public/assets/nft_cards_background/pandora_background.png')]"
      },
    },
    defaultVariants: {
      variant: 'shrine'
    }
  }
);

export interface NftCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof nftCardVariants>, Omit<NftCardType, 'variant'> {}

const NftCard = React.forwardRef<HTMLDivElement, NftCardProps>(
  ({ className, variant, header, description, ...props }) => {
    const ref = React.useRef(null);
    const isHover = useHover(ref);
    const { isNftSelected, setNftSelected } = useNftsContext();
    const isSelected = isNftSelected(variant as keyof NftsState);
    return (
      <div
        ref={ref}
        className={cn(nftCardVariants({ variant, className}), isSelected && 'border-primary-90')}
        {...props}
        style={{ backgroundImage: test }}
      >
        <div className='w-full h-full flex flex-col justify-end py-2 px-3 bg-neutrals-5/20 hover:bg-neutrals-5/40 rounded-xs cursor-pointer' onClick={() => setNftSelected(variant as keyof NftsState, !isSelected)}>
          <span className='text-primary heading-3xxs sm:heading-3xxs md:heading-sm font-bold sm:font-bold block'>{header}</span>
          <span className='text-primary-100 heading-2xxs font-medium sm:font-normal block'>{description}</span>
          {
            isSelected && !isHover &&
            <button disabled className='flex text-primary-100 items-center gap-1 heading-xxs mt-1'>Active</button>
          }
          {
            isHover &&
            <button className='flex text-primary-100 items-center gap-1 heading-xxs mt-1 hover:text-primary-80 hover:sepia'> {isSelected ? 'Hide' : 'Explore'} <img src={doubleArrow} /></button>
          }
        </div>
      </div>
    );
  }
);

export default NftCard;
