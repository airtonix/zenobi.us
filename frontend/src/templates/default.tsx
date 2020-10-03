import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type PageTemplateProps = {
  data: {
    mdx: {
      body: string
    }
  }
}

const PageTemplate = (props: PageTemplateProps) => {
  const {
    data: {
      mdx: {
        body
      }
    } = {}
  } = props
  return (
    <MDXRenderer>
      {body}
    </MDXRenderer>
  )
}

export const query = graphql`
  query PageNodeQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`

export default PageTemplate
