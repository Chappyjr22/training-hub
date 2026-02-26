/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/training-hub',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
