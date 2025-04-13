import { DashboardData } from '@/src/lib/types/models/mjw-service';
import { Badge, Card, Title, Text } from '@mantine/core';
import ImageKit from '../common/image-kit';

export default function CardComponent({ dashboadElement }: { dashboadElement: DashboardData }) {
  return (
    <Card
      shadow='sm'
      padding='lg'
      radius='md'
      withBorder
      className='shadow-multple-card relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105'
    >
      <ImageKit
        src={dashboadElement.imageUrl || '/placeholder.svg'}
        alt={dashboadElement.displayName}
        fill
        style={{
          objectFit: 'contain', // cover, contain, none
        }}
        quality={50}
        transformation='h-400,w-400' // Match the card's dimensions (72 * 4 = 288px for Tailwind's rem-based sizing)
      />

      <div className='absolute left-0 top-0 p-1'>
        <Badge className='bg-yellow-600' size='lg' radius='md'>
          {dashboadElement.displayName}
        </Badge>
      </div>

      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'></div>
      <div className='absolute bottom-0 left-0 p-4 text-white'>
        <Text className='text-sm'>From</Text>
        <Title order={3} className='text-lg font-semibold'>
          {dashboadElement.price.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </Title>
      </div>
    </Card>
  );
}
