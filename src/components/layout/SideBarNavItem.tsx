import Link from 'next/link';
import { Button, NavLink, UnstyledButton } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/src/types';

export default function SideBarNavItem({ navItem }: { navItem: NavItem }) {
  return (
    <Link href={navItem.path}>
      <Button variant='transparent' color='black' leftSection={navItem.icon}>
        {navItem.title}
      </Button>
    </Link>
  );
}
