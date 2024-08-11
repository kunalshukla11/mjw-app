import { Anchor, Group, ActionIcon, rem, Image } from '@mantine/core';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import NextImage from 'next/image';
import classes from './Footer.module.css';
import DesktoLogImage from '@/public/DesktopMjwLogo.png';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Store' },
  { link: '#', label: 'Careers' },
];
//TODO Remove footer.module.css
export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c='dimmed'
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image
          classNames={{ root: ' p-2 ' }}
          w='auto'
          h='auto'
          component={NextImage}
          src={DesktoLogImage}
          alt='MJW Logo'
        />

        <Group className={classes.links}>{items}</Group>

        <Group gap='xs' justify='flex-end' wrap='nowrap'>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <FaXTwitter style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <FaYoutube style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <FaInstagram style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
