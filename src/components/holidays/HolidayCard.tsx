import { Holiday } from '@/src/lib/types/models/mjw-service';
import ImageKit from '../common/ImageKit';
import { Card, List, Text, Badge, Button, Group } from '@mantine/core';
import { CardSection } from '@mantine/core';
import {
  IconHotelService,
  IconMapPin,
  IconBus,
  IconBurger,
  IconPlane,
  IconEPassport,
  IconBuilding,
} from '@tabler/icons-react';
import { FaCheck } from 'react-icons/fa';

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

          <Group gap='md' mb='md' wrap='wrap'>
            {holiday.itinerary?.facility?.hotelStatus && <IconBuilding size={32} color='#4CAF50' />}
            {holiday.itinerary?.facility?.sightseeingStatus && (
              <IconMapPin size={32} color='#2196F3' />
            )}
            {holiday.itinerary?.facility?.transferStatus && <IconBus size={32} color='#FF9800' />}
            {holiday.itinerary?.facility?.mealStatus && <IconBurger size={32} color='#E91E63' />}
            {holiday.itinerary?.facility?.flightStatus && <IconPlane size={32} color='#9C27B0' />}
            {holiday.itinerary?.facility?.visaStatus && <IconEPassport size={32} color='#795548' />}
          </Group>

          {/* <List spacing="xs" size="sm" bg='none' mb='md' withPadding>
            {holiday.itinerary?.highlights?.map((hl, i) => hl ? <Badge color="#4b4b4b" key={i}>{hl}</Badge> : null)}
          </List> */}

          <Group gap='2px' mb='md'>
            {holiday.itinerary?.highlights?.map((hl, i) =>
              hl ? (
                <Badge
                  key={i}
                  variant='light'
                  styles={{
                    root: {
                      backgroundColor: '#fff',
                      color: '#4b4b4b',
                      border: 'none',
                    },
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <FaCheck style={{ color: 'green' }} />
                    {hl}
                  </span>
                </Badge>
              ) : null
            )}
          </Group>

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
            href={`/holiday/${holiday.id}`}
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
