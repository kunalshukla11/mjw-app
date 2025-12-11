import { NextResponse } from 'next/server';

// Pre-built mock responses for different cities. Each response mirrors the
// structure the frontend expects from the real API adding space.

//cityCode can be 'DEL', 'BOM', 'GOA'
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
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 }
        ],
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
    }, {
      id: 159,
      name: 'Historic Innsbruck',
      location: {
        id: 27,
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
        id: 357,
        name: '3 day Delhi',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
        ],
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
          id: 14,
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
      standardPrice: 3200,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 17,
      name: 'Spain Supersaver - 5 Nights',
      location: {
        id: 48,
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
        id: 854,
        name: '3 day Delhi',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 }
        ],
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
          id: 69,
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
      standardPrice: 4500,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 247,
      name: 'Loveable Paris',
      location: {
        id: 14,
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
        id: 817,
        name: '3 day Delhi',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
        ],
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
          id: 78,
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
      standardPrice: 4000,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 103,
      name: 'Gorgeous Spain Getaway',
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
        id: 246,
        name: '3 day Delhi',
        stayCities: [
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 }
        ],
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
          id: 11,
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
      standardPrice: 5000,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 753,
      name: 'Soulful France and Spain',
      location: {
        id: 89,
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
        id: 845,
        name: '3 day Delhi',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Amsterdam", "nights": 1 }
        ],
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
          id: 814,
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
      standardPrice: 4847,
      superiorPrice: 1500,
      luxuryPrice: 2000,
      currency: 'INR',
      holidayThemes: [],
    }
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
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 }
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
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
    {
      id: 368,
      name: 'Central European Splendours – Summer 2026',
      location: {
        id: 41,
        city: 'Mumbai',
        cityCode: 'BOM',
        state: 'Maharashtra',
        stateCode: 'MH',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/passing.jpg'],
      },
      itinerary: {
        id: 412,
        name: '2 day Mumbai',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Amsterdam", "nights": 1 }
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Swarovski World.",
          "Rhine Falls",
          "Venice city tour",
          "Visit Mt.Titlis with Cliff Walk"
        ],
        identifier: 'BOM_IN_2_2dayMumbai',
        description: {
          shortDescription: 'Explore Mumbai in 2 days.',
          longDescription: 'Markets, beaches and the Gateway of India.',
        },
        location: {
          id: 78,
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
      standardPrice: 8500,
      superiorPrice: 12000,
      luxuryPrice: 20000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 754,
      name: 'Grand Tour of Europe - Summer 2026',
      location: {
        id: 58,
        city: 'Mumbai',
        cityCode: 'BOM',
        state: 'Maharashtra',
        stateCode: 'MH',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/Fuvahmulah.jpg'],
      },
      itinerary: {
        id: 358,
        name: '2 day Mumbai',
        stayCities: [
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 }
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Mini Train Ride in Vaduz",
          "Versailles Palace",
          "Romantic River Seine Cruise",
          "Visit Iconic Eiffel Tower",
          "Experience a thrilling journey on the Rotair as you climb to the summit of Mt. Titlis."
        ],
        identifier: 'BOM_IN_2_2dayMumbai',
        description: {
          shortDescription: 'Explore Mumbai in 2 days.',
          longDescription: 'Markets, beaches and the Gateway of India.',
        },
        location: {
          id: 17,
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
      standardPrice: 7000,
      superiorPrice: 12000,
      luxuryPrice: 20000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 369,
      name: 'Scenic Europe',
      location: {
        id: 73,
        city: 'Mumbai',
        cityCode: 'BOM',
        state: 'Maharashtra',
        stateCode: 'MH',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/image3.jpg'],
      },
      itinerary: {
        id: 348,
        name: '2 day Mumbai',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,

        },
        highlights: [
          "Cross the Arctic Circle at Santa Claus Village.",
          "Meet Santa Claus & Experience the husky/reindeer sleigh rides.",
          "Encounter Arctic animals at Ranua Zoo.",
          "Chase the magical Northern Lights across frozen landscapes"
        ],
        identifier: 'BOM_IN_2_2dayMumbai',
        description: {
          shortDescription: 'Explore Mumbai in 2 days.',
          longDescription: 'Markets, beaches and the Gateway of India.',
        },
        location: {
          id: 18,
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
      standardPrice: 7000,
      superiorPrice: 12000,
      luxuryPrice: 20000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 584,
      name: 'Mumbai Gateway Stroll',
      location: {
        id: 59,
        city: 'Mumbai',
        cityCode: 'BOM',
        state: 'Maharashtra',
        stateCode: 'MH',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/image2.jpg'],
      },
      itinerary: {
        id: 639,
        name: '2 day Mumbai',
        stayCities: [
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: true,
          mealStatus: false,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "City tour in Paris",
          "Cable Car to Grindelwald First"
        ],
        identifier: 'BOM_IN_2_2dayMumbai',
        description: {
          shortDescription: 'Explore Mumbai in 2 days.',
          longDescription: 'Markets, beaches and the Gateway of India.',
        },
        location: {
          id: 81,
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
      standardPrice: 9000,
      superiorPrice: 12000,
      luxuryPrice: 20000,
      currency: 'INR',
      holidayThemes: [],
    },
    {
      id: 501,
      name: 'Timeless Europe',
      location: {
        id: 20,
        city: 'Mumbai',
        cityCode: 'BOM',
        state: 'Maharashtra',
        stateCode: 'MH',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/Hero.jpg'],
      },
      itinerary: {
        id: 111,
        name: '2 day Mumbai',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "4-star accommodations and daily breakfast",
          "Indian and local cuisine options"
        ],
        identifier: 'BOM_IN_2_2dayMumbai',
        description: {
          shortDescription: 'Explore Mumbai in 2 days.',
          longDescription: 'Markets, beaches and the Gateway of India.',
        },
        location: {
          id: 24,
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
      standardPrice: 10000,
      superiorPrice: 12000,
      luxuryPrice: 20000,
      currency: 'INR',
      holidayThemes: [],
    }

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
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
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
    {
      id: 302,
      name: 'Spain in Style',
      location: {
        id: 51,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/TakenOnCoolWinter.jpg'],
      },
      itinerary: {
        id: 306,
        name: '5 day Chennai',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: true,
          mealStatus: false,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Boat Ride in Guadalquivir River",
          "Poblet Monastery, Alhambra Palace and Generalife"
        ],
        identifier: 'MAA_IN_5_5dayChennai',
        description: {
          shortDescription: 'Experience Chennai over 5 days.',
          longDescription: 'Temples, beaches and local cuisine.',
        },
        location: {
          id: 51,
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
      standardPrice: 2400,
      superiorPrice: 2600,
      luxuryPrice: 3500,
      currency: 'INR',
      holidayThemes: [],
    }, {
      id: 245,
      name: 'German Mosaic',
      location: {
        id: 23,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg'],
      },
      itinerary: {
        id: 545,
        name: '5 day Chennai',
        stayCities: [
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Holocaust Memorial",
          "BMW WELT in Munich",
          "Lufthansa Airlines – Get the Best Prices on Request"
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
      standardPrice: 3700,
      superiorPrice: 2600,
      luxuryPrice: 3500,
      currency: 'INR',
      holidayThemes: [],
    }, {
      id: 457,
      name: 'Legends of the Atlantic',
      location: {
        id: 21,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/aerialViewBeach.jpg'],
      },
      itinerary: {
        id: 258,
        name: '5 day Chennai',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: true,
          mealStatus: false,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Wine and mussel tasting in a boat trip in Cambados",
          "Bom Jesus Sanctuary in Braga"
        ],
        identifier: 'MAA_IN_5_5dayChennai',
        description: {
          shortDescription: 'Experience Chennai over 5 days.',
          longDescription: 'Temples, beaches and local cuisine.',
        },
        location: {
          id: 36,
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
      standardPrice: 4100,
      superiorPrice: 2600,
      luxuryPrice: 3500,
      currency: 'INR',
      holidayThemes: [],
    }, {
      id: 896,
      name: 'Italia Unfolded',
      location: {
        id: 35,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/PathwaytotheMediterranean.jpg'],
      },
      itinerary: {
        id: 123,
        name: '5 day Chennai',
        stayCities: [
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "City tour in : Rome, Florence, Venice.",
          "Murano glasswork in Venice"
        ],
        identifier: 'MAA_IN_5_5dayChennai',
        description: {
          shortDescription: 'Experience Chennai over 5 days.',
          longDescription: 'Temples, beaches and local cuisine.',
        },
        location: {
          id: 19,
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
      standardPrice: 5800,
      superiorPrice: 2600,
      luxuryPrice: 3500,
      currency: 'INR',
      holidayThemes: [],
    }, {
      id: 147,
      name: 'Iberian Charms',
      location: {
        id: 29,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/silhouetteMan.jpg'],
      },
      itinerary: {
        id: 178,
        name: '5 day Chennai',
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "City tour: Paseo del Prado, Plaza de Colón, Puerta de Alcalá, and more.",
          "Guided tour: Cathedral, Giralda Tower, Santa Cruz and Triana districts."
        ],
        identifier: 'MAA_IN_5_5dayChennai',
        description: {
          shortDescription: 'Experience Chennai over 5 days.',
          longDescription: 'Temples, beaches and local cuisine.',
        },
        location: {
          id: 29,
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
      standardPrice: 3200,
      superiorPrice: 2600,
      luxuryPrice: 3500,
      currency: 'INR',
      holidayThemes: [],
    }, {
      id: 147,
      name: 'Iberian Charms',
      location: {
        id: 29,
        city: 'Chennai',
        cityCode: 'MAA',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        country: 'India',
        countryCode: 'IN',
        imagesUrl: ['https://ik.imagekit.io/r4qffffod/Locations/RialtoBridge.jpg'],
      },
      itinerary: {
        id: 178,
        name: '5 day Chennai',
        stayCities: [
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        identifier: 'MAA_IN_5_5dayChennai',
        description: {
          shortDescription: 'Experience Chennai over 5 days.',
          longDescription: 'Temples, beaches and local cuisine.',
        },
        location: {
          id: 38,
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
      standardPrice: 3900,
      superiorPrice: 2600,
      luxuryPrice: 3500,
      currency: 'INR',
      holidayThemes: [],
    }
  ],
};

const SydneyResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 66,
      "name": "Discover Karnataka",
      "location": {
        "id": 15,
        "city": "Sydney",
        "cityCode": "SYD",
        "state": "New South Wales",
        "stateCode": "NSW",
        "country": "Australia",
        "countryCode": "AU",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/London.jpg"
        ]
      },
      "itinerary": {
        "id": 78,
        "name": "3 day Karnataka",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "SYD_AU_3_3dayKarnataka",
        "location": {
          "id": 15,
          "city": "Sydney",
          "cityCode": "SYD",
          "state": "New South Wales",
          "stateCode": "NSW",
          "country": "Australia",
          "countryCode": "AU",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/London.jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Explore hills and heritage"
        }
      },
      "standardPrice": 1200,
      "superiorPrice": 1800,
      "luxuryPrice": 2500,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 86,
      "name": "Sydney Delight",
      "location": {
        "id": 15,
        "city": "Sydney",
        "cityCode": "SYD",
        "state": "New South Wales",
        "stateCode": "NSW",
        "country": "Australia",
        "countryCode": "AU",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/London.jpg"
        ]
      },
      "itinerary": {
        "id": 98,
        "name": "3 day Sydney",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: true,
          mealStatus: false,
          flightStatus: false,
          visaStatus: true,
        },
        highlights: [
          "Funicular: Cable Car to Grindelwald First.",
          "City tour in : Rome, Florence, Venice, Paris."
        ],
        "identifier": "SYD_AU_3_3daySydney",
        "location": {
          "id": 15,
          "city": "Sydney",
          "cityCode": "SYD",
          "state": "New South Wales",
          "stateCode": "NSW",
          "country": "Australia",
          "countryCode": "AU",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/London.jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Sydney Opera House and Bondi Beach"
        }
      },
      "standardPrice": 1500,
      "superiorPrice": 2200,
      "luxuryPrice": 3000,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}

const TokyoResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 67,
      "name": "Amazing London",
      "location": {
        "id": 16,
        "city": "Tokyo",
        "cityCode": "HND",
        "state": "Tokyo",
        "stateCode": "TK",
        "country": "Japan",
        "countryCode": "JP",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg"
        ]
      },
      "itinerary": {
        "id": 79,
        "name": "4 day London",
        stayCities: [
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "HND_JP_4_4dayLondon",
        "location": {
          "id": 16,
          "city": "Tokyo",
          "cityCode": "HND",
          "state": "Tokyo",
          "stateCode": "TK",
          "country": "Japan",
          "countryCode": "JP",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg"
          ]
        },
        "duration": 4,
        "itineraryDetail": {
          "name": "Big Ben, Thames River, and more"
        }
      },
      "standardPrice": 2000,
      "superiorPrice": 3000,
      "luxuryPrice": 4000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 87,
      "name": "Tokyo Excursion",
      "location": {
        "id": 16,
        "city": "Tokyo",
        "cityCode": "HND",
        "state": "Tokyo",
        "stateCode": "TK",
        "country": "Japan",
        "countryCode": "JP",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg"
        ]
      },
      "itinerary": {
        "id": 99,
        "name": "4 day Tokyo",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: false,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "City tour in : Vienna, Budapest, Prague.",
          "English Speaking Guide",
          "Lufthansa Airlines – Get the Best Prices on Request"
        ],
        "identifier": "HND_JP_4_4dayTokyo",
        "location": {
          "id": 16,
          "city": "Tokyo",
          "cityCode": "HND",
          "state": "Tokyo",
          "stateCode": "TK",
          "country": "Japan",
          "countryCode": "JP",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/TheCliffsofCinqueTerre.jpg"
          ]
        },
        "duration": 4,
        "itineraryDetail": {
          "name": "Senso-ji Temple and Tokyo Tower"
        }
      },
      "standardPrice": 2000,
      "superiorPrice": 2700,
      "luxuryPrice": 3500,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}


//state specific response
const MaharashtraResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 65,
      "name": "Ajanta Cave",
      "location": {
        "id": 14,
        "city": "Mumbai",
        "cityCode": "BOM",
        "state": "Maharashtra",
        "stateCode": "MH",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg"
        ]
      },
      "itinerary": {
        "id": 77,
        "name": "2 day Rajasthan",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "BOM_IN_5_2dayRajasthan",
        "location": {
          "id": 14,
          "city": "Mumbai",
          "cityCode": "BOM",
          "state": "Maharashtra",
          "stateCode": "MH",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg"
          ]
        },
        "duration": 5,
        "itineraryDetail": {
          "name": "Some details"
        }
      },
      "standardPrice": 700,
      "superiorPrice": 1500,
      "luxuryPrice": 2000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 71,
      "name": "Dubai Extravaganza",
      "location": {
        "id": 20,
        "city": "Pune",
        "cityCode": "PNQ",
        "state": "Maharashtra",
        "stateCode": "MH",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/silhouetteMan.jpg"
        ]
      },
      "itinerary": {
        "id": 83,
        "name": "3 day Dubai",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: false,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "Funicular: Cable Car to Grindelwald First.",
          "City tour in : Rome, Florence, Venice, Paris."
        ],
        "identifier": "PNQ_IN_3_3dayDubai",
        "location": {
          "id": 20,
          "city": "Pune",
          "cityCode": "PNQ",
          "state": "Maharashtra",
          "stateCode": "MH",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/silhouetteMan.jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Burj Khalifa and Desert Safari"
        }
      },
      "standardPrice": 4000,
      "superiorPrice": 5500,
      "luxuryPrice": 7000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 85,
      "name": "Good Mumbai",
      "location": {
        "id": 14,
        "city": "Mumbai",
        "cityCode": "BOM",
        "state": "Maharashtra",
        "stateCode": "MH",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg"
        ]
      },
      "itinerary": {
        "id": 97,
        "name": "2 day Mumbai",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: false,
          mealStatus: false,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "City tour in : Copenhagen, Oslo, Stockholm, Tallinn.",
          "Funicular: Mount Floyen in Bergen."
        ],
        "identifier": "BOM_IN_2_2dayMumbai",
        "location": {
          "id": 14,
          "city": "Mumbai",
          "cityCode": "BOM",
          "state": "Maharashtra",
          "stateCode": "MH",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg"
          ]
        },
        "duration": 2,
        "itineraryDetail": {
          "name": "Explore Gateway of India and Marine Drive"
        }
      },
      "standardPrice": 1000,
      "superiorPrice": 1500,
      "luxuryPrice": 2000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 91,
      "name": "Pune Weekend Getaway",
      "location": {
        "id": 20,
        "city": "Pune",
        "cityCode": "PNQ",
        "state": "Maharashtra",
        "stateCode": "MH",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/silhouetteMan.jpg"
        ]
      },
      "itinerary": {
        "id": 103,
        "name": "2 day Pune",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Cable Car to Grindelwald First",
          "Boat Trip along River Seine in Paris."
        ],
        "identifier": "PNQ_IN_2_2dayPune",
        "location": {
          "id": 20,
          "city": "Pune",
          "cityCode": "PNQ",
          "state": "Maharashtra",
          "stateCode": "MH",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/silhouetteMan.jpg"
          ]
        },
        "duration": 2,
        "itineraryDetail": {
          "name": "Shaniwar Wada and Aga Khan Palace"
        }
      },
      "standardPrice": 700,
      "superiorPrice": 1100,
      "luxuryPrice": 1500,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}

const TamilNaduResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 79,
      "name": "Jaipur Heritage Tour",
      "location": {
        "id": 28,
        "city": "Chennai",
        "cityCode": "MAA",
        "state": "Tamil Nadu",
        "stateCode": "TN",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Hero.jpg"
        ]
      },
      "itinerary": {
        "id": 91,
        "name": "4 day Jaipur",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "MAA_IN_4_4dayJaipur",
        "location": {
          "id": 28,
          "city": "Chennai",
          "cityCode": "MAA",
          "state": "Tamil Nadu",
          "stateCode": "TN",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Hero.jpg"
          ]
        },
        "duration": 4,
        "itineraryDetail": {
          "name": "Amber Fort and local markets"
        }
      },
      "standardPrice": 1600,
      "superiorPrice": 2400,
      "luxuryPrice": 3200,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 99,
      "name": "Chennai Cultural Tour",
      "location": {
        "id": 28,
        "city": "Chennai",
        "cityCode": "MAA",
        "state": "Tamil Nadu",
        "stateCode": "TN",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Hero.jpg"
        ]
      },
      "itinerary": {
        "id": 111,
        "name": "2 day Chennai",
        stayCities: [
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: false,
          flightStatus: false,
          visaStatus: false,
        },
        highlights: [
          "City tour in Paris",
          "Zurich lake Boat Ride"
        ],
        "identifier": "MAA_IN_2_2dayChennai",
        "location": {
          "id": 28,
          "city": "Chennai",
          "cityCode": "MAA",
          "state": "Tamil Nadu",
          "stateCode": "TN",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Hero.jpg"
          ]
        },
        "duration": 2,
        "itineraryDetail": {
          "name": "Kapaleeshwarar Temple and Marina Beach"
        }
      },
      "standardPrice": 700,
      "superiorPrice": 1100,
      "luxuryPrice": 1500,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}

