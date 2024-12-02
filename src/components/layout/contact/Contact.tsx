import { Button } from '@mantine/core';
import { BiSupport } from 'react-icons/bi';

export default function Contact() {
  return (
    <Button
      classNames={{ section: 'mr-[4px]' }}
      className='flex h-auto px-2 md:border md:border-indigo-700'
      variant='subtle'
    >
      <BiSupport size={25} />
      <span className='hidden pl-1  md:inline'>Contacts</span>
    </Button>
  );
}
