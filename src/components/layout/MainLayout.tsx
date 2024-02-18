'use client';

import React from 'react';
import { AppShell, Burger, AspectRatio, Image, Group, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderNavItem from './HeaderNavItem';
import { NAV_ITEMS } from '@/src/constants';
import SideBarNavItem from './SideBarNavItem';

export default function MainLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='center' style={{ flex: 1 }}>
            <Group ml='xl' gap={0} visibleFrom='sm'>
              {NAV_ITEMS.map((item, idx) => (
                <HeaderNavItem key={idx} navItem={item} />
              ))}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4} className='h-full'>
        {NAV_ITEMS.map((item, idx) => (
          <SideBarNavItem key={idx} navItem={item} />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
