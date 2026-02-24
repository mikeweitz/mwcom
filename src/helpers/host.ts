export const HOST =
    process.env.VERCEL_ENV === 'production'
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_ENV === 'preview'
          ? process.env.VERCEL_URL
          : 'http://localhost:3000';
