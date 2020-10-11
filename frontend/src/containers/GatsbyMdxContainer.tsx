import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { GatsbyBrandingBlockContainer } from '~/containers/GatsbyBrandingBlockContainer'

const components = {
  BrandingBlock: GatsbyBrandingBlockContainer
}

export const GatsbyMdxContainer:React.FC = ({
  children,
}) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
)
