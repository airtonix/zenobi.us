import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ArticlePage } from '~/components/ArticlePage'
import { transformGatsbyGlobalLink } from '~/services/GatsbyDtoTransforms'
import { GlobalLinksProvider } from '~/services/GlobalLinksContext'
import { BlogDetailPageProps } from '~/types/content'
import { GatsbyGlobalBrandingBlockContainer } from '~/containers/GatsbyBrandingBlockContainer'

export const BlogDetailPage:React.FC<BlogDetailPageProps> = (props) => {
  const {
    data: {
      allSitePage: {
        nodes
      },
      mdx: {
        body,
        frontmatter: {
          title,
          date,
          tags
        } = {}
      } = {}
    }
  } = props
  const globalLinks = transformGatsbyGlobalLink(nodes)
  return (
    <GlobalLinksProvider value={globalLinks}>
      <ArticlePage
        title={title}
        date={date}
        tags={(tags || '').split(',').map((tag: string) => tag.trim())}
        branding={GatsbyGlobalBrandingBlockContainer}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </ArticlePage>
    </GlobalLinksProvider>
  )
}

export default BlogDetailPage

export const query = graphql`
  query PostPageNodeQuery($id: String!) {
    allSitePage {
      nodes {
        id
        path
        context {
          navs
          title
        }
      }
    }
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        date
      }
    }
  }
`
