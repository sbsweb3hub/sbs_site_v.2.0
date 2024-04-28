/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;

// experimental: {
//   esmExternals: "loose", // <-- add this
//   serverComponentsExternalPackages: ["mongoose"] // <-- and this
// },
// // and the following to enable top-level await support for Webpack
// webpack: (config) => {
//   config.experiments = {
//     topLevelAwait: true
//   };
//   return config;
// },
