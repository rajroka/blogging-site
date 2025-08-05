import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['fakestoreapi.com' ,"unsplash.com", "cloudinary.com" , "images.unsplash.com" ,  "res.cloudinary.com" ,"images.remotePatterns"], // ✅ allow remote images from fakestoreapi.com
  },
};

export default nextConfig;
