module.exports = {
  mode: 'spa',

  srcDir: `${__dirname}/nuxt`,

  head: {
    titleTemplate: '%s - zenobi.us',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      },
    ],
    link: [
      {
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        rel: 'stylesheet'
      }
    ],
  },

  css: [
    '@/assets/core.scss',
    '@/assets/site__zenobius.scss',
  ],

  plugins: [
    '~/plugins/fn'
  ],

  modules: [
    'nuxtent',
  ],

  sitemap: {
    generate: true
  },

  nuxtent: {
    content: [

      ['posts', {
          page: '/posts/_slug',
          permalink: '/posts/:slug'
      }],

    ]
  },

  watchers: {

    chokidar: {
      usePolling: true,
      useFsEvents: false
    },

    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

}