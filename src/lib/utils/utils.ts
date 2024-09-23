import { NavItem } from '../types/types';

export function shouldHighlight(pathName: string, navItem: NavItem): boolean {
  return (pathName === '/' && navItem.title === 'Packages') || pathName === navItem.path;
}
