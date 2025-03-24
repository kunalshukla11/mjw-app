'use server';

import {
  LoginFormData,
  ProfileResponse,
  RegisterFormData,
  RegisterLoginResponse,
} from '@/src/lib/types/types';
import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';
import { parseSetCookieHeader } from '../../utils/utils';

export async function register(prevState: any, formData: FormData) {
  const { confirmPassword, ...registerFormData } = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  try {
    const response = await axios.post(
      `http://${process.env.MJW_SERVICE_HOST}:${process.env.MJW_SERVICE_PORT}/api/auth/register`,
      registerFormData,
      {
        withCredentials: true,
      }
    );
    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader && Array.isArray(setCookieHeader)) {
      const cookieStore = await cookies();
      const parsedCookies = parseSetCookieHeader(setCookieHeader);

      for (const { name, value, options } of parsedCookies) {
        // Set the cookie in the server action
        cookieStore.set(name, value, options);
      }
    }

    return {
      message: 'Registration successful',
      success: true,
      profile: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Errored in Axios type', error.message);
      return {
        message: error.message,
        success: false,
      };
    } else {
      console.error('Errored in normal Error type', error);
      return {
        message: 'Registration not successful',
        success: false,
      };
    }
  }
}

export async function login(prevState: any, formData: FormData) {
  const loginFormData: LoginFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  try {
    const response = await axios.post(
      `http://${process.env.MJW_SERVICE_HOST}:${process.env.MJW_SERVICE_PORT}/api/auth/login`,
      loginFormData,
      {
        withCredentials: true,
      }
    );
    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader && Array.isArray(setCookieHeader)) {
      const cookieStore = await cookies();
      const parsedCookies = parseSetCookieHeader(setCookieHeader);

      for (const { name, value, options } of parsedCookies) {
        // Set the cookie in the server action
        cookieStore.set(name, value, options);
      }
    }

    return {
      message: 'Login successful',
      success: true,
      profile: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Errored in Axios type', error.message);
      return {
        message: error.message,
        success: false,
      };
    } else {
      console.error('Errored in normal Error type', error);
      return {
        message: 'Login not successful',
        success: false,
      };
    }
  }
}

export async function logout() {
  try {
    (await cookies()).delete('auth_token');
    return { success: true };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
}

export async function fetchProfile(): Promise<ProfileResponse | null> {
  try {
    const token = (await cookies()).get('auth_token')?.value;
    if (!token) {
      return null;
    }
    const response = await axios.get(
      `http://${process.env.MJW_SERVICE_HOST}:${process.env.MJW_SERVICE_PORT}/api/account/me`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
}

export async function setAuthCookie(response: AxiosResponse) {
  const setCookieHeader = response.headers['set-cookie'];
  if (setCookieHeader && Array.isArray(setCookieHeader)) {
    // Set each cookie in the browser manually
    const cookieStore = await cookies();
    for (const rawCookie of setCookieHeader) {
      const [cookieNameValue, ...rest] = rawCookie.split(';');
      const [name, value] = cookieNameValue.split('=');
      cookieStore.set(name.trim(), value.trim(), {});
    }
  }
}

// export const register = async (registerFormData: RegisterFormData) => {
//   try {
//     const response = fetch;
//   } catch (error) {}
// };
