import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    heroImageUrl: '',
    holidays: [
      {
        id: 103,
        name: 'Delhi Bad Walk',
        location: {
          id: 32,
          city: 'Delhi',
          cityCode: 'DEL',
          state: 'Delhi',
          stateCode: 'DL',
          country: 'India',
          countryCode: 'IN',
          imagesUrl: [
            'https://ik.imagekit.io/r4qffffod/Locations/Machu%20Picchu%20Through%20Clouds.jpg',
          ],
        },
        itinerary: {
          id: 115,
          name: '3 day Delhi',
          identifier: 'DEL_IN_3_3dayDelhi',
          location: {
            id: 32,
            city: 'Delhi',
            cityCode: 'DEL',
            state: 'Delhi',
            stateCode: 'DL',
            country: 'India',
            countryCode: 'IN',
            imagesUrl: [
              'https://ik.imagekit.io/r4qffffod/Locations/Machu%20Picchu%20Through%20Clouds.jpg',
            ],
          },
          duration: 3,
          itineraryDetail: {
            name: 'Red Fort and India Gate',
          },
        },
        standardPrice: 5500,
        superiorPrice: 1500,
        luxuryPrice: 2000,
        currency: 'INR',
        holidayThemes: [],
      },
      {
        id: 83,
        name: 'Chennai Coastal Retreat',
        location: {
          id: 32,
          city: 'Delhi',
          cityCode: 'DEL',
          state: 'Delhi',
          stateCode: 'DL',
          country: 'India',
          countryCode: 'IN',
          imagesUrl: [
            'https://ik.imagekit.io/r4qffffod/Locations/Machu%20Picchu%20Through%20Clouds.jpg',
          ],
        },
        itinerary: {
          id: 95,
          name: '5 day Chennai',
          identifier: 'DEL_IN_5_5dayChennai',
          location: {
            id: 32,
            city: 'Delhi',
            cityCode: 'DEL',
            state: 'Delhi',
            stateCode: 'DL',
            country: 'India',
            countryCode: 'IN',
            imagesUrl: [
              'https://ik.imagekit.io/r4qffffod/Locations/Machu%20Picchu%20Through%20Clouds.jpg',
            ],
          },
          duration: 5,
          itineraryDetail: {
            name: 'Marina Beach and temples',
          },
        },
        standardPrice: 2100,
        superiorPrice: 2600,
        luxuryPrice: 3500,
        currency: 'INR',
        holidayThemes: [],
      },
    ],
  });
}
