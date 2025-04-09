'use client';

import { Carousel } from '@mantine/carousel';
// adjust path
import { DashboardData } from '@/src/lib/types/models/mjw-service';
import CardComponent from './CardComponent';

type Props = {
  dashboardData: DashboardData[];
};

export default function CommonCarousel({ dashboardData }: Props) {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: '80%', sm: '50%', md: '33.3333%', lg: '20%' }}
      slideGap={{ base: 16, sm: 16, md: 24, lg: 32 }}
      align='start'
      slidesToScroll={1}
      height={310}
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
