import React from 'react';
import { useEventListener } from './useEventListener';

export default function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T>,
): boolean {
  const [value, setValue] = React.useState<boolean>(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEventListener('mouseenter', handleMouseEnter, elementRef);
  useEventListener('mouseleave', handleMouseLeave, elementRef);

  return value;
};
