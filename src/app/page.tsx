//TOOD: Learn about caching may be use caching instead of force-dynamic , ISR
export const dynamic = 'force-dynamic';

import MainLayout from '@/src/components/layout/MainLayout';
import { getHolidayDashboard } from '../lib/services/holiday/holidayService';
import Image from 'next/image';
import { Metadata } from 'next';
import { Card, Container, Title, Paper, Badge, Text } from '@mantine/core';
import ImageKit from '../components/common/image-kit';
import TopDestinationCarousel from '../components/home/TopDestinationCarousel';
import { DashboardData } from '../lib/types/models/mjw-service';
import { D } from '@tanstack/react-query-devtools/build/legacy/ReactQueryDevtools-Cn7cKi7o';
import TravelCarousel from '../components/home/travel-caraousel';
import TopPackagesCard from '../components/home/TopPackagesCard';
import TopDestinationCard from '../components/home/TopDestinationCard';
import TopPackagesCarousel from '../components/home/TopPackagesCarousel';
import InternationalDestCarousel from '../components/home/InternationDestCarousel';
import HolidayThemesCaraousel from '../components/home/HolidayThemesCarousel';
import UnexploredCaraousel from '../components/home/UnexploredCarousel';

export const metadata: Metadata = {
  title: 'Holiday Packages | Your Travel Company',
  description: 'Discover amazing holiday packages and destinations for your next adventure',
};

// Helper function to extract path from ImageKit URL
const getImagePath = (url: string) => {
  return url.replace('https://ik.imagekit.io/r4qffffod/', '');
};

export default async function HomePage() {
  const data = await getHolidayDashboard();

  return (
    <MainLayout>
      {/* Main Page */}
      <div className='relative min-h-screen bg-white'>
        {/* Hero Section */}
        <div className='relative h-[600px] w-full'>
          <ImageKit
            src={data.heroImageUrl || '/placeholder.svg'}
            alt='Holiday destinations'
            fill
            style={{
              objectFit: 'cover', // Ensures the image fills the viewport width
            }}
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw' // Responsive sizes
            quality={90} // Increase quality for better appearance
            transformation='h-1200,w-1920' // Fetch a larger resolution image
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-white'>
            <h1 className='mb-4 text-center text-4xl font-bold md:text-6xl'>Your world of joy</h1>
            <p className='mb-8 max-w-3xl text-center text-xl md:text-2xl'>
              From local escapes to far-flung adventures, find what makes you happy anytime,
              anywhere
            </p>

            {/* Search Form - Client Component */}
            {/* <SearchForm /> */}
          </div>
        </div>
        {/* Why Choose Us Section */}
        <Container size='xl' className='py-12'>
          <Title order={2} className='mb-12 text-center text-3xl font-bold'>
            Why choose us
          </Title>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-orange-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Best Prices</h3>
              <p className='text-gray-600'>We offer the best prices for your dream vacation</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-orange-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Easy Booking</h3>
              <p className='text-gray-600'>Simple and fast booking process</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-orange-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold'>100% Secure</h3>
              <p className='text-gray-600'>We prioritize your security and privacy</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-orange-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Top Quality</h3>
              <p className='text-gray-600'>We ensure the best experience for our customers</p>
            </div>
          </div>
        </Container>

        {/* Top Destinations Section */}
        <div className='max-w-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-32 xl:px-28'>
          <Title order={2} className='mb-2 text-center text-3xl font-bold'>
            Top Destinations
          </Title>

          <TopDestinationCarousel dashboardData={data.topDestinations} />
        </div>

        {/* Top Package Section */}
        <div className='max-w-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-32 xl:px-28'>
          <Title order={2} className='mb-2 pb-8 text-center text-3xl font-bold'>
            Top Packages
          </Title>

          <TopPackagesCarousel dashboardData={data.topPackages} />
        </div>

        {/* International Destination Section */}
        <div className='max-w-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-32 xl:px-28'>
          <Title order={2} className='mb-2 text-center text-3xl font-bold'>
            International Destinations
          </Title>

          <InternationalDestCarousel dashboardData={data.internationalDestinations} />
        </div>

        {/* Explore the unexplored */}
        <div className='max-w-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-32 xl:px-28'>
          <Title order={2} className='mb-2 text-center text-3xl font-bold'>
            Explore the unexplored
          </Title>

          <UnexploredCaraousel dashboardData={data.unexploredDestinations} />
        </div>

        {/* Holiday by themes */}
        <div className='max-w-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-32 xl:px-28'>
          <Title order={2} className='mb-2 text-center text-3xl font-bold'>
            Holiday By Themes
          </Title>

          <HolidayThemesCaraousel dashboardData={data.holidayThemes} />
        </div>
      </div>
    </MainLayout>
  );
}
