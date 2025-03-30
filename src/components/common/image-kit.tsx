'use client';

import Image, { type ImageProps } from 'next/image';

type ImageKitProps = Omit<ImageProps, 'loader'> & {
  transformation?: string;
  quality?: number;
};

export default function ImageKit({
  src,
  alt,
  width,
  height,
  quality = 80,
  transformation = '',
  ...props
}: ImageKitProps) {
  // ImageKit loader function
  const imageKitLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    // If src already includes imagekit URL, add transformation parameters
    if (src.includes('ik.imagekit.io')) {
      const params = [`w-${width}`, `q-${quality || 80}`];

      // Add any custom transformations
      if (transformation) {
        params.push(transformation);
      }

      // Check if URL already has query parameters
      if (src.includes('?')) {
        return `${src}&tr=${params.join(',')}`;
      } else {
        return `${src}?tr=${params.join(',')}`;
      }
    }
    return src;
  };

  return (
    <Image
      src={src || '/placeholder.svg'}
      alt={alt}
      width={width}
      height={height}
      loader={imageKitLoader}
      {...props}
    />
  );
}
