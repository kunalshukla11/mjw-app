import { DashboardData } from '@/src/lib/types/models/mjw-service';
import { Badge, Card, Title, Text } from '@mantine/core';
import ImageKit from '../common/image-kit';

export default function UnexploredCard({ dashboadElement }: { dashboadElement: DashboardData }) {
  return (
    <Card
      shadow='sm'
      padding='lg'
      radius='xl'
      withBorder
      className='relative h-80 w-full cursor-pointer overflow-hidden'
    >
      <ImageKit
        src={dashboadElement.imageUrl || '/placeholder.svg'}
        alt={dashboadElement.displayName}
        fill
        style={{
          objectFit: 'contain', // cover, contain, none
        }}
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
        quality={80}
        transformation='h-400,w-400' // Match the card's dimensions (72 * 4 = 288px for Tailwind's rem-based sizing)
      />

      <div
        className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50'
        style={{ width: '50%' }}
      ></div>

      <div className='absolute bottom-1/3 left-0 pl-8 text-white'>
        <div className='flex flex-col gap-2'>
          <Text className='font-serif text-3xl italic'>Attractive</Text>
          <Text className='font-serif text-2xl font-bold'>{dashboadElement.displayName}</Text>
          <div className='flex items-center justify-center gap-2'>
            <Text className='text-sm'>Starting From</Text>
            <Title order={3} className='m-0 text-lg font-semibold'>
              {dashboadElement.price
                ? dashboadElement.price.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                : (100).toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
            </Title>
          </div>
        </div>
      </div>
    </Card>
  );
}
