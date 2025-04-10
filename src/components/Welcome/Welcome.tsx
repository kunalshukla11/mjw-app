import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome({ route }: { route: any }) {
  return (
    <>
      <Title className={classes.title} ta='center' mt={100}>
        Welcome me to{' '}
        <Text inherit variant='gradient' component='span' gradient={{ from: 'pink', to: 'yellow' }}>
          MJW {route}
        </Text>
      </Title>
    </>
  );
}