//country specific responses
const unitedKingdomResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 69,
      "name": "Classic Paris",
      "location": {
        "id": 18,
        "city": "Bristol",
        "cityCode": "BRS",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/aerialViewBeach.jpg"
        ]
      },
      "itinerary": {
        "id": 81,
        "name": "5 day Paris",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "BRS_UK_5_5dayParis",
        "location": {
          "id": 18,
          "city": "Bristol",
          "cityCode": "BRS",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/aerialViewBeach.jpg"
          ]
        },
        "duration": 5,
        "itineraryDetail": {
          "name": "Eiffel Tower, Louvre, and Seine Cruise"
        }
      },
      "standardPrice": 3000,
      "superiorPrice": 4500,
      "luxuryPrice": 6000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 76,
      "name": "Goa Paradise",
      "location": {
        "id": 25,
        "city": "Birmingham",
        "cityCode": "BHX",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/image2.jpg"
        ]
      },
      "itinerary": {
        "id": 88,
        "name": "3 day Goa",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: false,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Funicular: Cable Car to Grindelwald First.",
          "City tour in : Rome, Florence, Venice, Paris."
        ],
        "identifier": "BHX_UK_3_3dayGoa",
        "location": {
          "id": 25,
          "city": "Birmingham",
          "cityCode": "BHX",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/image2.jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Beach vibes and nightlife"
        }
      },
      "standardPrice": 2000,
      "superiorPrice": 2800,
      "luxuryPrice": 3500,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 78,
      "name": "New York Skyline",
      "location": {
        "id": 27,
        "city": "Edinburgh",
        "cityCode": "EDI",
        "state": "Scotland",
        "stateCode": "SCT",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Bridge1"
        ]
      },
      "itinerary": {
        "id": 90,
        "name": "5 day New York",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: false,
          mealStatus: true,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "City tour in : London, Edinburgh, Dublin.",
          "Urquhart castle Entry Ticket"
        ],
        "identifier": "EDI_UK_5_5dayNewYork",
        "location": {
          "id": 27,
          "city": "Edinburgh",
          "cityCode": "EDI",
          "state": "Scotland",
          "stateCode": "SCT",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Bridge1"
          ]
        },
        "duration": 5,
        "itineraryDetail": {
          "name": "Statue of Liberty and Times Square"
        }
      },
      "standardPrice": 4000,
      "superiorPrice": 6000,
      "luxuryPrice": 8000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 80,
      "name": "Pune Cultural Retreat",
      "location": {
        "id": 29,
        "city": "London",
        "cityCode": "LHR",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/man%20standing%20near%20building.jpg"
        ]
      },
      "itinerary": {
        "id": 92,
        "name": "3 day Pune",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "Murano Glass Factory in Venice",
          "Prague Castle"
        ],
        "identifier": "LHR_UK_3_3dayPune",
        "location": {
          "id": 29,
          "city": "London",
          "cityCode": "LHR",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/man%20standing%20near%20building.jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Historical forts and vibrant city"
        }
      },
      "standardPrice": 1700,
      "superiorPrice": 2300,
      "luxuryPrice": 2900,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 82,
      "name": "Discover Manchester",
      "location": {
        "id": 31,
        "city": "Manchester",
        "cityCode": "MAN",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/aerial%20photography%20of%20river....jpg"
        ]
      },
      "itinerary": {
        "id": 94,
        "name": "3 day Manchester",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: false,
          transferStatus: false,
          mealStatus: true,
          flightStatus: true,
          visaStatus: false,
        },
        highlights: [
          "City tour in : Prague, Vienna, Budapest.",
          "Prague Castle, Swarovski Crystal Museum in Innsbruck."
        ],
        "identifier": "MAN_UK_3_3dayManchester",
        "location": {
          "id": 31,
          "city": "Manchester",
          "cityCode": "MAN",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/aerial%20photography%20of%20river....jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Football stadiums and museums"
        }
      },
      "standardPrice": 2500,
      "superiorPrice": 3200,
      "luxuryPrice": 4000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 89,
      "name": "Bristol Discovery",
      "location": {
        "id": 18,
        "city": "Bristol",
        "cityCode": "BRS",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/aerialViewBeach.jpg"
        ]
      },
      "itinerary": {
        "id": 101,
        "name": "2 day Bristol",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Santiago Bernabeu Stadium",
          "Alhambra Palace"
        ],
        "identifier": "BRS_UK_2_2dayBristol",
        "location": {
          "id": 18,
          "city": "Bristol",
          "cityCode": "BRS",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/aerialViewBeach.jpg"
          ]
        },
        "duration": 2,
        "itineraryDetail": {
          "name": "Explore Bristol Cathedral and Harbourside"
        }
      },
      "standardPrice": 1200,
      "superiorPrice": 1800,
      "luxuryPrice": 2500,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 96,
      "name": "Birmingham City Tour",
      "location": {
        "id": 25,
        "city": "Birmingham",
        "cityCode": "BHX",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/image2.jpg"
        ]
      },
      "itinerary": {
        "id": 108,
        "name": "2 day Birmingham",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: false,
          visaStatus: false,
        },
        highlights: [
          "City tour in : Paris, Rome.",
          "Eiffel Tower in Paris"
        ],
        "identifier": "BHX_UK_2_2dayBirmingham",
        "location": {
          "id": 25,
          "city": "Birmingham",
          "cityCode": "BHX",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/image2.jpg"
          ]
        },
        "duration": 2,
        "itineraryDetail": {
          "name": "Explore Thinktank Museum and City Center"
        }
      },
      "standardPrice": 1200,
      "superiorPrice": 1800,
      "luxuryPrice": 2400,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 98,
      "name": "Edinburgh Scenic Tour",
      "location": {
        "id": 27,
        "city": "Edinburgh",
        "cityCode": "EDI",
        "state": "Scotland",
        "stateCode": "SCT",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Bridge1"
        ]
      },
      "itinerary": {
        "id": 110,
        "name": "4 day Edinburgh",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: false,
          flightStatus: false,
          visaStatus: false,
        },
        highlights: [
          "Holocaust Memorial",
          "BMW WELT in Munich",
          "Lufthansa Airlines – Get the Best Prices on Request"
        ],
        "identifier": "EDI_UK_4_4dayEdinburgh",
        "location": {
          "id": 27,
          "city": "Edinburgh",
          "cityCode": "EDI",
          "state": "Scotland",
          "stateCode": "SCT",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Bridge1"
          ]
        },
        "duration": 4,
        "itineraryDetail": {
          "name": "Edinburgh Castle and Arthur's Seat"
        }
      },
      "standardPrice": 2200,
      "superiorPrice": 3200,
      "luxuryPrice": 4200,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 100,
      "name": "London Premium Experience",
      "location": {
        "id": 29,
        "city": "London",
        "cityCode": "LHR",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/man%20standing%20near%20building.jpg"
        ]
      },
      "itinerary": {
        "id": 112,
        "name": "5 day London",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: false,
          flightStatus: false,
          visaStatus: false,
        },
        highlights: [
          "Holocaust Memorial",
          "BMW WELT in Munich",
          "Lufthansa Airlines – Get the Best Prices on Request"
        ],
        "identifier": "LHR_UK_5_5dayLondon",
        "location": {
          "id": 29,
          "city": "London",
          "cityCode": "LHR",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/man%20standing%20near%20building.jpg"
          ]
        },
        "duration": 5,
        "itineraryDetail": {
          "name": "Big Ben and Buckingham Palace"
        }
      },
      "standardPrice": 4000,
      "superiorPrice": 5500,
      "luxuryPrice": 7000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 102,
      "name": "Manchester Sports Experience",
      "location": {
        "id": 31,
        "city": "Manchester",
        "cityCode": "MAN",
        "state": "England",
        "stateCode": "ENG",
        "country": "United Kingdom",
        "countryCode": "UK",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/aerial%20photography%20of%20river....jpg"
        ]
      },
      "itinerary": {
        "id": 114,
        "name": "4 day Manchester",
        stayCities: [
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: false,
          flightStatus: false,
          visaStatus: false,
        },
        highlights: [
          "Holocaust Memorial",
          "BMW WELT in Munich",
          "Lufthansa Airlines – Get the Best Prices on Request"
        ],
        "identifier": "MAN_UK_4_4dayManchester",
        "location": {
          "id": 31,
          "city": "Manchester",
          "cityCode": "MAN",
          "state": "England",
          "stateCode": "ENG",
          "country": "United Kingdom",
          "countryCode": "UK",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/aerial%20photography%20of%20river....jpg"
          ]
        },
        "duration": 4,
        "itineraryDetail": {
          "name": "Old Trafford and National Football Museum"
        }
      },
      "standardPrice": 2000,
      "superiorPrice": 3000,
      "luxuryPrice": 4000,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}

const IndiaResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 65,
      "name": "Ajanta Cave",
      "location": {
        "id": 14,
        "city": "Mumbai",
        "cityCode": "BOM",
        "state": "Maharashtra",
        "stateCode": "MH",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg"
        ]
      },
      "itinerary": {
        "id": 77,
        "name": "2 day Rajasthan",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "BOM_IN_5_2dayRajasthan",
        "location": {
          "id": 14,
          "city": "Mumbai",
          "cityCode": "BOM",
          "state": "Maharashtra",
          "stateCode": "MH",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Lucknow.jpg"
          ]
        },
        "duration": 5,
        "itineraryDetail": {
          "name": "Some details"
        }
      },
      "standardPrice": 700,
      "superiorPrice": 1500,
      "luxuryPrice": 2000,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 103,
      "name": "Delhi Historical Walk",
      "location": {
        "id": 32,
        "city": "Delhi",
        "cityCode": "DEL",
        "state": "Delhi",
        "stateCode": "DL",
        "country": "India",
        "countryCode": "IN",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/Machu%20Picchu%20Through%20Clouds.jpg"
        ]
      },
      "itinerary": {
        "id": 115,
        "name": "3 day Delhi",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: false,
          visaStatus: true,
        },
        highlights: [
          "Boat Ride in Guadalquivir River",
          "Poblet Monastery, Alhambra Palace and Generalife"
        ],
        "identifier": "DEL_IN_3_3dayDelhi",
        "location": {
          "id": 32,
          "city": "Delhi",
          "cityCode": "DEL",
          "state": "Delhi",
          "stateCode": "DL",
          "country": "India",
          "countryCode": "IN",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/Machu%20Picchu%20Through%20Clouds.jpg"
          ]
        },
        "duration": 3,
        "itineraryDetail": {
          "name": "Red Fort and India Gate"
        }
      },
      "standardPrice": 10000,
      "superiorPrice": 1500,
      "luxuryPrice": 2000,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}

