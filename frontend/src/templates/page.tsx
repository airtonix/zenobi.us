import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SimplePage } from '~/components/SimplePage'

type PageTemplateProps = {
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate = (props: PageTemplateProps) => {
  const {
    data: {
      mdx: {
        body,
        frontmatter: {
          title
        }
      }
    } = {}
  } = props
  return (
    <SimplePage title={title}>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </SimplePage>
  )
}

export const query = graphql`
  query SimplePageNodeQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default PageTemplate
