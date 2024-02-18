import { Group } from '@mantine/core';
import { Welcome } from '@/src/components/Welcome/Welcome';
import MainLayout from '@/src/components/layout/MainLayout';
import { ColorSchemeToggle } from '@/src/components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <MainLayout>
      <span className='font-bold text-4xl'>Home</span>
      <Welcome route='HOTELS' />
      <ColorSchemeToggle />
      <Group align='center' justify='center'>
        <div className='border-dashed border border-indigo-400 w-1/3 h-64 rounded-lg' />
        <div className='border-dashed border border-indigo-400 w-1/3 h-64 rounded-lg' />
      </Group>
      <div className='border-dashed border border-indigo-400 w-full h-64 rounded-lg' />
    </MainLayout>
  );
}
