/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  esModule: true,
  images:{
    disableStaticImages: true,
    domains: ['img.youtube.com']
  }
}

module.exports = nextConfig
