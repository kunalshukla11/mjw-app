import { Avatar, Button, Menu, Text } from '@mantine/core';
import { useAppContext } from '@/src/contexts/AppContext';
import { ProfileResponse } from '@/src/lib/types/types';

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

export default function ProfileMenu() {
  const { currentUser, isAuthenticated } = useAppContext();

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
        {/* Login Button */}
        <div className='flex justify-center'>
          <Button className='mb-2   rounded-lg bg-orange-600 py-2 text-white hover:bg-orange-800'>
            Log in
          </Button>
        </div>

        {/* Create account link */}
        <Text size='sm' className='mb-3 text-center text-sm text-gray-600'>
          Or{' '}
          <a href='#' className='font-medium text-indigo-800 underline hover:text-indigo-600'>
            create an account
          </a>
        </Text>

        <Menu.Divider className='my-3 border-gray-200' />

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
          <div className='space-y-2'>
            <Button className='w-full '>Log out</Button>
          </div>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}
