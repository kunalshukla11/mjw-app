import { Holiday } from '@/src/lib/types/models/mjw-service';
import { Text } from '@mantine/core';
import HolidayCard from './HolidayCard';

interface HolidayListProps {
  holidays: Holiday[];
}
export default function HolidayListComponent({ holidays }: HolidayListProps) {
  if (!holidays || holidays.length === 0) {
    return (
      <div className='py-10 text-center text-gray-500'>
        <Text size='lg'>No holidays found matching your criteria.</Text>
        <Text size='sm' c='dimmed' mt='xs'>
          Try adjusting your filters.
        </Text>
      </div>
    );
  }

  return (
    // Responsive grid layout using Tailwind
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {holidays.map((holiday) => (
        <HolidayCard key={holiday.id} holiday={holiday} />
      ))}
    </div>
  );
}