const UnitedArabEmiratesResponse = {
  "heroImageUrl": "",
  "holidays": [
    {
      "id": 75,
      "name": "Magical Edinburgh",
      "location": {
        "id": 24,
        "city": "Dubai",
        "cityCode": "DXB",
        "state": "Dubai",
        "stateCode": "DU",
        "country": "United Arab Emirates",
        "countryCode": "AE",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/image3.jpg"
        ]
      },
      "itinerary": {
        "id": 87,
        "name": "4 day Edinburgh",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
          { "city": "Paris", "nights": 3 },
          { "city": "Amsterdam", "nights": 1 },
          { "city": "Engelberg ", "nights": 2 },
          { "city": "Rome", "nights": 1 },
        ],
        facility: {
          hotelStatus: true,
          sightseeingStatus: true,
          transferStatus: true,
          mealStatus: true,
          flightStatus: true,
          visaStatus: true,
        },
        highlights: [
          "Customizable Package",
          "Deluxe Accommodations"
        ],
        "identifier": "DXB_AE_4_4dayEdinburgh",
        "location": {
          "id": 24,
          "city": "Dubai",
          "cityCode": "DXB",
          "state": "Dubai",
          "stateCode": "DU",
          "country": "United Arab Emirates",
          "countryCode": "AE",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/image3.jpg"
          ]
        },
        "duration": 4,
        "itineraryDetail": {
          "name": "Castles and scenic landscapes"
        }
      },
      "standardPrice": 2000,
      "superiorPrice": 2700,
      "luxuryPrice": 3500,
      "currency": "INR",
      "holidayThemes": []
    },
    {
      "id": 95,
      "name": "Dubai Luxury Experience",
      "location": {
        "id": 24,
        "city": "Dubai",
        "cityCode": "DXB",
        "state": "Dubai",
        "stateCode": "DU",
        "country": "United Arab Emirates",
        "countryCode": "AE",
        "imagesUrl": [
          "https://ik.imagekit.io/r4qffffod/Locations/image3.jpg"
        ]
      },
      "itinerary": {
        "id": 107,
        "name": "5 day Dubai",
        stayCities: [
          { "city": 'Delhi', "nights": 3 },
          { "city": "London", "nights": 2 },
        ],
        facility: {
          hotelStatus: false,
          sightseeingStatus: true,
          transferStatus: false,
          mealStatus: true,
          flightStatus: false,
          visaStatus: true,
        },
        highlights: [
          "Return Economy Airfare included.",
          "Visa Assistance",
          "Professional & knowledgeable Tour Manager"
        ],
        "identifier": "DXB_AE_5_5dayDubai",
        "location": {
          "id": 24,
          "city": "Dubai",
          "cityCode": "DXB",
          "state": "Dubai",
          "stateCode": "DU",
          "country": "United Arab Emirates",
          "countryCode": "AE",
          "imagesUrl": [
            "https://ik.imagekit.io/r4qffffod/Locations/image3.jpg"
          ]
        },
        "duration": 5,
        "itineraryDetail": {
          "name": "Burj Khalifa and Desert Safari"
        }
      },
      "standardPrice": 4000,
      "superiorPrice": 5500,
      "luxuryPrice": 7000,
      "currency": "INR",
      "holidayThemes": []
    }
  ]
}



