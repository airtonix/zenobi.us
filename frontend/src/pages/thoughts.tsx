import React from 'react'
import { graphql } from 'gatsby'

import { ArticleListPage } from '~/components/ArticleListPage'

export type MdxFrontmatter = {
  title: string
}

export type MdxNode = {
    id: string,
    frontmatter: MdxFrontmatter
}

export type FileNode = {
  node: {
    childMdx: MdxNode
  }
}

export type GraphqlResultCollection = {
  allFile: {
    edges: FileNode[]
  },
  site: any
}

export type PageProps = {
  data: GraphqlResultCollection
}

export const Page:React.FC<PageProps> = (props) => {
  console.log(props)
  const {
    data: {
      allFile: { edges }
    }
  } = props

  const posts = edges.reduce((result, edge) => ([
    ...result,
    {
      id: edge.node.childMdx.id,
      ...edge.node.childMdx.frontmatter,
    },
  ]), [])

  return (
    <ArticleListPage
      title='Thoughts'
      posts={posts}
    />
  )
}

export default Page

export const query = graphql`{
    allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
      edges {
        node {
          id
          childMdx {
            frontmatter {
              title
            }
          }
        }
      }
    }
}`
