// eslint-disable-next-line @typescript-eslint/no-var-requires
const { kebabCase } = require('lodash')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const convertPathsToAliases = require('convert-tsconfig-paths-to-webpack-aliases').default

module.exports = {
  siteMetadata: {
    title: 'zenobi.us',
    siteUrl: 'https://zenobi.us',
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
