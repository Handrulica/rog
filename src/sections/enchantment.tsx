import React from 'react';
import { cn } from 'src/lib/utils';
import rarities from 'public/assets/rarities/rarities.json';
import EnchantmentData from 'public/assets/enchantment/assets.json';
import ImageWithFallback from 'src/components/image';
import useDynamicImageType from 'src/hooks/useDynamicImageType';
import getImageUrl from 'src/utils/getImageUrl';

const Enchancement = () => {
  const imageType = useDynamicImageType();
  const [selectedRarityKey, setSelectedRarityKey] = React.useState<keyof typeof rarities>('legendary');

  return (
    <div id="enchantment_section">
      <h1 className='heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90'>Enchantment cards</h1>
      <h2 className='heading-2xxs sm:heading-xs md:heading-sm lg:heading-md font-bold text-primary-80 mt-1 text-center sm:mt-2 md:mt-3 px-8'>Enhance your battle cards with potions, scrolls and tomes</h2>
      <div style={{backgroundImage: `url(${getImageUrl("enchantment/background")}.${imageType})`}} className="bg-center bg-cover bg-no-repeat mt-8 pb-8">
        <div className='gradient-two sm:pt-12 md:pt-[3.5rem] gradient-two'>
          <p className='body-sm sm:body-md md:body-2md lg:body-lg text-neutrals-100 text-center px-8 sm:px-24 md:px-32 lg:max-w-[60%] xl:max-w-[52%] mx-auto'>
            Infuse your battle cards with enchantments to give your army an extra edge in The Arena!
          </p>
        </div>
        <div className='relative w-full mt-6 sm:-mt-10 lg:-mt-20 overflow-y-hidden'>
          <div className='absolute w-full h-full z-0 flex justify-center'>
            <ImageWithFallback src='enchantment/card_back' wrapperClassName='-translate-x-[7.8rem] sm:-translate-x-[14rem] sm:translate-y-4 md:-translate-x-[18rem] md:translate-y-10 lg:-translate-x-[20rem] xl:-translate-x-[28rem] xl:translate-y-2' className='w-[8.25rem] h-[9rem] sm:w-[11.75rem] sm:h-[13.5rem] md:w-[15.4rem] md:h-[17.6rem] xl:w-[25rem] xl:h-[29rem]' alt='card_back' />
          </div>
          <div className='relative pt-3 grid grid-cols-3 gap-3 sm:gap-8  md:gap-10 lg:gap-16 xl:gap-20 w-fit mx-auto mt-8 sm:mt-24 md:mt-32'>
            {
              EnchantmentData.images[selectedRarityKey].map((image, index) =>
                <ImageWithFallback key={image} src={image} alt={'enchantment_card_' + index} className='w-[6.25rem] h-32 sm:w-[9.75rem] sm:h-[12.5rem] md:w-[13.25rem] md:h-[17rem] xl:w-[20.43rem] xl:h-[26.43rem]' />
              )
            }
          </div>
        </div>
        <div className='flex items-center justify-center space-x-[1rem] mt-4 sm:mt-10 md:mt-16 py-4'>
          {
            Object.keys(rarities).map((key, index) =>
              <button key={index} onClick={() => setSelectedRarityKey(key as keyof typeof rarities)}>
                <ImageWithFallback src={rarities[key as keyof typeof rarities].image} alt={'rarity_' + index} className={cn(selectedRarityKey === key ? 'w-[3.5rem] h-[3.5rem] sm:w-16 sm:h-16 md:w-20 md:h-20' : 'w-10 h-10 sm:w-12 sm:h-12 md:w-[3.5rem] md:h-[3.5rem]')} />
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Enchancement;
