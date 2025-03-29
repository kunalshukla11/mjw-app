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
      // Rewrites for the API are not used as of new , server cannot be proxied, will use in client component
      {
        source: '/api/:path*',
        destination: `http://${process.env.NEXT_PUBLIC_MJW_SERVICE_URL}/api/:path*`,
      },
      {
        source: '/server-api/:path*',
        destination: `${process.env.MJW_SERVICE_URL}/api/:path*`,
      },
    ];
  },
});
