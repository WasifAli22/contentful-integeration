/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SPACE_ID: "11y4h8wayk11",
    CONTENTFUL_ACCESS_KEY: "XG7GcYIgUgWEWdgKV3X1xUdaxn5BVS_uSyF8GU0SQe8"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
