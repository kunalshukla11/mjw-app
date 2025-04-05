'use client';

import Image, { type ImageProps } from 'next/image';

type ImageKitProps = Omit<ImageProps, 'loader'> & {
  transformation?: string;
  quality?: number;
  sizes?: string; // Add sizes for responsive images
};

export default function ImageKit({
  src,
  alt,
  quality = 80,
  transformation = '',
  sizes,
  ...props
}: ImageKitProps) {
  // ImageKit loader function
  const imageKitLoader = ({
    src,
    width,
    height,
    quality,
  }: {
    src: string;
    width?: number;
    height?: number;
    quality?: number;
  }) => {
    // If src already includes ImageKit URL, add transformation parameters
    if (src.includes('ik.imagekit.io')) {
      const params = [`q-${quality || 80}`];

      // Add width and height if provided
      if (width) params.push(`w-${width}`);
      if (height) params.push(`h-${height}`);

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
      sizes={sizes} // Pass sizes for responsive images
      loader={(loaderArgs) =>
        imageKitLoader({
          ...loaderArgs,
          width: props.width ? Number(props.width) : undefined,
          height: props.height ? Number(props.height) : undefined,
          quality,
        })
      }
      {...props}
    />
  );
}
