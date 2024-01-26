import particles from 'public/assets/components/particles.gif';
import treasureData from 'public/assets/treasures/assets.json';
import useDynamicImageType from 'src/hooks/useDynamicImageType';
import getImageUrl from 'src/utils/getImageUrl';
import ImageWithFallback from 'src/components/image';

const Exchange = () => {
  const imageType = useDynamicImageType();

  return (
    <div className='w-full'>
      <div style={{backgroundImage: `url(${getImageUrl("exchange/background")}.${imageType})`}} className="bg-cover bg-top bg-no-repeat">
        <div className='bg-neutrals-0/50'>
          <div className="sm:bg-none bg-cover bg-top bg-no-repeat">
            <div className='gradient-two grid sm:grid-cols-2 items-center'>
              <div className='sm:mt-32 sm:pl-10 lg:mt-2 lg:pl-20 lg:pr-10 lg:max-w-2xl'>
                <h1 className='heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold sm:font-bold md:font-bold text-center sm:text-left sm:tracking-wide text-primary-90 px-8'>Hermes’ Unique Exchange</h1>
                <p className='heading-2xxs sm:heading-xs md:heading-sm font-bold sm:font-normal text-primary-80 mt-1 text-center sm:text-left sm:mt-2 sm:tracking-wide md:mt-3 px-8 sm:pl-0'>
                  exchange Treasure Cards in a flash and dominate the realms of glory treasure hunt!
                </p>
              </div>
              <div className='relative'>
                <div className='bg-primary-30 absolute w-[50%] h-[100%] top-24 left-[25%] blur-[100px]' />
                <img src={particles} alt='particles' className='absolute w-[20.75rem] lg:w-[28.62rem] lg:h-[35.93rem] h-[20.62rem] left-[10%] sm:left-[0%] md:left-[10%] top-[10%] lg:top-[0%] xl:translate-x-32' />
                <ImageWithFallback src='exchange/hermes' alt='hades' className='w-[13.75rem] h-[17.62rem] lg:w-[21.62rem] lg:h-[27.93rem] mx-auto translate-y-24 relative rounded-[1.5rem] rotate-[4deg]' />
              </div>
            </div>
            <div className='pt-48 sm:bg-none lg:hidden'>
              <h1 className='heading-sm md:heading-md font-bold sm:font-bold text-primary-85 text-center px-8 sm:max-w-2xl sm:px-16 mx-auto '>Join Hermes’ Conclave and Surge your way to Glory!</h1>
              <p className='text-primary font-bold text-center heading-xxs sm:heading-2xxs mt-2 px-8 sm:max-w-2xl sm:px-20 mx-auto'>Unite with Fellow Players to Complete Alliance Sets and Reap Massive Crytpo Rewards!</p>
            </div>
          </div>
          <div className='w-full sm:gradient-three lg:pt-32 lg:flex lg:flex-row-reverse justify-around items-center'>
            <div className='hidden lg:block'>
              <h1 className='heading-sm md:heading-md lg:heading-2lg font-bold text-primary-85 text-center lg:text-left px-8 sm:max-w-[45rem] sm:px-16 lg:px-[0]'>Join Hermes’ Conclave and Surge your way to Glory!</h1>
              <p className='text-primary font-normal text-center lg:text-left heading-xxs sm:heading-2xxs lg:heading-sm mt-2 px-8 sm:max-w-[45rem] lg:pl-[0px] lg:pr-[7rem] mx-auto tracking-[2px] mt-8'>Unite with Fellow Players to Complete Alliance Sets and Reap Massive Crytpo Rewards!</p>
            </div>
            <div>
              <span className='block text-center font-bold text-neutrals-100 heading-sm lg:heading-2md mt-12 lg:mt-[0px]'>ARMORY</span>
              <div className='grid grid-cols-4 gap-3 w-fit mx-auto mt-8'>
                <ImageWithFallback src={treasureData.warrior.items[3]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='gladiator_shield' />
                <ImageWithFallback src={treasureData.warrior.items[0]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='gladiator_helmet' />
                <ImageWithFallback src={treasureData.hero.items[4]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='dwarf_ale' />
                <ImageWithFallback src={treasureData.hero.items[0]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='dwarf_helmet' />
                <ImageWithFallback src={treasureData.creature.items[4]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs evolved_blue' alt='archmage_wand' />
                <ImageWithFallback src={treasureData.creature.items[1]} className='w-[4.375rem]sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='dwarf_cape' />
                <ImageWithFallback src={treasureData.god.items[5]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='wizard_staff' />
                <ImageWithFallback src={treasureData.god.items[3]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='wizard_ring' />
                <ImageWithFallback src={treasureData.titan.items[4]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='druid_staff' />
                <ImageWithFallback src={treasureData.titan.items[1]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='druid_sandals' />
                <ImageWithFallback src={treasureData.titan.items[2]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='druid_ring' />
                <ImageWithFallback src={treasureData.titan.items[0]} className='w-[4.375rem] sm:w-[6.32rem] md:w-[7.48rem] h-[5.625rem] sm:h-[7.5rem] md:h-[9.5rem] rounded-xs' alt='druid_robe' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 mt-12 sm:mt-20 lg:mt-48 lg:px-24'>
        <div className='px-8'>
          <h3 className='text-primary-80 font-bold heading-xs lg:heading-lg'>Blind card exchange</h3>
          <p className='text-neutrals-100 body-sm lg:body-lg mt-4 lg:mt-5'>
            The completion of an Alliance Set can sometimes become difficult searching for the missing pieces.
          </p>
          <p className='text-neutrals-100 body-sm lg:body-lg mt-4 lg:mt-5'>
            Hermes gives you the ability to use the <span className='text-blue-70'>TRADE</span>  skill by blindly exchanging any Treasure Card with other players across The Realms.
          </p>
          <p className='text-neutrals-100 body-sm lg:body-lg mt-4 lg:mt-5'>
            You never know what you get in return, so keep trading! Someone, somewhere might have the right piece you are looking for.
          </p>
        </div>
        <div className='flex justify-center items-center space-x-8 mt-12'>
          <ImageWithFallback src={treasureData.creature.items[4]} alt='rider_card' className='w-[6.25rem] h-[8.125rem] lg:w-[10.31rem] lg:h-[13rem] xl:w-[12.31rem] xl:h-[15rem] rounded-xs evolved_blue' />
          <ImageWithFallback src='exchange/rotating_arrows' className='w-[2.875rem] h-[3.625rem] rotating_arrows' />
          <ImageWithFallback src='exchange/card_back' alt='rider_card' className='w-[6.25rem] h-[8.125rem] rounded-xs lg:w-[10.31rem] lg:h-[13rem] xl:w-[12.31rem] xl:h-[15rem]' />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
