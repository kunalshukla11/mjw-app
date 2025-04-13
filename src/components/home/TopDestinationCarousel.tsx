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

export default function TopDestinationCarousel({ dashboardData }: Props) {
  const isMobile = useMobile(); // useMobile();

  return (
    <Carousel
      withIndicators
      withControls={!isMobile}
      slideSize={{ base: '100%', sm: '50%', md: '33.3333%', lg: '20%' }}
      slideGap={{ base: 24, sm: 24, md: 24, lg: 24 }}
      align='start'
      slidesToScroll={'auto'}
      height={340}
      classNames={classes}
    >
      {dashboardData.map((dashboardElement) => (
        <Carousel.Slide key={dashboardElement.displayName}>
          <div className='flex h-full items-center justify-center'>
            <TopDestinationCard dashboadElement={dashboardElement} />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
