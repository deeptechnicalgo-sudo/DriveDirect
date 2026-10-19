/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/thumbnail",
      },
    ],
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

