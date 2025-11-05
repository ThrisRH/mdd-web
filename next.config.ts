import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Base API url
      {
        source: "/baseurl/:path*",
        destination: `${process.env.NEXT_PUBLIC_SERVER_HOST}/:path*`,
      },

      // API url
      {
        source: "/mmdblogsapi/:path*",
        destination: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-candy-ca0ee5cc4b.media.strapiapp.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
    // removeConsole: true,
  },
};

export default nextConfig;
