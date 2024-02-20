import React from 'react';

import Link from 'next/link';
import { Button } from '@mantine/core';
import { NAV_ITEMS } from '@/src/constants';

export default function UnderHeaderNav() {
  return (
    <div className='flex  h-fit justify-center items-center gap-1 overflow-scroll  sticky'>
      {NAV_ITEMS.map((item) => (
        <Link href={item.path} key={item.title}>
          <Button size='xs' py={0} variant='outline' color='gray' leftSection={item.icon}>
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
