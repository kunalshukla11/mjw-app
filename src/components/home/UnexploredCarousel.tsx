'use client';

import { Carousel } from '@mantine/carousel';
// adjust path
import { DashboardData } from '@/src/lib/types/models/mjw-service';
import classes from './Carousel.module.css';
import UnexploredCard from './UnexploredCard';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
type Props = {
  dashboardData: DashboardData[];
};

export default function UnexploredCaraousel({ dashboardData }: Props) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      height={340}
      plugins={[autoplay.current]}
      withControls={false}
      //   onMouseEnter={autoplay.current.stop}
      //   onMouseLeave={autoplay.current.reset}
    >
      {dashboardData.map((dashboardElement) => (
        <Carousel.Slide key={dashboardElement.displayName}>
          <div className='flex h-full'>
            <UnexploredCard dashboadElement={dashboardElement} />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
