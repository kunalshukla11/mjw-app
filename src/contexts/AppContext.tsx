'use client';

import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as authService from '@/src/lib/services/account/authService';
import { ProfileResponse, ApplicationContext } from '@/src/lib/types/types';

const AppContext = createContext<ApplicationContext | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isError, data } = useQuery({
    queryKey: ['validateToken'],
    queryFn: authService.validateToken,
    retry: false,
  });

  const currentUser = data as ProfileResponse;

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: !isError,
        currentUser: {
          email: currentUser?.email,
          firstName: currentUser?.firstName,
          initial: currentUser?.initial,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as ApplicationContext;
};
