export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_MODE === 'mock'
    ? '/api/mock' // Next.js mock routes
    : `${process.env.MJW_SERVICE_URL}/api`; // REAL backend prefix
