/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "crypto.snapi.dev",
      },
    ],
  },
};
module.exports = nextConfig;
