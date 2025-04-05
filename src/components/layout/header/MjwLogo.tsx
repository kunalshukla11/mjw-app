import React from 'react';
import Link from 'next/link';
import ImageKit from '../../common/image-kit';

export default function MjwLogo() {
  return (
    <>
      {/* Mobile image to be shown only on mobile */}
      <Link href='/'>
        <ImageKit
          className='h-8 cursor-pointer md:hidden'
          src='/MobileMjwLogo.png'
          alt='MJW Logo'
          width={32}
          height={32}
          transformation='w-32,h-32'
        />
      </Link>
      {/* Desktop image to be shown only on desktop */}
      <Link href='/'>
        <ImageKit
          className='hidden h-20 cursor-pointer p-2 md:block'
          src='/DesktopMjwLogo.png'
          alt='MJW Logo'
          width={200}
          height={80}
          transformation='w-200,h-80'
        />
      </Link>
    </>
  );
}
