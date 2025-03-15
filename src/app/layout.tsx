import '../styles/globals.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';

import { Notifications } from '@mantine/notifications';
import { theme } from '../theme';
import QueryProvider from '../lib/utils/_queryProvider';
import { AppContextProvider } from '../contexts/AppContext';
import * as authService from '../lib/services/account/authService';

export const metadata = {
  title: 'My Journey Wings, Cheap Flights Hotels',
  description: 'Website for Travel Booking',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <QueryProvider>
          <AppContextProvider>
            <MantineProvider theme={theme}>
              <Notifications />
              {children}
            </MantineProvider>
          </AppContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
