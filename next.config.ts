/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Next.js telemetry
  telemetry: false,

  output: 'standalone',

  // Security headers
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        // Prevent clickjacking attacks
        { key: 'X-Frame-Options', value: 'DENY' },
        // Prevent MIME type sniffing
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        // Enable XSS filter in browsers
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        // Control referrer information
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        // Enforce HTTPS
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
  ],
};

export default nextConfig;
