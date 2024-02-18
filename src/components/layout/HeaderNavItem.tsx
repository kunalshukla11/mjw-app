import Link from 'next/link';
import { Button } from '@mantine/core';
import { NavItem } from '@/src/types';

export default function HeaderNavItem({ navItem }: { navItem: NavItem }) {
  return (
    <>
      <Link href={navItem.path}>
        <Button className='hover:bg-indigo-50 active:bg-indigo-200' variant='subtle'>
          {navItem.icon} {navItem.title}
        </Button>
      </Link>
    </>
  );
}
