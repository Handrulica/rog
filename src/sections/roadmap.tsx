import StepperIndicator, { StepperContent, StepperTitle } from "src/components/stepper";
import RoadmapData from 'public/assets/roadmap/assets.json';
import { cn } from 'src/lib/utils';
import useScreenSize from 'src/hooks/useScreenSize';

type Variant = 'blue' | 'default' | 'disabled'

const Roadmap = () => {

  const screenSize = useScreenSize();

  return (
    <div id="roadmap_section">
      <h1 className='heading-sm sm:heading-md md:heading-lg lg:heading-2lg xl:heading-3lg font-bold text-center sm:tracking-wide text-primary-90 px-8 mb-8 sm:mb-24 xl:mb-32'>Realms of glory roadmap</h1>
      <div className='sm:w-fit mx-auto'>
        {
          RoadmapData.map((entry, index) => {
            const variant: Variant = (['blue', 'default', 'disabled'].includes(entry.variant) ? entry.variant : 'disabled') as Variant;
            return (
              <div key={index} className='sm:flex sm:w-fit'>
                <StepperTitle className='hidden sm:block sm:w-[8rem] mt-2 pl-2 sm:ml-0' variant={variant}>{entry.period}</StepperTitle>
                <div className='w-fit'>
                  <div className='flex items-center -my-5'>
                    <StepperIndicator variant={variant} className={cn(variant === 'disabled' && 'my-6')} />
                    <StepperTitle variant={variant}>{screenSize === 'xs' ? entry.period : entry.title}</StepperTitle>
                  </div>
                  {
                    entry.items.length > 0 &&
                    <StepperContent className='sm:max-w-xl lg:max-w-[50rem]' variant={index === RoadmapData.length - 2 ? 'disabled' : 'default'}>
                      <p className='sm:hidden text-neutrals-100 heading-xs font-bold'>
                        {entry.title}
                      </p>
                      <ul className='mt-5 lg:mt-8  px-3 mb-10 lg:mb-24 sm:mt-2 list-disc'>
                        {
                          entry.items.map((item, item_index) =>
                            <li key={item_index} className='text-neutrals-70 body-xs sm:body-sm lg:body-2md'>
                              {item}
                            </li>
                          )
                        }
                      </ul>
                    </StepperContent>
                  }
                </div>
              </div>
            );
          })
        }
      </div>
      <h3 className='sm:hidden text-neutrals-100 font-bold heading-xs ml-20 -mt-2'>
        Main game launch
      </h3>
    </div>
  );
};

export default Roadmap;
