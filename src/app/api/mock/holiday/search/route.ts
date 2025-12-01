import { NextResponse } from 'next/server';
import { on } from 'process';

// Pre-built mock responses for different cities. Each response mirrors the
// structure the frontend expects from the real API adding space.
const DelhiResponse = {
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
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: false,
          visaStatus: true,
        },
        highlights: [
          "4 star Accommodation",
          "London city tour with London Eye & Madame Tussaud's",
          "Visit Lords Cricket Stadium",
          "Experience the high speed train from London to Paris",
          "Visit Eiffel Tower & River Seine Cruise"
        ],
        identifier: 'DEL_IN_3_3dayDelhi',
        description: {
          shortDescription: 'A short Delhi description.',
          longDescription: 'A longer Delhi description with sights and food.',
        },
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
          hasPickAndDrop: true,
          hasVisa: true,
          hasHotel: true,
          name: 'Red Fort and India Gate',
          higlights: ['4 star hotels', '4 Activities'],
        },
      },
      standardPrice: 5500,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },{
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
          'https://ik.imagekit.io/r4qffffod/Locations/London.jpg',
        ],
      },

      itinerary: {
        id: 115,
        name: '3 day Delhi',
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "Guided tours in Paris, Florence & Rome",
          "Top attractions and sightseeing",
          "Professional & knowledgeable Tour Manager"
        ],
        identifier: 'DEL_IN_3_3dayDelhi',
        description: {
          shortDescription: 'A short Delhi description.',
          longDescription: 'A longer Delhi description with sights and food.',
        },
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
          hasPickAndDrop: true,
          hasVisa: true,
          hasHotel: true,
          name: 'Red Fort and India Gate',
          higlights: ['4 star hotels', '4 Activities'],
        },
      },
      standardPrice: 5500,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
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
          'https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg',
        ],
      },

      itinerary: {
        id: 115,
        name: '3 day Delhi',
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "City tour in : Zagreb, Sarajevo, Dubrovnik, Split, Ljubljana.",
          "Jajce Waterfall"
        ],
        identifier: 'DEL_IN_3_3dayDelhi',
        description: {
          shortDescription: 'A short Delhi description.',
          longDescription: 'A longer Delhi description with sights and food.',
        },
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
          hasPickAndDrop: true,
          hasVisa: true,
          hasHotel: true,
          name: 'Red Fort and India Gate',
          higlights: ['4 star hotels', '4 Activities'],
        },
      },
      standardPrice: 5500,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
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
          'https://ik.imagekit.io/r4qffffod/Locations/TakenOnCoolWinter.jpg',
        ],
      },

      itinerary: {
        id: 115,
        name: '3 day Delhi',
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "City tour in : Oslo, Stockholm",
          "Cinderella Castle in Polle",
          "Lufthansa Airlines – Get the Best Prices on Request"
        ],
        identifier: 'DEL_IN_3_3dayDelhi',
        description: {
          shortDescription: 'A short Delhi description.',
          longDescription: 'A longer Delhi description with sights and food.',
        },
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
          hasPickAndDrop: true,
          hasVisa: true,
          hasHotel: true,
          name: 'Red Fort and India Gate',
          higlights: ['4 star hotels', '4 Activities'],
        },
      },
      standardPrice: 5500,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 104,
      name: 'Red Fort Walk',
      location: {
        id: 33,
        city: 'Delhi',
        cityCode: 'DEL',
        state: 'Delhi',
        stateCode: 'DL',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: [
          'https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg',
        ],
      },

      itinerary: {
        id: 115,
        name: '3 day Delhi',
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
        },
        highlights: [
          "Mini Train Ride in Vaduz",
          "Versailles Palace",
          "Romantic River Seine Cruise",
          "Visit Iconic Eiffel Tower",
          "Experience a thrilling journey on the Rotair as you climb to the summit of Mt. Titlis."
        ],
        identifier: 'DEL_IN_3_3dayDelhi',
        description: {
          shortDescription: 'A short Delhi description.',
          longDescription: 'A longer Delhi description with sights and food.',
        },
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
          hasPickAndDrop: true,
          hasVisa: false,
          hasHotel: true,
          name: 'Red Fort and India Gate',
        },
      },
      standardPrice: 5500,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
  ],
};

