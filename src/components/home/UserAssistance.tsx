'use client';

import { Text } from '@mantine/core';
import Image from 'next/image';

export default function UserAssistance() {
  return (
    <div className='relative w-full pb-8'>
      {/* Heading outside of dark box */}
      <h2 className='mb-4 flex items-center justify-center px-4 text-2xl font-bold md:px-8 md:text-3xl lg:mb-6'>
        Hassle Free. 24X7 on-trip assistance
      </h2>

      {/* Main dark container */}
      <div className='relative w-full overflow-hidden rounded-xl bg-gray-700 px-4 py-8 md:px-8 md:py-6'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          {/* Left side - image */}
          <div className='hidden md:block md:w-1/3 lg:w-2/5'>
            <div className='relative h-52 w-full'>
              <Image
                src='/info-bnr.svg'
                alt='Customer Support'
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
          </div>

          {/* Right side - contact info */}
          <div className='flex w-full flex-col space-y-4 md:w-2/3 md:space-y-6 lg:w-3/5'>
            <div className='flex items-center space-x-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <Text className='text-lg font-bold text-white md:text-xl lg:text-2xl'>
                +91 9999 999 999
              </Text>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <Text className='text-lg font-bold text-white md:text-xl lg:text-2xl'>
                holidays@myJounenyWings.com
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
