import particles from 'public/assets/particles.gif';
import nft from 'public/assets/forge/nft.png';
import kostas from 'public/assets/forge/kostas.png';
import kostas_forged from 'public/assets/forge/kostas_forged.png';
import fusion from 'public/assets/forge/fusion.png';
import potion from 'public/assets/forge/potion.png';
import enchant from 'public/assets/forge/enchant.png';
import hector from 'public/assets/forge/hector.png';
import hector_fusioned from 'public/assets/forge/hector_fusioned.png';

const Fusion = () => {
  return (
    <div className='sm:flex w-full lg:flex-col lg:gap-y-8 lg:mx-auto justify-center items-center'>
      <div className='grid grid-cols-3 gap-2 w-fit mx-auto sm:mx-[0px] sm:mr-8'>
        <img src={kostas} alt='kostas_card' className='w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem]' />
        <img src={kostas} alt='kostas_card' className='w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem]' />
        <img src={kostas} alt='kostas_card' className='w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem]' />
      </div>
      <div className='w-full sm:w-fit flex items-center justify-center sm:justify-start mt-16 sm:mt-[0px]'>
        <div className='flex flex-col w-fit items-center mr-8'>
          <img src={fusion} alt='fusion_symbol' className='w-[3.75rem] h-[3.75rem] lg:w-[6rem] lg:h-[6rem] xl:w-[7rem] xl:h-[7rem]' />
          <span className='text-primary-85 font-bold heading-sm mt-1'>Fusion</span>
        </div>
        <img src={kostas_forged} alt='kostas_card' className='evolved_red w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem]' />
      </div>
    </div>
  );
};

const Forge = () => {
  return (
    <div className='w-full'>
      <div className="sm:bg-[url('public/assets/forge/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="sm:grid sm:grid-cols-2 sm:pl-12 md:pl-10 sm:gradient-two">
          <div className='sm:pt-20 md:pl-10 sm:mt-6'>
            <h1 className='heading-sm sm:heading-md md:heading-lg xl:heading-2lg xl:heading-3lg font-bold text-center sm:text-left text-primary-90 px-8 sm:px-[0px] sm:tracking-[0.12rem] lg:tracking-[4px] xl:tracking-[5px]'>Hephaestus'forge</h1>
            <p className='heading-2xxs sm:heading-xs md:heading-sm font-bold sm:font-normal sm:max-w-md lg:max-w-2xl text-primary-80 mt-1 text-center sm:text-left sm:mt-2 md:mt-3 px-12 sm:px-[0px] lg:tracking-[2px]'>
              Strengthen Your Arsenal with Transformed Cards!
            </p>
            <h2 className='text-primary-85 font-bold text-center sm:text-left heading-xs lg:heading-lg xl:heading-2lg mt-8 sm:mt-12 px-8 sm:px-[0px] sm:max-w-xs lg:max-w-2xl'>Ignite the Flames and let Hephaestus Start <span className='text-red-50'>Forging!</span></h2>
          </div>
          <div className='hidden sm:block sm:relative'>
            <div className='bg-primary-30 absolute w-[50%] h-[100%] top-24 left-[25%] blur-[100px]' />
            <img src={particles} alt='particles' className='absolute w-[100%] lg:w-[40rem] lg:-translate-y-[2rem] xl:w-[30rem] xl:h-[36rem] xl:translate-y-4 xl:translate-x-16 xl:w-[32rem] 2xl:translate-x-32' />
            <img src={nft} alt='hades' className='w-[13.75rem] h-[17.62rem] sm:w-[15rem] sm:h-[19.5rem] lg:w-[17rem] lg:h-[21.5rem] xl:w-[23.75rem] xl:h-[30.62rem]  mx-auto translate-y-24 relative' />
          </div>
        </div>
        <div className="bg-[url('public/assets/forge/background.png')] sm:bg-none bg-cover bg-center bg-no-repeat">
          <div className='gradient-two sm:hidden'>
            <div className='relative'>
              <div className='bg-primary-30 absolute w-[50%] h-[100%] top-24 left-[25%] blur-[100px]' />
              <img src={particles} alt='particles' className='absolute w-[100%]' />
              <img src={nft} alt='hades' className='w-[13.75rem] h-[17.62rem] mx-auto translate-y-24 relative' />
            </div>
          </div>
          <div className='gradient-one lg:grid lg:grid-cols-2 lg:pt-32 lg:pb-16 lg:items-center'>
            <div className='hidden lg:block'>
              <Fusion />
            </div>
            <div className='pt-48 lg:pt-[0px] px-8 lg:pl-8 lg:pr-12 xl:pl-2 2xl:pr-32 pb-12 lg:pb-[0px] sm:text-center sm:max-w-xl sm:mx-auto lg:max-w-full lg:text-left'>
              <h2 className='text-primary-80 font-bold heading-xs lg:heading-2md xl:heading-lg'>Upgrade card's rarity</h2>
              <p className='text-neutrals-90 body-sm lg:body-2md xl:body-lg mt-3 pr-3'>Too many low-power cards can weaken your army.</p>
              <p className='text-neutrals-90 body-sm lg:body-2md xl:body-lg mt-2 pr-3'>Ask Hephaestus to transform 3 identical cards into a stronger one by using the FUSION skill.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <div className='lg:hidden'>
          <Fusion />
        </div>
        <div className='mt-12 sm:mt-24 px-8  sm:text-center lg:max-w-full lg:text-left lg:grid lg:grid-cols-2 items-center'>
          <div className='lg:pl-4 lg:pr-16 xl:px-12 2xl:px-20'> 
            <h2 className='text-primary-80 font-bold heading-xs lg:heading-2md xl:heading-lg'>Power your cards</h2>
            <p className='text-neutrals-90 body-sm lg:body-2md xl:body-lg mt-3 pr-3'>Imbue your battle cards with incredible power, making them even stronger on the battlefield.</p>
            <p className='text-neutrals-90 body-sm lg:body-2md xl:body-lg mt-2 pr-3'>Use an Enchantment Card of any rarity and infuse your battle card with huge power!</p>
          </div>
          <div className='sm:flex justify-center items-center sm:mt-12 lg:col-span-1'>
            <div className='grid grid-cols-2 w-fit mx-auto sm:mx-[0px] sm:mr-8 justify-center space-x-2 mt-12 sm:mt-[0px]'>
              <img src={hector} alt='hector_card' className='w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem]' />
              <img src={potion} alt='potion_card' className='w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem]' />
            </div>
            <div className='flex flex-col w-full sm:w-fit items-center text-center justify-center sm:mr-8'>
              <img src={enchant} alt='enchant_symbol' className='w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] xl:w-[7rem] xl:h-[7rem] mx-auto sm:mx-[0px] mt-8 sm:mt-[0px]' />
              <span className='text-primary-85 font-bold heading-sm mt-1'>Enchant</span>
            </div>
            <img src={hector_fusioned} alt='hector_card' className='evolved_dark_blue w-[6.25rem] h-[8.125rem] lg:w-[8.5rem] lg:h-[11.12rem] xl:w-[9.5rem] xl:h-[12.12rem] mx-auto sm:mx-[0px] mt-8 sm:mt-[0px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forge;
