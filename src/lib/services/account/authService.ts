'use server';

import {
  LoginFormData,
  ProfileResponse,
  RegisterFormData,
  RegisterLoginResponse,
} from '@/src/lib/types/types';
import axios from 'axios';
import { cookies } from 'next/headers';

export const register = async (
  registerFormData: RegisterFormData
): Promise<RegisterLoginResponse> => {
  try {
    const { confirmPassword, ...requestData } = registerFormData;
    const response = await axios.post('/api/auth/register', requestData, {
      withCredentials: true,
    });
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
    const response = await axios.post('/api/auth/login', loginFormData, {
      withCredentials: true,
    });
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
      throw new Error(error.message);
    } else {
      console.error('Errored in normal Error type');
      return null;
    }
  }
};
// export const register = async (registerFormData: RegisterFormData) => {
//   try {
//     const response = fetch;
//   } catch (error) {}
// };
