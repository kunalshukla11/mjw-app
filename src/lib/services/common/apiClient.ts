import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';

const baseURL = (() => {
  // If API_BASE_URL is a relative path (starts with '/') and we're running on the server (no window),
  // make it absolute so Node's URL handling doesn't fail. Use localhost and the dev port as fallback.
  if (API_BASE_URL.startsWith('/') && typeof window === 'undefined') {
    const port = process.env.PORT || 3000;
    return `http://localhost:${port}${API_BASE_URL}`;
  }
  return API_BASE_URL;
})();

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});
