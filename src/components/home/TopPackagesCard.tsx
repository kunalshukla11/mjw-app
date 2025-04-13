import { DashboardData } from '@/src/lib/types/models/mjw-service';
import { Card, Text, Button, Group, Badge, CardSection, Paper } from '@mantine/core';
import { FaArrowRight, FaArrowLeft, FaUmbrella } from 'react-icons/fa';
import ImageKit from '../common/image-kit';

export default function TopPackagesCard({ dashboadElement }: { dashboadElement: DashboardData }) {
  return (
    <div className='relative flex w-full flex-col items-start justify-start overflow-visible rounded-xl'>
      <div className='relative flex h-full w-full flex-col pb-10'>
        <Card
          shadow='sm'
          padding='lg'
          radius='md'
          withBorder
          className='relative h-96 w-full cursor-pointer overflow-hidden transition-transform duration-300 md:hover:scale-105'
        >
          <ImageKit
            src={dashboadElement.imageUrl || '/placeholder.svg'}
            alt={dashboadElement.displayName}
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            transformation='h-600,w-600'
          />
        </Card>
        {/* Pull-out Paper */}
        <Paper
          radius='md'
          shadow='sm'
          withBorder
          className='absolute -bottom-10 left-4 right-4 z-10 rounded-md bg-white'
        >
          <div className='flex items-center justify-between p-2'>
            <Text fw={700} size='lg'>
              {dashboadElement.displayName}
            </Text>
            <FaUmbrella size={20} className='text-gray-400' />
          </div>
          <div className='flex items-center justify-between p-2'>
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
        </Paper>
      </div>
    </div>
  );
}
