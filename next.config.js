/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
