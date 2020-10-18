import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ArticleListPage } from '~/components/ArticleListPage'
import { transformGatsbyGlobalLink } from '~/services/GatsbyDtoTransforms'
import { GlobalLinksProvider } from '~/services/GlobalLinksContext'
import { BlogListPageProps } from '~/types/content'
import { GatsbySiteNavigationContainer } from '~/containers/GatsbySiteNavigationContainer'

export const PostListPage:React.FC<BlogListPageProps> = (props) => {
  const {
    data: {
      allSitePage: {
        nodes
      },
      mdx: {
        body = ''
      } = {},
      allMdx: {
        nodes: allMdxNodes = []
      } = {}
    } = {}
  } = props

  const posts = allMdxNodes.reduce((result, node) => ([
    ...result,
    {
      ...node,
      ...node.frontmatter,
      url: node.slug,
      tags: (node.frontmatter.tags || '').split(',').map((tag) => tag.trim()),
    },
  ]), [])
  const globalLinks = transformGatsbyGlobalLink(nodes)

  return (
    <GlobalLinksProvider value={globalLinks}>
      <ArticleListPage
        title='Thoughts'
        posts={posts}
        postLink={Link}
        navigation={GatsbySiteNavigationContainer}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </ArticleListPage>
    </GlobalLinksProvider>
  )
}

export default PostListPage

export const query = graphql`
query PostListPageNodeQuery($id: String!, $match: String!, $stage: String) {
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
    id
    body
  }
  allMdx(filter: {slug: {glob: $match}, frontmatter: {stage: {eq: $stage}}}) {
    nodes {
      id
      slug
      body
      frontmatter {
        title,
        date,
        tags
      }
    }
  }
}
`
