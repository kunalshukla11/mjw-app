# MJW App - AI Coding Agent Instructions

## Architecture Overview

This is a **Next.js 15 (App Router)** travel booking application using:

- **UI Framework**: Mantine v7 + Tailwind CSS (hybrid approach - Mantine components with Tailwind utilities)
- **State Management**: React Query (@tanstack/react-query) for server state, React Context for auth, Zustand for client-side filters
- **Backend Integration**: Java Spring Boot microservice (`mjw-service`) via REST APIs
- **Type System**: Auto-generated TypeScript types from Java backend using `typescript-generator` Maven plugin

## Critical Workflows

### Type Generation from Backend

Types are **NOT** manually written. Regenerate from backend when API changes:

```bash
npm run update-types  # Runs Maven build + copies generated types
```

- Generated file: `src/lib/types/models/mjw-service.ts` (DO NOT EDIT MANUALLY)
- Custom types: `src/lib/types/types.tsx`
- Backend repo must be at `../mjw-service` (sibling directory)

### Development Modes

```bash
npm run dev        # Uses real backend (MJW_SERVICE_URL env var)
npm run dev:mock   # Uses Next.js API routes in src/app/api/mock/**
```

Mock mode is controlled by `NEXT_PUBLIC_API_MODE=mock` environment variable. Check `src/lib/config/apiConfig.ts` for API base URL resolution.

### Docker Deployment

```bash
docker build -t mjw-app .
docker-compose up  # Reads .env and .env.docker.mjwapp (Docker overrides local)
```

Environment variables cascade: `.env` → `.env.docker.mjwapp` → docker-compose env section

### Testing

```bash
npm test           # Runs prettier, lint, typecheck, and jest
npm run jest:watch # Watch mode for TDD
```

## Key Architectural Patterns

### Server vs Client Components

- **Server Components**: Pages in `src/app/**` use Server Actions for mutations
- **Client Components**: All components in `src/components/**` marked with `'use client'`
- **Server Actions**: Auth services (`src/lib/services/account/authService.ts`) use `'use server'` directive
- Cookie management happens server-side in Server Actions using Next.js `cookies()` API

### API Client Strategy

- **Server-side calls**: Use `axios` directly with `${process.env.MJW_SERVICE_URL}/api` (not NEXT_PUBLIC)
- **Client-side calls**: Use `apiClient` from `src/lib/services/common/apiClient.ts`
- `apiClient` handles SSR by detecting `typeof window === 'undefined'` and prefixing localhost for server-side rendering

### State Management Patterns

1. **Authentication**: `AppContext` (`src/contexts/AppContext.tsx`) provides `isAuthenticated`, `currentUser`, wrapped in `AppContextProvider`
2. **Server State**: React Query for data fetching (see `src/lib/services/queryClient.ts`)
3. **Forms**: Mantine `useForm` for validation + Server Actions for submission
4. **Responsive**: Custom `useMobile()` hook (`src/components/common/use-mobile.tsx`) checks `@media (max-width: 768px)`

### Image Handling

- Use `ImageKit` component (`src/components/common/ImageKit.tsx`) for all images
- Automatically transforms ImageKit URLs with width/quality parameters
- Example: `<ImageKit src="https://ik.imagekit.io/..." alt="..." fill quality={75} />`

### Layout Structure

```
RootLayout (src/app/layout.tsx)
  └─ QueryProvider + AppContextProvider + MantineProvider
      └─ MainLayout (src/components/layout/MainLayout.tsx)
          └─ Header + Drawer Navigation + PageWrapper + Footer
```

## Component Conventions

### Data Display Components

- Holiday cards use `HolidayCard` component with `Holiday` type from generated models
- Icons from facilities use conditional rendering: `itinerary?.facility?.hotelStatus` → `<IconBuilding />`
- Always handle null/undefined for optional fields: `location?.city`, `itinerary?.highlights?.map(...)`

### Styling Approach

- **DO**: Use Tailwind for layout (`flex`, `grid`, `gap-4`, responsive classes)
- **DO**: Use Mantine components for interactive elements (`Button`, `Card`, `Badge`, `Drawer`)
- **DON'T**: Duplicate Tailwind classes across sections (see TODO in README about generalizing carousel/card styles)
- Dark mode: Uses Mantine's `data-mantine-color-scheme` attribute

### Carousels

All carousels use `embla-carousel-react` with `embla-carousel-autoplay`:

```tsx
const embla = useEmblaCarousel({ loop: true }, [autoplay]);
const isMobile = useMobile(); // Adjust slides per view based on breakpoint
```

Pattern: `{ComponentName}Carousel.tsx` + `{ComponentName}Card.tsx` pairs

## Common Pitfalls

1. **Server Action Forms**: Must use `FormData` parameter, not direct object destructuring

   ```tsx
   // Correct
   export async function login(prevState: any, formData: FormData) {
     const email = formData.get('email') as string;
   ```

2. **Cookie Handling**: Use `parseSetCookieHeader` util (`src/lib/utils/utils.ts`) to parse Set-Cookie headers from backend responses in Server Actions

3. **Toast Notifications**: Use `showToast` from `src/lib/services/common/toastService.ts` with Mantine Notifications

4. **Slug Generation**: Use `slugService.ts` helpers for URL generation from `DashboardData`

5. **Mock Data**: Mock responses in `src/app/api/mock/**` must mirror exact structure of backend responses (see 2567-line `route.ts` for holiday search)

## File Organization

- `src/app/**`: Next.js pages (Server Components by default)
- `src/components/features/**`: Feature-specific client components (login, register)
- `src/components/layout/**`: Layout components (header, footer, navigation)
- `src/components/home/**`: Homepage-specific carousels and cards
- `src/components/holidays/**`: Holiday listing/detail components
- `src/lib/services/**`: API service layer (auth, holiday, common utilities)
- `src/lib/constants/constants.tsx`: Navigation items, constants

## Environment Variables

Required variables:

- `MJW_SERVICE_URL`: Backend API URL (server-side only, no NEXT_PUBLIC)
- `NEXT_PUBLIC_API_MODE`: Set to `mock` for mock API mode
- `NEXT_PUBLIC_MJW_SERVICE_URL`: Client-side backend URL (used in rewrites, not in current implementation)

Check `next.config.mjs` for API rewrites configuration (currently commented out).
