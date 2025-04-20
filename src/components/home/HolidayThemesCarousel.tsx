'use client';

import { Carousel } from '@mantine/carousel';
// adjust path
import { DashboardData } from '@/src/lib/types/models/mjw-service';
import { useMobile } from '../common/use-mobile';
import classes from './Carousel.module.css';
import HolidayThemesCard from './HolidayThemesCard';

type Props = {
  dashboardData: DashboardData[];
};

export default function HolidayThemesCaraousel({ dashboardData }: Props) {
  const isMobile = useMobile(); // useMobile();

  return (
    <Carousel
      withIndicators
      withControls={!isMobile}
      slideSize={{ base: '60%', sm: '40%', md: '33.3333%', lg: '15%' }}
      slideGap={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg' }}
      align='start'
      slidesToScroll={'auto'}
      height={340}
      classNames={classes}
    >
      {dashboardData.map((dashboardElement) => (
        <Carousel.Slide key={dashboardElement.displayName}>
          <div className='flex h-full items-center justify-center'>
            <HolidayThemesCard dashboadElement={dashboardElement} />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
