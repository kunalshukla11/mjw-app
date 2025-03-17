'use server';

import {
  LoginFormData,
  ProfileResponse,
  RegisterFormData,
  RegisterLoginResponse,
} from '@/src/lib/types/types';
import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

export const register = async (
  registerFormData: RegisterFormData
): Promise<RegisterLoginResponse> => {
  try {
    const { confirmPassword, ...requestData } = registerFormData;
    const response = await axios.post('/api/auth/register', requestData, {
      withCredentials: true,
    });

    setCookie(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
};

export const login = async (loginFormData: LoginFormData): Promise<RegisterLoginResponse> => {
  try {
    const response = await axios.post(
      `http://${process.env.MJW_SERVICE_HOST}:${process.env.MJW_SERVICE_PORT}/api/auth/login`,
      loginFormData,
      {
        withCredentials: true,
      }
    );
    setCookie(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
};

export const logout = async () => {
  try {
    await axios.post(
      '/server-api/auth/logout',
      {},
      {
        withCredentials: true,
      }
    );
    (await cookies()).delete('auth_token');
    return { success: true };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
};

export const getProfile = async (): Promise<ProfileResponse | null> => {
  try {
    const token = (await cookies()).get('auth_token')?.value;
    if (!token) {
      return null;
    }
    const response = await axios.get('/server-api/account/me', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Errored in Axios type');
      return null;
    } else {
      console.error('Errored in normal Error type');
      return null;
    }
  }
};

const setCookie = async function (response: AxiosResponse): Promise<void> {
  const setCookieHeader = response.headers['Set-Cookie'];
  if (setCookieHeader && Array.isArray(setCookieHeader)) {
    // Set each cookie in the browser manually
    const cookieStore = await cookies();
    for (const rawCookie of setCookieHeader) {
      const [cookieNameValue, ...rest] = rawCookie.split(';');
      const [name, value] = cookieNameValue.split('=');
      cookieStore.set(name.trim(), value.trim(), {
        // You can optionally parse expiration, path, secure, etc. from `rest`
        // For now, keep it simple
        path: '/',
      });
    }
  }
};
// export const register = async (registerFormData: RegisterFormData) => {
//   try {
//     const response = fetch;
//   } catch (error) {}
// };
