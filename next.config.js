const withCSS = require('@zeit/next-css')

const isProd = process.env.NODE_ENV === 'production'
module.exports = withCSS({
  env: {
    BASE_URL: isProd ? 'https://prattdelzenne.com' : 'http://localhost:3000',
    PROD: isProd,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
})