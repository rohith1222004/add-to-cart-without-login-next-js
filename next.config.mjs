/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com", protocol: "https" }],
    domains: ['e-commerce-products.s3.ap-south-1.amazonaws.com']
  },
};

export default nextConfig;
