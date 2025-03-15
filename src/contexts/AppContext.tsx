'use client';

import { ApplicationContext, ProfileResponse } from '@/src/lib/types/types';
import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../lib/services/account/authService';
const AppContext = createContext<ApplicationContext | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ProfileResponse | null>(null);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProfile() {
      const profile = await authService.getProfile();
      setUser(profile);
      setAuthenticated(!!profile);
    }
    fetchProfile();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        currentUser: user
          ? {
              email: user?.email,
              firstName: user?.firstName,
              initial: user?.initial,
            }
          : null,
        setAuthenticated,
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
