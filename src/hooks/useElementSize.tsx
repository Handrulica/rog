import React from 'react';
import { useEventListener } from './useEventListener';
import useIsomphoricLayoutEffect from './useIsomorphicLayoutEffect';

interface Size {
  width: number;
  height: number;
};

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size,
] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them won't render the component.
  // Instead, we use a state as a ref to be reactive
  const [ref, setRef] = React.useState<T | null>(null);
  const [size, setSize] = React.useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = React.useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
  }, [ref?.offsetWidth, ref?.offsetHeight]);

  const elementRef = React.useRef<HTMLElement | null>(ref);

  useEventListener('resize', handleSize, elementRef);

  useIsomphoricLayoutEffect(() => {
    handleSize()
  }, [ref?.offsetWidth, ref?.offsetHeight]);

  return [setRef, size];
};

export default useElementSize;
