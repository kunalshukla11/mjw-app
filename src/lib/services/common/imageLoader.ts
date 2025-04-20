export default async function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  'use server';
  // If src already includes imagekit URL, just add transformation parameters
  if (src.includes('ik.imagekit.io')) {
    const params = [`w-${width}`, `q-${quality || 80}`];
    // Check if URL already has query parameters
    if (src.includes('?')) {
      return `${src}&tr=${params.join(',')}`;
    } else {
      return `${src}?tr=${params.join(',')}`;
    }
  }
  return src;
}