const MumbaiResponse = {
  heroImageUrl: '',
  holidays: [
    {
      id: 201,
      name: 'Mumbai Gateway Stroll',
      location: {
        id: 40,
        city: 'Mumbai',
        cityCode: 'BOM',
        state: 'Maharashtra',
        stateCode: 'MH',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg'],
      },
      itinerary: {
        id: 210,
        name: '2 day Mumbai',
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
        },
        highlights: [
          "Guided tour as per Itinerary",
          "4-star accommodations and daily breakfast",
          "Indian and local cuisine options"
        ],
        identifier: 'BOM_IN_2_2dayMumbai',
        description: {
          shortDescription: 'Explore Mumbai in 2 days.',
          longDescription: 'Markets, beaches and the Gateway of India.',
        },
        location: {
          id: 40,
          city: 'Mumbai',
          cityCode: 'BOM',
          state: 'Maharashtra',
          stateCode: 'MH',
          country: 'India',
          countryCode: 'IN',
          imagesUrl: ['https://ik.imagekit.io/sample/mumbai.jpg'],
        },
        duration: 2,
        itineraryDetail: {
          name: 'Gateway of India and Marine Drive',
        },
      },
      standardPrice: 8000,
      superiorPrice: 12000,
      luxuryPrice: 20000,
      currency: 'INR',
      holidayThemes: [],
    },
  ],
};

const GoaResponse = {
  heroImageUrl: '',
  holidays: [
    {
      id: 301,
      name: 'Goa Beach Getaway',
      location: {
        id: 50,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg'],
      },
      itinerary: {
        id: 305,
        name: '5 day Chennai',
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
        },
        highlights: [
          "Guided tours in Paris, Florence & Rome",
          "Top attractions and sightseeing",
          "Professional & knowledgeable Tour Manager"
        ],
        identifier: 'MAA_IN_5_5dayChennai',
        description: {
          shortDescription: 'Experience Chennai over 5 days.',
          longDescription: 'Temples, beaches and local cuisine.',
        },
        location: {
          id: 50,
          city: 'Chennai',
          cityCode: 'MAA',
          state: 'Tamil Nadu',
          stateCode: 'TN',
          country: 'India',
          countryCode: 'IN',
          imagesUrl: ['https://ik.imagekit.io/sample/chennai.jpg'],
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
};

const BengaluruResponse = {
  heroImageUrl: '',
  holidays: [
    {
      id: 401,
      name: 'Bengaluru Garden Escape',
      location: {
        id: 60,
        city: 'Bengaluru',
        cityCode: 'BLR',
        state: 'Karnataka',
        stateCode: 'KA',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/sample/bengaluru.jpg'],
      },
      itinerary: {
        id: 410,
        name: '3 day Bengaluru',
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
        },
        highlights: [
          "Guided tours in Paris, Florence & Rome",
          "Top attractions and sightseeing",
          "Professional & knowledgeable Tour Manager"
        ],
        identifier: 'BLR_IN_3_3dayBengaluru',
        description: {
          shortDescription: 'Parks and IT hubs of Bengaluru.',
          longDescription: 'Lalbagh, Cubbon Park and city culture.',
        },
        location: {
          id: 60,
          city: 'Bengaluru',
          cityCode: 'BLR',
          state: 'Karnataka',
          stateCode: 'KA',
          country: 'India',
          countryCode: 'IN',
          imagesUrl: ['https://ik.imagekit.io/sample/bengaluru.jpg'],
        },
        duration: 3,
        itineraryDetail: {
          name: 'Lalbagh and Cubbon Park',
        },
      },
      standardPrice: 4000,
      superiorPrice: 6000,
      luxuryPrice: 9000,
      currency: 'INR',
      holidayThemes: [],
    },
  ],
};

const DefaultResponse = {
  heroImageUrl: '',
  holidays: [],
};

export async function POST(request: Request) {
  const body: any = await request.json();
  const cityCode = (body?.cityCode || '').toString().toUpperCase();

  switch (cityCode) {
    case 'DEL':
      return NextResponse.json(DelhiResponse);
    case 'BOM':
    case 'MUM':
      return NextResponse.json(MumbaiResponse);
    case 'GOI':
    case 'GOA':
      return NextResponse.json(GoaResponse);
    case 'BLR':
      return NextResponse.json(BengaluruResponse);
    default:
      return NextResponse.json(DefaultResponse);
  }
}
