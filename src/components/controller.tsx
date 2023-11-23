import React from 'react';
import { cn } from 'src/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import icon from '../assets/icons/play.svg';

const controllerVariants = cva(
  'heading-sm text-primary-90 opacity-60 hover:opacity-30 active:opacity-100',
  {
    variants: {
      variant: {
        default: ''
      },
      size: {
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ControllerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof controllerVariants> {
  asChild?: boolean;
};

const Controller = React.forwardRef<HTMLButtonElement, ControllerProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp 
        className={cn(controllerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? <Slot /> : props.children}
        <img src={icon} alt="Play" width="24" height="24" className='mx-auto' />
      </Comp>
    );
  }
);

Controller.displayName = 'Controller';

export { Controller, controllerVariants};
