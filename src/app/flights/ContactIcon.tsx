import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Stack, Text, ThemeIcon } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon size={24} />
      </ThemeIcon>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'ashish.mishra@myjourneywings.com', icon: IconAt },
  { title: 'Phone', description: '+91-97921 14666', icon: IconPhone },
  { title: 'Address', description: 'Gomti Nagar Extension, Lucknow.', icon: IconMapPin },
  { title: 'Working hours', description: '10 a.m. – 6 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}