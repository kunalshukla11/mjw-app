import { Container, Title, Text } from '@mantine/core';

export default function AboutSection() {
  return (
    <div className='w-full'>
      <div className='space-y-6'>
        <Text className='leading-relaxed text-gray-800'>
          Book Your Holiday Packages With MyJourneyWings and discover a world of meticulously
          curated, affordable itineraries designed to meet the unique needs and budgets of every
          traveller. Each getaway is crafted with precision, ensuring that every aspect of your
          journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a
          blend of both, our packages promise an unforgettable getaway tailored just for you. Start
          planning your dream vacation today and experience the perfect escape with our exceptional
          itineraries.
        </Text>

        <Title order={3} className='mb-4 mt-8 text-xl font-bold md:text-2xl'>
          Enjoy Seamless Booking At Budget-Friendly Prices!
        </Title>

        <Text className='leading-relaxed text-gray-800'>
          Our platform's user-friendly interface simplifies the navigation of diverse trip packages,
          catering to various destinations, preferences, and budgets. With just a few clicks,
          travellers can book their ideal vacation. Whether you're dreaming of a beach escape or a
          mountain retreat, finding and booking your perfect getaway is straightforward and
          hassle-free with us, ensuring a smooth start to your travel adventure.
        </Text>

        <Text className='leading-relaxed text-gray-800'>
          Unlock unbeatable savings on your next getaway with us, your ultimate travel companion!
          Discover a world of affordable packages customised to meet the diverse needs of every
          traveller. Embark on a mountain escape or a city adventure with our exclusive travel at
          competitive prices and leverage exclusive discounts, ensuring your travel is as economical
          as it is enjoyable. Don't miss out on it, and book your next vacation with us to
          experience the perfect blend of luxury and value!
        </Text>

        <Title order={3} className='mb-4 mt-8 text-xl font-bold md:text-2xl'>
          Create Memories That Last A Lifetime!
        </Title>

        <Text className='leading-relaxed text-gray-800'>
          Book and explore your dream destinations with our exclusive itineraries. Each of our
          packages are carefully designed to ensure that every traveller enjoys a promising getaway.
          Whether you're a solo traveller, part of a group, or travelling with family, we have
          tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and
          let us handle the details, guaranteeing a seamless and memorable experience. Start your
          adventure with MyJourneyWings today and cherish every moment of your journey.
        </Text>
      </div>
    </div>
  );
}
