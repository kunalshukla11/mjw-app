import { MdFlight } from 'react-icons/md';
import { RiHotelBedLine } from 'react-icons/ri';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { title: 'Flights', path: '/flights', icon: <MdFlight /> },
  { title: 'Hotels', path: '/hotels', icon: <RiHotelBedLine /> },
  { title: 'Packages', path: '/packages', icon: <FaUmbrellaBeach /> },
];
