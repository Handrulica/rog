import React from "react";
import getImageUrl from "src/utils/getImageUrl";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const ImageWithFallback = React.forwardRef<
  HTMLImageElement,
  ImageWithFallbackProps
>(({ wrapperClassName, src, ...props }) => {
  
  return (
    src &&
    <picture className={wrapperClassName}>
      <source srcSet={getImageUrl(`${src}.webp`)} type="image/webp" />
      <source srcSet={getImageUrl(`${src}.jp2`)} type="image/jp2" />
      <source srcSet={getImageUrl(`${src}.jxr`)} type="image/vnd.ms-photo" />
      <img src={getImageUrl(`${src}.png`)} {...props} />
    </picture>
  );
});

export default ImageWithFallback;
