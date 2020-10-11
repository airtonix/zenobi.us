import React from 'react'

import { Site } from '~/components/Site'

import { GatsbyMdxContainer } from './GatsbyMdxContainer'

export const GatsbyRootContainer:React.FC = ({
  children
}) => (
  <GatsbyMdxContainer>
    <Site>
      {children}
    </Site>
  </GatsbyMdxContainer>
)
