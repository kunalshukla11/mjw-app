'use client';

import React from 'react';
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import layout from './MainLayout.module.css';

export default function MainLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={layout.control}>Home</UnstyledButton>
              <UnstyledButton className={layout.control}>Flights</UnstyledButton>
              <UnstyledButton className={layout.control}>Packages</UnstyledButton>
              <UnstyledButton className={layout.control}>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={layout.control}>Home</UnstyledButton>
        <UnstyledButton className={layout.control}>Flights</UnstyledButton>
        <UnstyledButton className={layout.control}>Packages</UnstyledButton>
        <UnstyledButton className={layout.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
