'use client';

import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as authService from '@/src/lib/services/account/authService';
import { UserState } from '@/src/lib/types/types';

const AppContext = createContext<UserState | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isError, data } = useQuery({
    queryKey: ['validateToken'],
    queryFn: authService.validateToken,
    retry: false,
  });

  const currentUser = data as UserState['currentUser'];

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: !isError,
        currentUser: { email: currentUser?.email, firstName: currentUser?.firstName },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as UserState;
};
