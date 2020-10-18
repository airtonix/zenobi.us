import React from 'react'
import classnames from 'classnames'

import { PageHeader } from './PageHeader'
import { Page } from './Page'
import { SiteNavigation } from './Navigation'

export type SimplePageProps = {
  className?: string,
  title: string,
  tags?: string[],
  date?: string,
  navigation?: React.ElementType
}

export const SimplePage:React.FC<SimplePageProps> = ({
  className,
  title,
  navigation: Navigation = SiteNavigation,
  children
}) => (
  <Page
    className={classnames(
      'simple-page',
      className
    )}
    asideSlot={(
      <Navigation />
    )}
  >
    <PageHeader
      title={title}
    />
    <div className='article-page__content'>
      {children}
    </div>
  </Page>
)
