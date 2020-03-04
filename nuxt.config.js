const pkg = require('./package');
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'universal',
  dev: !isProd,
  /*
   ** Headers of the page
   */

  /*
   ** Headers of the page
   */
  head: {
    title: 'Bauer',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous',
      },
    ],
    bodyAttrs: {
      class: 'pace-done',
      id: 'top',
      'data-aos-easing': 'ease-in-sine',
      'data-aos-duration': '600',
      'data-aos-delay': '100',
    },
    script: [
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#35495e',
  },

  /*
   ** Router config
   */
  router: {},
  /*
   ** Server config
   */
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/base.css',
    '~/assets/css/vendor.css',
    '~/assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    //* ssr = universal
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/component-cache', 'nuxt-purgecss'],
  /*
   ** Config manifest
   */
  manifest: {
    short_name: 'Bauer',
    name: "Bau's blog",
    start_url: '.',
    display: 'standalone',
    background_color: '#fff',
    description: 'A Bullshit Blog of Bau and for Bauer',
    lang: 'vi-VN',
    orientation: 'portrait-primary',
  },
  modulesDir: ['../../node_modules'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: !isProd,
    cache: !isProd,
    cssSourceMap: !isProd,
    optimization: {
      minimize: isProd,
    },
    extractCss: isProd,
    extend(config, { isClient, isDev }) {
      if (!isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: '.eslintrc.js',
            fix: true,
          },
        });
      }
    },
  },
  purgeCSS: {
    enabled: ({ isDev, isClient }) => !isDev && isClient,
    styleExtensions: ['.css'],
    paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js'],
    whitelist: ['body', 'html', 'nuxt-progress', 'active'],
    extractors: [
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-:\\/]+/g);
          }
        },
        extensions: ['html', 'vue', 'js'],
      },
    ],
  },
  workbox: {
    importScripts: ['/custom-sw.js'],
  },
};
