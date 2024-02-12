import { Group } from '@mantine/core';
import { Welcome } from '@/components/Welcome/Welcome';
import MainLayout from '@/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <span className="font-bold text-4xl">Home</span>
      <Welcome route="PACKAGES" />
      <Group align="center" justify="center">
        <div className="border-dashed border border-indigo-400 w-1/3 h-64 rounded-lg" />
        <div className="border-dashed border border-indigo-400 w-1/3 h-64 rounded-lg" />
      </Group>
      <div className="border-dashed border border-indigo-400 w-full h-64 rounded-lg" />
    </MainLayout>
  );
}
