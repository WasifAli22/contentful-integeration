/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SPACE_ID: "11y4h8wayk11",
    CONTENTFUL_ACCESS_KEY: "5sGMR3H3B_DzSAeyhZ_sCz6-50V85nV98D1zo7l7Bt0"
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
