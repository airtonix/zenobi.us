import React from 'react'

import { Site } from '~/components/Site'

export type GatsbySiteContainerProps = {
  element: React.ReactNode
}

export const GatsbySiteContainer:React.FC<GatsbySiteContainerProps> = ({
  element,
}) => (
  <Site>
    {element}
  </Site>
)
