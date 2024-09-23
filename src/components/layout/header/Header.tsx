import { Burger } from '@mantine/core';
import { NAV_ITEMS } from '@/src/lib/constants/constants';
import HeaderNavItem from './HeaderNavItem';
import MjwLogo from './MjwLogo';
import SubHeader from './subHeader/SubHeader';
import User from '../user/User';
import Contact from '../contact/Contact';

import { useAppContext } from '@/src/contexts/AppContext';

export default function Header({ openDrawer }: { openDrawer: () => void }) {
  const { isAuthenticated } = useAppContext();
  return (
    <>
      {/* Main header Part */}
      {/* Header to  have three parts one left, right and one on center */}
      <div className='z-10 flex h-14 w-full items-center justify-between  bg-white md:sticky md:h-20 md:border-b'>
        <div id='headerLeft' className='flex items-center space-x-10 '>
          <Burger classNames={{ root: 'md:hidden pl-6' }} onClick={openDrawer} />
          <MjwLogo />
        </div>

        <div className='hidden md:flex'>
          {NAV_ITEMS.map((item, idx) => (
            <HeaderNavItem key={idx} navItem={item} />
          ))}
        </div>
        {/* Placeholder for right section to make nav div center */}
        <div className='flex flex-row-reverse gap-2'>
          {isAuthenticated ? (
            <>
              <User />
              <Contact />
              <Contact />
            </>
          ) : (
            <>
              <User />
              <Contact />
            </>
          )}
        </div>
      </div>

      {/* SubHeaderPart only for mobile */}
      <SubHeader />
    </>
  );
}
