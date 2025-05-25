import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  } ,
  reactStrictMode: true,
};
export default nextConfig;
