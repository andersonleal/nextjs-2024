/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // para exportar o projeto statico
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
