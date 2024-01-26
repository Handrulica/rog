import Loop from "src/components/loop";
import nftsData from 'public/assets/nfts/assets.json';
import NftCard from "src/components/nft-card";
import ImageWithFallback from "src/components/image";
import useDynamicImageType from "src/hooks/useDynamicImageType";
import getImageUrl from "src/utils/getImageUrl";

const Nfts = () => {
  const imageType = useDynamicImageType();

  return (
    <div id='nfts_section' className="mb-12">
      <div style={{backgroundImage: `url(${getImageUrl("nfts/background")}.${imageType})`}} className="bg-no-repeat bg-cover bg-right">
        <div className='w-full gradient-two pb-20 sm:pb-24 md:pb-32'>
          <div className='w-fit mx-auto'>
            <span className='block font-heading text-[0.625rem] sm:heading-3xxs md:heading-xs lg:heading-md text-neutrals-100 font-bold sm:font-normal'>Explore</span>
            <h1 className='block font-heading text-[1.375rem] sm:heading-lg md:heading-2lg lg:heading-xl xl:heading-2xl text-primary-90 font-bold sm:font-bold'>Realms of Glory NFTs</h1>
            <span className='block text-right font-heading text-[0.625rem] sm:heading-3xxs md:heading-xs lg:heading-sm font-bold sm:font-bold text-accent'>9 Limited Edition Utility Cards</span>
          </div>
        </div>
        <div className='gradient-three'>
          <Loop direction='left' speed={30}>
            {
              nftsData.images.map((image, index) =>
                <ImageWithFallback key={index} src={image} alt={`nft_card`} className='w-[7.5rem] h-[9.68rem] sm:w-[8.75rem] sm:h-[11.2rem] md:w-40 md:h-[13rem] md:w-[13.75rem] md:h-[17.75rem] mx-3  rounded-[0.5rem]' />
              )
            }
          </Loop>
          <div id="nfts_section_two" className='px-10 pt-16 sm:pt-20 md:pt-24 lg:pt-16 xl:pt-16 pb-4 sm:pb-8 md:pb-16 gradient-one'>
            <p className='heading-xs sm:heading-sm lg:heading-md xl:heading-lg font-bold text-primary-85 text-center mx-auto mt-2 '><span className='text-neutrals-100'>Stake</span> Realms of Glory NFTs for Exclusive Battles Benefits and Epic Rewards</p>
          </div>
        </div>

      </div>
      <div className='mt-8 px-4 sm:px-8 md:px-12 lg:px-20 space-y-4 sm:space-y-[0px] grid gap-4 sm:grid-cols-2'>
        <NftCard variant='shrine' header='The Shrine' description='Card Generation' to={""}/>
        <NftCard variant='hephaestus' header='Hephaestus’ Forge' description='Card Forging' to={""} />
        <NftCard variant='hermes' header='Hermes’ Unique Exchange' description='Card Trading' to={""} />
        <NftCard variant='pandora' header='pandora’s mystery box' description='Card Picking' to={""} />
      </div>
    </div>
  ); 
};

export default Nfts;
