import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // API chung
      {
        source: "/webapi/:slug",
        destination: "http://localhost:1337/api/:slug",
      },
      // API blog search
      {
        source: "/webapi/search/:path*",
        destination: "http://localhost:1337/api/:path*",
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
