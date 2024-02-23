import React from 'react';
import Link from 'next/link';
import { Button, NavLink, ScrollArea } from '@mantine/core';
import { NAV_ITEMS } from '@/src/constants';
import HeaderNavItem from './HeaderNavItem';

export default function Header() {
  return (
    <>
      {/* Main header Part */}
      <div className='relative top-0 z-10 flex h-10 w-full justify-between bg-pink-200 md:sticky md:h-16 md:border-b'>
        <div>Logo</div>
        <div className='hidden items-center md:flex'>
          {NAV_ITEMS.map((item, idx) => (
            <HeaderNavItem key={idx} navItem={item} />
          ))}
        </div>
        <div>Search</div>
      </div>
      {/* SubHeaderPart only for mobile */}
      <div className='sticky top-0 z-10 flex md:hidden'>
        <div className='grid  grid-cols-1'>
          <div className='flex space-x-2 overflow-x-auto bg-white'>
            {NAV_ITEMS.map((item) => (
              <Link href={item.path} key={item.title}>
                <Button
                  classNames={{ root: 'bg-indigo-100 h-6 w-fit', section: 'mr-[4px]' }}
                  size='xs'
                  variant='subtle'
                  color='black'
                  leftSection={item.icon}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <div className='flex overflow-x-auto bg-green-100  md:hidden'>
        {NAV_ITEMS.map((item) => (
          <Link href={item.path} key={item.title}>
            <Button
              classNames={{ root: 'bg-indigo-100 h-6 w-fit', section: 'mr-[4px]' }}
              size='xs'
              variant='subtle'
              color='black'
              leftSection={item.icon}
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </div> */}
    </>
  );
}
