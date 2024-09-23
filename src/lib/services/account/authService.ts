import axios from 'axios';
import { UserState, RegisterFormData } from '@/src/lib/types/types';

const MJW_HOST = process.env.NEXT_PUBLIC_MJW_BASE_URL;
export const register = async (registerFormData: RegisterFormData) => {
  try {
    const { confirmPassword, ...requestData } = registerFormData;
    const response = await axios.post(`${MJW_HOST}/api/auth/register`, requestData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
};

export const validateToken = async (): Promise<UserState['currentUser']> => {
  try {
    console.log('calling validate token');
    const response = await axios.get(`${MJW_HOST}/api/account/me`, {
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
