/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2025-03-30 20:26:54.

export interface HolidayDashboard {
    heroImageUrl: string;
    topDestinations: DashboardData[];
    topPackages: DashboardData[];
    internationalDestinations: DashboardData[];
    holidayThemes: DashboardData[];
    reviews: Review[];
}

export interface DashboardData {
    displayName: string;
    price: number;
    order: number;
    cityCode: string;
    stateCode: string;
    countryCode: string;
    imageUrl: string;
    displayTarget: DisplayTarget;
    holidayId: number;
}

export interface Review {
    comment: string;
    rating: number;
    username: string;
    date: Date;
    place: string;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export type RestResponse<R> = Promise<R>;

export type DisplayTarget = "CITY" | "STATE" | "COUNTRY";

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
