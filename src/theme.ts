'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'indigo',
  colors: {
    indigo: [
      '#eef2ff',
      '#e0e7ff',
      '#c7d2fe',
      '#a5b4fc',
      '#818cf8',
      '#6366f1',
      '#4f46e5',
      '#4338ca',
      '#3730a3',
      '#312e81',
    ],
  },
  breakpoints: {
    xs: '40em',
    sm: '48em',
    md: '64em',
    lg: '80em',
    xl: '96em',
  },
  /* Pgot your mantine theme override here */
});
