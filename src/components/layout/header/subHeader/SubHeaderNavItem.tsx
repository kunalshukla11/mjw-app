import { Button } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { shouldHighlight } from '@/src/lib/utils';
import { NavItem } from '@/src/types';

export default function SubHeaderNavItem({ item }: { item: NavItem }) {
  const highlightItem = shouldHighlight(usePathname(), item);
  return (
    <Link href={item.path} key={item.title}>
      <Button
        classNames={{
          root: `text-sm ${highlightItem ? 'bg-indigo-200 font-bold' : ''}`,
          section: 'mr-[4px]',
        }}
        variant='subtle'
        color='black'
        leftSection={item.icon}
      >
        {item.title}
      </Button>
    </Link>
  );
}
