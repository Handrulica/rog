import book from 'public/assets/battlepack/book.png';
import card_1 from 'public/assets/battlepack/card_1.png';
import card_2 from 'public/assets/battlepack/card_2.png';
import card_3 from 'public/assets/battlepack/carD_3.png';
import CardInventory from 'src/components/card_inventory';

const BattlePack = () => {
  return (
    <div id="battlepack_section" className='w-full h-[62rem] sm:h-[88rem] md:h-[117rem] lg:h-[107rem] xl:h-[70rem]'>
      <div className="md:bg-[url('public/assets/battlepack/background.png')] bg-center bg-cover bg-no-repeat">
        <div className='md:gradient-two'>
          <h1 className='heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center text-primary-90'>The Battle Pack</h1>
          <div className='xl:grid xl:grid-cols-2 items-center xl:mt-32'>
            <div>
              <div className='mt-10 sm:mt-14 md:mt-20 xl:mt-[0px] px-4 sm:px-12 md:px-18 md:max-w-[78%] lg:max-w-[60%] xl:max-w-[90%] mb-12 sm:mb-[4.5rem] md:mb-24'>
                <span className='heading-2xxs sm:heading-3xxs md:heading-sm sm:font-bold text-neutrals-100 font-bold'>Embrace the thrill!</span>
                <h2 className='heading-sm sm:heading-md md:heading-lg sm:font-bold text-primary-85 font-bold md:mt-3'>Open the packs and conquer the battle arena!</h2>
                <span className='block mt-5 body-xs sm:body-sm md:body-md text-primary-100 leading-[1.5] font-body xl:font-normal pr-10'>
                  With a diverse array  of warriors, mythical creatures, heroes, titans and gods, choose the strongest
                  cards and forge an unstoppable army in order to emerge victorious in intense head-to-head encounters.
                </span>
              </div>
              <div className='flex pl-12 sm:pl-[10.5rem] md:pl-32 lg:pl-[20rem] xl:pl-16 mb-16'>
                <img src={book} className='w-[8rem] h-[11.43rem] sm:w-[12.6rem] sm:h-[19.2rem] md:w-[16.12rem] md:h-[23.12rem] rotate-[-3deg] scale-x-[-1]' />
                <div className='flex mt-4 -ml-2 md:-ml-10'>
                  <img src={card_1} className='absolute w-[3.87rem] h-[4.87rem] sm:w-[6.52rem] sm:h-[8.43rem] md:w-[9.29rem] md:h-[12rem] rotate-[-21deg] translate-y-12' />
                  <img src={card_2} className='absolute w-[4rem] h-[5.12rem] sm:w-[6.52rem] sm:h-[8.43rem] md:w-[9.29rem] md:h-[12rem] z-20 rotate-[4deg] translate-x-[3.25rem] md:translate-x-[7rem]' />
                  <img src={card_3} className='absolute w-[3.75rem] h-[4.87rem] sm:w-[6.52rem] sm:h-[8.43rem] md:w-[9.29rem] md:h-[12rem] rotate-[21deg] sm:rotate-[25deg] translate-y-12 md:translate-y-[6.5rem] translate-x-[5.5rem] md:translate-x-[13rem]' />
                </div>
              </div>
            </div>
            <div className='hidden xl:block'>
              <CardInventory />
            </div>
          </div>
        </div>
        <div className='hidden md:block gradient-three w-full lg:h-[6rem] xl:h-[10rem]' />
      </div>
      <div className="bg-[url('public/assets/battlepack/background.png')] md:bg-none bg-left-top sm:bg-center bg-cover bg-no-repeat h-fit relative xl:hidden">
        <div className='w-full h-12 bg-neutrals-0' />
        <div className='w-full h-40 sm:h-64 gradient-two' />
        <div className='px-12 w-full absolute top-1'>
          <CardInventory />
        </div>
        <div className='w-full h-40 gradient-three' />
        <div className='w-full h-12 bg-neutrals-0' />
      </div>
    </div>
  );
};

export default BattlePack;
