import { Review } from '@/src/lib/types/models/mjw-service';
import { Avatar, Card, Rating, Text } from '@mantine/core';

export default function UserReviewsCard({ review }: { review: Review }) {
  const formatDate = (dateArray: number[]) => {
    const [year, month, day] = dateArray;
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card shadow='sm' p='lg' radius='lg' className='h-full border-2 border-indigo-200'>
      <Card.Section className='rounded-md bg-cyan-50 p-4'>
        <Text size='lg' className='italic text-gray-700'>
          "{review.comment}"
        </Text>
      </Card.Section>

      <div className='mb-2 mt-4 flex items-start justify-between'>
        <div className='flex items-center justify-center space-x-1'>
          <Avatar key={review.username} name={review.username} color='initials'></Avatar>
          <div className=''>
            <Text>{review.username}</Text>
            <Rating size={'sm'} value={review.rating}></Rating>
          </div>
        </div>

        <div className='text-right'>
          <Text size='sm' color='dimmed'>
            {review.place}
          </Text>
          <Text size='xs' color='dimmed'>
            {formatDate(review.date)}
          </Text>
        </div>
      </div>
    </Card>
  );
}
