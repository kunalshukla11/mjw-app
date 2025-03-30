'use server';

import axios, { AxiosResponse } from 'axios';
import { HolidayDashboard } from '../../types/models/mjw-service';

export async function getHolidayDashboard(): Promise<HolidayDashboard> {
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.MJW_SERVICE_URL}/api/holiday/holiday-dashboard`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching holiday dashboard:', error);
    throw new Error('Failed to fetch holiday dashboard');
  }
}
