import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // Base API url
      {
        source: "/baseurl/:path*",
        destination: `${process.env.SERVER_HOST}/:path*`,
      },

      // API url
      {
        source: "/mmdblogsapi/:path*",
        destination: `${process.env.SERVER_HOST}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ["localhost"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
