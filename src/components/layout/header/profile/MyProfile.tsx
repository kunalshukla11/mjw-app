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
  return <Avatar variant='transparent'></Avatar>;
}

export default function MyProfile() {
  const { currentUser, isAuthenticated } = useAppContext();

  return (
    <Button
      classNames={{ section: 'mr-[4px]' }}
      className='flex px-2 md:border md:border-indigo-700'
      variant='subtle'
    >
      <ProfileAvatar user={currentUser} isAuthenticated={isAuthenticated} />
      <span className='hidden md:inline'>MyProfile</span>
    </Button>
  );
}
