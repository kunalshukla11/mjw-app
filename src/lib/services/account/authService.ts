import axios from 'axios';
import {
  LoginFormData,
  ProfileResponse,
  RegisterFormData,
  RegisterLoginResponse,
} from '@/src/lib/types/types';

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
    const reponse = await axios.post(
      '/api/auth/logout',
      {},
      {
        withCredentials: true,
      }
    );

    return reponse.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
};

export const validateToken = async (): Promise<ProfileResponse> => {
  try {
    const response = await axios.get('/api/account/me', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Errored in Axios type');
      throw new Error(error.message);
    } else {
      console.error('Errored in normal Error type');
      throw error;
    }
  }
};
// export const register = async (registerFormData: RegisterFormData) => {
//   try {
//     const response = fetch;
//   } catch (error) {}
// };
