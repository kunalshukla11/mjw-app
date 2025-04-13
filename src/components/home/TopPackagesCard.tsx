import { DashboardData } from '@/src/lib/types/models/mjw-service';
import { Card, Text, Button } from '@mantine/core';
import { FaArrowRight, FaArrowLeft, FaUmbrella } from 'react-icons/fa';
import ImageKit from '../common/image-kit';

export default function TopPackagesCard({ dashboadElement }: { dashboadElement: DashboardData }) {
  return (
    <div
      key={dashboadElement.displayName}
      className='w-full flex-none snap-start sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)]'
    >
      <Card shadow='sm' padding='lg' radius='md' withBorder className='h-full'>
        <Card.Section>
          <div className='relative h-48 overflow-hidden'>
            <ImageKit
              src={dashboadElement.imageUrl || '/placeholder.svg'}
              alt={dashboadElement.displayName}
              fill
              style={{
                objectFit: 'cover', // cover, contain, none
              }}
              quality={50}
              transformation='h-400,w-400' // Match the card's dimensions (72 * 4 = 288px for Tailwind's rem-based sizing)
            />
          </div>
        </Card.Section>

        <div className='mb-2 mt-4 flex items-center justify-between'>
          <Text fw={700} size='lg'>
            {dashboadElement.displayName}
          </Text>
          <FaUmbrella size={20} className='text-gray-400' />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Text size='sm' c='dimmed'>
              From
            </Text>
            <Text fw={700}>
              {(dashboadElement.price ?? 1000).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Text>
          </div>
          <Button
            variant='subtle'
            color='blue'
            className='flex items-center gap-1 p-0'
            rightSection={<FaArrowRight size={16} />}
          >
            Explore
          </Button>
        </div>
      </Card>
    </div>
  );
}
