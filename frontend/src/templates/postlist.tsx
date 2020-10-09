import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ArticleListPage } from '~/components/ArticleListPage'

export type MdxFrontmatter = {
  title: string,
  tags: string,
  date: string
}

export type MdxContentPage = {
  id: string,
  slug?: string,
  body: string,
  frontmatter?: MdxFrontmatter
}

export type PageProps = {
  data: {
    mdx: MdxContentPage,
    allMdx: {
      nodes: MdxContentPage[]
    }
  }
}

export const Page:React.FC<PageProps> = (props) => {
  const {
    data: {
      mdx: {
        body = ''
      } = {},
      allMdx: {
        nodes = []
      } = {}
    } = {}
  } = props || {}

  const posts = nodes.reduce((result, node) => ([
    ...result,
    {
      ...node,
      ...node.frontmatter,
      url: node.slug,
      tags: (node.frontmatter.tags || '').split(',').map((tag) => tag.trim()),
    },
  ]), [])

  return (
    <ArticleListPage
      title='Thoughts'
      posts={posts}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </ArticleListPage>
  )
}

export default Page

export const query = graphql`
query PostPageCollectionNodeQuery($id: String!, $match: String!, $stage: String) {
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
