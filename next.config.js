/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  esModule: true,
  output: 'export',
  images:{
    disableStaticImages: true,
    domains: ['img.youtube.com']
  }
}

module.exports = nextConfig
