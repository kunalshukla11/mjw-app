'use client';

import { Carousel } from '@mantine/carousel';
// adjust path
import { DashboardData } from '@/src/lib/types/models/mjw-service';
import classes from './Carousel.module.css';
import UnexploredCard from './UnexploredCard';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
type Props = {
  dashboardData: DashboardData[];
};

export default function UnexploredCaraousel({ dashboardData }: Props) {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    })
  ); // Ensure autoplay is configured correctly

  return (
    <Carousel
      height={400}
      plugins={[autoplay.current]}
      slideSize={{ base: '100%' }}
      withIndicators
      withControls={false}
      classNames={classes}
      loop
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {dashboardData.map((dashboardElement) => (
        <Carousel.Slide key={dashboardElement.displayName}>
          <div className='flex h-full items-center justify-center'>
            <UnexploredCard dashboadElement={dashboardElement} />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
