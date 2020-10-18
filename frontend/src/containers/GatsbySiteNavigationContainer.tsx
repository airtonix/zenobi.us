import React, { useContext } from 'react'

import { SiteNavigation } from '~/components/Navigation'
import { GlobalLinksContext } from '~/services/GlobalLinksContext'

export type GatsbySiteNavigationContainerProps = {
  nav: string
}

export const GatsbySiteNavigationContainer:React.FC<GatsbySiteNavigationContainerProps> = ({
  nav,
  ...props
}) => {
  const globalLinks = useContext(GlobalLinksContext)
    .filter(link => (link.groups || []).includes(nav))

  return (
    <SiteNavigation {...props} links={globalLinks} />
  )
}

export const GatsbyGlobalSiteNavigationContainer:React.FC = (props) => (
  <GatsbySiteNavigationContainer nav='global' {...props} />
)

export const GatsbyLandingSiteNavigationContainer:React.FC = (props) => (
  <GatsbySiteNavigationContainer nav='landing' {...props} />
)
