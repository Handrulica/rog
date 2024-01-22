import React from 'react';
import useScreenSize from './useScreenSize';

export default function useScreenSizeComparison(targetSize: string) {
  const screenSize = useScreenSize();

  const isScreenSizeLower = React.useMemo(() => {
    const screens = {
      'xs': 0,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1400,
    };

    const isValidTargetSize = Object.keys(screens).includes(targetSize);

    if (isValidTargetSize && screens[screenSize as keyof typeof screens] !== undefined && screens[targetSize as keyof typeof screens] !== undefined) {
      return screens[screenSize as keyof typeof screens] < screens[targetSize as keyof typeof screens];
    }

    return false;
  }, [screenSize, targetSize]);

  return isScreenSizeLower;
}