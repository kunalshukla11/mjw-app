'use client';

import { useState, useRef, useEffect } from 'react';

import { FaArrowRight, FaArrowLeft, FaUmbrella } from 'react-icons/fa';
import { Card, Text, Button } from '@mantine/core';
import { useMobile } from '../common/use-mobile';

interface Destination {
  id: number;
  name: string;
  image: string;
  price: string;
  currency: string;
}

export default function TravelCarousel() {
  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Himachal',
      image: '/placeholder.svg?height=400&width=400',
      price: '7999',
      currency: '₹',
    },
    {
      id: 2,
      name: 'South India',
      image: '/placeholder.svg?height=400&width=400',
      price: '19999',
      currency: '₹',
    },
    {
      id: 3,
      name: 'North East',
      image: '/placeholder.svg?height=400&width=400',
      price: '18999',
      currency: '₹',
    },
    {
      id: 4,
      name: 'Goa',
      image: '/placeholder.svg?height=400&width=400',
      price: '9999',
      currency: '₹',
    },
    {
      id: 5,
      name: 'Kerala',
      image: '/placeholder.svg?height=400&width=400',
      price: '14999',
      currency: '₹',
    },
    {
      id: 6,
      name: 'Rajasthan',
      image: '/placeholder.svg?height=400&width=400',
      price: '12999',
      currency: '₹',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 640) return 2; // sm
      return 1; // mobile
    }
    return 4; // default for SSR
  };

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = destinations.length - visibleCount;

  const scrollPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (carouselRef.current.scrollWidth / destinations.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, destinations.length]);

  return (
    <div className='mx-auto w-full max-w-7xl px-4 py-8'>
      <Text className='mb-6 text-2xl font-bold'>Popular Destinations</Text>

      <div className='relative'>
        {/* Navigation Buttons for larger screens */}
        {!isMobile && (
          <>
            <Button
              onClick={scrollPrev}
              disabled={currentIndex === 0}
              className='absolute left-0 top-1/2 z-10 h-auto min-w-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg'
              aria-label='Previous slide'
              variant='subtle'
              radius='xl'
            >
              <FaArrowLeft size={24} />
            </Button>

            <Button
              onClick={scrollNext}
              disabled={currentIndex >= maxIndex}
              className='absolute right-0 top-1/2 z-10 h-auto min-w-0 -translate-y-1/2 translate-x-4 rounded-full bg-white p-2 shadow-lg'
              aria-label='Next slide'
              variant='subtle'
              radius='xl'
            >
              <FaArrowRight size={24} />
            </Button>
          </>
        )}

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className='scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className='w-full flex-none snap-start sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)]'
            >
              <Card shadow='sm' padding='lg' radius='md' withBorder className='h-full'>
                <Card.Section>
                  <div className='relative h-48 overflow-hidden'>
                    <img
                      src={destination.image || '/placeholder.svg'}
                      alt={destination.name}
                      className='h-full w-full object-cover'
                    />
                  </div>
                </Card.Section>

                <div className='mb-2 mt-4 flex items-center justify-between'>
                  <Text fw={700} size='lg'>
                    {destination.name}
                  </Text>
                  <FaUmbrella size={20} className='text-gray-400' />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <Text size='sm' c='dimmed'>
                      From
                    </Text>
                    <Text fw={700}>
                      {destination.currency} {destination.price}
                    </Text>
                  </div>
                  <Button
                    variant='subtle'
                    color='blue'
                    className='flex items-center gap-1 p-0'
                    rightSection={<FaArrowRight size={16} />}
                  >
                    Explore
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Indicators */}
        {isMobile && (
          <div className='mt-4 flex justify-center gap-1'>
            {destinations.map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 min-w-0 rounded-full p-0 transition-all ${
                  index === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                }`}
                styles={{
                  root: {
                    height: '8px',
                    minWidth: index === currentIndex ? '24px' : '8px',
                    padding: 0,
                  },
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
