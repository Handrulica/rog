
import React from 'react';
import { Button } from "./button";
import { cn } from 'src/lib/utils';
import cardsData from 'public/assets/card_inventory/cards';
import ImageWithFallback from './image';

const card_options = ['warriors', 'creatures', 'heroes', 'titans', 'gods'];

// Define the type for the 'cards' object
type Cards = {
  warriors: string[];
  creatures: string[];
  heroes: string[];
  titans: string[];
  gods: string[];
};

interface CardInventoryProps
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardInventory = ({ className }: CardInventoryProps) => {

  const [selectedOption, setSelectedOption] = React.useState<string>('warriors');
  const selectedCards = cardsData[selectedOption as keyof Cards]; // Use a type assertion here

  return (
    <div className={cn('w-fit mx-auto', className)}>
      <div className='space-x-4 flex justify-center'>
        {
          card_options.map((card, index) =>
            <Button
              key={index}
              variant='no-border'
              onClick={() => setSelectedOption(card)}
              className={`px-0 text-[0.7rem] font-heading font-[10px] sm:heading-3xxs md:heading-sm font-bold sm:font-bold ${selectedOption === card ? 'text-neutrals-100' : 'text-neutrals-30'}`}
            >
              {card}
            </Button>
          )
        }
      </div>
      <div className='sm:mt-3 py-5 sm:py-6 md:py-8 px-4 sm:py-6 md:px-8 grid grid-cols-3 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-5 sm:gap-y-6 md:gap-y-8 rounded-[10px] border-solid border-[2px] border-primary-80'>
        {selectedCards && selectedCards.map((cardPath, index) => (
          <ImageWithFallback key={index} src={cardPath} alt={`Card ${index}`} className='rounded-[6%] w-[5rem] h-[6.43rem] sm:w-[7.5rem] sm:h-[9.68rem] md:w-[10rem] md:h-[12.93rem]'/>
        ))}
      </div>
    </div>
  );
};

export default CardInventory;