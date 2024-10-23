import { Avatar, Button } from '@mantine/core';
import React from 'react';
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

  // const intial = isAuthenticated ? user?.initial: undefined;
}

export default function MyProfile() {
  const { currentUser, isAuthenticated } = useAppContext();

  return (
    <Button
      classNames={{ section: 'mr-[4px]' }}
      className=' flex h-auto px-2 md:border md:border-indigo-700'
      variant='subtle'
    >
      <ProfileAvatar user={currentUser} isAuthenticated={isAuthenticated} />
      <span className='hidden pl-1  md:inline'>MyProfile</span>
    </Button>
  );
}
