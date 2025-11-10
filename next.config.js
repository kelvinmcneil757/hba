/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
}

module.exports = nextConfig 