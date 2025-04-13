'use client';

import { Carousel } from '@mantine/carousel';
// adjust path
import { DashboardData } from '@/src/lib/types/models/mjw-service';
import CardComponent from './CardComponent';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

type Props = {
  dashboardData: DashboardData[];
};

export default function CommonCarousel({ dashboardData }: Props) {
  const theme = useMantineTheme();

  return (
    <Carousel
      withIndicators
      slideSize={{ base: '70%', sm: '50%', md: '33.3333%', lg: '20%' }}
      slideGap={{ base: 24, sm: 24, md: 24, lg: 24 }}
      align='start'
      slidesToScroll={'auto'}
      height={340}
      styles={{
        indicator: {
          backgroundColor: 'lightgray',
        },
      }}
    >
      {dashboardData.map((dashboardElement) => (
        <Carousel.Slide key={dashboardElement.displayName}>
          <div className='flex h-full items-center justify-center'>
            <CardComponent dashboadElement={dashboardElement} />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
