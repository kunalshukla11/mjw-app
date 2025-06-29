import { Holiday } from '@/src/lib/types/models/mjw-service';
import ImageKit from '../common/ImageKit';
import { Card, Text, Badge, Button, Group } from '@mantine/core';
import { CardSection } from '@mantine/core';

import { FaHotel, FaBinoculars, FaCar, FaUtensils, FaPlane } from 'react-icons/fa';

interface HolidayCardProps {
  holiday: Holiday;
}

export default function HolidayCard({ holiday }: HolidayCardProps) {
  const mainImageUrl =
    holiday.itinerary?.itineraryDetail?.mainImageUrl ||
    holiday.location?.imagesUrl?.[0] ||
    '/placeholder.svg'; // Fallback image

  const durationText = holiday.itinerary?.duration
    ? `${holiday.itinerary.duration - 1}N / ${holiday.itinerary.duration}D` // Example: 4N / 5D
    : '';

  // Example logic for included items - adapt based on your data (e.g., check categories array)
  //   const includesHotel = holiday.categories?.includes('HOTEL'); // Example check
  //   const includesSightseeing = holiday.categories?.includes('SIGHTSEEING');
  //   const includesTransfer = holiday.categories?.includes('TRANSFER');
  //   const includesMeal = holiday.categories?.includes('MEAL');
  //   const includesFlight = holiday.categories?.includes('FLIGHT');

  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder className='flex h-full flex-col'>
      <CardSection>
        <div className='relative h-48'>
          <ImageKit
            src={mainImageUrl}
            alt={holiday.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={75}
            // transformation='h-300,w-500' // Adjust transformation as needed
          />{' '}
          {/* Fixed height for image container */}
          {durationText && (
            <Badge
              className='absolute bottom-2 right-2 bg-black bg-opacity-70 text-white'
              radius='sm'
            >
              {durationText}
            </Badge>
          )}
        </div>
      </CardSection>

      <div className='mt-4 flex flex-grow flex-col justify-between'>
        {' '}
        {/* Use flex-grow to push price/button down */}
        <div>
          <Text fw={500} size='lg' lineClamp={2} mb='xs'>
            {holiday.name}
          </Text>

          <Text size='sm' c='dimmed' lineClamp={1} mb='sm'>
            {/* Display location details */}
            {holiday.location?.city}
            {holiday.location?.state ? `, ${holiday.location.state}` : ''}
            {holiday.location?.country ? `, ${holiday.location.country}` : ''}
          </Text>

          {/* Included Icons */}
          <Group gap='xs' mb='md' wrap='wrap'>
            {' '}
            {/* Allow icons to wrap */}
            {/* {includesHotel && (
              <Group gap={4}>
                <FaHotel title='Hotel' className='text-gray-600' />
                <Text size='xs' c='dimmed'>
                  Hotel
                </Text>
              </Group>
            )}
            {includesSightseeing && (
              <Group gap={4}>
                <FaBinoculars title='Sightseeing' className='text-gray-600' />
                <Text size='xs' c='dimmed'>
                  Sightseeing
                </Text>
              </Group>
            )}
            {includesTransfer && (
              <Group gap={4}>
                <FaCar title='Transfer' className='text-gray-600' />
                <Text size='xs' c='dimmed'>
                  Transfer
                </Text>
              </Group>
            )}
            {includesMeal && (
              <Group gap={4}>
                <FaUtensils title='Meal' className='text-gray-600' />
                <Text size='xs' c='dimmed'>
                  Meal
                </Text>
              </Group>
            )}
            {includesFlight && (
              <Group gap={4}>
                <FaPlane title='Flight' className='text-gray-600' />
                <Text size='xs' c='dimmed'>
                  Flight
                </Text>
              </Group>
            )} */}
            {/* Add more icons based on categories or flags */}
          </Group>
        </div>
        <Group justify='space-between' mt='md'>
          {' '}
          {/* Pushes this group to the bottom */}
          <div>
            <Text size='xs' c='dimmed'>
              Starting from
            </Text>
            <Text fw={700} size='xl'>
              {(holiday.standardPrice ?? 0).toLocaleString('en-IN', {
                style: 'currency',
                currency: holiday.currency || 'INR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Text>
            <Text size='xs' c='dimmed'>
              Per Person on twin sharing
            </Text>
          </div>
          {/* Make button link to actual package details page later */}
          <Button
            component='a'
            href={`/package/${holiday.id}`}
            variant='filled'
            color='orange'
            radius='md'
          >
            View Package
          </Button>
        </Group>
      </div>
    </Card>
  );
}
