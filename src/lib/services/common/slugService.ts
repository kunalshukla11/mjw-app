import { DashboardData } from '../../types/models/mjw-service';

export const getSlugFromDashboardData = function (dashboardData: DashboardData): string {
  switch (dashboardData.displayTarget) {
    case 'CITY':
      return `${dashboardData.cityCode}-${dashboardData.stateCode}-${dashboardData.countryCode}`.toLowerCase();
    case 'STATE':
      return `${dashboardData.stateCode}-${dashboardData.countryCode}`.toLowerCase();
    case 'COUNTRY':
      return `${dashboardData.countryCode}`.toLowerCase();
    default:
      return dashboardData.displayName.toLowerCase().replace(/\s+/g, '-');
  }
};

export const getDestinationQueryParams = function (dashboardData: DashboardData): string {
  const params = new URLSearchParams();

  if (dashboardData.cityCode) {
    params.set('cityCode', dashboardData.cityCode);
  }
  if (dashboardData.stateCode) {
    params.set('stateCode', dashboardData.stateCode);
  }
  if (dashboardData.countryCode) {
    params.set('countryCode', dashboardData.countryCode);
  }
  return params.toString();
};

export const getDisplayDestnation = function (
  cityCode?: string,
  stateCode?: string,
  countryCode?: string,
  theme?: string
): string {
  if (theme) {
    return theme;
  }
  if (cityCode && stateCode && countryCode) {
    return cityCode;
  }
  if (stateCode && countryCode) {
    return stateCode;
  }
  if (countryCode) {
    return countryCode;
  }
  return 'Unknown Destination';
};
