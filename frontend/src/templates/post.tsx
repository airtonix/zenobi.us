import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ArticlePage } from '~/components/ArticlePage'

export type MdxBlogPost = {
  body: string,
  frontmatter: {
    title: string,
    date: string,
    tags: string
  }
}

export type BlogDetailPageProps = {
  data: {
    mdx: MdxBlogPost
  }
}

export const BlogDetailPage:React.FC<BlogDetailPageProps> = ({ data }) => {
  console.log(data)
  const {
    mdx: {
      body,
      frontmatter: {
        title,
        date,
        tags
      } = {}
    } = {}
  } = data
  return (
    <ArticlePage
      title={title}
      date={date}
      tags={(tags || '').split(',').map((tag: string) => tag.trim())}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </ArticlePage>
  )
}

export default BlogDetailPage

export const query = graphql`
  query PostPageNodeQuery($id: String!) {
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
