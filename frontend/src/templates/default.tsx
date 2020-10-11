import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { GlobalLinksProvider } from '~/services/GlobalLinksContext'
import { transformGatsbyGlobalLink } from '~/services/GatsbyDtoTransforms'
import { PageTemplateProps } from '~/types/content'

const PageTemplate = (props: PageTemplateProps) => {
  const {
    data: {
      allSitePage: {
        nodes
      },
      mdx: {
        body
      }
    } = {}
  } = props
  const globalLinks = transformGatsbyGlobalLink(nodes)
  return (
    <GlobalLinksProvider value={globalLinks}>
      <MDXRenderer>{body}</MDXRenderer>
    </GlobalLinksProvider>
  )
}

export const query = graphql`
  query PageNodeQuery($id: String!) {
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
    }
  }
`

export default PageTemplate
