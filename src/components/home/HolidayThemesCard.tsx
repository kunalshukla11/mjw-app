import { DashboardData } from '@/src/lib/types/models/mjw-service';
import { Badge, Card, Title, Text, Button } from '@mantine/core';
import ImageKit from '../common/ImageKit';
import { FaArrowRight } from 'react-icons/fa';
import { titleCase } from '@/src/lib/utils/utils';

export default function HolidayThemesCard({ dashboadElement }: { dashboadElement: DashboardData }) {
  return (
    <Card
      shadow='sm'
      padding='lg'
      radius='md'
      withBorder
      className='relative h-64 w-48 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105'
    >
      <ImageKit
        src={dashboadElement.imageUrl || '/placeholder.svg'}
        alt={dashboadElement.theme}
        fill
        style={{
          objectFit: 'contain', // cover, contain, none
        }}
        quality={50}
        transformation='h-400,w-300' // Match the card's dimensions (72 * 4 = 288px for Tailwind's rem-based sizing)
      />

      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'></div>
      <div className='absolute bottom-0 left-0 p-2 text-white'>
        <Text className='text-2xl font-bold'>{titleCase(dashboadElement.theme)}</Text>
        <Button className='flex items-center gap-1 p-2' rightSection={<FaArrowRight size={16} />}>
          Explore
        </Button>
      </div>
    </Card>
  );
}
