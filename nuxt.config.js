module.exports = {
  mode: 'spa',

  srcDir: `${__dirname}/nuxt`,
  generate: {
    dir: `${__dirname}/dist`
  },

  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - zenobi.us` : `zenobi.us`;
    },
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
    '@/core.scss',
    '@/site__zenobius.scss',
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

      ['pages', {
          page: '/_slug',
          permalink: '/:slug',
          isPost: false
      }],
    ],
    parsers: {

      md: {
        // extend(config) {
        //   const Prism = require('prism');

        //   config.highlight = (code, lang) => {
        //     return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
        //   }
        // },

        plugins: [
          require('markdown-it-prism'),
          require('markdown-it-decorate'),
          [require('markdown-it-html5-media').html5Media, {
            videoAttrs: 'class="video-player"',
            audioAttrs: 'class="audio-player"'
          }]
        ]
      },

    }

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