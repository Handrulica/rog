import React from "react";
import { cn } from "src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import stepper_icon from "public/assets/icons/stepper_icon.svg";
import stepper_icon_blue from "public/assets/icons/stepper_icon_blue.svg";
import stepper_icon_disabled from "public/assets/icons/stepper_icon_disabled.svg";

export const stepperIndicatorVariants = cva("", {
  variants: {
    variant: {
      default: "w-20 h-20",
      blue: "w-20 h-20",
      disabled: "w-8 h-8 sm:w-10 sm:h-10 ml-[1.6rem] sm:-ml-[0.2rem]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StepperIndicatorProps
  extends React.HtmlHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof stepperIndicatorVariants> {
  width?: number;
  height?: number;
}

export const StepperIndicator = React.forwardRef<
  HTMLImageElement,
  StepperIndicatorProps
>(({ className, variant, ...props }, ref) => {
  return (
    <img
      src={
        variant === "blue"
          ? stepper_icon_blue
          : variant === "disabled"
            ? stepper_icon_disabled
            : stepper_icon
      }
      className={cn(stepperIndicatorVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});

export default StepperIndicator;

export const stepperLineVariants = cva("w-[4px] md:w-[3px] mx-auto", {
  variants: {
    variant: {
      default: "bg-green-30",
      blue: "bg-blue-80",
      disabled: "stepper-disabled-line",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StepperLineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperLineVariants> {}

export const StepperLine = React.forwardRef<HTMLDivElement, StepperLineProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(stepperLineVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

export const stepperTitleVariants = cva("heading-md sm:ml-8 lg:heading-md font-bold", {
  variants: {
    variant: {
      default: "text-green-30 sm:text-primary-100 sm:heading-xs sm:font-bold",
      blue: "text-blue-80",
      disabled:
        "text-green-30 sm:text-green-30 sm:heading-xs sm:font-bold ml-6 sm:ml-14",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StepperTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperTitleVariants> {
  children?: string;
}

export const StepperTitle = React.forwardRef<HTMLDivElement, StepperTitleProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(stepperTitleVariants({ variant, className }))}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

export interface StepperContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blue" | "disabled";
}

export const StepperContent = React.forwardRef<
  HTMLDivElement,
  StepperContentProps
>(({ variant = "default", className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex", className)} {...props}>
      <StepperLine variant={variant} className="ml-10 mr-10" />
      <div className="sm:ml-8">{props.children}</div>
    </div>
  );
});
