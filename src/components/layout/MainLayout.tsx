'use client';

import { NAV_ITEMS } from '@/src/lib/constants/constants';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import PageWrapper from './PageWrapper';
import Header from './header/Header';

import SideBarNavItem from './SideBarNavItem';
import { Footer } from './footer/Footer';
export default function MainLayout({ children }: { children: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className='flex'>
      {/* navbar will come here */}
      <Drawer opened={opened} onClose={close} title='My Journey Wings'>
        <div className='flex flex-col'>
          {NAV_ITEMS.map((item, idx) => (
            <SideBarNavItem key={idx} navItem={item} closeDrawer={close} />
          ))}
        </div>
      </Drawer>
      <main className='flex-1 overflow-hidden'>
        <Header openDrawer={open} />
        <PageWrapper>{children}</PageWrapper>

        <Footer />
      </main>
    </div>
  );
}
