import React from 'react';
import { cn } from 'src/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const carouselVariants = cva(
  'flex w-full h-fit items-center overflow-x-hidden px-4',
  {
    variants: {
      variant: {
        default: 'space-x-3'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof carouselVariants> {
  images: string[]
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ images, variant, className, ...props }, ref) => {
    return (
      <div className={cn(carouselVariants({ variant, className }))} ref={ref} {...props}>
        {
          images.map((image, index) =>
            <img key={index} src={image} alt={image + index} className='w-[120px] h-[155px] rounded-xs' />
          )
        }
      </div>
    );
  }
);

export default Carousel;
