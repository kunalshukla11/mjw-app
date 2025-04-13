'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export function useMobile() {
  // Use Mantine's useMediaQuery hook for responsive detection
  const isMobileScreen = useMediaQuery('(max-width: 639px)');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(!!isMobileScreen);
  }, [isMobileScreen]);

  return isMobile;
}
