import { NavItem } from '../types/types';

export function shouldHighlight(pathName: string, navItem: NavItem): boolean {
  return (pathName === '/' && navItem.title === 'Holidays') || pathName === navItem.path;
}

export function parseSetCookieHeader(
  setCookieHeader: string[]
): Array<{ name: string; value: string; options: Record<string, any> }> {
  const cookies = [];
  for (const rawCookie of setCookieHeader) {
    const [cookieNameValue, ...attributes] = rawCookie.split(';');
    const [name, value] = cookieNameValue.split('=');

    // Parse additional attributes
    const options: Record<string, any> = {};
    for (const attribute of attributes) {
      const [key, attrValue] = attribute.trim().split('=');
      const normalizedKey = key.toLowerCase();
      if (normalizedKey === 'httponly') {
        options.httpOnly = true;
      } else if (normalizedKey === 'secure') {
        options.secure = true;
      } else if (normalizedKey === 'samesite') {
        options.sameSite = attrValue || 'Lax';
      } else if (normalizedKey === 'path') {
        options.path = attrValue || '/';
      } else if (normalizedKey === 'expires') {
        options.expires = new Date(attrValue);
      } else if (normalizedKey === 'max-age') {
        options.maxAge = parseInt(attrValue, 10);
      }
    }

    cookies.push({ name: name.trim(), value: value.trim(), options });
  }
  return cookies;
}
