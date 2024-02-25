import Link from 'next/link';
import { Button } from '@mantine/core';

import { NavItem } from '@/src/types';

export default function SideBarNavItem({
  navItem,
  closeDrawer,
}: {
  navItem: NavItem;
  closeDrawer: () => void;
}) {
  return (
    <Link href={navItem.path}>
      <Button
        className='text-lg'
        variant='transparent'
        color='black'
        leftSection={navItem.icon}
        onClick={closeDrawer}
      >
        {navItem.title}
      </Button>
    </Link>
  );
}
