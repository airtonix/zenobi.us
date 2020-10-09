// eslint-disable-next-line @typescript-eslint/no-var-requires
const { get } = require('lodash')
const urljoin = require('url-join')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const convertPathsToAliases = require('convert-tsconfig-paths-to-webpack-aliases').default

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Config = require('./tools/config')

module.exports = {
  pathPrefix: '/' + [
    get(Config, 'site.root'),
    get(Config, 'site.path'),
  ].join('/'),

  siteMetadata: {
    title: get(Config, 'site.title'),
    siteUrl: urljoin(
      get(Config, 'site.proto'),
      get(Config, 'site.domain'),
      get(Config, 'site.root'),
    ),
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: convertPathsToAliases(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('./tsconfig.json')
        )
      }
    },
    // https://github.com/d4rekanguok/gatsby-typescript
    {
      resolve: 'gatsby-plugin-ts',
      options: {
        codegen: false,
      }
    },
    'gatsby-plugin-svgr',
    // https://github.com/Debens/gatsby-plugin-scss-typescript
    'gatsby-plugin-scss-typescript',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },

    'gatsby-plugin-cname',

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [
          require('remark-frontmatter'),
          require('remark-supersub'),
          require('remark-autolink-headings'),
          require('remark-slug'),
          require('remark-lint-no-dead-urls'),
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          [require('remark-validate-links'), { repository: false }],
          require('remark-footnotes'),
          require('remark-bibliography'),
          require('remark-highlight.js'),
          require('remark-mermaid'),
        ]
      }
    },
  ],
}
