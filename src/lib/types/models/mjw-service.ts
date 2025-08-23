/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2025-08-23 22:07:50.

export interface Review {
    comment: string;
    rating: number;
    username: string;
    date: Date;
    place: string;
}

export interface HolidayDashboard {
    heroImageUrl: string;
    topDestinations: DashboardData[];
    topPackages: DashboardData[];
    internationalDestinations: DashboardData[];
    unexploredDestinations: DashboardData[];
    themedDestinations: DashboardData[];
    reviews: Review[];
}

export interface Holiday {
    id: number;
    name: string;
    location: Location;
    itinerary: Itinerary;
    standardPrice: number;
    superiorPrice: number;
    luxuryPrice: number;
    currency: Currency;
    holidayThemes: HolidayTheme[];
}

export interface HolidaySearchRequest {
    cityCode?: string | null;
    stateCode?: string | null;
    countryCode?: string | null;
    theme?: Theme | null;
}

export interface HolidaySearchResponse {
    heroImageUrl: string;
    holidays: Holiday[];
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
    theme: Theme;
    holidayId: number;
}

export interface Location extends Validatable {
    id: number;
    city: string;
    cityCode: string;
    state: string;
    stateCode: string;
    country: string;
    countryCode: string;
    imagesUrl: string[];
}

export interface Itinerary {
    id: number;
    name: string;
    identifier: string;
    location: Location;
    duration: number;
    itineraryDetail: ItineraryDetail;
}

export interface HolidayTheme {
    id: number;
    theme: Theme;
    holidayId: number;
}

export interface Validatable {
}

export interface ItineraryDetail {
    name: string;
    mainImageUrl: string;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export type RestResponse<R> = Promise<R>;

export type Theme = "CULTURE" | "ADVENTURE" | "BEACH" | "CRUISE" | "FAMILY" | "FOOD" | "LUXURY" | "NATURE" | "STAYCATION" | "SHOPPING" | "SKIING" | "SPORTS" | "WELLNESS" | "PILGRIMAGE" | "PARTY" | "WEDDING" | "HONEYMOON";

export type Currency = "INR" | "USD" | "EUR" | "GBP" | "AUD" | "CAD" | "CHF" | "CNY" | "JPY" | "KRW" | "MXN" | "RUB";

export type DisplayTarget = "CITY" | "STATE" | "COUNTRY" | "THEME";

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
