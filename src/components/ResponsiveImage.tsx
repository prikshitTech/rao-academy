import { ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  widths?: number[];
}

const responsiveSrcSet = (
  src: string,
  widths = [480, 640, 960, 1280, 1600, 1920]
) => widths.map((width) => `${src.replace(/w=\d+/, `w=${width}`)} ${width}w`).join(', ');

export default function ResponsiveImage({
  src,
  widths,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
  loading = 'lazy',
  decoding = 'async',
  ...props
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      srcSet={responsiveSrcSet(src, widths)}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
