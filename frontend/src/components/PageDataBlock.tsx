import React from 'react'
import { useRouteData } from 'react-static'

import { Block } from './Block'

export const PageDataBlock:React.FC = () => {
  const data = useRouteData()
  return (
    <Block>{JSON.stringify(data, null, 2)}</Block>
  )
}
