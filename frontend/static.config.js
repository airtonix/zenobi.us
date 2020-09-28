import path from 'path'

import RemarkFrontmatter from 'remark-frontmatter'
import RemarkSuperSub from 'remark-supersub'
import RemarkAutoHeadings from 'remark-autolink-headings'
import RemarkSlug  from 'remark-slug'
import RemarkLintNoDeadUrls  from 'remark-lint-no-dead-urls'
import RemarkLintRelativeUrls from 'remark-validate-links'
import RemarkFootnotes from 'remark-footnotes'
import RemarkBibliography from 'remark-bibliography'
import RemarkHighlight from 'remark-highlight.js'
import RemarkMermaid from 'remark-mermaid'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),

  getSiteData: () => ({
    title: 'Zenobi.us',
  }),

  devServer: {
    disableHostCheck: true
  },

  plugins: [
    ['react-static-plugin-typescript', { }],
    ['react-static-plugin-source-filesystem', {
      location: path.resolve('./src/pages')
    }],
    ['react-static-plugin-mdx', {
      mdxOptions: {
        remarkPlugins: [
          RemarkFrontmatter,
          RemarkSlug,
          RemarkAutoHeadings,
          RemarkSuperSub,
          RemarkLintNoDeadUrls,
          RemarkLintRelativeUrls,
          RemarkFootnotes,
          RemarkHighlight,
          RemarkMermaid,
          RemarkBibliography
        ]
      },
    }],
    ['plugin__routedata-source-frontmatter'],
    ['plugin__routedata-source-filesystem', [
      {
        target: '/posts',
        source: '/posts/*'
      }
    ]],
    ['react-static-plugin-svg', { }],
    ['react-static-plugin-sass', { }],
    ['react-static-plugin-reach-router', { }],
  ],

}
