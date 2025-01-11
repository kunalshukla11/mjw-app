import { Group } from '@mantine/core';
import { Welcome } from '@/src/components/Welcome/Welcome';
import MainLayout from '@/src/components/layout/MainLayout';
import { ColorSchemeToggle } from '@/src/components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <MainLayout>
      <span className='text-4xl font-bold'>Home</span>
      <Welcome route='FLIGHTS' />
      <p>{`${process.env.NEXT_PUBLIC_MJW_SERVICE_HOST}-baseUrl`}</p>

      <p>{`${process.env.NEXT_PUBLIC_MJW_SERVICE_PORT}-basePort`}</p>
      <p>{`${process.env.NEXT_PUBLIC_HELLO}-hello`}</p>

      <ColorSchemeToggle />
      <Group align='center' justify='center'>
        <div className='h-64 w-1/3 rounded-lg border border-dashed border-indigo-400' />
        <div className='h-64 w-1/3 rounded-lg border border-dashed border-indigo-400' />
      </Group>
      <div className='h-64 w-full rounded-lg border border-dashed border-indigo-400' />
    </MainLayout>
  );
}
