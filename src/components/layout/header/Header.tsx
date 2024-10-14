import { Burger, Button } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NAV_ITEMS } from '@/src/lib/constants/constants';
import HeaderNavItem from './HeaderNavItem';
import MjwLogo from './MjwLogo';
import SubHeader from './subHeader/SubHeader';
import Contact from '../contact/Contact';
import { logout } from '@/src/lib/services/account/authService';

import { useAppContext } from '@/src/contexts/AppContext';
import { showToast } from '@/src/lib/services/common/toastService';
import MyProfile from './profile/MyProfile';

export default function Header({ openDrawer }: { openDrawer: () => void }) {
  const { isAuthenticated } = useAppContext();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
      showToast({ message: 'Logout Succesfull', type: 'SUCCESS' });
    },
    onError: (error: Error) => {
      console.log('Logout failed ->', error.message);
      showToast({ message: 'Logout Failed', type: 'ERROR' });
    },
  });

  const handleSignOut = () => {
    console.log('signout clicked');
    mutation.mutate();
  };
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
          <MyProfile />
          <Contact />
        </div>
      </div>

      {/* SubHeaderPart only for mobile */}
      <SubHeader />
    </>
  );
}
