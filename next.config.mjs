import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  output: 'standalone',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://${process.env.NEXT_PUBLIC_MJW_SERVICE_HOST}:${process.env.NEXT_PUBLIC_MJW_SERVICE_PORT}/api/:path*`,
      },
      {
        source: '/server-api/:path*',
        destination: `http://${process.env.MJW_SERVICE_HOST}:${process.env.MJW_SERVICE_PORT}/api/:path*`,
      },
    ];
  },
});
