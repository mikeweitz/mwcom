export const HOST =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
        ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
        : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
          ? process.env.VERCEL_URL
          : 'http://localhost:3000';
