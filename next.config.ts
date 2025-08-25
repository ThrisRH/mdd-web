import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["localhost"],
  },
   compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
