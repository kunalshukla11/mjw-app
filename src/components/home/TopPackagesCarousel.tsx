'use client';

import { Carousel } from '@mantine/carousel';
// adjust path
import { DashboardData } from '@/src/lib/types/models/mjw-service';
import TopDestinationCard from './TopDestinationCard';
import { useMobile } from '../common/use-mobile';
import TopPackagesCard from './TopPackagesCard';
import classes from './Carousel.module.css';

type Props = {
  dashboardData: DashboardData[];
};

export default function TopPackagesCarousel({ dashboardData }: Props) {
  const isMobile = useMobile(); // useMobile();

  return (
    <Carousel
      className='mt-2'
      height={550}
      withIndicators
      withControls={!isMobile}
      slideSize={{ base: '100%', sm: '50%', md: '33.3333%', lg: '25%' }}
      slideGap={{ base: 24, sm: 24, md: 24, lg: 24 }}
      align='start'
      slidesToScroll={'auto'}
      classNames={classes}
    >
      {dashboardData.map((dashboardElement) => (
        <Carousel.Slide key={dashboardElement.displayName}>
          <div className='flex items-center justify-center'>
            <TopPackagesCard dashboadElement={dashboardElement} />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
