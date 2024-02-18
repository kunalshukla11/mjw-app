import Link from 'next/link';
import { NavLink } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/src/types';

export default function HeaderNavItem({ navItem }: { navItem: NavItem }) {
  const pathName = usePathname();
  const shouldHighlight =
    (pathName === '/' && navItem.title === 'Flights') || pathName === navItem.path;
  return (
    <NavLink
      style={{ flex: 1 }}
      className={`flex rounded-md px-3 py-2  hover:bg-indigo-50 hover:text-indigo-900 ${
        shouldHighlight ? 'font-bold bg-indigo-200' : ''
      }`}
      component={Link}
      href={navItem.path}
      label={navItem.title}
      leftSection={navItem.icon}
      classNames={{
        section: 'mr-[4px]',
        label: 'text-lg',
      }}
    />
  );
}
