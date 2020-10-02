import path from 'path'

import React from 'react'
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
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.2.0/build/styles/atom-one-dark.min.css' />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

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
    ['plugin__template-source-frontmatter'],
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
