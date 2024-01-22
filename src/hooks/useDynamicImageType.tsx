import React from 'react';

const useDynamicImageType = () => {
  const [backgroundType, setBackgroundType] = React.useState('');

  React.useEffect(() => {
    const determineImageType = async () => {
      const webpSupported = await checkImageFormatSupport('image/webp');
      const jp2Supported = await checkImageFormatSupport('image/jp2');
      const jxrSupported = await checkImageFormatSupport('image/vnd.ms-photo');

      if (webpSupported) {
        return 'webp';
      } else if (jp2Supported) {
        return 'jp2';
      } else if (jxrSupported) {
        return 'jxr';
      } else {
        return 'png'; // Default to png if no supported format is found
      }
    };

    const checkImageFormatSupport = async (format: string) => {
      const img = document.createElement('img');
      document.createElement('picture').append(
        Object.assign(document.createElement('source'), {
          srcset: 'data:,x',
          format
        }),
        img
      );
      await new Promise((resolve) => setTimeout(resolve, 0)); // Use setTimeout to simulate asynchronous behavior
      return !!img.currentSrc;
    };

    const fetchData = async () => {
      const imageType = await determineImageType();
      setBackgroundType(imageType);
    };

    fetchData();
  }, []); // Run this effect only once, on mount

  return backgroundType;
};

export default useDynamicImageType;
