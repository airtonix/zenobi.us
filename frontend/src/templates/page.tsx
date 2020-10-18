import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { SimplePage } from '~/components/SimplePage'
import { transformGatsbyGlobalLink } from '~/services/GatsbyDtoTransforms'
import { GlobalLinksProvider } from '~/services/GlobalLinksContext'
import { PageTemplateProps } from '~/types/content'
import { GatsbySiteNavigationContainer } from '~/containers/GatsbySiteNavigationContainer'

const PageTemplate = (props: PageTemplateProps) => {
  const {
    data: {
      allSitePage: {
        nodes
      },
      mdx: {
        body,
        frontmatter: {
          title
        }
      }
    } = {}
  } = props
  const globalLinks = transformGatsbyGlobalLink(nodes)
  return (
    <GlobalLinksProvider value={globalLinks}>
      <SimplePage
        title={title}
        navigation={GatsbySiteNavigationContainer}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </SimplePage>
    </GlobalLinksProvider>
  )
}

export const query = graphql`
  query SimplePageNodeQuery($id: String!) {
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
      }
    }
  }
`

export default PageTemplate
