import path from 'path'

import RemarkFrontmatter from 'remark-frontmatter'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),

  getSiteData: () => ({
    title: 'Zenobi.us',
  }),

  plugins: [
    ['react-static-plugin-typescript', { }],
    ['react-static-plugin-source-filesystem', {
      location: path.resolve('./src/pages')
    }],
    ['react-static-plugin-mdx', {
      mdxOptions: {
        remarkPlugins: [
          RemarkFrontmatter
        ],
      },
    }],
    ['plugin__routedata-source-frontmatter'],
    ['react-static-plugin-svg', { }],
    ['react-static-plugin-sass', { }],
    ['react-static-plugin-reach-router', { }],
  ],

}
