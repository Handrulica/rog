import React from 'react';

export default function useScreenSize() {

  const screens = {
    'xs': '0px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1400px',
  };

  const initialScreenSize = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      for (const [size, query] of Object.entries(screens).reverse()) {
        if (width >= parseInt(query)) {
          return size;
        }
      }
    }
    return '';
  };

  const [screenSize, setScreenSize] = React.useState<string>(initialScreenSize());

  React.useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      for (const [size, query] of Object.entries(screens).reverse()) {
        if (width >= parseInt(query)) {
          setScreenSize(size);
          break;
        }
      }
    };

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  
  return screenSize;
};
