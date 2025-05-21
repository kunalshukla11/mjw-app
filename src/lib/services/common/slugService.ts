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