const DefaultResponse = {
  heroImageUrl: '',
  holidays: [],
};




export async function POST(request: Request) {
  const body: any = await request.json();

  // Normalize input (because sometimes database fields are missing)
  const cityCode = (body?.cityCode || '').toString().toUpperCase();
  const stateCode = (body?.stateCode || '').toString().toUpperCase();
  const countryCode = (body?.countryCode || '').toString().toUpperCase();
  const theme = (body?.theme || '').toString().toUpperCase();

  // --------------------------------------------
  // 1️⃣ PRIORITY: CITY MATCH (IF AVAILABLE)
  // --------------------------------------------
  if (cityCode) {
    switch (cityCode) {
      case 'DEL':
        return NextResponse.json(DelhiResponse);

      case 'BOM':
        return NextResponse.json(MumbaiResponse);

      case 'GOI':
        return NextResponse.json(GoaResponse);

      case 'SYD':
        return NextResponse.json(SydneyResponse);

      case 'HND':
        return NextResponse.json(TokyoResponse);
      default:
        // unknown city → return default
        return NextResponse.json(DefaultResponse);
    }
  }



  // ----------------------------------------------------
  // 2️⃣ IF cityCode MISSING → TRY STATE CODE
  // ----------------------------------------------------
  if (stateCode) {
    switch (stateCode) {
      case 'MH': // Maharashtra
        return NextResponse.json(MaharashtraResponse);

      case 'TN': // Tamil Nadu (Chennai)
        return NextResponse.json(TamilNaduResponse);

      default:
        return NextResponse.json(DefaultResponse);
    }
  }

  // ----------------------------------------------------
  // 3️⃣ IF BOTH MISSING → Try using COUNTRY CODE
  // ----------------------------------------------------
  if (countryCode) {
    switch (countryCode) {
      case 'UK': // Goa
        return NextResponse.json(unitedKingdomResponse);

      case 'IN': // India
        return NextResponse.json(IndiaResponse);

      case 'AE': // United Arab Emirates
        return NextResponse.json(UnitedArabEmiratesResponse);

      default:
        return NextResponse.json(DefaultResponse);
    }
  }

  // ----------------------------------------------------
  // 4️⃣ BONUS: THEME FILTER (IF NO LOCATION PROVIDED)
  // ----------------------------------------------------
  if (theme) {
    // Just return some themed mock data
    if (theme === 'BEACH') {
      return NextResponse.json(GoaResponse);
    }
    if (theme === 'CITY') {
      return NextResponse.json(MumbaiResponse);
    }

    return NextResponse.json(DefaultResponse);
  }

  // ----------------------------------------------------
  // 5️⃣ ALL MISSING → RETURN DEFAULT MOCK RESPONSE
  // ----------------------------------------------------
  return NextResponse.json(DefaultResponse);
}
