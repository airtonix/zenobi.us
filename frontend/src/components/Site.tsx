import React from 'react'
import { Routes, useRouteData } from 'react-static'
import { Router } from '@reach/router'
// import { Transition, animated } from 'react-spring/renderprops'
import classnames from 'classnames'

import { Page } from './Page'
import { BrandingBlock } from './BrandingBlock'
import './Site.scss'
import { Block } from './Block'
import { BrandingBlockStyles } from './BrandingBlock'

interface RoutesRenderProp {
  routePath: string
  getComponentForPath(pathname: string): React.ReactNode | false
}

export const Site:React.FC = () => {
  const renderPath = ({
    routePath,
    getComponentForPath
  }: RoutesRenderProp) => {
    const element = getComponentForPath(routePath)

    return (
      <SiteLayout>
        <Page>
          {element}
        </Page>
      </SiteLayout>
    )
  }

  return (
    <React.Suspense fallback={<em>Loading...</em>}>
      <Router>
        <Routes path='*' render={renderPath} />
      </Router>
    </React.Suspense>
  )
}

export type SiteLayoutProps = {
  headerSlot?: React.ReactNode,
  contentSlot?: React.ReactNode,
  footerSlot?: React.ReactNode,
}

export const SiteLayout:React.FC<SiteLayoutProps> = ({
  contentSlot,
  children
}) => {
  const {
    landing: isLanding = false,
  } = useRouteData()

  return (
    <Block
      className={classnames(
        'site',
        isLanding && 'site--is-landing'
      )}
    >
      <main className='site__content'>
        <BrandingBlock style={
          isLanding
            ? BrandingBlockStyles.Hero
            : BrandingBlockStyles.Badge
        } />
        {children || contentSlot}
      </main>
      <footer className='site__footer'>
      </footer>
    </Block>
  )
}
