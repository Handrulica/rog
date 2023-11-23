import React from 'react';
import { cn } from 'src/lib/utils';
import separator_small from 'public/assets/components/separator_small.svg';
import separator_large from 'public/assets/components/separator_large.svg';
import separator_medium from 'public/assets/components/separator_medium.svg';


export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'medium' | 'large'
};

const getSeparator = (size: 'small' | 'medium' | 'large') => {
  switch(size) {
    case 'small':
      return separator_small;
    case 'medium':
      return separator_medium;
    case 'large':
      return separator_large;
  }
};

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ size = 'small', className}) => {
    return (
      <div className={cn('w-full h-fit flex justify-center', className)}>
        <img src={getSeparator(size)} />
      </div>
    )
  }
);

export default Separator;
