import React from 'react';
import { cn } from 'src/lib/utils';

interface ArenaOptionProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  image: string;
  first: number;
  second: number;
}

const ArenaOption:React.FC<ArenaOptionProps> = ({
  type, image, first, second, className
}: ArenaOptionProps) => {
  return (
    <div className={cn('w-full flex flex-col justify-center items-center', className)}>
      <span className='heading-xs sm:heading-xs md:heading-sm lg:heading-lg text-neutrals-100 font-bold brown-shadow'>{type}</span>
      <span className='heading-md sm:heading-2md md:heading-lg text-neutrals-100 font-bold mt-1 brown-shadow'>{first} V {second}</span>
      <img src={image} className='my-1 w-16 h-16 xl:w-24 xl:h-24 mb-5 mt-4' />
      <button className='heading-xs sm:heading-xs md:heading-md text-primary-100 border-red-70/60 font-bold px-5 sm:px-6 md:px-8 border-[2px] rounded-xs bg-primary-20/20'>Battle</button>
    </div>
  );
};

export default ArenaOption;
