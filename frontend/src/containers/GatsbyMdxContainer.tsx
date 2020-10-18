import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { GatsbySiteNavigationContainer } from '~/containers/GatsbySiteNavigationContainer'

const components = {
  SiteNavigation: GatsbySiteNavigationContainer
}

export const GatsbyMdxContainer:React.FC = ({
  children,
}) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
)
