const withCSS = require('@zeit/next-css')

const isProd = process.env.NODE_ENV === 'production'
module.exports = withCSS({
  env: {
    BASE_URL: isProd ? 'https://api.your-persona.com' : 'http://localhost:4000',
    WEBSITE_URL: 'https://your-persona.com'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
})