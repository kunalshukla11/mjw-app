import Link from 'next/link';
import { NavLink } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/src/lib/types/types';
import { shouldHighlight } from '@/src/lib/utils/utils';

export default function HeaderNavItem({ navItem }: { navItem: NavItem }) {
  const pathName = usePathname();
  const higlightNav = shouldHighlight(pathName, navItem);
  return (
    <NavLink
      className={`flex rounded-md px-3 py-2  hover:bg-indigo-50 hover:text-indigo-900 ${
        higlightNav ? 'bg-indigo-200 font-bold' : ''
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
