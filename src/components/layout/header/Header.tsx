import { Burger } from '@mantine/core';
import { NAV_ITEMS } from '@/src/constants';
import HeaderNavItem from './HeaderNavItem';
import MjwLogo from './MjwLogo';
import SubHeader from './subHeader/SubHeader';

export default function Header() {
  return (
    <>
      {/* Main header Part */}
      {/* Header to  have two parts one on left and one on center */}
      <div className='z-10 flex h-14 w-full items-center justify-between  bg-white md:sticky md:h-20 md:border-b'>
        <div id='headerLeft' className='flex items-center space-x-10 '>
          <Burger classNames={{ root: 'md:hidden pl-6' }} />
          <MjwLogo />
        </div>

        <div className='hidden md:flex'>
          {NAV_ITEMS.map((item, idx) => (
            <HeaderNavItem key={idx} navItem={item} />
          ))}
        </div>
        <div className='w-20' />
      </div>

      {/* SubHeaderPart only for mobile */}
      <SubHeader />
    </>
  );
}
