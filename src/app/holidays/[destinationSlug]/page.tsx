import MainLayout from '@/src/components/layout/MainLayout';
import {
  Holiday,
  HolidaySearchRequest,
  HolidaySearchResponse,
} from '../../../lib/types/models/mjw-service';
import { HolidayFilters } from '@/src/lib/types/types';
import { Title, Loader } from '@mantine/core';
import { Suspense } from 'react';
import { Text } from '@mantine/core';
import { searchHoliday } from '@/src/lib/services/holiday/holidayService';
import { getDisplayDestnation } from '@/src/lib/services/common/slugService';
import HolidayListComponent from '@/src/components/holidays/HolidaysListComponent';
import ImageKit from '@/src/components/common/ImageKit';

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

  const holidaySearchResponse: HolidaySearchResponse = await searchHoliday(serverFilters);
  const displayDestination = getDisplayDestnation(
    searchParams.cityCode || undefined,
    searchParams.stateCode || undefined,
    searchParams.countryCode || undefined,
    searchParams.theme || undefined
  );
  return (
    <MainLayout showSubHeader={false}>
      {/* Hero Section */}
      <div className='relative h-[300px] w-full'>
        <ImageKit
          src={'/placeholder.svg'} // Fallback image if no holidays are available
          alt='Holiday destinations'
          fill
          style={{
            objectFit: 'cover', // Ensures the image fills the viewport width
          }}
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw' // Responsive sizes
          quality={30} // Increase quality for better appearance
          transformation='h-1000,w-1720' // Fetch a larger resolution image
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-white'>
          <h1 className='mb-4 text-center text-4xl font-bold md:text-6xl'>Your world of joy</h1>
        </div>
      </div>
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
          <HolidayListComponent holidays={holidaySearchResponse.holidays} />
        </Suspense>
      </div>
    </MainLayout>
  );
}
