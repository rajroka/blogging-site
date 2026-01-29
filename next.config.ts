import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['fakestoreapi.com' , "avatars.githubusercontent.com", 'img.clerk.com' ,'images.clerk.dev',"unsplash.com", "cloudinary.com" , "images.unsplash.com" ,  "res.cloudinary.com" ,"images.remotePatterns" , "lh3.googleusercontent.com"], // ✅ allow remote images from fakestoreapi.com
  },
};

export default nextConfig;
