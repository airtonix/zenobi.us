var path = require('path');


module.exports = {
    mode: 'spa',

    head: {
        titleTemplate: '%s - zenobi.us',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' },
        ],
        link: [
            { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet'}
        ],
        script: [
            {src: 'https://unpkg.com/vue-observe-visibility@0.3.1'}
        ]
    },

    css: [
        '@/assets/core.scss',
        '@/assets/site__zenobius.scss',
    ],

    plugins: [
        '~/plugins/fn'
    ],

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/markdownit',
        '@nuxtjs/sitemap',
    ],

    sitemap: {
        generate: true
    },

}