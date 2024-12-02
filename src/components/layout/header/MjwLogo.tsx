import React from 'react';
import NextImage from 'next/image';
import { Image } from '@mantine/core';
import MobileLogoImage from '@/public/MobileMjwLogo.png';
import DesktoLogImage from '@/public/DesktopMjwLogo.png';

export default function MjwLogo() {
  return (
    <>
      {/* Mobile image to be shown only on mobile */}
      <Image
        classNames={{ root: 'md:hidden h-8' }}
        component={NextImage}
        src={MobileLogoImage}
        alt='MJW Logo'
      />
      {/* Desktop image to be shown only on desktop */}
      <Image
        classNames={{ root: 'hidden md:block h-20 p-2 ' }}
        component={NextImage}
        src={DesktoLogImage}
        alt='MJW Logo'
      />
    </>
  );
}
