'use server';

import axios, { AxiosResponse } from 'axios';
import { HolidayDashboard } from '../../types/models/mjw-service';
import { HolidaySearchRequest } from '../../types/models/mjw-service';
import { Holiday } from '../../types/models/mjw-service';
import { HolidayFilters } from '../../types/types';

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

export async function searchHoliday(holidayFilters: HolidayFilters): Promise<Holiday[]> {
  const searchRequest: HolidaySearchRequest = {
    cityCode: holidayFilters.cityCode || null,
    stateCode: holidayFilters.stateCode || null,
    countryCode: holidayFilters.countryCode || null,
    theme: holidayFilters.theme || null,
  };

  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.MJW_SERVICE_URL}/api/holiday/search`,
      searchRequest,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error searching holiday:', error);

    throw new Error('Failed to search holiday');
  }
}
