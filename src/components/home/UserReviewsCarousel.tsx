'use client';
import { Review } from '@/src/lib/types/models/mjw-service';
import { useMobile } from '../common/use-mobile';
import { Carousel } from '@mantine/carousel';
import UserReviewsCard from './UserReviewsCard';
import classes from './Carousel.module.css';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

type Props = {
  reviews: Review[];
};
export default function UserReviewsCarousel({ reviews: rewiews }: Props) {
  const isMobile = useMobile(); // useMobile();
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    })
  ); // Ensure autoplay is configured correctly

  return (
    <Carousel
      withIndicators
      withControls={!isMobile}
      plugins={[autoplay.current]}
      slideSize={isMobile ? '100%' : '50%'}
      slideGap='md'
      align='start'
      slidesToScroll={isMobile ? 1 : 2}
      loop
      classNames={classes}
      className='h-full px-2 py-10'
    >
      {rewiews.map((review) => (
        <Carousel.Slide key={review.username}>
          <UserReviewsCard review={review} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
