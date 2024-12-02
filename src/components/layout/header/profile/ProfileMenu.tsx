import { Anchor, Avatar, Button, Menu, Text } from '@mantine/core';
import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAppContext } from '@/src/contexts/AppContext';
import { ProfileResponse } from '@/src/lib/types/types';
import * as accountService from '@/src/lib/services/account/authService';
import { showToast } from '@/src/lib/services/common/toastService';

function ProfileAvatar({
  user,
  isAuthenticated,
}: {
  user: ProfileResponse;
  isAuthenticated: boolean;
}) {
  if (isAuthenticated) {
    const initial = user?.initial;
    return (
      <Avatar
        src={initial}
        name={initial}
        size='md'
        className='text-2xl font-bold'
        color='initials'
      >
        {initial}
      </Avatar>
    );
  }
  return <Avatar variant='transparent' color='indigo' size='md'></Avatar>;
}

// function logOutMutation() {
//   console.log('in Mutation Funciton');
//   const queryClient = useQueryClient();
//   const mutation = useMutation({
//     mutationFn: () => accountService.logout(),
//     onSuccess: async () => {
//       showToast({ message: 'Logout Successful', type: 'SUCCESS' });
//       console.log('Logout Successful');
//       await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
//     },
//     onError: (error: Error) => {
//       console.error('Logout not successful -> ', error.message);
//       showToast({ message: error.message, type: 'ERROR' });
//     },
//   });
//   return mutation;
// }

export default function ProfileMenu() {
  const { currentUser, isAuthenticated } = useAppContext();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => accountService.logout(),
    onSuccess: async () => {
      showToast({ message: 'Logout Successful', type: 'SUCCESS' });
      console.log('Logout Successful');
      await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
    },
    onError: (error: Error) => {
      console.error('Logout not successful -> ', error.message);
      showToast({ message: error.message, type: 'ERROR' });
    },
  });
  return (
    <Menu shadow='md' width={200}>
      <Menu.Target>
        <Button
          classNames={{ section: 'mr-[4px]' }}
          className=' flex h-auto px-2 md:border md:border-indigo-700'
          variant='subtle'
        >
          <ProfileAvatar user={currentUser} isAuthenticated={isAuthenticated} />
          <span className='hidden pl-1  md:inline'>MyProfile</span>
        </Button>
      </Menu.Target>
      <Menu.Dropdown className='rounded-lg bg-white p-4 shadow-lg'>
        {/* Login Section only visible when not authenticated */}
        <div className={`${isAuthenticated ? 'hidden' : ''}`}>
          {/* Login Button */}
          <div className='flex justify-center'>
            <Button
              component={Link}
              href='/account/login'
              className='mb-2   rounded-lg bg-orange-600 py-2 text-white hover:bg-orange-800'
            >
              Log in
            </Button>
          </div>

          {/* Create account link */}
          <Text size='sm' className='mb-3 text-center text-sm text-gray-600'>
            Or{' '}
            <Anchor
              href='/account/register'
              className='font-medium text-indigo-800 underline hover:text-indigo-600'
            >
              create an account
            </Anchor>
          </Text>

          <Menu.Divider className='my-3 border-gray-200' />
        </div>

        {/* Account Section */}
        <div className='space-y-2'>
          <Text className='font-semibold text-gray-800'>My account</Text>
          <Menu.Item className='rounded-lg p-2 text-gray-700 hover:bg-gray-100'>
            Your bookings
          </Menu.Item>
          <Menu.Item className='rounded-lg p-2 text-gray-700 hover:bg-gray-100'>
            Your account
          </Menu.Item>
        </div>
        <div className={`${isAuthenticated ? '' : 'hidden'}`}>
          <Menu.Divider className='my-3 border-gray-200' />
          <Button className='w-full space-y-2' onClick={() => mutation.mutate()}>
            Log out
          </Button>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}
