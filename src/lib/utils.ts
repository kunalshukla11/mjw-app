import { NavItem } from '../types';

export function shouldHighlight(pathName: string, navItem: NavItem): boolean {
  return (pathName === '/' && navItem.title === 'Flights') || pathName === navItem.path;
}
