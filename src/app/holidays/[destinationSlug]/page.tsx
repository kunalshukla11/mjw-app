import MainLayout from '@/src/components/layout/MainLayout';
import { HolidaySearchRequest } from '../../../lib/types/models/mjw-service';
import { HolidayFilters } from '@/src/lib/types/types';
import { SearchParams } from 'next/dist/server/request/search-params';
import { Params } from 'next/dist/server/request/params';
import { Title, Loader } from '@mantine/core';
import { Suspense } from 'react';
import { Text } from '@mantine/core';
import { searchHoliday } from '@/src/lib/services/holiday/holidayService';
import { getDisplayDestnation } from '@/src/lib/services/common/slugService';

// Define the expected shape of searchParams more accurately
interface HolidayPageSearchParams
  extends Omit<HolidaySearchRequest, 'minPrice' | 'maxPrice' | 'duration'> {
  // URL params are strings
  minPrice?: string;
  maxPrice?: string;
  duration?: string;
}

export default async function HolidaysListPage(props: {
  params: Promise<{ destinationSlug: string }>;
  searchParams: Promise<HolidayPageSearchParams>;
}) {
  const params = props.params;
  const destinationSlug = await props.params;
  const searchParams = await props.searchParams;
  const serverFilters: HolidayFilters = {
    // Base location filters
    cityCode: searchParams.cityCode || undefined,
    stateCode: searchParams.stateCode || undefined,
    countryCode: searchParams.countryCode || undefined,
    theme: searchParams.theme || undefined,

    // Additional filters from URL
    // sortBy: searchParams.sortBy || undefined,
    // minPrice: searchParams.minPrice ? parseInt(searchParams.minPrice, 10) : undefined,
    // maxPrice: searchParams.maxPrice ? parseInt(searchParams.maxPrice, 10) : undefined,
    // duration: searchParams.duration ? parseInt(searchParams.duration, 10) : undefined,
    // packageType: searchParams.packageType || undefined,
  };

  const holidays = await searchHoliday(serverFilters);
  const displayDestination = getDisplayDestnation(
    searchParams.cityCode || undefined,
    searchParams.stateCode || undefined,
    searchParams.countryCode || undefined,
    searchParams.theme || undefined
  );
  return (
    <MainLayout>
      <div className='container mx-auto px-4 py-8'>
        {/* Breadcrumbs or Title */}
        {/* You might want more sophisticated breadcrumbs */}
        <Text size='sm' c='dimmed'>
          Home &gt; Holidays &gt; {displayDestination}
        </Text>
        <Title order={2} className='mb-4 mt-2'>
          {displayDestination} Tour Packages
        </Title>
        {/* Filters Component (Client) - Pass initial filters derived from URL */}
        {/* <HolidayFiltersComponent initialFilters={serverFilters} /> */}
        {/* Holiday List */}

        <Suspense
          fallback={
            <div className='flex justify-center py-10'>
              <Loader />
            </div>
          }
        >
          {/* <HolidayListComponent holidays={holidays} /> */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {holidays.map((holiday) => (
              <div
                key={holiday.id}
                className='rounded-lg border p-4 shadow transition-shadow duration-200 hover:shadow-lg'
              >
                <Title order={3} className='mb-2'>
                  {holiday.name}
                </Title>
                <Text size='sm' c='dimmed'>
                  {holiday.location.city}, {holiday.location.country}
                </Text>
                <Text className='mt-2'>Price: ${holiday.standardPrice} INR</Text>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </MainLayout>
  );
}
