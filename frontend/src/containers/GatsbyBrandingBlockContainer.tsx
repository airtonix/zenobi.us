import React, { useContext } from 'react'

import { BrandingBlock, BrandingBlockProps } from '~/components/BrandingBlock'
import { GlobalLinksContext } from '~/services/GlobalLinksContext'

export type GatsbyBrandingBlockContainerProps = BrandingBlockProps & {
  nav: string
}

export const GatsbyBrandingBlockContainer:React.FC<GatsbyBrandingBlockContainerProps> = ({
  nav,
  ...props
}) => {
  const globalLinks = useContext(GlobalLinksContext)
    .filter(link => (link.groups || []).includes(nav))

  return (
    <BrandingBlock {...props} links={globalLinks} />
  )
}

export const GatsbyGlobalBrandingBlockContainer:React.FC<BrandingBlockProps> = (props) => (
  <GatsbyBrandingBlockContainer nav='global' {...props} />
)

export const GatsbyLandingBrandingBlockContainer:React.FC<BrandingBlockProps> = (props) => (
  <GatsbyBrandingBlockContainer nav='landing' {...props} />
)
