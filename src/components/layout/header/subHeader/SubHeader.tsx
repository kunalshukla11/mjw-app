import React from 'react';

import { NAV_ITEMS } from '@/src/lib/constants/constants';
import SubHeaderNavItem from './SubHeaderNavItem';

export default function SubHeader() {
  return (
    <div className='sticky top-0 z-10 flex md:hidden'>
      <div className='grid w-full grid-cols-1'>
        {/* Remove justify-center when there are more than 3 items  */}
        <div className='flex justify-center space-x-4 overflow-x-auto border-b bg-white p-2'>
          {NAV_ITEMS.map((item) => (
            <SubHeaderNavItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
