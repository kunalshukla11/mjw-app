import axios from 'axios';
import { RegisterFormData } from '@/src/lib/types/types';

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
// export const register = async (registerFormData: RegisterFormData) => {
//   try {
//     const response = fetch;
//   } catch (error) {}
// };
