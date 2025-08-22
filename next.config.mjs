/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/portfolio',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
