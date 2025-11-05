import type { NextConfig } from "next";

const serverHost = process.env.SERVER_HOST || process.env.NEXT_PUBLIC_SERVER_HOST || "http://localhost:1337";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/baseurl/:path*",
        destination: `${serverHost}/:path*`,
      },
      {
        source: "/mmdblogsapi/:path*",
        destination: `${serverHost}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
