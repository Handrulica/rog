import React from 'react';
import { cn } from 'src/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-neutrals-100 heading-2xxs disabled:text-neutrals-60 button-border disabled:button-border-disabled',
        secondary: 'text-primary-30 heading-2xxs disabled:text-neutrals-60 font-bold md:leading-8 md:font-heading button-secondary',
        'no-border': 'text-neutrals-100 heading-2xxs disabled:text-neutrals-60'
      },
      size: {
        default: 'h-10 px-4 px-6 py-5',
        'default-secondary': 'w-32 h-10 md:w-[7.87rem] md:h-[2.25rem]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? <Slot /> : props.children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };