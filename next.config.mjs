/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',   // needed for GitHub Pages
  images: {
    unoptimized: true, // disable server-side image optimization
  },
};

export default nextConfig;
